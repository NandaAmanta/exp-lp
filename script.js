// ============================
// Initialize Lucide icons
// ============================
lucide.createIcons();

// ============================
// Sticky Navbar
// ============================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ============================
// Smooth Scroll
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 72,
                behavior: 'smooth'
            });
        }
    });
});

// ============================
// Mobile Menu
// ============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks   = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        // Swap icon
        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        }
    });
}

// ============================
// Logo fallback
// ============================
const logoImg  = document.querySelector('.logo img');
const logoText = document.querySelector('.logo-text');
if (logoImg && logoText) {
    logoImg.addEventListener('error', () => {
        logoImg.style.display  = 'none';
        logoText.style.display = 'flex';
    });
}

// ============================
// Scroll Reveal (IntersectionObserver)
// ============================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ============================
// Animated Counter (hero stats)
// ============================
function animateCounter(el, target, suffix) {
    let start    = 0;
    const duration = 1800;
    const step   = Math.ceil(target / (duration / 16));
    const update = () => {
        start = Math.min(start + step, target);
        el.innerHTML = start + '<span>' + suffix + '</span>';
        if (start < target) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.hero-stat-number');
            const targets  = [50, 3, 100, 10];
            const suffixes = ['+', '+', '%', '+'];
            statNumbers.forEach((el, i) => {
                animateCounter(el, targets[i], suffixes[i]);
            });
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });


const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ============================
// Star Field (canvas)
// ============================
(function createStarField() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animId;

    function init() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        // ~1 star per 5000px² of screen area
        const count = Math.min(220, Math.floor((canvas.width * canvas.height) / 4500));
        for (let i = 0; i < count; i++) {
            stars.push({
                x:      Math.random() * canvas.width,
                y:      Math.random() * canvas.height,
                r:      Math.random() * 0.75 + 0.15,  // 0.15 – 0.9px
                op:     Math.random() * 0.4 + 0.1,    // current opacity
                max:    Math.random() * 0.25 + 0.50,  // max 0.50–0.75
                min:    Math.random() * 0.08 + 0.05,  // min 0.05–0.13
                speed:  Math.random() * 0.004 + 0.001,
                dir:    1,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            // Twinkle
            s.op += s.speed * s.dir;
            if (s.op >= s.max) { s.op = s.max; s.dir = -1; }
            if (s.op <= s.min) { s.op = s.min; s.dir =  1; }

            // Only the largest stars (~top 15%) get a faint glow
            if (s.r > 0.6) {
                const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2);
                grd.addColorStop(0, `rgba(255, 245, 210, ${s.op * 0.4})`);
                grd.addColorStop(1, `rgba(255, 245, 210, 0)`);
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Star dot
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 248, 220, ${s.op})`;
            ctx.fill();
        });
        animId = requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animId);
        init();
        draw();
    }, { passive: true });
})();


// ============================
// Fetch Medium Articles
// ============================
async function fetchMediumArticles() {
    const container = document.getElementById('medium-articles');
    if (!container) return;

    const RSS_URL = 'https://medium.com/feed/@expdigitalsolution';
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    try {
        const response = await fetch(API_URL);
        const data     = await response.json();

        if (data.status === 'ok' && data.items.length > 0) {
            container.innerHTML = '';

            data.items.slice(0, 3).forEach((item, index) => {
                let imgUrl = item.thumbnail;
                if (!imgUrl || imgUrl.includes('stat?event')) {
                    const doc = new DOMParser().parseFromString(item.description, 'text/html');
                    const img = doc.querySelector('img');
                    imgUrl = img ? img.src : 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800';
                }

                const date = new Date(item.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric'
                });

                const tempDiv    = document.createElement('div');
                tempDiv.innerHTML = item.description;
                const cleanText  = tempDiv.textContent || tempDiv.innerText || '';
                const shortDesc  = cleanText.trim().substring(0, 130) + '…';

                const card          = document.createElement('div');
                card.className      = 'blog-card reveal';
                card.style.cssText  = `transition-delay: ${index * 100}ms;`;

                card.innerHTML = `
                    <div class="blog-img">
                        <img src="${imgUrl}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="blog-content">
                        <div class="blog-tag">Article</div>
                        <h3>${item.title}</h3>
                        <p>${shortDesc}</p>
                        <div class="blog-footer">
                            <span class="blog-date">${date}</span>
                            <a href="${item.link}" target="_blank" rel="noopener" class="read-more">
                                Read More <i data-lucide="arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;

                container.appendChild(card);
                lucide.createIcons();
                revealObserver.observe(card);
            });
        } else {
            throw new Error('No articles or bad status');
        }
    } catch (err) {
        console.error('Error fetching Medium articles:', err);
        container.innerHTML = `
            <div class="loading-state">
                <p>Unable to load articles. <a href="https://expdigitalsolution.medium.com/" target="_blank" rel="noopener" style="color: var(--accent); font-weight: 600;">Visit our Medium →</a></p>
            </div>
        `;
    }
}

fetchMediumArticles();

// ============================
// Star icon fill styling
// ============================
document.addEventListener('DOMContentLoaded', () => {
    // Fill stars with amber color after lucide renders
    setTimeout(() => {
        document.querySelectorAll('.star').forEach(star => {
            star.style.fill   = 'var(--accent)';
            star.style.stroke = 'var(--accent)';
            star.style.width  = '14px';
            star.style.height = '14px';
        });
    }, 100);
});

