"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
  Layers,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { getProjectBySlug } from "@/data/portfolio";
import { whatsappLink } from "@/data/company";

export default function SolutionLandingPage({ pageData }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!pageData) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const relatedProjects = (pageData.relatedPortfolioSlugs || [])
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <SiteEffects />
      <Navbar activePage="services" />

      <main className="main-content solution-landing-main" style={{ minHeight: "100vh" }}>
        {/* 1. HERO SECTION */}
        <section className="solution-hero" style={{ position: "relative", padding: "140px 0 70px", overflow: "hidden" }}>
          <StarCanvas />
          <ShootingStars count={5} />
          <div className="container" style={{ position: "relative", zIndex: 3 }}>
            <div className="text-center reveal active" style={{ maxWidth: "920px", margin: "0 auto" }}>
              {/* Location Geo Badge */}
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    borderRadius: "100px",
                    background: "rgba(245, 158, 11, 0.12)",
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent)",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.4px",
                  }}
                >
                  <MapPin size={15} /> {pageData.hero.geoBadge}
                </span>
              </div>

              {/* H1 Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)",
                  lineHeight: "1.15",
                  marginBottom: "22px",
                  color: "var(--text-primary)",
                  fontWeight: "800",
                }}
              >
                {pageData.hero.title.split("—")[0]}
                <br />
                <span className="text-accent">
                  {pageData.hero.title.split("—")[1] ? `— ${pageData.hero.title.split("—")[1]}` : pageData.hero.highlightedTitle}
                </span>
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: "17.5px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.75",
                  marginBottom: "36px",
                  maxWidth: "800px",
                  margin: "0 auto 36px",
                  fontWeight: "300",
                }}
              >
                {pageData.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "48px" }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ padding: "15px 32px", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <MessageSquare size={18} /> {pageData.hero.ctaPrimary}
                </Link>
                <a
                  href="#portofolio-bukti"
                  className="btn-secondary"
                  style={{ padding: "15px 30px", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  {pageData.hero.ctaSecondary} <ArrowRight size={16} />
                </a>
              </div>

              {/* Trust Metric Stats Bar */}
              {pageData.trustStats && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "16px",
                    background: "rgba(18, 18, 26, 0.75)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 20px",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {pageData.trustStats.map((stat, idx) => (
                    <div key={idx} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "clamp(20px, 2.5vw, 26px)",
                          fontWeight: "800",
                          color: "var(--accent)",
                          lineHeight: "1.2",
                          marginBottom: "4px",
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. PAIN POINTS / REALITY CHECK */}
        {pageData.painPoints && (
          <section style={{ padding: "70px 0", background: "var(--bg-subtle)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="container">
              <div className="section-header text-center reveal active" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
                <span className="section-label">Tantangan Operasional Lapangan</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                  Kendala yang Sering Dialami Bisnis Tanpa <span className="text-accent">Sistem Privat</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Tinggalkan inefisiensi dan risiko kebocoran data dengan sistem yang dibangun 100% mengikuti SOP bisnis Anda.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                {pageData.painPoints.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                      borderRadius: "var(--radius-md)",
                      padding: "28px 24px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "rgba(239, 68, 68, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#EF4444",
                          flexShrink: 0,
                        }}
                      >
                        <X size={18} />
                      </div>
                      <h3 style={{ fontSize: "17px", fontWeight: "700", color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.65", fontWeight: "300" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. CORE CAPABILITIES BREAKDOWN */}
        <section style={{ padding: "90px 0" }}>
          <div className="container">
            <div className="section-header text-center reveal active" style={{ maxWidth: "800px", margin: "0 auto 48px" }}>
              <span className="section-label">Solusi &amp; Kapabilitas Unggulan</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                Modul Solusi Pengembangan Software <span className="text-accent">Exp Digital</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Arsitektur enterprise modern yang dirancang untuk performa tinggi, keamanan data mutlak, dan nol biaya lisensi bulanan.
              </p>
            </div>

            <div className="services-hub-grid">
              {pageData.coreCapabilities.map((cap, idx) => (
                <div key={idx} className="service-hub-card" style={{ cursor: "default" }}>
                  <div>
                    <div className="service-hub-header">
                      <div className="service-hub-icon-wrap">
                        <ServiceIcon name={cap.iconName || "Layers"} size={24} />
                      </div>
                      <span className="service-hub-category-pill">
                        Enterprise Grade
                      </span>
                    </div>

                    <h3 className="service-hub-title">
                      {cap.title}
                    </h3>

                    <p className="service-hub-desc">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="service-hub-footer">
                    <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <CheckCircle2 size={14} /> 100% Custom Tailored
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROOF OF LOCAL TRACK RECORD (PORTFOLIO SHOWCASE) */}
        {relatedProjects.length > 0 && (
          <section id="portofolio-bukti" style={{ padding: "90px 0", background: "var(--bg-dark)", borderTop: "1px solid var(--border)" }}>
            <div className="container">
              <div className="section-header text-center reveal active" style={{ maxWidth: "800px", margin: "0 auto 48px" }}>
                <span className="section-label">Bukti Implementasi Nyata di Bali</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                  Dipercaya Brand &amp; Instansi Terkemuka <span className="text-accent">di Bali</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Lihat bagaimana kami mentransformasi alur kerja manual menjadi sistem digital terotomasi dengan hasil nyata.
                </p>
              </div>

              {/* Home-style Portfolio Grid with Real Images */}
              <div className="home-portfolio-grid">
                {relatedProjects.map((project, i) => (
                  <article
                    className="home-portfolio-card reveal active"
                    key={project.id || project.slug}
                    style={i > 0 ? { transitionDelay: `${i * 120}ms` } : undefined}
                  >
                    {/* Image Container with Badge & Hover Overlay */}
                    <div className="home-portfolio-img-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <div className="home-portfolio-type-badge">{project.type || project.category}</div>
                      <div className="home-portfolio-overlay">
                        <Link href={`/portfolio/${project.slug}`} className="btn-visit" id={project.ctaId}>
                          View Case Study <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="home-portfolio-info">
                      <div className="home-portfolio-client">{project.client} • {project.year || "2025"}</div>
                      <h3>
                        <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p>{project.desc}</p>

                      {/* Key System Modules / Stack Badges */}
                      {(project.keyModules || project.tags) && (
                        <div className="home-portfolio-tech">
                          {(project.keyModules || project.tags).slice(0, 3).map((mod) => (
                            <span key={mod} className="tech-tag">
                              {mod}
                            </span>
                          ))}
                          {(project.keyModules || project.tags).length > 3 && (
                            <span className="tech-tag tech-tag-more">+{(project.keyModules || project.tags).length - 3}</span>
                          )}
                        </div>
                      )}

                      {/* Footer Action Link */}
                      <div className="home-portfolio-footer">
                        <Link href={`/portfolio/${project.slug}`} className="detail-arrow-link">
                          Read Case Study <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Link to All Portfolio */}
              <div className="text-center reveal active" style={{ marginTop: "48px" }}>
                <Link
                  href="/portfolio"
                  className="btn-secondary"
                  style={{ padding: "14px 28px", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Eksplorasi Seluruh Studi Kasus ({relatedProjects.length}+ Proyek) <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 5. WHY CHOOSE EXP DIGITAL SOLUTION */}
        <section style={{ padding: "80px 0", background: "var(--bg-subtle)" }}>
          <div className="container">
            <div className="section-header text-center reveal active" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
              <span className="section-label">Keunggulan Exp Digital</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                Mengapa Memilih <span className="text-accent">Exp Digital Solution</span>?
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Bukan sekadar vendor pembuat software, kami adalah mitra pengembangan teknologi jangka panjang untuk pertumbuhan bisnis Anda.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {pageData.whyUs.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "30px 24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "rgba(245, 158, 11, 0.1)",
                      border: "1px solid var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      marginBottom: "18px",
                    }}
                  >
                    <Check size={20} />
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.65", fontWeight: "300" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ENGINEERING WORKFLOW */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="section-header text-center reveal active" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
              <span className="section-label">Alur Pengerjaan Transparan</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                Metodologi Agile &amp; <span className="text-accent">Milestone Jelas</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Setiap tahapan pengembangan dilakukan dengan pengawasan ketat, validasi prototipe, dan tanpa biaya tersembunyi.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {pageData.process.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "28px 22px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "30px",
                      fontWeight: "800",
                      color: "rgba(245, 158, 11, 0.4)",
                      marginBottom: "12px",
                      lineHeight: "1",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "13.5px", lineHeight: "1.6", fontWeight: "300" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. RICH FAQ SECTION */}
        <section style={{ padding: "80px 0", background: "var(--bg-subtle)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div className="section-header text-center reveal active" style={{ maxWidth: "780px", margin: "0 auto 48px" }}>
              <span className="section-label">FAQ &amp; Pertanyaan Umum</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", marginBottom: "14px" }}>
                Hal yang Sering Ditanyakan Mengenai <span className="text-accent">{pageData.hero.geoBadge.replace("📍 ", "")}</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                Jawaban transparan seputar kepemilikan kode, integrasi sistem, estimasi biaya, dan garansi pemeliharaan.
              </p>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: "100%",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        color: "var(--text-primary)",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                          color: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 22px",
                          color: "var(--text-secondary)",
                          fontSize: "14.5px",
                          lineHeight: "1.7",
                          fontWeight: "300",
                          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                          paddingTop: "16px",
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. FRICTIONLESS CONSULTATION CTA */}
        <section style={{ padding: "80px 0 100px", position: "relative" }}>
          <div className="container">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(18, 18, 26, 0.95) 100%)",
                border: "1px solid var(--border-accent)",
                borderRadius: "var(--radius-xl)",
                padding: "60px 40px",
                textAlign: "center",
                maxWidth: "960px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                <span className="section-label" style={{ marginBottom: "12px", display: "inline-block" }}>
                  Konsultasi Arsitektur Software
                </span>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "16px", color: "var(--text-primary)" }}>
                  Siap Membangun Sistem Privat Tanpa Beban Biaya Bulanan?
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
                  Diskusikan tantangan alur kerja dan rancangan sistem Anda langsung dengan senior software engineer kami di Bali. Kami siap memberikan gambaran roadmap dan estimasi scope secara transparan.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: "15px 32px", fontSize: "15px" }}>
                    <MessageSquare size={18} /> Jadwalkan Konsultasi Teknis Gratis
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary"
                    style={{ padding: "15px 30px", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    Hubungi Tim Engineer Kami <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="home" />
    </>
  );
}
