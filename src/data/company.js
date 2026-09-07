// Site-wide company info reused across Navbar, Footer, Contact sections, and SEO metadata.
// Change values here once instead of hunting through every component.
export const COMPANY = {
  legalName: "PT EXP DIGITAL SOLUTION",
  shortName: "Exp Digital Solution",
  whatsappNumber: "6285175025114",
  whatsappDisplay: "+62 851-7502-5114",
  email: "expgroupbali@gmail.com",
  address: {
    street: "Jl. Raya Tojan Permai",
    full: "BTN Tojan Permai, Perum B Tn, Jl. Raya Tojan Permai No.c22, Pering, Kec. Blahbatuh, Kabupaten Gianyar, Bali 80581",
    locality: "Gianyar",
    region: "Bali",
    postalCode: "80581",
    country: "ID",
  },
  geo: { latitude: -8.5821851, longitude: 115.3011966 },
  social: {
    instagram: "https://www.instagram.com/expdigitalsolution",
    linkedin: "https://www.linkedin.com/company/exp-digital-solution",
    medium: "https://expdigitalsolution.medium.com/",
  },
  mediumRssUrl: "https://medium.com/feed/@expdigitalsolution",
  gtmId: "GTM-TDF7S7CD",
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  internalLeadsApi: {
    url: process.env.NEXT_PUBLIC_LEADS_API_URL || "https://internal.expdigitalsolution.com/api/v1/leads",
    apiKey: process.env.NEXT_PUBLIC_LEADS_API_KEY || "exp_5781bbc926a1428483f0ce5e819671ab",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${COMPANY.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
