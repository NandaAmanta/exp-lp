"use client";
import { PlayCircle, Quote, User } from "lucide-react";

export default function Director({ onOpenVideo }) {
  return (
    <section className="director-section">
      <div className="container">
        <div className="director-container reveal">
          <div className="video-card" id="open-director-video" onClick={onOpenVideo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/director-poster.jpg" alt="EXP Managing Director Video Keynote" className="video-poster-img" />
            <div className="video-overlay-gradient"></div>
            <div className="video-badge-tag">
              <PlayCircle />
              <span>DIRECTOR&apos;S KEYNOTE • 3:45 MIN</span>
            </div>
            <button className="video-play-btn" aria-label="Play Director Video">
              <span className="play-icon">▶</span>
              <span className="pulse-ring"></span>
            </button>
            <div className="video-card-info">
              <h4>&quot;Building Digital Engines for Tomorrow&quot;</h4>
              <p>Founder &amp; CEO • PT EXP DIGITAL SOLUTION</p>
            </div>
          </div>

          <div className="director-quote-card">
            <div className="quote-icon">
              <Quote />
            </div>
            <h3>
              &quot;Our commitment is straightforward: we don&apos;t just build software that works today —
              we architect digital business engines engineered to scale and endure far into the future.&quot;
            </h3>
            <div className="director-profile-brief">
              <div className="director-avatar-mini">
                <User />
              </div>
              <div>
                <h4>I Putu Nanda Amanta</h4>
                <p>Founder &amp; CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
