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

    function animateCounter(el, target, suffix) {
      let start = 0;
      const duration = 1800;
      const step = Math.ceil(target / (duration / 16));
      const update = () => {
        start = Math.min(start + step, target);
        el.textContent = start;
        const span = document.createElement("span");
        span.textContent = suffix;
        el.appendChild(span);
        if (start < target) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = heroStats.querySelectorAll(".hero-stat-number");
            statNumbers.forEach((el, i) => {
              animateCounter(el, HERO_STATS[i].target, HERO_STATS[i].suffix);
            });
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.5 }
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
              <div className="hero-stat-number">0</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
