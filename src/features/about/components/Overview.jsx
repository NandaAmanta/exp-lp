import { OVERVIEW_HIGHLIGHTS, OVERVIEW_STATS } from "@/data/overview";

export default function Overview() {
  return (
    <section className="about-overview">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-text reveal">
            <span className="section-label">OUR STORY</span>
            <h2>Engineered for Business Velocity</h2>
            <p className="lead-p">
              Founded with a relentless drive for technical excellence, PT EXP Digital Solution transforms
              complex business challenges into seamless, high-performance software applications.
            </p>
            <p>
              We combine cutting-edge system architecture with human-centered design to help organizations
              streamline operations, scale infrastructure, and dominate their digital presence.
            </p>
            <div className="overview-highlights">
              {OVERVIEW_HIGHLIGHTS.map((h) => {
                const Icon = h.icon;
                return (
                  <div className="highlight-item" key={h.title}>
                    <div className="highlight-icon">
                      <Icon />
                    </div>
                    <div>
                      <h4>{h.title}</h4>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overview-stats-card reveal" style={{ transitionDelay: "150ms" }}>
            <div className="stats-card-glow"></div>
            <h3>Impact in Numbers</h3>
            <div className="overview-stats-grid">
              {OVERVIEW_STATS.map((s) => (
                <div className="stat-box" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
