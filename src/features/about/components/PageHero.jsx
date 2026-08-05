import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";

export default function PageHero() {
  return (
    <header className="page-hero">
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container page-hero-content reveal">
        <span className="section-label">WHO WE ARE</span>
        <h1>Pioneering High-Velocity Engineering &amp; Digital Innovation</h1>
        <p>
          PT EXP Digital Solution is a premier software development house dedicated to architecting
          scalable, high-concurrency systems and aesthetic digital experiences.
        </p>
        <div className="hero-breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight />
          <span>About Us</span>
        </div>
      </div>
    </header>
  );
}
