import { notFound } from "next/navigation";
import PortfolioDetailPage from "@/features/portfolio/portfolio-detail-page";
import { getProjectBySlug, getAllProjects } from "@/data/portfolio";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found | EXP Digital Solution",
      robots: "noindex, nofollow",
    };
  }

  const pageTitle = `${project.title} — Case Study | EXP Digital Solution`;
  const pageDesc = `${project.subtitle}. ${project.desc}`;
  const pageUrl = `https://www.expdigitalsolution.com/portfolio/${project.slug}`;
  const bannerImage = project.bannerImage || project.image;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `${project.title}, ${project.client}, ${project.type}, ${project.category}, EXP Digital Solution Case Study`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: "EXP Digital Solution",
      type: "article",
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [bannerImage],
    },
  };
}

export default function DetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-Based",
    description: project.fullDesc,
    author: {
      "@type": "Organization",
      name: "EXP Digital Solution",
      url: "https://www.expdigitalsolution.com",
    },
    provider: {
      "@type": "Organization",
      name: "EXP Digital Solution",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioDetailPage project={project} />
    </>
  );
}
