// Structured data for Portfolio / Selected Works.
// To add a new project, simply add a new object to the PORTFOLIO_PROJECTS array.

export const PORTFOLIO_PROJECTS = [
  {
    id: "ekaprint-bali",
    slug: "ekaprint-bali",
    title: "Ekaprint Bali Integrated Management System",
    subtitle: "Custom Enterprise Operations, POS & Printing Production Platform",
    type: "Enterprise System",
    category: "Printing ERP System",
    tags: ["Enterprise System", "ERP", "Printing ERP System"],
    client: "Ekaprint Bali",
    year: "2025",
    image: "/assets/portfolio/ekaprint-order.png",
    bannerImage: "/assets/portfolio/ekaprint-order.png",
    imageAlt: "Ekaprint Bali Integrated System",
    ctaLabel: "View Case Study",
    ctaHref: "/portfolio/ekaprint-bali",
    ctaId: "btn-ekaprint-bali",
    desc: "Tailored web platform integrating POS, custom printing production workflows, HR, biometric fingerprint attendance, queue management, and financial analytics.",
    fullDesc: "Ekaprint Bali is a leading commercial printing enterprise requiring a highly versatile operational system tailored to their unique business processes. EXP Digital Solution designed and delivered a unified, web-based management platform integrating Point-of-Sale (POS) order processing, specialized printing production workflows, HR management, biometric fingerprint attendance tracking, customer queue management, and real-time financial reporting into a single seamless ecosystem.",
    challenge: "Ekaprint Bali faced significant operational bottlenecks with off-the-shelf ERP and POS software that could not accommodate their highly customized printing production workflows, unique pricing matrix, and specialized multi-department operations. Existing solutions were too rigid to integrate hardware like biometric fingerprint scanners and customer queue displays seamlessly.",
    solution: "EXP Digital Solution engineered a flexible, bespoke enterprise web system built specifically around Ekaprint Bali's operational blueprint. The solution connects front-desk customer orders directly to the factory production floor, automates employee attendance tracking via integrated biometric fingerprint hardware, manages customer queue flow in real time, and synthesizes financial metrics into instant executive dashboards.",
    results: [
      { label: "Operational Efficiency Boost", value: "+55%" },
      { label: "Administrative Time Saved", value: "80+ hrs/mo" },
      { label: "Cost & Overhead Reduction", value: "35%" },
    ],
    keyModules: [
      "POS & Order Management System",
      "Custom Printing Production Workflow",
      "HR & Biometric Fingerprint Attendance Integration",
      "Real-Time Customer Queue Management",
      "Financial Reporting & Business Analytics",
    ],
    gallery: [
      "/assets/portfolio/ekaprint-order.png",
      "/assets/portfolio/ekaprint-fingerprint.png",
    ],
    featured: true,
  },
  {
    id: "gorila-gym-bali",
    slug: "gorila-gym-bali",
    title: "Gorila Gym Multi-Branch Management System",
    subtitle: "Custom Fitness ERP, QR Member Attendance & Multi-Branch Operational Platform",
    type: "Gym System",
    category: "Gym System",
    tags: ["Gym System", "ERP"],
    client: "Gorila Gym Bali",
    year: "2025",
    image: "/assets/portfolio/gorila-pos.png",
    bannerImage: "/assets/portfolio/gorila-pos.png",
    imageAlt: "Gorila Gym Bali Management System",
    ctaLabel: "View Case Study",
    ctaHref: "/portfolio/gorila-gym-bali",
    ctaId: "btn-gorila-gym-bali",
    desc: "Integrated fitness management platform with instant QR code member attendance, multi-branch revenue monitoring, staff scheduling, POS sales, and executive financial reporting.",
    fullDesc: "Gorila Gym Bali is a premier fitness chain in Bali requiring a high-flexibility digital ecosystem to scale its multi-branch operations. EXP Digital Solution designed and deployed a custom web-based gym management system that digitizes the entire member journey—replacing manual record-keeping with lightning-fast QR code check-ins, integrated POS sales, personal trainer management, and real-time multi-branch financial visibility.",
    challenge: "Prior to our solution, Gorila Gym Bali operated manually using paper logs and fragmented spreadsheets for member registrations, daily attendance, and POS sales. As the gym expanded across multiple locations, management struggled to obtain real-time multi-branch revenue tracking, prevent membership check-in fraud, and consolidate financial reports efficiently.",
    solution: "EXP Digital Solution delivered a highly flexible, tailor-made gym enterprise platform featuring instant QR Code scanning for member verification, integrated POS for supplement and membership sales, employee & personal trainer management, and an explicit multi-branch executive dashboard allowing the owner to monitor real-time growth, sales performance, and attendance trends for every branch independently.",
    results: [
      { label: "Check-in Scan Speed", value: "< 2 Seconds" },
      { label: "Multi-Branch Growth Visibility", value: "Real-Time 24/7" },
      { label: "Operational Fraud Reduction", value: "100%" },
    ],
    keyModules: [
      "QR Code Member Attendance & Scan System",
      "Explicit Multi-Branch Executive Monitoring",
      "Integrated Gym POS & Membership Sales",
      "Employee & Personal Trainer Management",
      "Multi-Location Financial Reporting & Analytics",
    ],
    gallery: [
      "/assets/portfolio/gorila-pos.png",
      "/assets/portfolio/gorila-implementation.jpeg",
    ],
    featured: true,
  },
  {
    id: "sparco-gym",
    slug: "sparco-gym",
    title: "Sparco Gym Dedicated Management System",
    subtitle: "Custom Private Fitness ERP, QR Check-in & PT Scheduling Platform",
    type: "Gym System",
    category: "Gym System",
    tags: ["Gym System", "ERP"],
    client: "Sparco Gym",
    year: "2024",
    image: "/assets/portfolio/sparco-trainer-schedule.png",
    bannerImage: "/assets/portfolio/sparco-trainer-schedule.png",
    imageAlt: "Sparco Gym Management System",
    ctaLabel: "View Case Study",
    ctaHref: "/portfolio/sparco-gym",
    ctaId: "btn-sparco-gym",
    desc: "Dedicated fitness platform with instant QR member check-in, personal trainer scheduling, member management, and private financial reporting.",
    fullDesc: "Sparco Gym sought a private, fully flexible management platform after experiencing severe frustrations with expensive third-party SaaS software. EXP Digital Solution engineered a dedicated web-based fitness ERP system that gives Sparco Gym 100% data ownership, custom flexibility, instant QR code member check-ins, automated Personal Trainer (PT) scheduling, and comprehensive financial reporting without ongoing vendor lock-in.",
    challenge: "Sparco Gym previously relied on a third-party SaaS vendor that suffered from dangerously slow customer support response times during critical software outages. Furthermore, gym management had grave data privacy concerns regarding storing proprietary member and financial records on vendor cloud servers, compounded by high subscription costs and rigid feature limitations.",
    solution: "EXP Digital Solution replaced their vendor lock-in with a custom, privately-hosted fitness system built specifically around Sparco Gym's operational needs. The new platform features instant QR Code member attendance scanning, an intuitive Personal Trainer (PT) session scheduler, comprehensive member lifecycle management, and verified financial reporting—delivering total data control, zero vendor dependency, and dramatic cost savings.",
    results: [
      { label: "Data Ownership & Control", value: "100% Private" },
      { label: "Recurring Software Costs", value: "-60% Saved" },
      { label: "Vendor Response Lag", value: "Eliminated" },
    ],
    keyModules: [
      "QR Code Member Attendance & Scan System",
      "Personal Trainer (PT) Session Scheduler",
      "Member Lifecycle Management",
      "Private Financial Reporting & Analytics",
      "Custom POS & Operational Dashboard",
    ],
    gallery: [
      "/assets/portfolio/sparco-trainer-schedule.png",
    ],
    featured: true,
  },
];

// Compatibility layer for existing components
export const PORTFOLIO_ITEMS = PORTFOLIO_PROJECTS.map((project) => ({
  image: project.image,
  imageAlt: project.imageAlt,
  ctaLabel: project.ctaLabel,
  ctaHref: `/portfolio/${project.slug}`,
  ctaId: project.ctaId,
  type: project.type,
  title: project.title,
  desc: project.desc,
  slug: project.slug,
}));

// Helper functions for easy querying
export function getAllProjects() {
  return PORTFOLIO_PROJECTS;
}

export function getProjectBySlug(slug) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug, limit = 2) {
  return PORTFOLIO_PROJECTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function getCategories() {
  const allTags = PORTFOLIO_PROJECTS.flatMap((p) => [
    p.category,
    p.type,
    ...(p.tags || []),
  ]).filter(Boolean);
  return ["All", ...Array.from(new Set(allTags))];
}
