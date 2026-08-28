import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function ServiceComparison() {
  return (
    <section className="service-comparison-section" style={{ padding: "80px 0", background: "var(--bg-subtle)" }}>
      <div className="container">
        <div className="section-header reveal active text-center" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
          <span className="section-label">Investment &amp; Control</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "16px" }}>
            Why Choose <span className="text-accent">Custom Software</span> Over Off-the-Shelf SaaS?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7" }}>
            Compare owning a dedicated, proprietary digital asset versus paying endless monthly per-seat subscription fees without data control.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
          {/* Box 1: Generic SaaS */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}>
                <X size={20} />
              </div>
              <h3 style={{ fontSize: "18px", color: "var(--text-primary)" }}>Generic SaaS Packages</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                <X size={16} style={{ color: "#EF4444", flexShrink: 0, marginTop: "3px" }} />
                <span>Compounding monthly subscription fees that escalate as your team expands.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                <X size={16} style={{ color: "#EF4444", flexShrink: 0, marginTop: "3px" }} />
                <span>Rigid workflows — your business is forced to conform to generic templates.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                <X size={16} style={{ color: "#EF4444", flexShrink: 0, marginTop: "3px" }} />
                <span>Proprietary data stored on third-party multi-tenant clouds with zero source code ownership.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)" }}>
                <X size={16} style={{ color: "#EF4444", flexShrink: 0, marginTop: "3px" }} />
                <span>Slow ticket support with non-negotiable feature roadmaps and frequent price hikes.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Exp Digital Solution Custom System */}
          <div
            style={{
              background: "linear-gradient(180deg, rgba(245, 158, 11, 0.06) 0%, var(--bg-card) 100%)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "-12px", right: "24px", background: "var(--accent)", color: "#050507", fontSize: "11px", fontWeight: "700", padding: "3px 12px", borderRadius: "12px" }}>
              RECOMMENDED
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(245, 158, 11, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <Check size={20} />
              </div>
              <h3 style={{ fontSize: "18px", color: "var(--text-primary)" }}>Exp Digital Custom Platform</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-primary)" }}>
                <Check size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                <span><strong>100% Asset Ownership</strong> — One-time investment with zero per-user monthly license fees.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-primary)" }}>
                <Check size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Tailored Precision</strong> — Modularity designed exactly around your proprietary operational blueprint.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-primary)" }}>
                <Check size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Private &amp; Secure Cloud</strong> — Isolated server deployment under your company&apos;s exclusive control.</span>
              </li>
              <li style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-primary)" }}>
                <Check size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Dedicated Engineering Advisory</strong> — Rapid response times directly from our core technical team.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
