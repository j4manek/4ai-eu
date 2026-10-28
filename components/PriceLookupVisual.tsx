"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/lib/dictionaries";

// One item cycles through: identify (0) → each portal in turn (1..n) → result (n+1) → short hold.
const HOLD = 1;
const TICK_MS = 650;

const motionQuery = "(prefers-reduced-motion: reduce)";
const readReducedMotion = () => window.matchMedia(motionQuery).matches;
function subscribeMotion(cb: () => void) {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function Arrow() {
  return (
    <div aria-hidden className="hidden items-center lg:flex">
      <div className="relative h-px w-10 overflow-hidden bg-line">
        <span className="absolute inset-y-0 left-0 w-5 animate-flow-x bg-accent" />
      </div>
    </div>
  );
}

export function PriceLookupVisual({ visual }: { visual: Dictionary["projects"]["automation"]["visual"] }) {
  const { items, portals } = visual;
  const resultPhase = portals.length + 1;
  const cycle = resultPhase + 1 + HOLD;

  const [tick, setTick] = useState(0);
  const still = useSyncExternalStore(subscribeMotion, readReducedMotion, () => false);

  useEffect(() => {
    if (still) return;
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, [still]);

  const item = still ? 0 : Math.floor(tick / cycle) % items.length;
  const phase = still ? resultPhase : tick % cycle;
  const showResult = phase >= resultPhase;

  return (
    <div aria-hidden className="rounded-xl border border-line bg-bg p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:gap-3">
        {/* 1 — položky (hidden on phones, the result card already names the active item) */}
        <div className="hidden lg:block">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{visual.itemsLabel}</p>
          <ul className="flex flex-col gap-1.5">
            {items.map((name, i) => (
              <li
                key={name}
                className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors duration-300 ${
                  i === item ? "border-accent/60 bg-accent/10 text-ink" : "border-line text-ink-dim"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                    i === item ? "bg-accent" : "bg-ink-faint/50"
                  }`}
                />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <Arrow />

        {/* 2 — identifikace + portály */}
        <div className="flex flex-col gap-3">
          <div
            className={`rounded-lg border px-3 py-2.5 transition-colors duration-300 ${
              phase === 0 ? "border-accent/60 bg-accent/10" : "border-line"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{visual.identifyLabel}</p>
            <p className="mt-1 text-sm text-ink-dim">{visual.identifyText}</p>
          </div>

          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{visual.portalsLabel}</p>
            <ul className="grid grid-cols-2 gap-1.5 lg:flex lg:flex-col">
              {portals.map((name, i) => {
                const scanning = phase === i + 1;
                const done = phase > i + 1;
                return (
                  <li
                    key={name}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors duration-300 ${
                      scanning ? "border-accent-warm/60 bg-accent-warm/10 text-ink" : "border-line text-ink-dim"
                    }`}
                  >
                    {name}
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        done ? "text-signal" : scanning ? "animate-pulse text-accent-warm" : "text-ink-faint/50"
                      }`}
                    >
                      {done ? "✓" : scanning ? "···" : "–"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Arrow />

        {/* 3 — výsledek */}
        <div className="flex flex-col">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{visual.resultLabel}</p>
          <div
            className={`flex min-h-[96px] flex-1 flex-col justify-center rounded-lg border p-4 transition-colors duration-500 ${
              showResult ? "border-signal/50 bg-signal/[0.06]" : "border-line"
            }`}
          >
            <p className="text-sm text-ink">{items[item]}</p>
            {showResult ? (
              <p className="mt-2 flex items-start gap-2 text-sm text-signal">
                <span>✓</span>
                {visual.resultText}
              </p>
            ) : (
              <div className="mt-3 flex flex-col gap-2">
                <span className="h-2 w-4/5 animate-pulse rounded bg-line" />
                <span className="h-2 w-3/5 animate-pulse rounded bg-line" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
