import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";
import { getProducts, productSlugs } from "@/lib/products";
import { Reveal } from "./Reveal";

export function ProductsTeaser({ locale }: { locale: Locale }) {
  const t = getProducts(locale).teaser;
  const cards = [
    { ...t.training, href: `/${locale}/${productSlugs.training}/` },
    { ...t.course, href: `/${locale}/${productSlugs.course}/` },
  ];
  return (
    <section id="training" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{t.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-dim">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.href} delay={i * 0.08} className="flex">
              <Link
                href={card.href}
                className="group flex w-full flex-col rounded-2xl border border-line p-7 transition-colors hover:border-accent/50 sm:p-9"
              >
                <span className="self-start rounded-full border border-signal/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                  {card.badge}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-ink-dim">{card.text}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-line pt-6">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-ink">
                  {card.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
