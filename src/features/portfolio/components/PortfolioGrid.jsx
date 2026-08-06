"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar, User, Grid } from "lucide-react";

export default function PortfolioGrid({ projects, onResetFilter }) {
  if (projects.length === 0) {
    return (
      <section className="portfolio-grid-section" style={{ padding: "60px 0 100px 0" }}>
        <div className="container">
          <div className="portfolio-empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No Projects Found</h3>
            <p>No case studies match your search keyword or selected category filter.</p>
            <button type="button" className="btn-primary" onClick={onResetFilter} style={{ marginTop: "20px" }}>
              View All Projects
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio-grid-section" style={{ padding: "50px 0 100px 0" }}>
      <div className="container">
        {/* Results Info Bar */}
        <div className="portfolio-results-bar">
          <span className="results-count">
            <Grid size={15} /> Showing <strong>{projects.length}</strong> {projects.length === 1 ? "Case Study" : "Case Studies"}
          </span>
          <div className="results-line"></div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-cards-grid">
          {projects.map((item) => (
            <article className="portfolio-card reveal visible active" key={item.id || item.slug}>
              {/* Image Container */}
              <div className="portfolio-card-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt || item.title} loading="lazy" />
                <div className="portfolio-card-badge">{item.type}</div>
                <div className="portfolio-card-overlay">
                  <Link href={`/portfolio/${item.slug}`} className="btn-visit">
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Info Content */}
              <div className="portfolio-card-content">
                <div className="portfolio-card-meta">
                  <span className="meta-item">
                    <User size={13} /> {item.client}
                  </span>
                  <span className="meta-dot">•</span>
                  <span className="meta-item">
                    <Calendar size={13} /> {item.year}
                  </span>
                </div>

                <h3 className="portfolio-card-title">
                  <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                </h3>

                <p className="portfolio-card-desc">{item.desc || item.shortDesc}</p>

                {/* Modules / Stack Badges */}
                {((item.keyModules && item.keyModules.length > 0) || (item.techStack && item.techStack.length > 0)) && (
                  <div className="portfolio-card-tech">
                    {(item.keyModules || item.techStack).slice(0, 3).map((mod) => (
                      <span key={mod} className="tech-badge">
                        {mod}
                      </span>
                    ))}
                    {(item.keyModules || item.techStack).length > 3 && (
                      <span className="tech-badge tech-badge-more">
                        +{(item.keyModules || item.techStack).length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Footer Action */}
                <div className="portfolio-card-footer">
                  <Link href={`/portfolio/${item.slug}`} className="card-link">
                    Read Case Study <ArrowRight size={15} />
                  </Link>
                  {item.ctaHref && item.ctaHref.startsWith("http") && (
                    <a
                      href={item.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-external-link"
                      title="Visit Live Project"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
