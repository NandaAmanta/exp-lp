"use client";
import { useEffect } from "react";

/**
 * Mirrors the original script.js reveal-on-scroll behavior.
 * Observes every element with class "reveal" currently in the DOM
 * and adds "visible" once it scrolls into view.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
