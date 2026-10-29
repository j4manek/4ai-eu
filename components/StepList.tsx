import { Reveal } from "./Reveal";

export function StepList({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {heading}
          </h2>
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.06} className="bg-bg p-6 sm:p-8">
              <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
