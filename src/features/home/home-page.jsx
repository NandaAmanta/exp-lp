import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import AboutSection from "./components/AboutSection";
import Process from "./components/Process";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <SiteEffects />
      <Navbar activePage="home" />
      <Hero />
      <Clients />
      <AboutSection />
      <Process />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
