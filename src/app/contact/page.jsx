import ContactPage from "@/features/contact/contact-page";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Contact Us | EXP Digital Solution — Premium Software House & Tech Agency Bali",
  description:
    "Get in touch with EXP Digital Solution. Consult your custom ERP development, Gym Management System, POS platform, or mobile app project with our engineering team.",
  keywords:
    "Contact EXP Digital Solution, Software House Bali Contact, ERP Consultant Bali, Hire Software Engineers Bali, Custom Software Development Bali",
  alternates: {
    canonical: "https://www.expdigitalsolution.com/contact",
  },
  openGraph: {
    title: "Contact Us | EXP Digital Solution — Software House Bali",
    description:
      "Get in touch with EXP Digital Solution for custom enterprise software development, ERP systems, and web/mobile apps.",
    url: "https://www.expdigitalsolution.com/contact",
    type: "website",
    images: [{ url: "/assets/meta-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | EXP Digital Solution",
    description:
      "Get in touch with EXP Digital Solution to consult on your custom software and digital architecture.",
    images: ["/assets/meta-banner.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact EXP Digital Solution",
  url: "https://www.expdigitalsolution.com/contact",
  description:
    "Official contact and technical discovery page of EXP Digital Solution for enterprise ERP, POS, and custom software development consultations.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: COMPANY.legalName,
    telephone: `+${COMPANY.whatsappNumber}`,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.locality,
      addressRegion: COMPANY.address.region,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
}
