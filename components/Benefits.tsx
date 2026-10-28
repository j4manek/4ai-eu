import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function Benefits({ dict }: { dict: Dictionary }) {
  const b = dict.benefits;
  return (
    <section id="benefits" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{b.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {b.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-dim">{b.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {b.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="rounded-2xl border border-line p-8 transition-colors hover:border-signal/50"
            >
              <p className="font-mono text-xs text-signal">0{i + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-dim">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="border-l-2 border-signal/60 pl-4 text-sm text-ink-dim">{b.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
