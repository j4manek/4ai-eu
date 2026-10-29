import { Reveal } from "./Reveal";

export function CardGrid({
  heading,
  intro,
  items,
  label,
}: {
  heading: string;
  intro?: string;
  items: { title: string; text: string }[];
  label: string;
}) {
  const cols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {heading}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-ink-dim">{intro}</p>}
        </Reveal>
        <div className={`mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 ${cols}`}>
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="rounded-2xl border border-line p-7 transition-colors hover:border-accent/50"
            >
              <p className="font-mono text-xs text-accent">
                {label} · 0{i + 1}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
