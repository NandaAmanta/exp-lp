import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Social Proof</span>
          <h2>Client Perspectives</h2>
          <p>What our partners say about working with Exp Digital Solution.</p>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card reveal" key={t.name + i} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="quote-mark">&quot;</span>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="star" style={{ fill: "var(--accent)", stroke: "var(--accent)" }} />
                ))}
              </div>
              <p className="quote-text">{t.quote}</p>
              <div className="client-info">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.company} className="client-avatar" style={t.avatarStyle} />
                <div className="client-info-text">
                  <h4>{t.name}</h4>
                  <p>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
