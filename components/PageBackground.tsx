"use client";

import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

const WIDTH = 1600;
const HEIGHT = 1000;

const COLS = [40, 220, 400, 580, 760, 940, 1120, 1300, 1480, 1560];
const ROWS = [40, 200, 360, 520, 680, 840, 960];

function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Point = { x: number; y: number };
type Route = { points: Point[]; chips: number[] };

// grid coordinates as [col, row] pairs, resolved against COLS/ROWS below.
const ROUTE_DEFS: { stops: [number, number][]; chips: number[] }[] = [
  { stops: [[0, 1],[2, 1],[2, 3],[4, 3],[4, 5]], chips: [1, 3] },
  { stops: [[1, 0],[1, 2],[3, 2],[3, 4],[5, 4],[5, 6]], chips: [2, 4] },
  { stops: [[5, 0],[5, 1],[7, 1],[7, 3],[9, 3]], chips: [2] },
  { stops: [[6, 5],[6, 6],[8, 6],[8, 4],[9, 4]], chips: [1, 3] },
  { stops: [[8, 0],[8, 2],[9, 2]], chips: [] },
];

function buildCircuit() {
  const rand = mulberry32(31337);

  const grid: (Point | null)[][] = COLS.map((x) =>
    ROWS.map((y) => (rand() < 0.4 ? { x, y } : null))
  );

  const meshEdges: [Point, Point][] = [];
  ROWS.forEach((_, ri) => {
    let prev: Point | null = null;
    COLS.forEach((_, ci) => {
      const n = grid[ci][ri];
      if (n) {
        if (prev) meshEdges.push([prev, n]);
        prev = n;
      }
    });
  });
  COLS.forEach((_, ci) => {
    let prev: Point | null = null;
    ROWS.forEach((_, ri) => {
      const n = grid[ci][ri];
      if (n) {
        if (prev) meshEdges.push([prev, n]);
        prev = n;
      }
    });
  });

  const meshNodes = grid.flat().filter((n): n is Point => n !== null);

  const routes: Route[] = ROUTE_DEFS.map((r) => ({
    points: r.stops.map(([ci, ri]) => ({ x: COLS[ci], y: ROWS[ri] })),
    chips: r.chips,
  }));

  return { meshNodes, meshEdges, routes };
}

function pathFor(points: Point[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

/**
 * Quiet, monochrome circuit texture that sits fixed behind every section of
 * the page (not just the hero). Deliberately desaturated — the hero already
 * carries the bold cyan/amber statement; this is ambient depth, not a second
 * focal point, so it must never compete with foreground text contrast.
 */
export function PageBackground() {
  const reduceMotion = useReducedMotion();
  const { meshNodes, meshEdges, routes } = useMemo(() => buildCircuit(), []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2, -2]), { stiffness: 40, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-2, 2]), { stiffness: 40, damping: 20 });

  const { scrollYProgress } = useScroll();
  const driftY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const driftYSpring = useSpring(driftY, { stiffness: 40, damping: 24 });

  useEffect(() => {
    if (reduceMotion) return;
    function onMove(e: PointerEvent) {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ rotateX, rotateY, y: driftYSpring }}
      >
        <g stroke="var(--color-ink)" strokeOpacity="0.05" strokeWidth="1">
          {meshEdges.map(([a, b], i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))}
        </g>
        <g fill="var(--color-ink)" fillOpacity="0.06">
          {meshNodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="1.3" />
          ))}
        </g>

        {routes.map((route, i) => {
          const d = pathFor(route.points);
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="var(--color-ink)"
                strokeOpacity="0.08"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {route.points.map((p, j) => {
                const isChip = route.chips.includes(j);
                return isChip ? (
                  <rect
                    key={j}
                    x={p.x - 5}
                    y={p.y - 5}
                    width="10"
                    height="10"
                    rx="2"
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                  />
                ) : (
                  <circle key={j} cx={p.x} cy={p.y} r="1.8" fill="var(--color-ink)" fillOpacity="0.14" />
                );
              })}
              <circle r="2" fill="var(--color-accent)" opacity="0">
                <animateMotion
                  path={d}
                  dur={`${6 + (i % 3) * 1.2}s`}
                  begin={`${i * 1.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.28;0.28;0"
                  keyTimes="0;0.08;0.92;1"
                  dur={`${6 + (i % 3) * 1.2}s`}
                  begin={`${i * 1.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}
