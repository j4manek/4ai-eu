import Link from "next/link";
import { Reveal } from "./Reveal";

export function ProductHero({
  eyebrow,
  badge,
  headline,
  sub,
  cta,
}: {
  eyebrow: string;
  badge?: string;
  headline: string;
  sub: string;
  cta: { href: string; label: string };
}) {
  return (
    <section className="px-6 pb-16 pt-36 sm:pb-24 sm:pt-44 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            {badge && (
              <span className="rounded-full border border-signal/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                {badge}
              </span>
            )}
          </div>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-dim">{sub}</p>
          <Link
            href={cta.href}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105"
          >
            {cta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
