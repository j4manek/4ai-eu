"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export function MobileNav({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#process", label: dict.nav.process },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={dict.nav.menu}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 top-[68px] z-40 flex flex-col gap-6 bg-bg px-6 py-10 font-mono text-lg uppercase tracking-wider"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] text-bg"
          >
            {dict.nav.cta} →
          </a>
        </div>
      )}
    </div>
  );
}
