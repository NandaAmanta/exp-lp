import { Target, Compass, CheckCircle2 } from "lucide-react";
import { MISSION_ITEMS } from "@/data/mission-items";

export default function VisionMission() {
  return (
    <section className="vision-mission-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">PURPOSE &amp; DIRECTION</span>
          <h2>Vision &amp; Mission</h2>
          <p>Strategic principles and core foundations guiding every line of code and architectural decision we make.</p>
          <div className="section-divider"></div>
        </div>

        <div className="vm-grid">
          <div className="vm-card vision-card reveal">
            <div className="vm-icon-wrap">
              <Target />
            </div>
            <span className="vm-badge">OUR VISION</span>
            <h3>To Be a Premier Global Tech Partner</h3>
            <p>
              To stand as Southeast Asia&apos;s leading software engineering firm, recognized for
              high-concurrency system innovations, uncompromised reliability, and transformative impact for
              enterprise partners.
            </p>
          </div>

          <div className="vm-card mission-card reveal" style={{ transitionDelay: "150ms" }}>
            <div className="vm-icon-wrap">
              <Compass />
            </div>
            <span className="vm-badge">OUR MISSION</span>
            <h3>Commitment to Sustainable Product Execution</h3>
            <ul className="mission-list">
              {MISSION_ITEMS.map((item) => (
                <li key={item.strong}>
                  <CheckCircle2 />
                  <span>
                    <strong>{item.strong}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
