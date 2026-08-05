import { ArrowRight } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Work</span>
          <h2>Selected Works</h2>
          <p>A showcase of our commitment to functional aesthetics and technical excellence.</p>
          <div className="section-divider"></div>
        </div>
        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              className="portfolio-item reveal"
              key={item.title}
              style={i > 0 ? { transitionDelay: `${i * 100}ms` } : undefined}
            >
              <div className="portfolio-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt} />
                <div className="portfolio-overlay">
                  <a href={item.ctaHref} target="_blank" rel="noopener" className="btn-visit" id={item.ctaId}>
                    {item.ctaLabel} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-type">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
