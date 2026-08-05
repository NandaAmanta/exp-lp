"use client";
import { useEffect } from "react";

/**
 * Initializes Lenis smooth scroll exactly like the original script.js,
 * and wires up smooth-scrolling for any in-page anchor links (href="#...").
 */
export default function useLenis() {
  useEffect(() => {
    let lenis;
    let rafId;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      const handleClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const href = anchor.getAttribute("href");
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -72 });
        }
      };

      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);
}
