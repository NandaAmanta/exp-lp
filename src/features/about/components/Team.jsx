import { Linkedin, Mail } from "lucide-react";
import { TEAM } from "@/data/team";
import { COMPANY } from "@/data/company";

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">OUR PEOPLE</span>
          <h2>Meet Our Team</h2>
          <p>Experienced engineers, designers, and growth strategists powering EXP Digital Solution.</p>
          <div className="section-divider"></div>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div className="team-card reveal" key={member.name} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="team-avatar-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.img} alt={member.name} className="team-avatar-img" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="team-socials">
                  <a href={COMPANY.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                    <Linkedin />
                  </a>
                  <a href={`mailto:${COMPANY.email}`} aria-label="Email">
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
