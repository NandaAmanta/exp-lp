"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceCTA from "./components/ServiceCTA";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { getRelatedServices } from "@/data/services";
import { getProjectBySlug } from "@/data/portfolio";
import { whatsappLink } from "@/data/company";

export default function ServiceDetailPage({ service }) {
  if (!service) return null;

  const otherServices = getRelatedServices(service.slug, 3);
  const relatedProjects = (service.relatedPortfolioSlugs || [])
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <SiteEffects />
      <Navbar activePage="services" />

      <main className="main-content service-detail-main" style={{ paddingTop: "calc(var(--nav-height) + 20px)" }}>
        {/* HERO SECTION */}
        <section className="service-detail-hero" style={{ position: "relative", padding: "60px 0 70px", overflow: "hidden" }}>
          <StarCanvas />
          <ShootingStars count={4} />
          <div className="container" style={{ position: "relative", zIndex: 3 }}>
            {/* Back Navigation */}
            <div style={{ marginBottom: "28px" }}>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                <ArrowLeft size={16} /> Back to All Services
              </Link>
            </div>

            <div className="reveal active" style={{ maxWidth: "900px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <span className="tech-badge-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <ServiceIcon name={service.iconName} size={14} /> {service.badge}
                </span>
                <span className="detail-category-badge">{service.category}</span>
              </div>

              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: "1.15", marginBottom: "20px", color: "var(--text-primary)" }}>
                {service.title}
              </h1>

              <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "32px" }}>
                {service.heroSummary}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", fontSize: "15px" }}>
                  <MessageSquare size={18} /> Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ padding: "14px 28px", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Request Project Proposal <ArrowRight size={16} />
                </Link>
              </div>

              {/* Results Metric Bar */}
              {service.results && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  {service.results.map((res, ri) => (
                    <div key={ri}>
                      <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "800", color: "var(--accent)", fontFamily: "Outfit, sans-serif" }}>
                        {res.value}
                      </div>
                      <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PAIN POINTS & CHALLENGES SECTION */}
        {service.painPoints && (
          <section style={{ padding: "70px 0", background: "var(--bg-subtle)" }}>
            <div className="container">
              <div className="section-header reveal active text-center" style={{ maxWidth: "780px", margin: "0 auto 40px" }}>
                <span className="section-label">Industry Challenges</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginBottom: "14px" }}>
                  Real Operational Bottlenecks Solved
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Eliminate operational blind spots and workflow friction holding your enterprise back.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                {service.painPoints.map((item, pi) => (
                  <div
                    key={pi}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid rgba(239, 68, 68, 0.18)",
                      borderRadius: "var(--radius-md)",
                      padding: "28px",
                      position: "relative",
                    }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", marginBottom: "16px" }}>
                      <AlertCircle size={20} />
                    </div>
                    <h3 style={{ fontSize: "17px", color: "var(--text-primary)", marginBottom: "10px" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.65" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SOLUTION MODULES & FEATURES */}
        {service.solutionModules && (
          <section style={{ padding: "80px 0" }}>
            <div className="container">
              <div className="section-header reveal active text-center" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
                <span className="section-label">System Modules &amp; Capabilities</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginBottom: "14px" }}>
                  Bespoke Capabilities Engineered for Your Enterprise
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Every capability is architected to eliminate operational bottlenecks and scale with your business growth.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                {service.solutionModules.map((module, mi) => (
                  <div
                    key={mi}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "32px 28px",
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(245, 158, 11, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                        <CheckCircle2 size={18} />
                      </div>
                      <h3 style={{ fontSize: "17px", color: "var(--text-primary)", margin: 0 }}>
                        {module.title}
                      </h3>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.65" }}>
                      {module.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WORKFLOW PROCESS */}
        {service.workflow && (
          <section style={{ padding: "70px 0", background: "var(--bg-subtle)" }}>
            <div className="container">
              <div className="section-header reveal active text-center" style={{ maxWidth: "780px", margin: "0 auto 45px" }}>
                <span className="section-label">Development Lifecycle</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginBottom: "14px" }}>
                  Structured &amp; Transparent Engineering Process
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  From business process audits to team onboarding, we ensure seamless implementation at every stage.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                {service.workflow.map((w, wi) => (
                  <div
                    key={wi}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "28px 22px",
                      position: "relative",
                    }}
                  >
                    <span style={{ fontSize: "32px", fontWeight: "900", color: "rgba(245, 158, 11, 0.2)", fontFamily: "Outfit, sans-serif", display: "block", marginBottom: "10px" }}>
                      {w.step}
                    </span>
                    <h3 style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "8px" }}>
                      {w.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: "1.6" }}>
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RELATED CASE STUDIES */}
        {relatedProjects.length > 0 && (
          <section style={{ padding: "80px 0" }}>
            <div className="container">
              <div className="section-header reveal active text-center" style={{ maxWidth: "780px", margin: "0 auto 40px" }}>
                <span className="section-label">Proven Implementation</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginBottom: "14px" }}>
                  Real Client Case Studies
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Discover how our tailored technology platforms delivered measurable outcomes for forward-thinking businesses.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                {relatedProjects.map((proj) => (
                  <div
                    key={proj.slug}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {proj.bannerImage && (
                      <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={proj.bannerImage}
                          alt={proj.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                      <div>
                        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                          <span className="detail-category-badge">{proj.category}</span>
                          <span style={{ fontSize: "12px", color: "var(--text-dim)", alignSelf: "center" }}>{proj.client}</span>
                        </div>
                        <h3 style={{ fontSize: "18px", color: "var(--text-primary)", marginBottom: "10px", lineHeight: "1.4" }}>
                          {proj.title}
                        </h3>
                        <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                          {proj.desc}
                        </p>
                      </div>

                      <Link
                        href={`/portfolio/${proj.slug}`}
                        className="btn-link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--accent)",
                          fontSize: "14px",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Read Case Study <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TECH STACK & ARCHITECTURE */}
        {service.techStack && (
          <section style={{ padding: "50px 0", background: "var(--bg-subtle)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="container text-center">
              <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-secondary)", marginBottom: "16px", display: "block" }}>
                Modern Tech Stack &amp; Scalable Architecture
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "13px",
                      color: "var(--text-primary)",
                      fontWeight: "500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ ACCORDION */}
        <ServiceFAQ faqs={service.faqs} title={`FAQ — ${service.title}`} />

        {/* OTHER SERVICES LINKS */}
        {otherServices.length > 0 && (
          <section style={{ padding: "60px 0", background: "var(--bg-subtle)" }}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "30px", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <span className="section-label">Explore More</span>
                  <h2 style={{ fontSize: "24px", color: "var(--text-primary)", margin: 0 }}>
                    Related Digital Solutions
                  </h2>
                </div>
                <Link href="/services" style={{ color: "var(--accent)", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                  View All Services &rarr;
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {otherServices.map((os) => {
                  return (
                    <Link
                      key={os.slug}
                      href={`/services/${os.slug}`}
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        padding: "24px",
                        textDecoration: "none",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(245, 158, 11, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                        <ServiceIcon name={os.iconName} size={20} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "6px" }}>
                          {os.title}
                        </h3>
                        <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>
                          {os.shortDesc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CALL TO ACTION */}
        <ServiceCTA
          title={`Discuss Your ${service.title} Requirements`}
          subtitle="Receive an initial architectural roadmap and project scope assessment from our senior software engineers with zero commitment."
        />
      </main>

      <Footer variant="home" />
    </>
  );
}
