import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function Ads({ dict }: { dict: Dictionary }) {
  const a = dict.ads;
  return (
    <section id="ads" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{a.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {a.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-dim">{a.intro}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {a.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-line p-6 transition-colors hover:border-accent/50 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                {item.badge && (
                  <span className="rounded-full border border-signal/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-ink-dim">{item.text}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-line pt-6">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105 sm:w-auto"
          >
            {a.cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
