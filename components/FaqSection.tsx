import { Reveal } from "./Reveal";

export interface FaqCopy {
  eyebrow: string;
  heading: string;
  items: { q: string; a: string }[];
}

export function FaqSection({ faq: f }: { faq: FaqCopy }) {
  return (
    <section id="faq" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{f.eyebrow}</p>
          <h2 className="mt-4 max-w-md text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {f.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-line">
          {f.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="font-mono text-xl text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 leading-relaxed text-ink-dim">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
