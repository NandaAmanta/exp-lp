"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import PageHero from "./components/PageHero";
import Overview from "./components/Overview";
import VisionMission from "./components/VisionMission";
import Director from "./components/Director";
import VideoModal from "./components/VideoModal";
import Team from "./components/Team";
import AboutContact from "./components/AboutContact";

export default function AboutPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <SiteEffects />
      <Navbar activePage="about" />
      <PageHero />
      <Overview />
      <VisionMission />
      {/* <Director onOpenVideo={() => setVideoOpen(true)} /> */}
      <Team />
      <AboutContact />
      <Footer variant="about" />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} videoRef={videoRef} />
    </>
  );
}
