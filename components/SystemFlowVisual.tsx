"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/lib/dictionaries";

const TICK_MS = 1500;
const motionQuery = "(prefers-reduced-motion: reduce)";
const readReducedMotion = () => window.matchMedia(motionQuery).matches;
function subscribeMotion(cb: () => void) {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

const HUB = { x: 320, y: 150 };
const INPUT = { x: 50, y: 150 };
const HUMAN = { x: 572, y: 150 };
// Agents sit on the inner diagonals, their systems in the outer corners.
const AGENT_POS = [
  { x: 225, y: 92 },
  { x: 225, y: 208 },
  { x: 415, y: 92 },
  { x: 415, y: 208 },
];
const SYSTEM_POS = [
  { x: 95, y: 24 },
  { x: 95, y: 276 },
  { x: 545, y: 24 },
  { x: 545, y: 276 },
];

function Node({ x, y, w, label, active, tone }: { x: number; y: number; w: number; label: string; active: boolean; tone: "accent" | "warm" | "signal" }) {
  const stroke = { accent: "stroke-accent", warm: "stroke-accent-warm", signal: "stroke-signal" }[tone];
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - 17}
        width={w}
        height={34}
        rx={9}
        className={`fill-bg transition-all duration-500 ${active ? `${stroke} stroke-[1.5]` : "stroke-line"}`}
        strokeWidth={active ? 1.5 : 1}
      />
      <text x={x} y={y + 4} textAnchor="middle" className={`text-[11px] transition-colors duration-500 ${active ? "fill-ink" : "fill-ink-dim"}`}>
        {label}
      </text>
    </g>
  );
}

