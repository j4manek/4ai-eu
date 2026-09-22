import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function CurrentWork({ dict }: { dict: Dictionary }) {
  const cw = dict.currentWork;

  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {cw.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {cw.heading}
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 rounded-2xl border border-line p-8 lg:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-signal/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
              {cw.status}
            </span>
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {cw.project.title}
            </h3>
          </div>
          <p className="mt-4 max-w-2xl text-ink-dim">{cw.project.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
