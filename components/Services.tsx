import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;
  return (
    <section id="services" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{s.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {s.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="bg-bg p-6 sm:p-8 lg:p-10">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
                  {item.badge && (
                    <span className="rounded-full border border-signal/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-ink-dim">{item.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-line pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-signal/30 bg-signal/[0.04] p-8 sm:flex-row sm:items-center lg:p-10">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{s.consult.title}</h3>
            <p className="mt-2 text-ink-dim">{s.consult.text}</p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105"
          >
            {s.consult.cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
