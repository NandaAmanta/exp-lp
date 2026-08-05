import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What We Do</span>
          <h2>Core Expertise</h2>
          <p>Architecting scalable, high-performance solutions with modern technology stacks.</p>
          <div className="section-divider"></div>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="service-card reveal" key={s.title} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="service-icon-wrap">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
