"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [booted, setBooted] = useState(false);

  // Refresh ScrollTrigger after boot screen finishes
  useEffect(() => {
    if (booted) {
      // Small delay so layout is ready
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [booted]);

  return (
    <>
      {/* ========== BOOT SCREEN ========== */}
      {!booted && (
        <BootScreen onComplete={() => setBooted(true)} />
      )}

      {/* ========== MAIN APP (after boot) ========== */}
      {booted && (
        <>
          <main className="pt-10">
            {/* 1. Hero */}
            <Hero />
          </main>
        </>
      )}
    </>
  );
}