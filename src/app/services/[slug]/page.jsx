import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/data/services";
import { COMPANY } from "@/data/company";
import ServiceDetailPage from "@/features/services/service-detail-page";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const canonicalUrl = `https://www.expdigitalsolution.com/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.targetKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "/assets/meta-banner.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const baseUrl = "https://www.expdigitalsolution.com";
  const canonicalUrl = `${baseUrl}/services/${service.slug}`;

  // Structured Data Schema for SEO: Service + BreadcrumbList + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.category,
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.legalName,
      url: baseUrl,
      logo: `${baseUrl}/assets/exp-logo.png`,
      telephone: `+${COMPANY.whatsappNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.locality,
        addressRegion: COMPANY.address.region,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
    },
    description: service.heroSummary,
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
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
      <ServiceDetailPage service={service} />
    </>
  );
}
