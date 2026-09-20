"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const WIDTH = 760;
const HEIGHT = 920;

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

type Node = { x: number; y: number; r: number; hub: boolean };
type Edge = { a: Node; b: Node; d: number };

function buildGraph() {
  const rand = mulberry32(9137);
  const nodes: Node[] = [];
  const count = 52;

  for (let i = 0; i < count; i++) {
    // bias density toward the vertical centerline, fade at extremes
    const t = rand();
    const x = 170 + Math.pow(t, 0.9) * (WIDTH - 230);
    const y = 40 + rand() * (HEIGHT - 80);
    const hub = i % 10 === 0;
    nodes.push({ x, y, r: hub ? 5.5 : 1.6 + rand() * 1.8, hub });
  }

  const edges: Edge[] = [];
  const seen = new Set<string>();

  nodes.forEach((n, i) => {
    const distances = nodes
      .map((m, j) => ({ j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
      .filter((e) => e.j !== i)
      .sort((a, b) => a.d - b.d);

    const linkCount = n.hub ? 3 : 1;
    for (let k = 0; k < linkCount; k++) {
      const target = distances[k];
      if (!target || target.d > 220) continue;
      const key = [i, target.j].sort((x, y) => x - y).join("-");
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ a: n, b: nodes[target.j], d: target.d });
    }
  });

  // long-haul connectors strung between hub nodes — sparse, dramatic, and
  // long enough for a signal to visibly travel across the whole graph
  const hubs = nodes.filter((n) => n.hub);
  const longHauls: Edge[] = [];
  for (let i = 0; i < hubs.length; i++) {
    const a = hubs[i];
    const b = hubs[(i + 1) % hubs.length];
    if (a === b) continue;
    const edge = { a, b, d: Math.hypot(a.x - b.x, a.y - b.y) };
    edges.push(edge);
    longHauls.push(edge);
  }

  return { nodes, edges, longHauls };
}

export function HeroIllustration() {
  const { nodes, edges, longHauls } = useMemo(() => buildGraph(), []);
  const signals = useMemo(() => {
    const shortHops = edges
      .filter((e) => (e.a.hub || e.b.hub) && !longHauls.includes(e))
      .sort((a, b) => b.d - a.d)
      .slice(0, 6);
    return [...longHauls, ...shortHops];
  }, [edges, longHauls]);
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
          <linearGradient id="edge-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-ink)" stopOpacity="0" />
            <stop offset="18%" stopColor="var(--color-ink)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-ink)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <g stroke="url(#edge-fade)" strokeWidth="1" className="animate-edge-breathe">
          {edges.map((edge, i) => (
            <line
              key={i}
              x1={edge.a.x}
              y1={edge.a.y}
              x2={edge.b.x}
              y2={edge.b.y}
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              style={{
                animation: `dash 1.4s ease-out forwards`,
                animationDelay: `${0.15 + (i % 24) * 0.045}s`,
              }}
            />
          ))}
        </g>

        <g>
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.hub ? "var(--color-accent)" : "var(--color-ink)"}
              fillOpacity={n.hub ? 1 : 0.55}
              filter={n.hub ? "url(#hero-glow)" : undefined}
              className={n.hub ? "animate-pulse-glow" : undefined}
              style={n.hub ? { animationDelay: `${(i % 5) * 0.6}s` } : undefined}
            />
          ))}
        </g>

        <g>
          {signals.map((edge, i) => {
            // constant travel speed regardless of edge length, so long
            // connectors don't feel like teleportation
            const dur = Math.min(6, Math.max(1.6, edge.d / 130));
            const begin = ((i * 0.7) % dur).toFixed(2);
            const path = `M${edge.a.x},${edge.a.y} L${edge.b.x},${edge.b.y}`;
            return (
              <circle key={`signal-${i}`} r="3" fill="var(--color-accent)" filter="url(#hero-glow)" opacity="0">
                <animateMotion path={path} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.8;1"
                  dur={`${dur}s`}
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}