export function SystemFlowVisual({ visual }: { visual: Dictionary["projects"]["concept"]["visual"] }) {
  const n = visual.agents.length;
  const cycle = n + 2; // agents, human approval, short hold
  const [tick, setTick] = useState(0);
  const still = useSyncExternalStore(subscribeMotion, readReducedMotion, () => false);

  useEffect(() => {
    if (still) return;
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, [still]);

  const stage = still ? cycle - 1 : tick % cycle;
  const humanActive = stage === n || stage === n + 1;
  const logLines = visual.log.slice(0, Math.min(stage + 1, visual.log.length));

  const spoke = (i: number) => `M${HUB.x},${HUB.y} L${AGENT_POS[i].x},${AGENT_POS[i].y} L${SYSTEM_POS[i].x},${SYSTEM_POS[i].y}`;

  return (
    <div aria-hidden className="grid grid-cols-1 gap-3 rounded-xl border border-line bg-bg p-3 sm:p-4 lg:grid-cols-[1.7fr_1fr]">
      <ul className="flex flex-col gap-1.5 sm:hidden">
        {visual.agents.map((a, i) => (
          <li
            key={a.title}
            className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors duration-500 ${
              stage === i ? "border-accent/60 bg-accent/10 text-ink" : "border-line text-ink-dim"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${stage === i ? "animate-pulse bg-accent" : "bg-ink-faint/50"}`} />
              {a.title}
            </span>
            <span className={`font-mono text-[10px] uppercase tracking-wider ${stage === i ? "text-accent-warm" : "text-ink-faint"}`}>{a.system}</span>
          </li>
        ))}
        <li
          className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors duration-500 ${
            humanActive ? "border-signal/50 bg-signal/[0.07] text-ink" : "border-line text-ink-dim"
          }`}
        >
          {visual.humanLabel}
          <span className={humanActive ? "text-signal" : "text-ink-faint/50"}>✓</span>
        </li>
      </ul>
      <div className="hidden sm:block">
        <svg viewBox="0 0 640 300" className="h-auto w-full" role="img">
          {/* spokes + links */}
          {visual.agents.map((_, i) => {
            const on = stage === i;
            return (
              <g key={i} className={`transition-opacity duration-500 ${on ? "opacity-100" : "opacity-40"}`}>
                <line x1={HUB.x} y1={HUB.y} x2={AGENT_POS[i].x} y2={AGENT_POS[i].y} className={on ? "stroke-accent" : "stroke-line"} strokeWidth={on ? 1.5 : 1} />
                <line x1={AGENT_POS[i].x} y1={AGENT_POS[i].y} x2={SYSTEM_POS[i].x} y2={SYSTEM_POS[i].y} className={on ? "stroke-accent-warm" : "stroke-line"} strokeWidth={on ? 1.5 : 1} strokeDasharray="4 4" />
              </g>
            );
          })}
          <line x1={INPUT.x} y1={INPUT.y} x2={HUB.x} y2={HUB.y} className="stroke-line" strokeWidth={1} />
          <line x1={HUB.x} y1={HUB.y} x2={HUMAN.x} y2={HUMAN.y} className={humanActive ? "stroke-signal" : "stroke-line"} strokeWidth={humanActive ? 1.5 : 1} />

          {/* animated packets */}
          {!still && (
            <>
              <circle r={3.5} className="fill-accent">
                <animateMotion dur="2.4s" repeatCount="indefinite" path={`M${INPUT.x},${INPUT.y} L${HUB.x},${HUB.y}`} />
              </circle>
              {stage < n && (
                <circle key={`p${stage}`} r={4} className="fill-accent-warm">
                  <animateMotion dur={`${TICK_MS * 0.9}ms`} fill="freeze" path={spoke(stage)} />
                </circle>
              )}
              {humanActive && (
                <circle key={`h${stage}`} r={4} className="fill-signal">
                  <animateMotion dur={`${TICK_MS * 0.9}ms`} fill="freeze" path={`M${HUB.x},${HUB.y} L${HUMAN.x},${HUMAN.y}`} />
                </circle>
              )}
            </>
          )}

          {/* nodes */}
          <Node x={INPUT.x} y={INPUT.y} w={84} label={visual.inputsLabel} active={false} tone="accent" />
          <Node x={HUMAN.x} y={HUMAN.y} w={116} label={visual.humanLabel} active={humanActive} tone="signal" />
          {visual.agents.map((a, i) => (
            <g key={a.title}>
              <Node x={AGENT_POS[i].x} y={AGENT_POS[i].y} w={140} label={a.title} active={stage === i} tone="accent" />
              <Node x={SYSTEM_POS[i].x} y={SYSTEM_POS[i].y} w={100} label={a.system} active={stage === i} tone="warm" />
            </g>
          ))}

          {/* hub */}
          {!still && (
            <circle cx={HUB.x} cy={HUB.y} r={26} className="fill-none stroke-accent" strokeWidth={1}>
              <animate attributeName="r" from="26" to="48" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx={HUB.x} cy={HUB.y} r={26} className="fill-bg stroke-accent" strokeWidth={1.5} />
          <text x={HUB.x} y={HUB.y + 5} textAnchor="middle" className="fill-accent font-display text-[15px] font-semibold">
            AI
          </text>
          <text x={HUB.x} y={HUB.y + 44} textAnchor="middle" className="fill-ink-faint font-mono text-[9px] uppercase tracking-[0.18em]">
            {visual.hubLabel}
          </text>
        </svg>
      </div>

      {/* live log */}
      <div className="flex min-h-[260px] flex-col sm:min-h-[170px] rounded-lg border border-line bg-bg-raised/60 p-3 font-mono">
        <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ink-faint">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          {visual.logLabel}
        </p>
        <ul className="flex flex-col gap-1.5 text-[11px] leading-snug">
          {logLines.map((line, i) => (
            <li key={line} className={i === logLines.length - 1 ? "text-ink" : "text-ink-faint"}>
              <span className="mr-2 text-accent">&gt;</span>
              {line}
              {i === logLines.length - 1 && <span className="ml-1 animate-pulse">▍</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
