"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Laptop } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, stagger: 0.12, duration: 0.5 },
          "-=0.3"
        )
        .from(
          ".hero-art",
          { scale: 0.85, opacity: 0, duration: 0.9, ease: "back.out(1.2)" },
          "-=0.7"
        )
        .from(
          ".hero-status-row",
          { x: 20, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=0.4"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="section min-h-[90vh] flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-cyan-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Door-to-Door Experts
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            We fix your tech
            <br />
            <span className="gradient-text">at your door</span>
          </h1>

          <p className="hero-desc text-muted text-lg max-w-md leading-relaxed">
            PC, Laptop, Printer & Electronics repair. Certified technicians
            visit your home or office — no need to carry anything.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#book"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:opacity-90 transition"
            >
              Book Free Visit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-400 font-medium hover:bg-cyan-400/10 transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="hero-art flex justify-center lg:justify-end">
          <div className="relative glass rounded-3xl p-8 max-w-sm w-full floaty">
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
              Online now
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center mb-5">
              <Laptop className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-bold text-xl mb-2">Live Capacity</h3>

            <div className="space-y-3 text-sm">
              {[
                { name: "PC / Desktop", status: "Available" },
                { name: "Laptop", status: "Available" },
                { name: "Printer", status: "Available" },
                { name: "Electronics", status: "2 slots left" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="hero-status-row flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-muted">{item.name}</span>
                  <span className="text-cyan-400 text-xs">{item.status}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-2xl font-black gradient-text">
              2,400+
            </p>
            <p className="text-center text-xs text-muted">repairs completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}