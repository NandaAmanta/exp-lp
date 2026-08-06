import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Tag } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

export default function Portfolio() {
  // Only display the top 3 selected/featured works on the Home Page
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section id="portfolio" className="portfolio">
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">
            <Sparkles size={14} /> Our Work
          </span>
          <h2>Selected Works</h2>
          <p>Lihat bagaimana kami mentransformasi ide bisnis menjadi platform digital fungsional & estetik.</p>
          <div className="section-divider"></div>
        </div>

        {/* Selected 3 Works Grid */}
        <div className="home-portfolio-grid">
          {featuredProjects.map((item, i) => (
            <article
              className="home-portfolio-card reveal"
              key={item.id || item.slug}
              style={i > 0 ? { transitionDelay: `${i * 120}ms` } : undefined}
            >
              {/* Image Container with Badge */}
              <div className="home-portfolio-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="home-portfolio-type-badge">{item.type}</div>
                <div className="home-portfolio-overlay">
                  <Link href={`/portfolio/${item.slug}`} className="btn-visit" id={item.ctaId}>
                    Lihat Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Card Body */}
              <div className="home-portfolio-info">
                <div className="home-portfolio-client">{item.client} • {item.year}</div>
                <h3>
                  <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.desc}</p>

                {/* Key System Modules / Stack Badges */}
                {(item.keyModules || item.techStack) && (
                  <div className="home-portfolio-tech">
                    {(item.keyModules || item.techStack).slice(0, 3).map((mod) => (
                      <span key={mod} className="tech-tag">
                        {mod}
                      </span>
                    ))}
                    {(item.keyModules || item.techStack).length > 3 && (
                      <span className="tech-tag tech-tag-more">+{(item.keyModules || item.techStack).length - 3}</span>
                    )}
                  </div>
                )}

                {/* Footer Action Link */}
                <div className="home-portfolio-footer">
                  <Link href={`/portfolio/${item.slug}`} className="detail-arrow-link">
                    Read Case Study <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Explore All Works */}
        <div className="portfolio-view-all reveal">
          <Link href="/portfolio" className="btn-primary btn-explore-all">
            Explore All Works ({PORTFOLIO_PROJECTS.length}+ Projects) <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
