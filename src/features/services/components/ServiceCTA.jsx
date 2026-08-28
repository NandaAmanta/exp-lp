import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/data/company";

export default function ServiceCTA({
  title = "Have a Complex Workflow Challenge? Let's Architect the Solution.",
  subtitle = "Speak directly with our senior software engineers—not a sales rep. We will review your operational requirements and deliver a technical feasibility roadmap with transparent project milestones.",
  buttonLabel = "Book Technical Architecture Session",
}) {
  return (
    <section className="service-cta-section" style={{ padding: "80px 0 100px", position: "relative" }}>
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
              Engineered For Scale
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "16px", color: "var(--text-primary)" }}>
              {title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
              {subtitle}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", fontSize: "15px" }}>
                <MessageSquare size={18} /> {buttonLabel}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
                style={{ padding: "14px 28px", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                Request Custom Project Scope <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
