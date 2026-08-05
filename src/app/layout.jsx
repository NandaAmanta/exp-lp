import Script from "next/script";
import { COMPANY } from "@/data/company";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.expdigitalsolution.com"),
  title: "Exp Digital Solution | Premium Software House & Digital Agency Based in Bali",
  description:
    "Exp Digital Solution is a premium software & digital agency house specializing in custom ERP systems, web development, company profiles, mobile apps, and data-driven digital marketing solutions.",
  keywords:
    "Software House Bali, ERP System, Company Profile, Web Development, Digital Agency, Exp Digital Solution, Tech Agency Bali, Custom Software",
  authors: [{ name: "Exp Digital Solution" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/exp-logo.ico",
    apple: "/assets/ori-exp-logo.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://www.expdigitalsolution.com/",
    title: "Exp Digital Solution | Premium Software House & Digital Agency Based in Bali",
    description:
      "We build scalable ERP systems, custom software, and modern company profiles to accelerate your business growth.",
    images: [{ url: "/assets/meta-banner.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.shortName,
  legalName: COMPANY.legalName,
  alternateName: "Exp Digital",
  url: "https://www.expdigitalsolution.com/",
  logo: "https://www.expdigitalsolution.com/assets/exp-logo.png",
  image: "https://www.expdigitalsolution.com/assets/meta-banner.png",
  description:
    "Exp Digital Solution adalah Software House Bali yang menyediakan layanan ERP Development, POS Systems, dan Gym Management System dengan harga kompetitif dan hasil berkualitas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.locality,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: COMPANY.geo.latitude, longitude: COMPANY.geo.longitude },
  telephone: `+${COMPANY.whatsappNumber}`,
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Pengembangan Software",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Development (Enterprise Resource Planning)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "POS (Point of Sale) System Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gym Management System & Biometric Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web & Mobile Application Development" } },
    ],
  },
  sameAs: [COMPANY.social.instagram, COMPANY.social.medium, COMPANY.social.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.18/dist/lenis.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${COMPANY.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${COMPANY.gtmId}');`}
        </Script>
      </body>
    </html>
  );
}
