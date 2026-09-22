"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";

const WIDTH = 760;
const HEIGHT = 920;

const COLS = [180, 280, 380, 480, 580, 680, 740];
const ROWS = [50, 150, 250, 350, 450, 550, 650, 750, 850];

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
type Route = { color: "accent" | "warm"; points: Point[]; chips: number[] };

// grid coordinates as [col, row] pairs, resolved against COLS/ROWS below.
// `chips` indexes into `stops` mark waypoints drawn as IC-chip squares.
const ROUTE_DEFS: { color: Route["color"]; stops: [number, number][]; chips: number[] }[] = [
  { color: "accent", stops: [[0, 1],[0, 3],[2, 3],[2, 5],[4, 5],[4, 7]], chips: [2, 4] },
  { color: "warm", stops: [[1, 0],[1, 2],[3, 2],[3, 4],[5, 4],[5, 2]], chips: [1, 4] },
  { color: "warm", stops: [[0, 5],[0, 7],[2, 7],[2, 8]], chips: [2] },
  { color: "accent", stops: [[6, 1],[4, 1],[4, 3],[6, 3],[6, 6]], chips: [1, 3] },
  { color: "accent", stops: [[2, 0],[2, 1]], chips: [] },
  { color: "warm", stops: [[6, 6],[6, 8],[3, 8]], chips: [1] },
];

function buildCircuit() {
  const rand = mulberry32(7402);

  const grid: (Point | null)[][] = COLS.map((x) =>
    ROWS.map((y) => (rand() < 0.58 ? { x, y } : null))
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
    chips: r.chips,
  }));

  return { meshNodes, meshEdges, routes };
}

function pathFor(points: Point[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
}

export function HeroIllustration() {
  const { meshNodes, meshEdges, routes } = useMemo(() => buildCircuit(), []);
  const ref = useRef<HTMLDivElement>(null);
  const routeGroupRefs = useRef<(SVGGElement | null)[]>([]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const meshRotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 60, damping: 20 });
  const meshRotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), { stiffness: 60, damping: 20 });
  const routeRotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 55, damping: 18 });
  const routeRotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 55, damping: 18 });

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

  // GSAP: sweep through the routes, briefly surging each one brighter in
  // turn — a "process running through the pipeline" heartbeat.
  useEffect(() => {
    const groups = routeGroupRefs.current.filter((g): g is SVGGElement => g !== null);
    if (groups.length === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
    groups.forEach((g) => {
      tl.to(g, { filter: "brightness(1.6) saturate(1.3)", duration: 0.7 }, "+=1.1").to(
        g,
        { filter: "brightness(1) saturate(1)", duration: 1.1 },
        ">"
      );
    });

    return () => {
      tl.kill();
    };
  }, [routes.length]);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="pointer-events-auto absolute inset-y-0 right-0 hidden w-[58%] lg:block"
      style={{ perspective: 1400 }}
      aria-hidden
    >
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <filter id="hero-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-glow-soft" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* quiet circuit-board mesh, backdrop texture — subtle parallax layer */}
        <motion.g style={{ rotateX: meshRotateX, rotateY: meshRotateY, transformOrigin: "70% 50%" }}>
          <g stroke="var(--color-ink)" strokeOpacity="0.2" strokeWidth="1" className="animate-edge-breathe">
            {meshEdges.map(([a, b], i) => (
              <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
            ))}
          </g>
          <g fill="var(--color-ink)" fillOpacity="0.4">
            {meshNodes.map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r="1.6" />
            ))}
          </g>
        </motion.g>

        {/* bold pipeline routes — the automation metaphor, foreground parallax layer */}
        <motion.g style={{ rotateX: routeRotateX, rotateY: routeRotateY, transformOrigin: "70% 50%" }}>
          {routes.map((route, i) => {
            const color = route.color === "warm" ? "var(--color-accent-warm)" : "var(--color-accent)";
            const d = pathFor(route.points);
            return (
              <g key={i} ref={(el) => { routeGroupRefs.current[i] = el; }}>
                <path
                  d={d}
                  fill="none"
                  stroke={color}
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  style={{ animation: "dash 1.6s ease-out forwards", animationDelay: `${0.2 + i * 0.12}s` }}
                />

                {route.points.map((p, j) => {
                  const isChip = route.chips.includes(j);
                  const isPing = isChip || j === route.points.length - 1;
                  return (
                    <g key={j}>
                      {isPing && (
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r="4"
                          fill="none"
                          stroke={color}
                          strokeWidth="1.5"
                          className="animate-radar-ping"
                          style={{ animationDelay: `${(i * 4 + j) * 0.65}s` }}
                        />
                      )}
                      {isChip ? (
                        <rect
                          x={p.x - 6}
                          y={p.y - 6}
                          width="12"
                          height="12"
                          rx="2"
                          fill="var(--color-bg-raised)"
                          stroke={color}
                          strokeWidth="1.2"
                          filter="url(#hero-glow-soft)"
                        />
                      ) : (
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r="4"
                          fill={color}
                          filter="url(#hero-glow)"
                          className="animate-pulse-glow"
                          style={{ animationDelay: `${(i * 3 + j) * 0.5}s` }}
                        />
                      )}
                    </g>
                  );
                })}

                {[0, 1].map((k) => (
                  <circle key={k} r="3" fill={color} filter="url(#hero-glow)" opacity="0">
                    <animateMotion
                      path={d}
                      dur={`${4.2 + (i % 3) * 0.6}s`}
                      begin={`${i * 1.1 + k * 2.1}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.08;0.92;1"
                      dur={`${4.2 + (i % 3) * 0.6}s`}
                      begin={`${i * 1.1 + k * 2.1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
}
