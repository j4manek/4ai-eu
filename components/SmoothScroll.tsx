"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <ReactLenis root options={{ lerp: 0.11, duration: 1.1, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
