"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export function MobileNav({
  dict,
  links,
  ctaHref,
}: {
  dict: Dictionary;
  links: { href: string; label: string }[];
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={dict.nav.menu}
        className="relative z-50 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      >
        <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          data-lenis-prevent
          style={{ top: "calc(4rem + env(safe-area-inset-top))" }}
          className="fixed inset-x-0 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-bg px-6 py-8 font-mono text-lg uppercase tracking-wider"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[12px] text-bg"
          >
            {dict.nav.cta} →
          </Link>
        </div>
      )}
    </div>
  );
}
