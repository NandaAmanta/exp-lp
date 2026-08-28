"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { SERVICES } from "@/data/services";

export default function Services() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = trackRef.current.querySelector(".services-slider-item");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const index = Math.min(
        SERVICES.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);
    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const handleSlide = (direction) => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector(".services-slider-item");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 24;
    const amount = direction === "next" ? cardWidth : -cardWidth;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const scrollToCard = (index) => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector(".services-slider-item");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 24;
    trackRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="services" className="services">
      <div className="container">
        {/* Header with Navigation Controls */}
        <div className="services-slider-header-wrap reveal">
          <div className="services-slider-header-left">
            <span className="section-label">What We Do</span>
            <h2>Core Expertise &amp; Solutions</h2>
            <p>Architecting scalable, high-performance software and digital solutions tailored to modern businesses.</p>
          </div>

          <div className="services-slider-controls">
            <button
              type="button"
              onClick={() => handleSlide("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous service"
              className="services-slider-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleSlide("next")}
              disabled={!canScrollRight}
              aria-label="Next service"
              className="services-slider-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track: Exactly 3 displayed on desktop */}
        <div className="services-slider-container">
          <div className="services-slider-track" ref={trackRef}>
            {SERVICES.map((s) => {
              const tags = (s.tags || []).slice(0, 3);
              return (
                <div className="services-slider-item" key={s.id || s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="service-hub-card"
                  >
                    <div>
                      {/* Top Row: Icon + Category Pill */}
                      <div className="service-hub-header">
                        <div className="service-hub-icon-wrap">
                          <ServiceIcon name={s.iconName} size={24} />
                        </div>
                        <span className="service-hub-category-pill">
                          {s.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="service-hub-title">
                        {s.title}
                      </h3>

                      {/* Concise Description */}
                      <p className="service-hub-desc">
                        {s.shortDesc || s.desc}
                      </p>
                    </div>

                    {/* Footer: Tags + CTA */}
                    <div className="service-hub-footer">
                      <div className="service-hub-tags">
                        {tags.map((tag) => (
                          <span key={tag} className="service-hub-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="service-hub-cta">
                        Explore <ArrowRight size={14} className="service-hub-cta-arrow" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="services-slider-dots">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`services-slider-dot ${activeIndex === idx ? "active" : ""}`}
            />
          ))}
        </div>

        {/* CTA Bottom Link */}
        <div className="text-center reveal">
          <Link href="/services" className="btn-secondary" style={{ padding: "14px 32px", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Explore All Solutions &amp; Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

