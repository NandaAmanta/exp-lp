import PortfolioPage from "@/features/portfolio/portfolio-page";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

export const metadata = {
  title: "Case Studies & Selected Works | EXP Digital Solution",
  description:
    "Explore custom enterprise ERPs, multi-branch gym management systems, and specialized printing platforms engineered by EXP Digital Solution.",
  keywords:
    "EXP Digital Solution Portfolio, Case Studies, Custom ERP Bali, Gym Management System, Printing ERP System, Software Engineering Portfolio",
  alternates: {
    canonical: "https://www.expdigitalsolution.com/portfolio",
  },
  openGraph: {
    title: "Case Studies & Selected Works | EXP Digital Solution",
    description:
      "Explore custom enterprise ERPs, multi-branch gym management systems, and specialized printing platforms engineered by EXP Digital Solution.",
    url: "https://www.expdigitalsolution.com/portfolio",
    siteName: "EXP Digital Solution",
    type: "website",
    images: [
      {
        url: "/assets/meta-banner.png",
        width: 1200,
        height: 630,
        alt: "EXP Digital Solution Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Selected Works | EXP Digital Solution",
    description:
      "Explore custom enterprise ERPs, multi-branch gym management systems, and specialized printing platforms engineered by EXP Digital Solution.",
    images: ["/assets/meta-banner.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EXP Digital Solution Portfolio & Case Studies",
    description:
      "Explore custom enterprise ERPs, multi-branch gym management systems, and specialized printing platforms.",
    url: "https://www.expdigitalsolution.com/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PORTFOLIO_PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `https://www.expdigitalsolution.com/portfolio/${project.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
