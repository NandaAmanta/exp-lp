"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";

export default function ContactHero() {
  return (
    <section className="page-hero contact-page-hero">
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="page-hero-content reveal active">
          {/* Breadcrumbs */}
          <nav className="hero-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span aria-current="page">Contact Us</span>
          </nav>

          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginBottom: "16px" }}>
            Let&apos;s Build Your <span className="gradient-text">Next Digital Solution</span>
          </h1>

          <p
            className="hero-subtitle"
            style={{ maxWidth: "720px", margin: "0 auto 16px auto", color: "var(--text-secondary)" }}
          >
            Have a custom software project in mind, require an enterprise ERP system, or want to consult with our
            engineering team? Submit your requirements below or reach us directly on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
