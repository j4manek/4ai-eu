"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

// Fixed backdrop that reacts to scrolling: colour glows drift and change dominance with scroll
// position (--p, 0..1), everything brightens while scrolling (--v, 0..1, decays), plus a progress line.
export function Ambient() {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = root.current;
    const barEl = bar.current;
    if (!el || !barEl) return;

    let last = window.scrollY;
    let v = 0;
    let raf = 0;
    let running = false;

    const tick = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      const dy = Math.abs(y - last);
      last = y;
      const target = reduceMotion ? 0 : Math.min(dy / 50, 1);
      v += (target - v) * (target > v ? 0.25 : 0.04);
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--v", v.toFixed(3));
      barEl.style.transform = `scaleX(${p})`;
      if (v > 0.005 || dy > 0) raf = requestAnimationFrame(tick);
      else running = false;
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    start();
    window.addEventListener("scroll", start, { passive: true });
    window.addEventListener("resize", start);
    return () => {
      window.removeEventListener("scroll", start);
      window.removeEventListener("resize", start);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <>
      <div ref={root} aria-hidden className="ambient">
        <div className="ambient-grid" />
        <div className="ambient-blob ambient-blob-a" />
        <div className="ambient-blob ambient-blob-b" />
        <div className="ambient-blob ambient-blob-c" />
        <div className="ambient-scan" />
      </div>
      <div ref={bar} aria-hidden className="scroll-progress" />
    </>
  );
}
