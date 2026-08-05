"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/data/company";

export default function Navbar({ activePage = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      const navbar = document.querySelector(".navbar");
      if (navbar && !navbar.contains(e.target) && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [menuOpen]);

  const isHome = activePage === "home";
  const homeHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-content">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          {!logoError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/assets/exp-logo.png"
              alt="Exp Digital Solution Logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="logo-text" style={{ display: "flex" }}>
              EXP<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          )}
        </Link>

        <ul className={`nav-links${menuOpen ? " active" : ""}`} id="nav-links">
          <li>
            <a href={homeHref("#home")} onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <Link href="/about" className={!isHome ? "active" : ""} onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <a href={homeHref("#services")} onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href={homeHref("#portfolio")} onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>
          <li>
            <a href={homeHref("#blog")} onClick={() => setMenuOpen(false)}>Blog</a>
          </li>
          <li>
            <a href={homeHref("#testimonials")} onClick={() => setMenuOpen(false)}>Testimonials</a>
          </li>
          <li>
            <a
              href={whatsappLink()}
              className="btn-primary"
              target="_blank"
              rel="noopener"
              id="btn-lets-talk"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
