"use client";
import useLenis from "@/lib/hooks/useLenis";
import useScrollReveal from "@/lib/hooks/useScrollReveal";

export default function SiteEffects() {
  useLenis();
  useScrollReveal();
  return null;
}
