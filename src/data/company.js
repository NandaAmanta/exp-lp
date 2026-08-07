// Site-wide company info reused across Navbar, Footer, Contact sections, and SEO metadata.
// Change values here once instead of hunting through every component.
export const COMPANY = {
  legalName: "PT EXP DIGITAL SOLUTION",
  shortName: "Exp Digital Solution",
  whatsappNumber: "62895330667787",
  whatsappDisplay: "+62 895 3306 7787",
  email: "expgroupbali@gmail.com",
  address: {
    street: "Jl. Raya Tojan Permai",
    full: "BTN Tojan Permai, Perum B Tn, Jl. Raya Tojan Permai No.c22, Pering, Kec. Blahbatuh, Kabupaten Gianyar, Bali 80581",
    locality: "Gianyar",
    region: "Bali",
    postalCode: "80581",
    country: "ID",
  },
  geo: { latitude: -8.6705, longitude: 115.2126 },
  social: {
    instagram: "https://www.instagram.com/expdigitalsolution",
    linkedin: "https://www.linkedin.com/company/exp-digital-solution",
    medium: "https://expdigitalsolution.medium.com/",
  },
  mediumRssUrl: "https://medium.com/feed/@expdigitalsolution",
  gtmId: "GTM-TDF7S7CD",
};

export const whatsappLink = (message) =>
  `https://wa.me/${COMPANY.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
