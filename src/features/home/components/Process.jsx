"use client";
import { useEffect, useRef } from "react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import { PROCESS_STEPS } from "@/data/process-steps";

export default function Process() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const processSection = sectionRef.current;
    const processSteps = stepsRef.current;
    if (!processSection || !processSteps) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processSteps.classList.add("animate-rocket");
          } else {
            processSteps.classList.remove("animate-rocket");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(processSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process" ref={sectionRef}>
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Process</span>
          <h2>How We Work</h2>
          <p>A structured, transparent process designed to minimize risk and maximize outcomes.</p>
          <div className="section-divider"></div>
        </div>
        <div className="process-steps" ref={stepsRef}>
          <div className="timeline-rocket-track" aria-hidden="true">
            <div className="timeline-rocket">
              <div className="rocket-trail"></div>
              <div className="rocket-flame"></div>
              <div className="rocket-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                  <path d="M9 12H4.5s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v4.5s3.03.55 4 2c1.08 1.62 0 5 0 5" />
                </svg>
              </div>
            </div>
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <div className="process-step reveal" key={step.num} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="step-number-wrap">
                <div className={`step-circle step-circle-${i + 1}`}>{step.num}</div>
              </div>
              <div className="step-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
