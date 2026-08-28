"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { getAllServices } from "@/data/services";

const CATEGORIES = [
  { id: "all", label: "All Solutions" },
  { id: "enterprise", label: "Enterprise & Operations", slugs: ["custom-internal-erp", "gym-management-system", "pos-and-retail-application"] },
  { id: "web", label: "Web & E-Commerce", slugs: ["web-development", "web-ecommerce"] },
  { id: "growth", label: "Mobile & Growth", slugs: ["digital-ads-and-marketing", "custom-software-and-mobile-apps"] },
];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const allServices = getAllServices();

  const filteredServices = useMemo(() => {
    if (activeTab === "all") return allServices;
    const tabObj = CATEGORIES.find((c) => c.id === activeTab);
    if (!tabObj || !tabObj.slugs) return allServices;
    return allServices.filter((s) => tabObj.slugs.includes(s.slug));
  }, [activeTab, allServices]);

  const getCategoryCount = (tabId) => {
    if (tabId === "all") return allServices.length;
    const tabObj = CATEGORIES.find((c) => c.id === tabId);
    if (!tabObj || !tabObj.slugs) return 0;
    return allServices.filter((s) => tabObj.slugs.includes(s.slug)).length;
  };

  return (
    <section className="services-hub-section" style={{ padding: "10px 0 100px" }}>
      <div className="container">
        {/* Filter Tabs */}
        <div className="services-hub-filter-tabs">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = getCategoryCount(tab.id);
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`services-hub-filter-btn ${isActive ? "active" : ""}`}
              >
                <span>{tab.label}</span>
                <span className="services-hub-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Clean, Minimalist Icon-Based Services Grid */}
        <div className="services-hub-grid">
          {filteredServices.map((service) => {
            const tags = (service.tags || []).slice(0, 3);

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-hub-card"
              >
                <div>
                  {/* Top Row: Icon + Category Pill */}
                  <div className="service-hub-header">
                    <div className="service-hub-icon-wrap">
                      <ServiceIcon name={service.iconName} size={24} />
                    </div>
                    <span className="service-hub-category-pill">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="service-hub-title">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="service-hub-desc">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer: Clean Tags + CTA */}
                <div className="service-hub-footer">
                  <div className="service-hub-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="service-hub-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="service-hub-cta">
                    Explore <ArrowRight size={14} className="service-hub-cta-arrow" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

