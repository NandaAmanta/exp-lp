import EarthGlobe from "@/components/ui/EarthGlobe";
import { ABOUT_FEATURES, ABOUT_STATS } from "@/data/about-highlights";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <span className="about-badge">Why Choose Us</span>
            <h2>
              We Don&apos;t Just Build Software.
              <br />
              We Build <span className="gradient-text">Business Engines.</span>
            </h2>
            <p>
              Based in Bali, Exp Digital Solution is a team of engineers and designers obsessed with
              precision. We combine deep technical expertise with a strategic mindset to deliver solutions
              that last long and perform.
            </p>
            <div className="about-features">
              {ABOUT_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div className="about-feature-item" key={f.title}>
                    <div className="about-feature-icon">
                      <Icon />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-stats">
            {ABOUT_STATS.map((s) => (
              <div
                className="stat-card reveal"
                key={s.label}
                style={s.delayMs ? { transitionDelay: `${s.delayMs}ms` } : undefined}
              >
                <div className="stat-number">
                  {s.number}
                  <span className="accent">{s.accent}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-earth-wrap" aria-hidden="true">
        <div className="earth-glow"></div>
        <EarthGlobe sectionId="about" />
      </div>
    </section>
  );
}
