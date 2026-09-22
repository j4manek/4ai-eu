"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const WIDTH = 760;
const HEIGHT = 920;

const COLS = [230, 350, 470, 590, 700];
const ROWS = [70, 190, 310, 430, 550, 670, 790];

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
type Route = { color: "accent" | "warm"; points: Point[] };

// grid coordinates in [col, row] pairs, resolved against COLS/ROWS below
const ROUTE_DEFS: { color: Route["color"]; stops: [number, number][] }[] = [
  {
    color: "accent",
    stops: [
      [0, 1],
      [0, 3],
      [2, 3],
      [2, 5],
      [4, 5],
    ],
  },
  {
    color: "warm",
    stops: [
      [1, 0],
      [1, 2],
      [3, 2],
      [3, 4],
      [4, 4],
    ],
  },
  {
    color: "warm",
    stops: [
      [0, 4],
      [0, 6],
      [2, 6],
    ],
  },
];

function buildCircuit() {
  const rand = mulberry32(7402);

  const grid: (Point | null)[][] = COLS.map((x) =>
    ROWS.map((y) => (rand() < 0.66 ? { x, y } : null))
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
    color: r.color,
    points: r.stops.map(([ci, ri]) => ({ x: COLS[ci], y: ROWS[ri] })),
  }));

  return { meshNodes, meshEdges, routes };
}

function pathFor(points: Point[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

export function HeroIllustration() {
  const { meshNodes, meshEdges, routes } = useMemo(() => buildCircuit(), []);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 60,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 60,
    damping: 20,
  });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="pointer-events-auto absolute inset-y-0 right-0 hidden w-[56%] lg:block"
      style={{ perspective: 1400 }}
      aria-hidden
    >
      <motion.svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <filter id="hero-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* quiet circuit-board mesh, backdrop texture */}
        <g stroke="var(--color-ink)" strokeOpacity="0.22" strokeWidth="1" className="animate-edge-breathe">
          {meshEdges.map(([a, b], i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))}
        </g>
        <g fill="var(--color-ink)" fillOpacity="0.45">
          {meshNodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="1.8" />
          ))}
        </g>

        {/* bold pipeline routes — the automation metaphor */}
        {routes.map((route, i) => {
          const color = route.color === "warm" ? "var(--color-accent-warm)" : "var(--color-accent)";
          const d = pathFor(route.points);
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke={color}
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1}
                style={{ animation: "dash 1.6s ease-out forwards", animationDelay: `${0.2 + i * 0.15}s` }}
              />
              {route.points.map((p, j) => (
                <circle
                  key={j}
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill={color}
                  filter="url(#hero-glow)"
                  className="animate-pulse-glow"
                  style={{ animationDelay: `${(i * 3 + j) * 0.5}s` }}
                />
              ))}
              <circle r="3" fill={color} filter="url(#hero-glow)" opacity="0">
                <animateMotion path={d} dur="5s" begin={`${i * 1.1}s`} repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.08;0.92;1"
                  dur="5s"
                  begin={`${i * 1.1}s`}
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
