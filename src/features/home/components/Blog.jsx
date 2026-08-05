"use client";
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import StarCanvas from "@/components/ui/StarCanvas";
import ShootingStars from "@/components/ui/ShootingStars";
import { COMPANY } from "@/data/company";

const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(COMPANY.mediumRssUrl)}`;
const FALLBACK_IMG = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800";

export default function Blog() {
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function fetchMediumArticles() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === "ok" && data.items.length > 0) {
          const items = data.items.slice(0, 3).map((item) => {
            let imgUrl = item.thumbnail;
            if (!imgUrl || imgUrl.includes("stat?event")) {
              const doc = new DOMParser().parseFromString(item.description, "text/html");
              const img = doc.querySelector("img");
              imgUrl = img ? img.src : FALLBACK_IMG;
            }

            const date = new Date(item.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description;
            const cleanText = tempDiv.textContent || tempDiv.innerText || "";
            const shortDesc = cleanText.trim().substring(0, 130) + "…";

            return { title: item.title, link: item.link, imgUrl, date, shortDesc };
          });

          if (!cancelled) {
            setArticles(items);
            setStatus("ok");
          }
        } else {
          throw new Error("No articles or bad status");
        }
      } catch (err) {
        console.error("Error fetching Medium articles:", err);
        if (!cancelled) setStatus("error");
      }
    }

    fetchMediumArticles();
    return () => {
      cancelled = true;
    };
  }, []);

  // Blog cards render asynchronously after the initial page-load reveal
  // observer has already run, so re-observe them once they exist.
  useEffect(() => {
    if (status !== "ok") return;
    const els = document.querySelectorAll("#medium-articles .reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [status]);

  return (
    <section id="blog" className="blog">
      <StarCanvas />
      <ShootingStars count={4} />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Knowledge Hub</span>
          <h2>Insights &amp; Articles</h2>
          <p>Deep dives into technology, design, and digital transformation.</p>
          <div className="section-divider"></div>
        </div>

        <div id="medium-articles" className="blog-grid">
          {status === "loading" && (
            <div className="loading-state">
              <p>Fetching latest articles...</p>
            </div>
          )}

          {status === "error" && (
            <div className="loading-state">
              <p>
                Unable to load articles.{" "}
                <a
                  href={COMPANY.social.medium}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  Visit our Medium →
                </a>
              </p>
            </div>
          )}

          {status === "ok" &&
            articles.map((a, i) => (
              <div className="blog-card reveal" key={a.link} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="blog-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.imgUrl} alt={a.title} loading="lazy" />
                </div>
                <div className="blog-content">
                  <div className="blog-tag">Article</div>
                  <h3>{a.title}</h3>
                  <p>{a.shortDesc}</p>
                  <div className="blog-footer">
                    <span className="blog-date">{a.date}</span>
                    <a href={a.link} target="_blank" rel="noopener" className="read-more">
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center" style={{ marginTop: "56px" }}>
          <a
            href={COMPANY.social.medium}
            target="_blank"
            rel="noopener"
            className="btn-secondary"
            id="btn-medium"
          >
            View All on Medium <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
