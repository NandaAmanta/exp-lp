"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import ContactHero from "./components/ContactHero";
import ContactFormSection from "./components/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <SiteEffects />
      <Navbar activePage="contact" />

      <main className="main-content" style={{ minHeight: "80vh", paddingTop: "calc(var(--nav-height) + 20px)" }}>
        <ContactHero />
        <ContactFormSection />
      </main>

      <Footer variant="home" />
    </>
  );
}
