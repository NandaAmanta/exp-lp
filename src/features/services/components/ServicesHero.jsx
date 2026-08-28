import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";

export default function ServicesHero() {
  return (
    <section className="portfolio-hero" style={{ padding: "140px 0 60px" }}>
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="portfolio-hero-content reveal active text-center" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <span className="section-label">Enterprise Engineering &amp; Private Assets</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", marginBottom: "20px", lineHeight: "1.15" }}>
            Custom Software &amp; ERP Engineering <br />
            <span className="text-accent">Built for Operational Scale</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "17px", lineHeight: "1.7", marginBottom: "32px", maxWidth: "760px", margin: "0 auto 32px" }}>
            Eliminate compounding SaaS subscription fees and fragmented spreadsheets. We architect high-performance, 100% privately owned software ecosystems tailored to your exact business workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
