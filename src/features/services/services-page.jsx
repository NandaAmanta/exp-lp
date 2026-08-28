import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";
import ServiceComparison from "./components/ServiceComparison";
import ServiceCTA from "./components/ServiceCTA";

export default function ServicesPage() {
  return (
    <>
      <SiteEffects />
      <Navbar activePage="services" />
      <main className="main-content" style={{ minHeight: "100vh" }}>
        <ServicesHero />
        <ServicesGrid />
        <ServiceComparison />
        <ServiceCTA />
      </main>
      <Footer variant="home" />
    </>
  );
}
