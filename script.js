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
// Initialize Lenis Smooth Scroll
// ============================
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// ============================
// Smooth Scroll Link Handler
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            if (lenis) {
                lenis.scrollTo(target, { offset: -72 });
            } else {
                window.scrollTo({
                    top: target.offsetTop - 72,
                    behavior: 'smooth'
                });
            }
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
// Star Field (canvas with IntersectionObserver Optimization)
// ============================
(function createStarFields() {
    const canvases = document.querySelectorAll('.star-canvas');
    if (!canvases.length) return;

    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        let stars = [];
        let animId = null;
        let isVisible = false;

        function init() {
            const parent = canvas.parentElement;
            canvas.width  = parent ? parent.clientWidth || window.innerWidth : window.innerWidth;
            canvas.height = parent ? parent.clientHeight || window.innerHeight : window.innerHeight;
            stars = [];
            // Optimized star count for maximum FPS (~70 stars per canvas)
            const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 8000));
            for (let i = 0; i < count; i++) {
                stars.push({
                    x:      Math.random() * canvas.width,
                    y:      Math.random() * canvas.height,
                    r:      Math.random() * 0.75 + 0.15,
                    op:     Math.random() * 0.4 + 0.1,
                    max:    Math.random() * 0.25 + 0.50,
                    min:    Math.random() * 0.08 + 0.05,
                    speed:  Math.random() * 0.004 + 0.001,
                    dir:    1,
                });
            }
        }

        function draw() {
            if (!isVisible) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                s.op += s.speed * s.dir;
                if (s.op >= s.max) { s.op = s.max; s.dir = -1; }
                if (s.op <= s.min) { s.op = s.min; s.dir =  1; }

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 248, 220, ${s.op})`;
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!isVisible) {
                        isVisible = true;
                        init();
                        draw();
                    }
                } else {
                    isVisible = false;
                    if (animId) cancelAnimationFrame(animId);
                }
            });
        }, { threshold: 0.05 });

        const section = canvas.parentElement || canvas;
        observer.observe(section);

        window.addEventListener('resize', () => {
            if (isVisible) {
                if (animId) cancelAnimationFrame(animId);
                init();
                draw();
            }
        }, { passive: true });
    });
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
// 3D Procedural Tech Globe (3D Projection Engine - 100% Offline & CORS Free)
// ============================
(function init3DEarthGlobe() {
    const canvas = document.getElementById('earth-canvas');
    const section = document.getElementById('about');
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let width = 440, height = 440;
    let animId = null;
    let isVisible = false;
    let rotationY = 0;
    const tiltZ = 0.38; // ~22 degrees axis tilt

    // Generate 3D points for Earth Globe (Landmass clusters + grid)
    const points = [];
    const radius = 170;

    // 1. Latitude / Longitude Grid Rings
    for (let lat = -75; lat <= 75; lat += 25) {
        const radLat = (lat * Math.PI) / 180;
        const rLat = Math.cos(radLat) * radius;
        const yLat = Math.sin(radLat) * radius;
        const numDots = Math.floor(rLat * 0.35);
        for (let i = 0; i < numDots; i++) {
            const lon = (i / numDots) * Math.PI * 2;
            points.push({
                x: Math.cos(lon) * rLat,
                y: yLat,
                z: Math.sin(lon) * rLat,
                type: 'grid'
            });
        }
    }

    // 2. Continents Dot Clusters (Landmass coordinates approximation)
    const landmasses = [
        // Asia / Indonesia / Bali region
        { lat: 10, lon: 110, size: 30 }, { lat: -5, lon: 115, size: 22 }, { lat: 35, lon: 100, size: 34 },
        { lat: 30, lon: 135, size: 24 }, { lat: 20, lon: 80, size: 28 },
        // Europe / Middle East / Africa
        { lat: 50, lon: 15, size: 26 }, { lat: 40, lon: -5, size: 22 }, { lat: 0, lon: 20, size: 32 },
        { lat: -20, lon: 25, size: 24 }, { lat: 25, lon: 45, size: 24 },
        // North & South Americas
        { lat: 40, lon: -100, size: 32 }, { lat: 20, lon: -100, size: 22 }, { lat: -15, lon: -60, size: 30 },
        { lat: -35, lon: -65, size: 20 },
        // Australia
        { lat: -25, lon: 135, size: 26 }
    ];

    landmasses.forEach(land => {
        const centerLat = (land.lat * Math.PI) / 180;
        const centerLon = (land.lon * Math.PI) / 180;
        for (let i = 0; i < Math.floor(land.size * 2.2); i++) {
            const dLat = (Math.random() - 0.5) * 0.48;
            const dLon = (Math.random() - 0.5) * 0.58;
            const lat = centerLat + dLat;
            const lon = centerLon + dLon;
            const rLat = Math.cos(lat) * radius;
            points.push({
                x: Math.cos(lon) * rLat,
                y: Math.sin(lat) * radius,
                z: Math.sin(lon) * rLat,
                type: 'land'
            });
        }
    });

    function resize() {
        const container = canvas.parentElement;
        width = canvas.width = container.clientWidth || 440;
        height = canvas.height = container.clientHeight || 440;
    }

    function render() {
        if (!isVisible) return;
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;

        rotationY += 0.005;

        // Draw Outer Atmosphere Glow
        const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.85, centerX, centerY, radius * 1.25);
        glow.addColorStop(0, 'rgba(245, 158, 11, 0.20)');
        glow.addColorStop(0.5, 'rgba(245, 158, 11, 0.05)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 1.25, 0, Math.PI * 2);
        ctx.fill();

        // 3D Matrix Transformations
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const cosZ = Math.cos(tiltZ);
        const sinZ = Math.sin(tiltZ);

        points.forEach(p => {
            // 1. Rotate Y (Spin)
            const rx = p.x * cosY - p.z * sinY;
            const rz = p.x * sinY + p.z * cosY;
            const ry = p.y;

            // 2. Rotate Z (Axis Tilt)
            const x3d = rx * cosZ - ry * sinZ;
            const y3d = rx * sinZ + ry * cosZ;
            const z3d = rz;

            // Render only front-facing or near-edge points for maximum FPS
            const isFront = z3d > -40;
            const scale = 400 / (400 - z3d * 0.3);
            const px = centerX + x3d * scale * 0.95;
            const py = centerY + y3d * scale * 0.95;

            const depthAlpha = z3d > 0 ? (z3d / radius) * 0.65 + 0.35 : (1 + z3d / radius) * 0.20;

            if (p.type === 'land') {
                const dotRadius = z3d > 0 ? (z3d / radius) * 1.2 + 1.3 : 0.8;
                ctx.beginPath();
                ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
                ctx.fillStyle = z3d > 0
                    ? `rgba(245, 158, 11, ${depthAlpha})`
                    : `rgba(217, 119, 6, ${depthAlpha * 0.4})`;
                ctx.fill();
            } else if (isFront) {
                ctx.beginPath();
                ctx.arc(px, py, 0.75, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 245, 210, ${depthAlpha * 0.30})`;
                ctx.fill();
            }
        });

        animId = requestAnimationFrame(render);
    }

    // Performance Optimization: IntersectionObserver (Pauses 100% when off-screen)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isVisible) {
                    isVisible = true;
                    resize();
                    render();
                }
            } else {
                isVisible = false;
                if (animId) cancelAnimationFrame(animId);
            }
        });
    }, { threshold: 0.05 });

    observer.observe(section);

    window.addEventListener('resize', resize, { passive: true });
})();

// ============================
// Process Rocket Scroll Trigger (Runs only when user views the section)
// ============================
(function initProcessRocketObserver() {
    const processSection = document.getElementById('process');
    const processSteps   = document.querySelector('.process-steps');
    if (!processSection || !processSteps) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                processSteps.classList.add('animate-rocket');
            } else {
                processSteps.classList.remove('animate-rocket');
            }
        });
    }, { threshold: 0.15 });

    observer.observe(processSection);
})();





