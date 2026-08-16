import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

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
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic portfolio case study routes
  const portfolioRoutes = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
