"use client";

import { Search, Sparkles } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";

export default function PortfolioHero({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <section className="page-hero portfolio-hero">
      <StarCanvas />
      <ShootingStars count={5} />
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="page-hero-content reveal active">
          <div className="section-label" style={{ justifyContent: "center", margin: "0 auto 16px auto" }}>
            <Sparkles size={16} /> Our Works & Case Studies
          </div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginBottom: "16px" }}>
            Engineered for <span className="gradient-text">Impact & Performance</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: "720px", margin: "0 auto 36px auto", color: "var(--text-secondary)" }}>
            Explore our showcase of enterprise systems, custom web platforms, SaaS solutions, and mobile applications engineered to drive operational growth.
          </p>

          {/* Search & Filter Bar */}
          <div className="portfolio-filter-container">
            {/* Search Box */}
            <div className="portfolio-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search projects, modules, or clients (e.g. POS, Ekaprint, ERP)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="portfolio-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => onSearchChange("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="portfolio-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`category-pill ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => onSelectCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