// ============================
// Scroll-Driven Background Parallax (Aurora & Stars)
// ============================
(function initScrollParallax() {
    // Respect accessibility settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hero = document.querySelector('.hero');
    const starCanvas = document.getElementById('star-canvas');
    const shootingStars = document.querySelector('.shooting-stars');
    const aurora1 = document.querySelector('.aurora-1');
    const aurora2 = document.querySelector('.aurora-2');
    const aurora3 = document.querySelector('.aurora-3');
    const aurora4 = document.querySelector('.aurora-4');

    let ticking = false;

    function updateScrollParallax() {
        const scrollY = window.scrollY;
        const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

        // Calculate scroll parallax only while Hero section is visible
        if (scrollY <= heroHeight * 1.5) {
            // 1. Starfield Canvas (moves at 0.20x scroll speed)
            if (starCanvas) {
                starCanvas.style.transform = `translate3d(0, ${(scrollY * 0.20).toFixed(2)}px, 0)`;
            }

            // 2. Shooting Stars layer (moves at 0.30x scroll speed)
            if (shootingStars) {
                shootingStars.style.transform = `translate3d(0, ${(scrollY * 0.30).toFixed(2)}px, 0)`;
            }

            // 3. Aurora Layer 1 (Amber top-left: moves at 0.35x scroll speed)
            if (aurora1) {
                aurora1.style.transform = `translate3d(0, ${(scrollY * 0.35).toFixed(2)}px, 0)`;
            }

            // 4. Aurora Layer 2 (Orange bottom-right: moves at 0.55x scroll speed)
            if (aurora2) {
                aurora2.style.transform = `translate3d(0, ${(scrollY * 0.55).toFixed(2)}px, 0)`;
            }

            // 5. Aurora Layer 3 (Golden center: moves at 0.42x scroll speed)
            if (aurora3) {
                aurora3.style.transform = `translate3d(0, ${(scrollY * 0.42).toFixed(2)}px, 0)`;
            }

            // 6. Aurora Layer 4 (Upper right accent: moves at 0.65x scroll speed)
            if (aurora4) {
                aurora4.style.transform = `translate3d(0, ${(scrollY * 0.65).toFixed(2)}px, 0)`;
            }
        }
        ticking = false;
    }

    // Trigger update on scroll via requestAnimationFrame for performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollParallax);
            ticking = true;
        }
    }, { passive: true });

    // Initial positioning check
    updateScrollParallax();
})();

// ============================
// Photorealistic 3D WebGL Earth Globe (Three.js - Performance & Offline Safe)
// ============================
// ============================
// Photorealistic 3D WebGL Earth Globe (Three.js - Pure Colors & High Detail)
// ============================
(function init3DEarthGlobe() {
    const canvas = document.getElementById('earth-canvas');
    const section = document.getElementById('about');
    if (!canvas || !section || typeof THREE === 'undefined') return;

    let renderer, scene, camera, globeGroup, globeMesh, animId;
    let isVisible = false;

    function init() {
        const container = canvas.parentElement;
        const width  = container.clientWidth  || 720;
        const height = container.clientHeight || 720;

        // Scene & Camera
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 4.2;

        // Renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        // Group for tilt & rotation
        globeGroup = new THREE.Group();
        globeGroup.rotation.z = 0.41; // ~23.5 degrees axis tilt
        scene.add(globeGroup);

        // Photorealistic Earth Material (Pure white base color so Earth map texture shows in 100% true natural colors)
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0x333333,
            shininess: 15
        });

        // Texture loading (HTML Image fallback for 100% file:// compatibility)
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            'assets/earth_globe.jpg',
            function(texture) {
                material.map = texture;
                material.needsUpdate = true;
            },
            undefined,
            function() {
                // Fallback via HTML Image element
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = function() {
                    const tex = new THREE.Texture(img);
                    tex.needsUpdate = true;
                    material.map = tex;
                    material.needsUpdate = true;
                };
                img.src = 'assets/earth_globe.jpg';
            }
        );

        // 1. High Detail Earth Sphere Mesh (64x64 segments)
        const geometry = new THREE.SphereGeometry(1.85, 64, 64);
        globeMesh = new THREE.Mesh(geometry, material);
        globeGroup.add(globeMesh);

        // 2. Subtle Amber Outer Atmosphere Rim
        const atmosGeo = new THREE.SphereGeometry(1.88, 48, 48);
        const atmosMat = new THREE.MeshBasicMaterial({
            color: 0xf59e0b,
            transparent: true,
            opacity: 0.12,
            side: THREE.BackSide
        });
        const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
        globeGroup.add(atmosMesh);

        // Pure Sunlight Lighting Setup (White sunlight so texture colors show crisp and true)
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
        sunLight.position.set(5, 3, 5);
        scene.add(sunLight);

        const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.0);
        rimLight.position.set(-5, -2, -3);
        scene.add(rimLight);
    }

    function animate() {
        if (!isVisible) return;
        animId = requestAnimationFrame(animate);

        if (globeGroup) {
            globeGroup.rotation.y += 0.0025; // Smooth continuous photorealistic rotation
        }

        renderer.render(scene, camera);
    }

    // Performance Optimization: IntersectionObserver (Pauses 100% when off-screen)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isVisible) {
                    isVisible = true;
                    if (!renderer) init();
                    animate();
                }
            } else {
                isVisible = false;
                if (animId) cancelAnimationFrame(animId);
            }
        });
    }, { threshold: 0.05 });

    observer.observe(section);

    // Handle Window Resize
    window.addEventListener('resize', () => {
        if (!renderer || !canvas.parentElement) return;
        const container = canvas.parentElement;
        const width  = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }, { passive: true });
})();






