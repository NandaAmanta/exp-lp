import { Layers, MonitorSmartphone, Layout, BarChart2, Code2 } from "lucide-react";

// Mock data for the "Core Expertise" services grid.
// `icon` references a lucide-react component directly.
export const SERVICES = [
  {
    icon: Layers,
    title: "ERP Systems",
    desc: "Streamline complex business operations with custom-built Enterprise Resource Planning solutions tailored to your industry workflows.",
    tags: ["Inventory", "HR & Payroll", "Finance"],
  },
  {
    icon: MonitorSmartphone,
    title: "POS & Gym Systems",
    desc: "Purpose-built Point of Sale and gym management platforms with real-time reporting, membership management, and biometric integration.",
    tags: ["Biometric", "Real-time", "Multi-branch"],
  },
  {
    icon: Layout,
    title: "Company Profile",
    desc: "Make a powerful digital impression with aesthetic, high-converting websites that authentically embody your brand identity.",
    tags: ["SEO-optimized", "Responsive", "Fast"],
  },
  {
    icon: BarChart2,
    title: "Ads & Marketing",
    desc: "Data-driven, precision-targeted advertising strategies across Meta, Google, and TikTok — designed to maximize ROI and market penetration.",
    tags: ["Meta Ads", "Google Ads", "Analytics"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    desc: "From mobile applications to highly specialized web platforms — we engineer exactly what your business requires, built to scale.",
    tags: ["Mobile Apps", "Web Platforms", "API"],
  },
];
