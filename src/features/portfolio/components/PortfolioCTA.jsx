"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { whatsappLink } from "@/data/company";

export default function PortfolioCTA() {
  return (
    <section className="portfolio-cta-section" style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="portfolio-cta-box reveal active">
          <div className="portfolio-cta-glow"></div>
          <div className="portfolio-cta-content">
            <span className="section-label" style={{ justifyContent: "center", margin: "0 auto 12px auto" }}>
              <MessageSquare size={15} /> Have a Project in Mind?
            </span>
            <h2>Let&apos;s Build Your Custom Enterprise Solution</h2>
            <p>
              Our engineering & design experts are ready to turn your complex operational requirements into a high-performance digital platform.
            </p>
            <div className="portfolio-cta-actions">
              <a
                href={whatsappLink("Hi EXP Digital Solution, I am interested in discussing a custom project for our business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="btn-portfolio-cta"
              >
                Schedule a Consultation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
