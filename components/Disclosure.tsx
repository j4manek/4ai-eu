"use client";

import { useId, useState, type ReactNode } from "react";

export function Disclosure({
  more,
  less,
  children,
  preview,
  className = "",
}: {
  more: string;
  less: string;
  children: ReactNode;
  /** Always-visible teaser (e.g. an animation); clicking it toggles the details like the button does. */
  preview?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      {preview && (
        <div
          onClick={() => setOpen((v) => !v)}
          className="mb-5 cursor-pointer rounded-xl ring-1 ring-transparent transition-shadow hover:ring-accent/50"
        >
          {preview}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group/btn inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line-strong px-5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
      >
        {open ? less : more}
        <span aria-hidden className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      <div
        id={id}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
