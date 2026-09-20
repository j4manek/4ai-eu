import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="border-t border-line py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {dict.about.eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
            {dict.about.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col justify-center gap-5">
          {dict.about.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-ink-dim">
              {p}
            </p>
          ))}
          <p className="mt-2 font-display text-xl italic text-ink">— {dict.about.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}
