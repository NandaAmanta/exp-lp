"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import PortfolioHero from "./components/PortfolioHero";
import PortfolioGrid from "./components/PortfolioGrid";
import PortfolioCTA from "./components/PortfolioCTA";
import useScrollReveal from "@/lib/hooks/useScrollReveal";
import { PORTFOLIO_PROJECTS, getCategories } from "@/data/portfolio";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => getCategories(), []);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        project.type === selectedCategory ||
        (project.tags && project.tags.includes(selectedCategory));

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.type.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        (project.keyModules && project.keyModules.some((m) => m.toLowerCase().includes(q))) ||
        (project.techStack && project.techStack.some((t) => t.toLowerCase().includes(q)));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  useScrollReveal([selectedCategory, searchQuery, filteredProjects.length]);

  const handleResetFilter = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <>
      <SiteEffects />
      <Navbar activePage="portfolio" />

      <main className="main-content" style={{ minHeight: "80vh", paddingTop: "calc(var(--nav-height) + 20px)" }}>
        <PortfolioHero
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <PortfolioGrid projects={filteredProjects} onResetFilter={handleResetFilter} />

        <PortfolioCTA />
      </main>

      <Footer variant="home" />
    </>
  );
}
