"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reduceMotion) return children;

  return (
    <ReactLenis root options={{ lerp: 0.11, duration: 1.1, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
