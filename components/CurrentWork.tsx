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

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cw.projects.map((project, i) => {
            const isDone = /hotovo|shipped/i.test(project.status);
            return (
              <Reveal
                key={project.title}
                delay={0.1 + i * 0.08}
                className="rounded-2xl border border-line p-8 lg:p-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${
                      isDone ? "border-accent/40 text-accent" : "border-signal/40 text-signal"
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 text-ink-dim">{project.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
