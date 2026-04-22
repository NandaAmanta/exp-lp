// Initialize Lucide icons
lucide.createIcons();

// Sticky Navbar effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Intersection Observer for Fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item, .section-header, .testimonial-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Logo Fallback Logic (handled in HTML onerror, but could be enhanced here)
const logoImg = document.querySelector('.logo img');
const logoText = document.querySelector('.logo-text');

if (logoImg && logoText) {
    logoImg.addEventListener('error', () => {
        logoImg.style.display = 'none';
        logoText.style.display = 'block';
    });
}

// Particle Animation System
function createParticleAnimation(canvasId, sectionSelector) {
    const canvas = document.getElementById(canvasId);
    const section = document.querySelector(sectionSelector);
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function initParticles() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = section.offsetHeight;
        particles = [];
        
        const particleCount = Math.floor(width / 15);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 - dist/600})`;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(drawParticles);
    }

    initParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        initParticles();
    });
}

// Initialize animations
createParticleAnimation('hero-canvas', '.hero');
createParticleAnimation('services-canvas', '#services');
createParticleAnimation('portfolio-canvas', '#portfolio');
createParticleAnimation('blog-canvas', '#blog');

// Fetch Medium Articles
async function fetchMediumArticles() {
    const container = document.getElementById('medium-articles');
    if (!container) return;

    const RSS_URL = 'https://medium.com/feed/@expdigitalsolution';
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'ok') {
            container.innerHTML = ''; // Clear loading state
            
            data.items.slice(0, 3).forEach((item, index) => {
                // Extract image from description or use thumbnail
                let imgUrl = item.thumbnail;
                if (!imgUrl || imgUrl.includes('stat?event')) {
                    const doc = new DOMParser().parseFromString(item.description, 'text/html');
                    const img = doc.querySelector('img');
                    imgUrl = img ? img.src : 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&sat=-100';
                }

                const date = new Date(item.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                // Create a clean description (strip HTML and limit length)
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = item.description;
                const cleanText = tempDiv.textContent || tempDiv.innerText || "";
                const shortDesc = cleanText.substring(0, 120) + '...';

                const articleCard = document.createElement('div');
                articleCard.className = 'blog-card reveal';
                articleCard.style.transitionDelay = `${index * 100}ms`;
                articleCard.style.opacity = '0';
                articleCard.style.transform = 'translateY(30px)';
                articleCard.style.transition = 'all 0.6s ease-out';

                articleCard.innerHTML = `
                    <div class="blog-img">
                        <img src="${imgUrl}" alt="${item.title}">
                    </div>
                    <div class="blog-content">
                        <div class="blog-tag">Article</div>
                        <h3>${item.title}</h3>
                        <p>${shortDesc}</p>
                        <div class="blog-footer">
                            <span class="blog-date">${date}</span>
                            <a href="${item.link}" target="_blank" class="read-more">
                                Read More <i data-lucide="arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;

                container.appendChild(articleCard);
                
                // Initialize Lucide icons for the new card
                lucide.createIcons();
                
                // Observe for reveal animation
                observer.observe(articleCard);
            });
        } else {
            throw new Error('Failed to fetch articles');
        }
    } catch (error) {
        console.error('Error fetching Medium articles:', error);
        container.innerHTML = `
            <div class="loading-state">
                <p>Unable to load articles. Please <a href="https://expdigitalsolution.medium.com/" target="_blank" style="color: var(--primary);">visit our Medium directly</a>.</p>
            </div>
        `;
    }
}

// Call the function
fetchMediumArticles();

