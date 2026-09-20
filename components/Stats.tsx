import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {dict.stats.items.map((stat, i) => (
            <Reveal key={stat.index} delay={i * 0.07}>
              <p className="font-mono text-sm text-accent">{stat.index}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {stat.title}
              </h3>
              <p className="mt-2 text-sm text-ink-dim">{stat.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
