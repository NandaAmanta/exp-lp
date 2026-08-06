import { ShieldCheck, Cpu, Users } from "lucide-react";

// Mock data for the home page "Why Choose Us" feature list.
export const ABOUT_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Proven Reliability",
    desc: "We have a track record of delivering projects on time, on budget, without cutting corners.",
  },
  {
    icon: Cpu,
    title: "Technical Depth",
    desc: "Our team masters modern stacks — from cloud infrastructure to real-time biometric systems.",
  },
  {
    icon: Users,
    title: "Long-term Partnership",
    desc: "We don't disappear after launch. We grow with your business and provide continuous support.",
  },
];

// Mock data for the home page "Why Choose Us" stat cards.
// `delayMs` preserves the original staggered reveal-on-scroll timing.
export const ABOUT_STATS = [
  { number: "50", accent: "+", label: "Projects successfully delivered", delayMs: 0 },
  { number: "4", accent: "+", label: "Years building digital solutions", delayMs: 100 },
  { number: "10", accent: "+", label: "Active long-term clients", delayMs: 150 },
  { number: "100", accent: "%", label: "Client satisfaction rate", delayMs: 200 },
];
