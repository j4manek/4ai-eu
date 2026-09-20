import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="border-t border-line py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {dict.services.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {dict.services.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-2">
          {dict.services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="group bg-bg p-8 lg:p-10">
              <div className="flex h-full flex-col">
                <span className="font-mono text-xs text-ink-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-dim">{item.description}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-line pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors group-hover:text-accent"
                >
                  {dict.services.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
