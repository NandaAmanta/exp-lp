import ServicesPage from "@/features/services/services-page";
import { getAllServices } from "@/data/services";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Custom Software Development, ERP & Enterprise Web Solutions | Exp Digital Solution",
  description:
    "End-to-end bespoke software engineering: Custom Internal ERP, Gym Management Systems, Retail POS, Corporate Web Platforms, and B2B E-Commerce. 100% privately owned assets with zero recurring per-user license fees.",
  keywords:
    "Custom Software Development Bali, Software House Bali, Custom ERP Development, Enterprise ERP Systems, Gym Management Software, POS Retail System, Web Development Bali, B2B E-Commerce, Exp Digital Solution",
  alternates: {
    canonical: "https://www.expdigitalsolution.com/services",
  },
  openGraph: {
    title: "Custom Software Development, ERP & Enterprise Web Solutions | Exp Digital Solution",
    description:
      "End-to-end bespoke software engineering: Custom Internal ERP, Gym Management Systems, Retail POS, and High-Conversion Web Platforms with 100% private ownership.",
    url: "https://www.expdigitalsolution.com/services",
    type: "website",
    images: [
      {
        url: "/assets/meta-banner.png",
        width: 1200,
        height: 630,
        alt: "Exp Digital Solution - Enterprise Software Engineering & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development, ERP & Enterprise Web Solutions | Exp Digital Solution",
    description:
      "End-to-end bespoke software engineering: Custom Internal ERP, Gym Management Systems, Retail POS, and Web Engineering.",
    images: ["/assets/meta-banner.png"],
  },
};

export default function Services() {
  const baseUrl = "https://www.expdigitalsolution.com";
  const services = getAllServices();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Enterprise Software & Digital Engineering Solutions",
    description:
      "Directory of custom software engineering solutions including Custom ERPs, Gym Management Platforms, POS Retail Systems, and Web Engineering.",
    url: `${baseUrl}/services`,
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.legalName,
      url: baseUrl,
      logo: `${baseUrl}/assets/exp-logo.png`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${baseUrl}/services/${service.slug}`,
        description: service.shortDesc,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPage />
    </>
  );
}
