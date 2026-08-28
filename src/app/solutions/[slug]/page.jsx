import { notFound } from "next/navigation";
import { getAllLandingPages, getLandingPageBySlug } from "@/data/landing-pages";
import { COMPANY } from "@/data/company";
import SolutionLandingPage from "@/features/solutions/solution-landing-page";

export async function generateStaticParams() {
  const pages = getAllLandingPages();
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const pageData = getLandingPageBySlug(params.slug);
  if (!pageData) return {};

  const canonicalUrl = `https://www.expdigitalsolution.com/solutions/${pageData.slug}`;

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.targetKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "/assets/meta-banner.png",
          width: 1200,
          height: 630,
          alt: pageData.hero.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      images: ["/assets/meta-banner.png"],
    },
  };
}

export default function SolutionPage({ params }) {
  const pageData = getLandingPageBySlug(params.slug);
  if (!pageData) notFound();

  const baseUrl = "https://www.expdigitalsolution.com";
  const canonicalUrl = `${baseUrl}/solutions/${pageData.slug}`;

  // Structured Data Schema for Local SEO & Rich Snippets
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.legalName,
    alternateName: "Exp Digital Solution",
    url: baseUrl,
    logo: `${baseUrl}/assets/exp-logo.png`,
    image: `${baseUrl}/assets/meta-banner.png`,
    telephone: `+${COMPANY.whatsappNumber}`,
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
    priceRange: "$$",
    areaServed: ["Bali", "Denpasar", "Badung", "Gianyar", "Indonesia", "Global"],
    description: pageData.metaDescription,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageData.hero.title,
    serviceType: "Software Development & IT Consulting",
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.legalName,
      url: baseUrl,
    },
    description: pageData.hero.subtitle,
    url: canonicalUrl,
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
        name: "Solutions",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageData.hero.geoBadge.replace("📍 ", ""),
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SolutionLandingPage pageData={pageData} />
    </>
  );
}
