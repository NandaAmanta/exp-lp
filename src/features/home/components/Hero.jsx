"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import { HERO_STATS } from "@/data/hero-stats";

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const heroStats = statsRef.current;
    if (!heroStats) return;

    function animateCounter(el, target) {
      const startTime = performance.now();
      const duration = 1600;

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(ease * target);
        
        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = heroStats.querySelectorAll(".stat-val");
            statNumbers.forEach((el, i) => {
              animateCounter(el, HERO_STATS[i].target);
            });
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    statsObserver.observe(heroStats);
    return () => statsObserver.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-aurora" aria-hidden="true">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
        <div className="aurora aurora-4"></div>
      </div>
      <StarCanvas />
      <ShootingStars />
      <div className="container hero-content">
        <div className="hero-location">
          <MapPin />
          Denpasar, Bali — Software House
        </div>
        <h1 className="hero-title">
          We Engineer
          <br />
          <span className="gradient-text">Digital Excellence</span>
        </h1>
        <p className="hero-subtitle">
          From enterprise-grade ERP systems to high-converting company profiles — we build software that
          drives real business results.
        </p>
        <div className="hero-btns">
          <a href="#portfolio" className="btn-primary" id="btn-view-work">
            View Our Work <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          {HERO_STATS.map((s, i) => (
            <div className="hero-stat-item" key={i}>
              <div className="hero-stat-number">
                <span className="stat-val">0</span>
                <span>{s.suffix}</span>
              </div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
