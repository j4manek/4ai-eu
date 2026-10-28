import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function AiPractice({ dict }: { dict: Dictionary }) {
  const a = dict.ai;
  return (
    <section id="ai" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{a.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {a.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-dim">{a.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.07}
              className="rounded-2xl border border-line p-7 transition-colors hover:border-accent/50"
            >
              <p className="font-mono text-xs text-accent">AI · 0{i + 1}</p>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="border-l-2 border-signal/60 pl-4 text-sm text-ink-dim">{a.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
