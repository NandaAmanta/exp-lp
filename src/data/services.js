export const SERVICES = [
  {
    id: "custom-internal-erp",
    slug: "custom-internal-erp",
    iconName: "Layers",
    image: "/assets/portfolio/ekaprint-order.png",
    title: "Custom Internal ERP Systems",
    subtitle: "Tailored Enterprise Operations, Multi-Department Workflows & Automated Business Intelligence",
    badge: "Enterprise Solution",
    category: "Enterprise ERP",
    metaTitle: "Custom ERP Software Development Bali & Global | Exp Digital Solution",
    metaDescription:
      "Custom Enterprise Resource Planning (ERP) engineering. Seamlessly integrate inventory, production workflows, HR payroll, biometrics, and real-time financial reporting with zero recurring license fees.",
    targetKeywords: [
      "Custom ERP Software Development",
      "Enterprise ERP System Bali",
      "Custom Internal Operations Software",
      "Printing and Manufacturing ERP",
      "Business Workflow Automation",
      "Custom Business Software House",
    ],
    shortDesc:
      "Unify multi-warehouse inventory, biometric HR payroll, and real-time financial reporting into a private ecosystem with zero monthly per-seat fees.",
    heroSummary:
      "Eliminate fragmented spreadsheets and rigid off-the-shelf software. We engineer private, web-based Enterprise Resource Planning (ERP) platforms tailored 100% to your unique business workflows—delivering total data control, audit transparency, and up to +55% operational efficiency.",
    targetAudience: "Manufacturing facilities, commercial printing houses, multi-branch retailers, distributors, and corporate institutions seeking end-to-end operational automation.",
    painPoints: [
      {
        title: "Rigid SaaS Vendors & Exploding Per-User Fees",
        desc: "Commercial ERP packages enforce costly per-seat monthly subscriptions and cannot adapt to your proprietary standard operating procedures.",
      },
      {
        title: "Fragmented Data Across Disconnected Spreadsheets",
        desc: "Warehouse, cashier, and finance teams operate in isolated silos, causing frequent stock discrepancies, duplicate records, and delayed reporting.",
      },
      {
        title: "Operational Fraud & Missing Audit Trails",
        desc: "Difficult to track unauthorized transaction edits, cancelled invoices, or manipulated employee attendance records.",
      },
    ],
    solutionModules: [
      {
        title: "Supply Chain & Multi-Warehouse Inventory",
        desc: "Real-time stock tracking across multiple warehouses, automated purchase orders, intra-branch stock transfers, and low-inventory threshold alerts.",
      },
      {
        title: "Custom Production & Workflow Tracking",
        desc: "End-to-end pipeline management from customer order intake to factory floor queues, multi-tier approvals, and dispatch status.",
      },
      {
        title: "HR, Biometric Attendance & Automated Payroll",
        desc: "Direct integration with biometric fingerprint scanners and facial recognition hardware, automated overtime calculations, leave quotas, and one-click payslips.",
      },
      {
        title: "Real-Time Executive Financial Dashboard",
        desc: "Instant profit & loss analysis, cash flow tracking, balance sheets, and department performance metrics without waiting for manual month-end consolidation.",
      },
      {
        title: "Role-Based Access Control & Immutable Audit Logs",
        desc: "Granular departmental permission tiers and comprehensive activity audit trails to eliminate internal fraud and secure confidential data.",
      },
    ],
    results: [
      { label: "Operational Efficiency Boost", value: "+55%" },
      { label: "Administrative Time Saved", value: "80+ hrs/mo" },
      { label: "Recurring Software Fees", value: "100% Zero (Private Asset)" },
    ],
    workflow: [
      { step: "01", title: "Workflow Audit & Mapping", desc: "Analyzing your standard operating procedures, operational bottlenecks, and core data architecture." },
      { step: "02", title: "System Architecture & UI/UX", desc: "Designing structured database schemas, role matrices, and an intuitive user interface." },
      { step: "03", title: "Agile Development & Stress Testing", desc: "Iterative module coding with rigorous security audits, role simulation, and high-volume data tests." },
      { step: "04", title: "Deployment & Team Onboarding", desc: "Deploying to private cloud servers, legacy data migration, and comprehensive staff training." },
    ],
    faqs: [
      {
        q: "How does a Custom ERP differ from commercial SaaS software (e.g., Odoo or SAP)?",
        a: "A custom ERP is engineered 100% around your proprietary business workflows without feature limitations. You own 100% of the source code and database, eliminating compounding per-user monthly subscription fees.",
      },
      {
        q: "Can the system integrate with specialized hardware like fingerprint scanners and barcode readers?",
        a: "Yes. We have proven experience integrating hardware directly into web platforms, such as biometric fingerprint attendance scanners (as seen in our Ekaprint Bali case study), thermal receipt printers, and barcode scanners.",
      },
      {
        q: "What is the typical development timeline for a Custom ERP?",
        a: "Depending on module complexity, development typically ranges between 6 to 14 weeks with milestone-based staged releases (deploying priority MVP modules first).",
      },
      {
        q: "Where is our database and software hosted?",
        a: "The system is deployed on your dedicated private cloud infrastructure (AWS, DigitalOcean, or private on-premise servers). Your data remains 100% confidential and under your absolute ownership.",
      },
    ],
    relatedPortfolioSlugs: ["ekaprint-bali", "stikes-bina-usada-bali"],
    techStack: ["Next.js / React", "Node.js / Express", "PostgreSQL / MySQL", "Redis Cache", "Hardware SDK Integration", "Docker"],
    tags: ["Inventory", "HR & Payroll", "Finance", "Workflow", "Biometric"],
  },
  {
    id: "gym-management-system",
    slug: "gym-management-system",
    iconName: "Dumbbell",
    image: "/assets/portfolio/gorila-pos.png",
    title: "Gym & Fitness Management Systems",
    subtitle: "Modern Fitness Center Platform with Sub-2-Second QR Check-ins, POS, and Multi-Branch Control",
    badge: "Industry Specialization",
    category: "Fitness & Sport ERP",
    metaTitle: "Gym Management Software Development Bali & Global | Exp Digital Solution",
    metaDescription:
      "Complete gym and fitness center management platform: sub-2-second QR code member check-ins, supplement POS, Personal Trainer scheduling, multi-branch revenue tracking, and zero check-in fraud.",
    targetKeywords: [
      "Gym Management Software",
      "Fitness ERP System Bali",
      "QR Code Gym Attendance System",
      "Fitness Center POS Software",
      "Multi Branch Gym Platform",
      "Custom Gym Software House",
    ],
    shortDesc:
      "Sub-2-second QR member check-in, supplement POS, automated trainer scheduling, and 24/7 multi-branch revenue visibility.",
    heroSummary:
      "Boost member retention and eliminate operational revenue leakage. We build dedicated gym management platforms featuring lightning-fast dynamic QR check-ins, automated membership renewal alerts, transparent trainer commissions, and real-time multi-branch financial visibility.",
    targetAudience: "Independent fitness clubs, multi-branch gym chains, yoga & pilates studios, and sports complexes.",
    painPoints: [
      {
        title: "Check-in Fraud & Shared Physical Member Cards",
        desc: "Manual paper logs or physical cards allow unauthorized gym access and card sharing without verifying membership active status.",
      },
      {
        title: "Blind Spots in Multi-Branch Oversight",
        desc: "Owners must manually visit individual reception desks to reconcile daily revenue, supplement inventory, and peak-hour attendance across branches.",
      },
      {
        title: "Messy Personal Trainer (PT) Scheduling & Commissions",
        desc: "Manual trainer booking schedules frequently result in double bookings, lost session quotas, and disputed commission payouts.",
      },
    ],
    solutionModules: [
      {
        title: "Instant Dynamic QR Code Member Check-in",
        desc: "Lightning-fast verification (< 2 seconds) with instant validation of active membership tiers and automatic expiration alerts.",
      },
      {
        title: "Integrated POS & Supplement Bar",
        desc: "Rapid point-of-sale checkout for membership plans, daily passes, drinks, and supplements with automatic stock deductions.",
      },
      {
        title: "Personal Trainer (PT) Scheduling & Automated Commission",
        desc: "Session booking, quota countdown, trainer availability calendars, and transparent automated commission calculations.",
      },
      {
        title: "Multi-Branch Executive Control Center",
        desc: "Centralized owner dashboard to monitor revenue growth, peak hours, and member attendance trends across all locations 24/7.",
      },
      {
        title: "Automated WhatsApp Membership Reminders",
        desc: "Proactive notification system alerting members before their subscription expires to maximize renewal retention.",
      },
    ],
    results: [
      { label: "Check-in Scan Speed", value: "< 2 Seconds" },
      { label: "Unauthorized Access Fraud", value: "0% (Eliminated)" },
      { label: "Multi-Branch Visibility", value: "Real-Time 24/7" },
    ],
    workflow: [
      { step: "01", title: "Site & Flow Assessment", desc: "Understanding front-desk member flow, turnstile/access points, pricing tiers, and trainer commission structures." },
      { step: "02", title: "Module Configuration & QR Engine", desc: "Configuring POS registers, member database logic, and QR scanner displays." },
      { step: "03", title: "Front-Desk & Staff Onboarding", desc: "Training receptionists, gym managers, and personal trainers on day-to-day operational workflows." },
      { step: "04", title: "Go-Live & Cloud Synchronization", desc: "System launch with continuous multi-branch synchronization and automated cloud backups." },
    ],
    faqs: [
      {
        q: "Do members need to download a heavy app or carry physical cards?",
        a: "Members can simply use a digital QR Code generated on their smartphone browser or a printed dynamic badge. The system also supports barcode and RFID readers.",
      },
      {
        q: "Can the software handle fitness chains with multiple branches?",
        a: "Absolutely. Our architecture supports multi-branch operations (as implemented for Gorila Gym Bali), allowing owners to analyze individual branch performance as well as consolidated financials in real time.",
      },
      {
        q: "Are there recurring royalty fees per member?",
        a: "No. The system is delivered as your private digital asset without recurring per-member or per-transaction platform royalties.",
      },
    ],
    relatedPortfolioSlugs: ["gorila-gym-bali", "sparco-gym"],
    techStack: ["Next.js / React", "Node.js Backend", "PostgreSQL", "QR Code Engine", "PWA (Progressive Web App)", "Cloud Sync"],
    tags: ["QR Check-in", "Multi-branch", "POS Suplemen", "PT Schedule", "Membership"],
  },
  {
    id: "pos-and-retail-application",
    slug: "pos-and-retail-application",
    iconName: "Receipt",
    image: "/assets/portfolio/ekaprint-fingerprint.png",
    title: "POS & Retail Store Applications",
    subtitle: "High-Speed, Multi-Outlet Point of Sale Platform with Inventory Control and Live Reporting",
    badge: "Commercial Solution",
    category: "Retail & POS Systems",
    metaTitle: "Custom POS Software & Retail Management System Bali | Exp Digital Solution",
    metaDescription:
      "Custom Point of Sale (POS) system development for retail, F&B, and commercial services. Multi-outlet sync, precise inventory tracking, thermal printing, and instant reconciliation.",
    targetKeywords: [
      "Custom POS Software Development",
      "Retail POS System Bali",
      "Multi Outlet Cashier Software",
      "Commercial POS Application",
      "Point of Sale Software House",
      "Inventory and POS Integration",
    ],
    shortDesc:
      "High-speed checkout (< 10s), multi-outlet stock synchronization, thermal printing, and offline-first reliability for high-volume retail.",
    heroSummary:
      "Eliminate long checkout queues and end-of-day cash discrepancies. We build bespoke POS software featuring an ultra-responsive interface, flexible promotion rules, QRIS/card payment logging, and real-time warehouse inventory synchronization.",
    targetAudience: "Retail outlets, printing storefronts, multi-location cafes, convenience chains, and wholesale distributors.",
    painPoints: [
      {
        title: "Sluggish Cashier Performance During Rush Hours",
        desc: "Generic cloud POS apps lag or crash when order volumes surge, creating long lines and frustrated buyers.",
      },
      {
        title: "Cash Discrepancies & Untracked Voided Invoices",
        desc: "Lack of strict shift opening/closing cash audits and unmonitored order cancellations lead to hidden revenue shrinkage.",
      },
      {
        title: "Full Internet Dependency & Offline Downtime Risk",
        desc: "When the local internet connection drops, standard web cashiers freeze completely, halting customer transactions.",
      },
    ],
    solutionModules: [
      {
        title: "High-Speed Cashier Interface",
        desc: "Intuitive touch & keyboard-driven UI with instant product search, barcode scanning, and lightning checkout execution.",
      },
      {
        title: "Shift Management & Cash Reconciliation",
        desc: "Opening drawer float logging, mid-shift cash drops, and automated reconciliation audits upon cashier handover.",
      },
      {
        title: "Dynamic Tiered Pricing & Custom Promotions",
        desc: "Support for wholesale/retail price tiers, membership discounts, promotional bundles, and flexible voucher codes.",
      },
      {
        title: "Multi-Outlet Real-Time Inventory Sync",
        desc: "Automatic stock deduction upon sale completion, inter-branch inventory transfers, and low-stock alerts.",
      },
      {
        title: "Hardware Integration (Thermal & Barcode)",
        desc: "Seamless connectivity with USB/Bluetooth thermal receipt printers, cash drawers, barcode scanners, and production queue displays.",
      },
    ],
    results: [
      { label: "Checkout Transaction Speed", value: "< 10 Seconds" },
      { label: "Shift Cash Reconciliation Accuracy", value: "99.9%" },
      { label: "Hardware Compatibility", value: "100% Verified" },
    ],
    workflow: [
      { step: "01", title: "Workflow & Hardware Review", desc: "Matching cashier operational requirements with your hardware setup (printers, drawers, scanners, tablets/PCs)." },
      { step: "02", title: "Custom Logic Development", desc: "Building pricing algorithms, promotion matrices, order flows, and split payment tracking." },
      { step: "03", title: "High-Volume Stress Testing", desc: "Testing rapid transaction bursts and simulated offline/online failover conditions." },
      { step: "04", title: "Deployment & Cashier Training", desc: "On-site installation and quick-reference operational briefings for front-line cashiers." },
    ],
    faqs: [
      {
        q: "Can this POS run on existing desktop computers or touchscreen tablets?",
        a: "Yes. The platform is built with responsive web engineering, making it fully compatible with desktop PCs, touchscreen POS terminals, Android tablets, and iPads.",
      },
      {
        q: "What happens if the store's internet connection drops?",
        a: "We can implement an Offline-First local storage architecture (IndexedDB) that continues processing sales locally and automatically syncs to the central database once connection is restored.",
      },
      {
        q: "Does it support cashless payments such as dynamic QRIS and EDC card machines?",
        a: "Yes, the system displays dynamic/static QRIS codes and separately logs card payments, bank transfers, and digital wallets for clean financial audits.",
      },
    ],
    relatedPortfolioSlugs: ["ekaprint-bali", "gorila-gym-bali"],
    techStack: ["React / Next.js", "Node.js", "SQLite / PostgreSQL", "Web Thermal API", "Barcode Engine"],
    tags: ["Fast Cashier", "Multi-Outlet", "Thermal Printer", "Cash Reconciliation", "Barcode"],
  },
  {
    id: "web-development",
    slug: "web-development",
    iconName: "Globe",
    image: "/assets/portfolio/stikes-landing.png",
    title: "Web Development & Company Profiles",
    subtitle: "High-Performance, Aesthetic Corporate Websites Engineered to Win Search Rankings and Convert Prospek",
    badge: "Digital Presence",
    category: "Web Engineering",
    metaTitle: "Web Development & Corporate Company Profile Bali | Exp Digital Solution",
    metaDescription:
      "Premium custom web development in Bali. Ultra-fast loading speeds, modern aesthetics, responsive design, technical SEO Google optimization, and high-conversion customer journeys.",
    targetKeywords: [
      "Web Development Bali",
      "Company Profile Website Bali",
      "Custom Web Development Agency",
      "Software House Web Developer Bali",
      "SEO Friendly Website Bali",
      "Enterprise Web Engineering",
    ],
    shortDesc:
      "Google PageSpeed 90+ corporate web platforms engineered with Next.js for high search authority, visual elegance, and B2B buyer conversion.",
    heroSummary:
      "Your company website is your primary digital headquarters for global and regional clients. We engineer bespoke, high-performance web experiences (Next.js) combining futuristic aesthetics, persuasive storytelling, and rigorous technical SEO architecture to rank on Google's first page.",
    targetAudience: "Corporate enterprises, digital agencies, hospitality & resorts, architecture/creative studios, educational institutions, and growing businesses.",
    painPoints: [
      {
        title: "Sluggish Websites Built on Clunky Templates",
        desc: "Heavy generic templates take 4-5+ seconds to load, losing prospective high-value clients before they even see your offering.",
      },
      {
        title: "Outdated Visuals That Weaken Brand Credibility",
        desc: "Rigid, non-responsive designs diminish brand authority in the eyes of international clients, partners, and enterprise buyers.",
      },
      {
        title: "Zero Organic Search Visibility on Google",
        desc: "Poor semantic structure, lack of schema markup, and low core web vitals bury your site in search obscurity.",
      },
    ],
    solutionModules: [
      {
        title: "Next-Gen Architecture & Sub-Second Loading",
        desc: "Engineered with Next.js App Router and asset optimization pipelines to guarantee Google PageSpeed scores of 90+.",
      },
      {
        title: "Bespoke Aesthetic UI/UX Design",
        desc: "100% custom visual storytelling without recycled generic templates, expressing your brand's unique identity and prestige.",
      },
      {
        title: "Complete Technical SEO & Schema Architecture",
        desc: "Automated Schema.org JSON-LD, semantic HTML5, dynamic OpenGraph previews, XML sitemaps, and optimized meta structures.",
      },
      {
        title: "Interactive Web Experiences & 3D Canvas",
        desc: "Smooth animations (Lenis smooth scroll, Three.js 3D elements) that elevate dwell time and brand engagement.",
      },
      {
        title: "Conversion-Driven Lead Generation Funnel",
        desc: "Strategic call-to-action placement, dynamic WhatsApp direct routing, and automated consultation email lead dispatchers.",
      },
    ],
    results: [
      { label: "Google PageSpeed Score", value: "90+ / 100" },
      { label: "Lead Conversion Increase", value: "+80%" },
      { label: "Average Page Load Speed", value: "< 1.2 Seconds" },
    ],
    workflow: [
      { step: "01", title: "Brand Identity & Market Audit", desc: "Deconstructing your target audience persona, value proposition, and competitive positioning." },
      { step: "02", title: "Wireframing & UI Prototype", desc: "Crafting interactive visual mockups focused on visual elegance and intuitive navigation." },
      { step: "03", title: "Frontend Engineering & SEO Setup", desc: "Writing clean, modern code, responsive cross-device validation, and structured data implementation." },
      { step: "04", title: "Domain, SSL & Global CDN Launch", desc: "Configuring high-speed global edge servers with automated SSL and visitor analytics." },
    ],
    faqs: [
      {
        q: "Can our internal team edit website content and images independently?",
        a: "Yes. We integrate intuitive Content Management Systems (CMS) allowing your internal team to effortlessly update text, case studies, blogs, and images without writing code.",
      },
      {
        q: "Does the development package include domain setup, SSL, and cloud deployment?",
        a: "We provide comprehensive end-to-end setup including high-speed cloud edge hosting, custom domain configuration, SSL certificates, and Google Tag Manager analytics.",
      },
      {
        q: "Is the website fully optimized for mobile devices?",
        a: "100%. Every single layout is tested and refined across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
      },
    ],
    relatedPortfolioSlugs: ["biantaradiva-photo", "packaging-bali", "stikes-bina-usada-bali"],
    techStack: ["Next.js", "Tailwind / Vanilla CSS", "Three.js", "Lenis Scroll", "Framer Motion", "Resend API"],
    tags: ["SEO Optimized", "Next.js", "Responsive", "Fast Loading", "Custom Design"],
  },
  {
    id: "web-ecommerce",
    slug: "web-ecommerce",
    iconName: "ShoppingCart",
    image: "/assets/portfolio/packagingbali-home.png",
    title: "Web E-Commerce & B2B Product Catalogs",
    subtitle: "High-Conversion B2B Digital Catalogs & Online Stores with Independent CMS Control",
    badge: "Commerce Platform",
    category: "E-Commerce & Catalogs",
    metaTitle: "B2B E-Commerce & Digital Product Catalog Bali | Exp Digital Solution",
    metaDescription:
      "Custom B2B product showcase & e-commerce development in Bali. Granular specification filters, self-managed CMS (controlling 80%+ content), and ads-conversion optimization.",
    targetKeywords: [
      "B2B E-Commerce Development Bali",
      "Digital Product Catalog Web",
      "Custom Online Store Bali",
      "Product Showcase Website",
      "B2B Web Platform Indonesia",
      "Ads Optimized Landing Catalog",
    ],
    shortDesc:
      "Interactive B2B digital catalogs with granular specification filters, direct RFQ lead gateways, and self-managed CMS dashboards.",
    heroSummary:
      "Convert online visitors into long-term commercial buyers. We build interactive e-commerce and B2B product catalog platforms optimized specifically for paid advertising campaigns (Meta & Google Ads), backed by a custom CMS dashboard controlling 80%+ of the website on demand.",
    targetAudience: "B2B commercial vendors, packaging suppliers, retail fashion brands, wholesale manufacturers, and export companies.",
    painPoints: [
      {
        title: "Static PDF Catalogs That Are Impossible to Update",
        desc: "Sending large PDF attachments frustrates mobile buyers and leads to outdated pricing and specification confusion.",
      },
      {
        title: "Total Marketplace Dependency & High Commission Cuts",
        desc: "Relying strictly on third-party marketplaces erodes profit margins and deprives you of direct customer relationships and data ownership.",
      },
      {
        title: "Leaky Ad Landing Pages With Poor Conversion Rates",
        desc: "Paid ad traffic is wasted when product pages lack clear specification breakdowns, interactive galleries, and instant inquiry gateways.",
      },
    ],
    solutionModules: [
      {
        title: "Granular Product Catalog & Smart Filter",
        desc: "Interactive visual product showcase with faceted filters by dimensions, materials, categories, and instant keyword lookup.",
      },
      {
        title: "Custom Admin CMS (80%+ Site Control)",
        desc: "Dedicated dashboard to add products, adjust pricing tiers, upload high-res galleries, and update promo banners without developer assistance.",
      },
      {
        title: "Direct B2B Lead Gateway & WhatsApp Checkout",
        desc: "Flexible conversion paths: direct checkout or customized Request For Quote (RFQ) gateways routed straight to your sales team.",
      },
      {
        title: "Ads-Optimized Landing Architecture",
        desc: "Engineered specifically for paid marketing traffic with Meta Pixel, TikTok Pixel, and Google Ads conversion event tracking.",
      },
      {
        title: "Customer Inquiry & Order Management",
        desc: "Centralized tracking of prospective buyer inquiries, catalog downloads, and instant automated email alerts to sales representatives.",
      },
    ],
    results: [
      { label: "Content Self-Managed via CMS", value: "80%+ Control" },
      { label: "Ad Campaign Conversion Rate", value: "+65% Increase" },
      { label: "Product Catalog Engagement", value: "3.5x Longer" },
    ],
    workflow: [
      { step: "01", title: "Product Matrix & Buyer Journey", desc: "Mapping product hierarchies, granular technical specifications, and commercial buyer journeys." },
      { step: "02", title: "Catalog Architecture & UI Design", desc: "Designing responsive product displays, specification tables, and intuitive filtering controls." },
      { step: "03", title: "CMS Dashboard & Gateway Build", desc: "Developing the administrative management dashboard and direct WhatsApp/inquiry gateways." },
      { step: "04", title: "Conversion Tracking & Go-Live", desc: "Installing Google Tag Manager, Meta Pixel events, and running checkout flow simulations." },
    ],
    faqs: [
      {
        q: "Can this system function as a B2B inquiry catalog rather than a retail shopping cart?",
        a: "Yes! As demonstrated in our Packaging Bali case study, the platform can be configured as a B2B product showcase where buyers select custom specifications and connect directly with your sales reps.",
      },
      {
        q: "Can our staff add new categories and hundreds of product items later?",
        a: "Absolutely. We build a clean, straightforward CMS dashboard empowering your team to create, edit, or remove products and update pricing at any time.",
      },
      {
        q: "Is the catalog pre-configured with tracking pixels for digital advertising?",
        a: "Yes. We integrate complete conversion tracking events (ViewContent, InitiateCheckout, Lead, Contact) to maximize the ROI of your advertising budget.",
      },
    ],
    relatedPortfolioSlugs: ["packaging-bali", "ekaprint-bali"],
    techStack: ["Next.js", "Node.js API", "PostgreSQL", "Cloudinary / S3", "GTM / Meta Pixel", "WhatsApp API"],
    tags: ["B2B Catalog", "CMS Dashboard", "E-Commerce", "Ads Optimized", "Inquiry Gateway"],
  },
  {
    id: "digital-ads-and-marketing",
    slug: "digital-ads-and-marketing",
    iconName: "TrendingUp",
    image: "/assets/portfolio/exclusive-rentbali.png",
    title: "Digital Ads & Performance Marketing",
    subtitle: "High-ROI Performance Marketing Campaigns across Meta, Google Ads & TikTok",
    badge: "Growth Engine",
    category: "Performance Marketing",
    metaTitle: "Digital Ads Agency Bali & Performance Marketing | Exp Digital Solution",
    metaDescription:
      "Data-driven Meta Ads, Google Ads, and TikTok Ads management in Bali. Precision audience targeting, high-converting ad creatives, and tight conversion tracking to scale revenue.",
    targetKeywords: [
      "Digital Ads Agency Bali",
      "Meta Ads Management Bali",
      "Google Ads Agency Bali",
      "Performance Marketing Indonesia",
      "Paid Advertising Consultant",
      "Lead Generation Agency Bali",
    ],
    shortDesc:
      "Data-driven Meta, Google Search, and TikTok ad campaigns paired with Server-Side CAPI tracking to lower Customer Acquisition Cost (CAC).",
    heroSummary:
      "Stop burning marketing budgets on untracked vanity metrics. We engineer multi-channel digital advertising campaigns that synthesize deep audience research, high-converting creative angles, disciplined A/B split testing, and end-to-end conversion tracking to scale your business profitably.",
    targetAudience: "Regional businesses in Bali, B2B vendors, property developers, fitness clubs, hospitality brands, and e-commerce companies.",
    painPoints: [
      {
        title: "High Ad Spend (CPA) With Zero Real Leads",
        desc: "Running superficial 'boost posts' without structured conversion funnels yields clicks and likes but zero serious buyer inquiries.",
      },
      {
        title: "Leaky Landing Pages Unprepared for Traffic",
        desc: "Paid ad visitors sent to slow or confusing pages bounce immediately before reading your value proposition.",
      },
      {
        title: "Missing Conversion Tracking & Retargeting",
        desc: "Losing 95%+ of initial visitors due to missing retargeting funnels that convert interested prospects into paying customers.",
      },
    ],
    solutionModules: [
      {
        title: "Google Search & High-Intent Ads",
        desc: "Capturing buyers who are actively searching for your solutions on Google with high-intent keywords and smart bidding strategies.",
      },
      {
        title: "Meta Ads (Instagram & Facebook) Funnel",
        desc: "Full-funnel TOFU-MOFU-BOFU campaign structures leveraging custom demographic targeting and Lookalike Audiences built from your customer data.",
      },
      {
        title: "Creative Assets & Persuasive Copywriting",
        desc: "Producing scroll-stopping static graphics, dynamic video hooks, and psychology-driven ad copy engineered to trigger action.",
      },
      {
        title: "Server-Side Conversions API (CAPI) Tracking",
        desc: "Setting up Meta Conversions API and GA4 to ensure 100% accurate attribution despite browser tracking preventions and iOS updates.",
      },
      {
        title: "Continuous A/B Testing & ROAS Optimization",
        desc: "Systematic split testing across visual hooks, headlines, audiences, and landing page variants to drive down Customer Acquisition Costs (CAC).",
      },
    ],
    results: [
      { label: "Average ROAS Multiplier", value: "3.2x - 5.5x" },
      { label: "Cost-Per-Lead Reduction", value: "-40%" },
      { label: "Data Attribution Accuracy", value: "99% (CAPI)" },
    ],
    workflow: [
      { step: "01", title: "Funnel & Competitor Audit", desc: "Analyzing target market dynamics, competitor ad angles, and landing page conversion readiness." },
      { step: "02", title: "Creative & Copy Asset Production", desc: "Crafting ad angles, visual assets, headlines, and lead magnet hooks." },
      { step: "03", title: "Campaign Setup & Pixel Calibration", desc: "Structuring campaign hierarchy, custom audience segments, and testing conversion event triggers." },
      { step: "04", title: "Scale-Up & Transparent Reporting", desc: "Scaling budget on top-performing ad sets and delivering clear, weekly performance dashboards." },
    ],
    faqs: [
      {
        q: "What is the recommended minimum daily advertising budget?",
        a: "Budget requirements depend on target industry and geographic scope. For initial validation and testing phases, we typically recommend starting around $15 - $35/day per advertising channel.",
      },
      {
        q: "Does Exp Digital Solution handle ad creative production (graphics and copywriting)?",
        a: "Yes. Our performance marketing service includes persuasive copywriting, high-impact graphic design, and storyboard guidance for video hooks.",
      },
      {
        q: "How do we monitor campaign performance?",
        a: "We provide access to transparent, real-time reporting dashboards tracking core metrics (Spend, Impressions, Clicks, Inquiries/Leads, and ROAS) coupled with regular review meetings.",
      },
    ],
    relatedPortfolioSlugs: ["packaging-bali", "gorila-gym-bali"],
    techStack: ["Meta Ads Manager", "Google Ads", "Google Tag Manager", "Meta Conversions API", "GA4", "Looker Studio"],
    tags: ["Meta Ads", "Google Ads", "Performance Marketing", "Conversion Tracking", "ROAS"],
  },
  {
    id: "custom-software-and-mobile-apps",
    slug: "custom-software-and-mobile-apps",
    iconName: "Smartphone",
    image: "/assets/portfolio/sparco-trainer-schedule.png",
    title: "Custom Mobile Apps & Specialized Software",
    subtitle: "Cross-Platform Mobile Applications (iOS & Android) and Specialized Enterprise Software Architecture",
    badge: "Custom Engineering",
    category: "Mobile & Specialized Apps",
    metaTitle: "Custom Mobile App Development Android & iOS Bali | Exp Digital Solution",
    metaDescription:
      "Custom mobile app development in Bali for Android and iOS. Operational field apps, customer booking portals, membership apps, and secure enterprise API integrations.",
    targetKeywords: [
      "Mobile App Development Bali",
      "iOS and Android App Developer Bali",
      "Custom Mobile Software House",
      "Enterprise Mobile Application",
      "Booking and Reservation App Bali",
      "Custom Software Engineering",
    ],
    shortDesc:
      "High-performance iOS & Android mobile applications with offline caching, push alerts, and seamless centralized database integration.",
    heroSummary:
      "Transform your digital product vision into reality and empower your field workforce. We develop high-performance mobile applications (React Native / Flutter / PWA) and specialized software backed by scalable cloud backends, responsive offline capabilities, and seamless centralized database integration.",
    targetAudience: "Organizations with mobile field teams, healthcare providers, booking/rental platforms, educational institutes, and innovative startups.",
    painPoints: [
      {
        title: "Field Teams Disconnected from Central Headquarters",
        desc: "Field staff recording data manually or on disconnected tools causes communication lag and delays critical business decisions.",
      },
      {
        title: "Sluggish App Performance & High Battery Consumption",
        desc: "Poorly architected mobile apps suffer from frequent crashes, slow loading, and poor user reviews on app stores.",
      },
      {
        title: "Spaghetti Code & Costly Future Modifications",
        desc: "Messy codebases from previous developers make adding new features risky, slow, and prohibitively expensive.",
      },
    ],
    solutionModules: [
      {
        title: "Cross-Platform Android & iOS Engineering",
        desc: "A unified, efficient codebase that reduces development costs while delivering fluid 60fps native performance.",
      },
      {
        title: "Offline-First Architecture & Local Data Caching",
        desc: "Enables field staff to continue logging operations in low-connectivity areas, automatically syncing with central servers once online.",
      },
      {
        title: "Secure REST / GraphQL API Architecture",
        desc: "Robust backend infrastructure with JWT/OAuth2 token encryption, rate limiting, and role-based data protection.",
      },
      {
        title: "Real-Time Push Notifications & Alerts",
        desc: "Instant automated alerts for order status updates, schedule reminders, and urgent operational notifications delivered to user lock screens.",
      },
      {
        title: "Deep Device Hardware Integration",
        desc: "Seamless connectivity with device cameras (QR/barcode/document scanning), GPS geolocation tracking, Bluetooth printers, and biometrics.",
      },
    ],
    results: [
      { label: "Application Load Time", value: "< 1.5 Seconds" },
      { label: "Cross-Platform Support", value: "Android & iOS" },
      { label: "Crash-Free Session Rate", value: "99.8%" },
    ],
    workflow: [
      { step: "01", title: "Product Discovery & Scope", desc: "Formulating detailed Product Requirement Documents (PRDs), user journeys, and technical feasibility reviews." },
      { step: "02", title: "Interactive UI/UX Prototype", desc: "Crafting clickable mobile prototypes in Figma for user validation before writing code." },
      { step: "03", title: "Sprint Coding & QA Testing", desc: "Agile frontend/backend engineering coupled with continuous automated unit and real-device testing." },
      { step: "04", title: "App Store / Enterprise Deployment", desc: "Publishing to Google Play Store, Apple App Store, or distributing via private enterprise APKs." },
    ],
    faqs: [
      {
        q: "Can the mobile app connect with our existing website or ERP database?",
        a: "Yes! We can engineer custom RESTful APIs to connect your mobile application directly with your existing ERP, CRM, or database systems.",
      },
      {
        q: "Can we distribute the app privately to our employees without publishing to the public App Store?",
        a: "Certainly. We support private enterprise distribution (enterprise APKs, private Google Play accounts, or Progressive Web Apps).",
      },
      {
        q: "What warranty and technical maintenance is provided after launch?",
        a: "We provide post-launch bug warranty periods and dedicated ongoing maintenance tiers to guarantee compatibility with new iOS and Android OS updates.",
      },
    ],
    relatedPortfolioSlugs: ["stikes-bina-usada-bali", "sparco-gym"],
    techStack: ["React Native", "Next.js / Node.js", "PostgreSQL", "Firebase Push Notification", "Docker", "REST API"],
    tags: ["Mobile Apps", "Android & iOS", "Custom Engineering", "API Integration", "Offline First"],
  },
];

// Helper functions for services
export function getAllServices() {
  return SERVICES;
}

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug, limit = 3) {
  return SERVICES.filter((s) => s.slug !== currentSlug).slice(0, limit);
}

