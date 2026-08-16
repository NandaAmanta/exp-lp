"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import PortfolioCTA from "./components/PortfolioCTA";
import { getRelatedProjects } from "@/data/portfolio";

export default function PortfolioDetailPage({ project }) {
  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return (
      <>
        <SiteEffects />
        <Navbar activePage="portfolio" />
        <main className="main-content" style={{ paddingTop: "140px", minHeight: "70vh", textAlign: "center" }}>
          <div className="container">
            <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Project Not Found</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
              Sorry, the case study you are looking for is not available or has been moved.
            </p>
            <Link href="/portfolio" className="btn-primary">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer variant="home" />
      </>
    );
  }

  const relatedProjects = getRelatedProjects(project.slug, 2);
  const modulesOrStack = project.keyModules || project.techStack || [];
  const sidebarSectionTitle = project.keyModules ? "Key System Modules" : "Technologies Used";

  return (
    <>
      <SiteEffects />
      <Navbar activePage="portfolio" />

      <main className="main-content portfolio-detail-main" style={{ paddingTop: "calc(var(--nav-height) + 20px)" }}>
        {/* Header Hero Section */}
        <section className="portfolio-detail-hero">
          <StarCanvas />
          <ShootingStars count={4} />
          <div className="container" style={{ position: "relative", zIndex: 3 }}>
            {/* Back Button */}
            <div className="portfolio-detail-nav">
              <Link href="/portfolio" className="back-link">
                <ArrowLeft size={16} /> Back to Portfolio
              </Link>
            </div>

            <div className="portfolio-detail-header reveal active">
              <div className="detail-meta-top">
                <span className="tech-badge-primary">{project.type}</span>
                <span className="detail-category-badge">{project.category}</span>
              </div>

              <h1 className="portfolio-detail-title">{project.title}</h1>
              <p className="portfolio-detail-subtitle">{project.subtitle}</p>

              {/* Meta Stats Bar */}
              <div className="portfolio-detail-stats-bar">
                <div className="stat-item">
                  <User size={16} className="stat-icon" />
                  <div>
                    <span className="stat-label">Client</span>
                    <span className="stat-value">{project.client}</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <Calendar size={16} className="stat-icon" />
                  <div>
                    <span className="stat-label">Year</span>
                    <span className="stat-value">{project.year}</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <Layers size={16} className="stat-icon" />
                  <div>
                    <span className="stat-label">Services</span>
                    <span className="stat-value">{project.type}</span>
                  </div>
                </div>

                {project.liveUrl && (
                  <div className="stat-action" style={{ marginLeft: "auto" }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-live-demo"
                    >
                      Visit Live Project <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Banner Main Showcase */}
            <div className="portfolio-banner-container reveal active">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.bannerImage || project.image}
                alt={project.title}
                className="portfolio-banner-img"
              />
              <div className="portfolio-banner-overlay"></div>
            </div>
          </div>
        </section>

        {/* Content Body Grid */}
        <section className="portfolio-detail-content-section" style={{ padding: "60px 0 80px 0" }}>
          <div className="container">
            <div className="portfolio-detail-grid">
              {/* Left Column: Main Narrative & Solution */}
              <div className="portfolio-detail-main-col">
                {/* Description */}
                <div className="detail-block reveal active">
                  <h2><Sparkles size={20} className="inline-icon" /> Project Overview</h2>
                  <p className="lead-paragraph">{project.fullDesc}</p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="detail-two-col reveal active">
                  {project.challenge && (
                    <div className="detail-card challenge-card">
                      <div className="card-badge badge-warning">Client Challenge</div>
                      <h3>The Challenge</h3>
                      <p>{project.challenge}</p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="detail-card solution-card">
                      <div className="card-badge badge-success">EXP Solution</div>
                      <h3>Our Engineering Approach</h3>
                      <p>{project.solution}</p>
                    </div>
                  )}
                </div>

                {/* Results & Key Metrics */}
                {project.results && project.results.length > 0 && (
                  <div className="detail-block results-block reveal active">
                    <h2>Business Impact & Results</h2>
                    <div className="results-grid">
                      {project.results.map((res, idx) => (
                        <div key={idx} className="result-card">
                          <div className="result-value">{res.value}</div>
                          <div className="result-label">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Screenshots */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="detail-block gallery-block reveal active">
                    <h2>System Interface & Showcase</h2>
                    <div className="gallery-grid">
                      {project.gallery.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="gallery-item"
                          onClick={() => setActiveImage(imgUrl)}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imgUrl} alt={`${project.title} showcase ${idx + 1}`} loading="lazy" />
                          <div className="gallery-hover-overlay">
                            <Maximize2 size={20} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar Key Modules & Meta */}
              <aside className="portfolio-detail-sidebar">
                {/* Key System Modules Card */}
                <div className="sidebar-card reveal active">
                  <h3>{sidebarSectionTitle}</h3>
                  <div className="sidebar-divider"></div>
                  <div className="tech-stack-list">
                    {modulesOrStack.map((item) => (
                      <div key={item} className="tech-stack-item">
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Specs Card */}
                <div className="sidebar-card reveal active">
                  <h3>Project Specifications</h3>
                  <div className="sidebar-divider"></div>
                  <ul className="project-specs-list">
                    <li>
                      <span className="spec-title">Category:</span>
                      <span className="spec-val">{project.category}</span>
                    </li>
                    <li>
                      <span className="spec-title">Client:</span>
                      <span className="spec-val">{project.client}</span>
                    </li>
                    <li>
                      <span className="spec-title">Year Completed:</span>
                      <span className="spec-val">{project.year}</span>
                    </li>
                  </ul>

                  <Link
                    href="/contact"
                    className="btn-primary btn-full-width"
                    style={{ marginTop: "24px", textAlign: "center", justifyContent: "center" }}
                  >
                    Build a Similar Project <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className="related-projects-section" style={{ padding: "60px 0", background: "var(--bg-dark)" }}>
            <div className="container">
              <div className="section-header reveal active" style={{ marginBottom: "40px" }}>
                <span className="section-label">More Case Studies</span>
                <h2>Related Projects</h2>
                <div className="section-divider"></div>
              </div>

              <div className="portfolio-cards-grid">
                {relatedProjects.map((rel) => (
                  <article className="portfolio-card reveal active" key={rel.slug}>
                    <div className="portfolio-card-image-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={rel.image} alt={rel.title} />
                      <div className="portfolio-card-badge">{rel.type}</div>
                      <div className="portfolio-card-overlay">
                        <Link href={`/portfolio/${rel.slug}`} className="btn-visit">
                          View Case Study <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                    <div className="portfolio-card-content">
                      <h3 className="portfolio-card-title">
                        <Link href={`/portfolio/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="portfolio-card-desc">{rel.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <PortfolioCTA />
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="portfolio-lightbox" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeImage} alt="Full resolution view" />
          </div>
        </div>
      )}

      <Footer variant="home" />
    </>
  );
}
