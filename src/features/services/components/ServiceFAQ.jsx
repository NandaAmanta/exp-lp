"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceFAQ({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="service-faq-section" style={{ padding: "80px 0" }}>
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div className="section-header reveal active text-center" style={{ marginBottom: "40px" }}>
          <span className="section-label">Questions &amp; Answers</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>{title}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            Common questions regarding implementation, architecture, and working with our team.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  border: isOpen ? "1px solid var(--border-accent)" : "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transition: "border-color 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    fontWeight: "600",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: isOpen ? "var(--accent)" : "var(--text-secondary)",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                      paddingTop: "14px",
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
  );
}
