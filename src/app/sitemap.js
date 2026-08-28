import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { getAllServices } from "@/data/services";
import { getAllLandingPages } from "@/data/landing-pages";

export default function sitemap() {
  const baseUrl = "https://www.expdigitalsolution.com";
  const now = new Date();

  // Static core routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Dynamic services routes for non-brand SEO
  const serviceRoutes = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic high-intent non-brand SEO solution landing pages
  const solutionRoutes = getAllLandingPages().map((page) => ({
    url: `${baseUrl}/solutions/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.92,
  }));

  // Dynamic portfolio case study routes
  const portfolioRoutes = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...portfolioRoutes];
}

