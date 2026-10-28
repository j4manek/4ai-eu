"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";

const TICK_MS = 1250;
const HOLD_TICKS = 3;
const HOURLY_RATE = 350; // Kč/h, illustrative; stated in the caption
const motionQuery = "(prefers-reduced-motion: reduce)";
const readReducedMotion = () => window.matchMedia(motionQuery).matches;
function subscribeMotion(cb: () => void) {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

const CHART_W = 380;
const CHART_H = 84;

export function HeroDemo({ demo }: { demo: Dictionary["hero"]["demo"] }) {
  const tasks = demo.tasks;
  const n = tasks.length;
  const gradId = useId();
  const [tick, setTick] = useState(0);
  const still = useSyncExternalStore(subscribeMotion, readReducedMotion, () => false);

  useEffect(() => {
    if (still) return;
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => window.clearInterval(id);
  }, [still]);

  // events 1..n add up; the following HOLD_TICKS keep the final total, then the loop restarts at zero
  const phase = still ? n : tick % (n + HOLD_TICKS);
  const done = Math.min(phase, n);

  const cumulative = tasks.reduce<number[]>((acc, t, i) => [...acc, (acc[i] ?? 0) + t.hours * HOURLY_RATE], [0]);
  const totalMoney = cumulative[done];
  const totalHours = tasks.slice(0, done).reduce((a, t) => a + t.hours, 0);
  const totalTasks = tasks.slice(0, done).reduce((a, t) => a + t.count, 0);
  const maxMoney = cumulative[n];

  const fmt = (v: number) => Math.round(v).toLocaleString(demo.numberLocale).replace(/\u202f|\s/g, "\u00a0");
  const money = useMotionValue(0);
  const moneyText = useTransform(money, (v) => `${fmt(v)}\u00a0${demo.currency}`);
  const hours = useMotionValue(0);
  const hoursText = useTransform(hours, (v) => `${Math.round(v)}`);
  const count = useMotionValue(0);
  const countText = useTransform(count, (v) => fmt(v));

  useEffect(() => {
    const opts = { duration: done === 0 ? 0.4 : 0.9, ease: "easeOut" as const };
    const a = [animate(money, totalMoney, opts), animate(hours, totalHours, opts), animate(count, totalTasks, opts)];
    return () => a.forEach((x) => x.stop());
  }, [done, totalMoney, totalHours, totalTasks, money, hours, count]);

  const pts = cumulative.slice(0, done + 1).map((v, i) => [(i / n) * CHART_W, CHART_H - 6 - (v / maxMoney) * (CHART_H - 14)] as const);
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${CHART_H} L0,${CHART_H} Z`;
  const last = pts[pts.length - 1];

  const feed = tasks.slice(0, done).map((t, i) => ({ ...t, i })).slice(-3).reverse();
  const lastEvent = done > 0 ? tasks[done - 1] : null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-line-strong bg-bg-raised/80 shadow-[0_30px_90px_-30px_rgba(200,255,92,0.28)] backdrop-blur-md"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">{demo.title}</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          live
        </span>
      </div>

      <div className="relative px-5 pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
          {demo.savedLabel} <span className="text-ink-faint/70">· {demo.perMonth}</span>
        </p>
        <div className="relative mt-2">
          <motion.p className="font-display text-[38px] font-semibold sm:text-[46px] leading-none tracking-tight text-signal tabular-nums">
            {moneyText}
          </motion.p>
          <AnimatePresence>
            {lastEvent && (
              <motion.span
                key={done}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: [0, 1, 1, 0], y: [6, -4, -14, -26] }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute right-0 top-0 font-mono text-sm text-signal"
              >
                +{fmt(lastEvent.hours * HOURLY_RATE)}&nbsp;{demo.currency}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="mt-4 h-[84px] w-full overflow-visible">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1="0" x2={CHART_W} y1={CHART_H * g} y2={CHART_H * g} stroke="var(--color-line)" strokeDasharray="3 5" />
          ))}
          {pts.length > 1 && <path d={area} fill={`url(#${gradId})`} />}
          <path d={line} fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={last[0]} cy={last[1]} r="4" fill="var(--color-signal)" />
          <circle cx={last[0]} cy={last[1]} r="9" fill="none" stroke="var(--color-signal)" strokeOpacity="0.4" className="animate-radar-ping" />
        </svg>
      </div>

      <div className="px-5 pb-1 pt-4">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{demo.tickerLabel}</p>
        <ul className="flex h-[134px] flex-col gap-1.5 overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {feed.map((t) => (
              <motion.li
                key={t.i}
                layout
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5 rounded-lg border border-line bg-bg/60 px-3 py-2 text-[13px]"
              >
                <span className="text-signal">✓</span>
                <span className="flex-1 truncate text-ink">{t.name}</span>
                <span className="font-mono text-[11px] text-signal">
                  +{fmt(t.hours * HOURLY_RATE)}&nbsp;{demo.currency}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-px border-t border-line bg-line">
        <div className="bg-bg-raised px-5 py-3">
          <p className="font-display text-xl font-semibold tabular-nums text-ink">
            <motion.span>{hoursText}</motion.span>&nbsp;{demo.hourUnit}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">{demo.hoursLabel}</p>
        </div>
        <div className="bg-bg-raised px-5 py-3">
          <p className="font-display text-xl font-semibold tabular-nums text-ink">
            <motion.span>{countText}</motion.span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">{demo.tasksLabel}</p>
        </div>
      </div>
      <p className="border-t border-line px-5 py-2.5 text-[11px] leading-snug text-ink-faint">{demo.caption}</p>
    </motion.div>
  );
}
