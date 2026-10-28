import Image from "next/image";
import type { Dictionary, WebProject } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { PriceLookupVisual } from "./PriceLookupVisual";
import { Disclosure } from "./Disclosure";
import { SystemFlowVisual } from "./SystemFlowVisual";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Status({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
      {children}
    </span>
  );
}

function BrowserShot({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-raised">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-ink-faint/40" />
          ))}
        </div>
        {url && (
          <div className="truncate rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-ink-faint">
            {url}
          </div>
        )}
      </div>
      <Image
        src={`${base}/showcase/${src}`}
        alt={alt}
        width={1440}
        height={780}
        className="aspect-[1440/780] w-full object-cover object-top"
        unoptimized
      />
    </div>
  );
}

function WebCard({ item, i, more, less }: { item: WebProject; i: number; more: string; less: string }) {
  return (
    <Reveal
      delay={i * 0.08}
      className="group flex flex-col rounded-2xl border border-line bg-bg-raised/40 p-5 transition-colors duration-300 hover:border-line-strong lg:p-6"
    >
      <BrowserShot src={item.image} alt={item.imageAlt} url={item.hrefLabel} />
      <div className="mt-6 flex items-center gap-3">
        <Status>{item.status}</Status>
      </div>
      <h4 className="mt-4 font-display text-xl font-semibold tracking-tight">{item.title}</h4>
      <p className="mt-3 text-balance leading-relaxed text-ink">{item.hook}</p>
      <Disclosure more={more} less={less} className="mt-5">
        <p className="text-sm leading-relaxed text-ink-dim">{item.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t} className="rounded-md bg-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-dim">
              {t}
            </li>
          ))}
        </ul>
        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:text-accent"
          >
            {item.hrefLabel} <span aria-hidden>↗</span>
          </a>
        )}
      </Disclosure>
    </Reveal>
  );
}

function GroupLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-xs text-ink-faint">{n}</span>
      <h3 className="font-display text-2xl font-semibold tracking-tight">{children}</h3>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function Projects({ dict }: { dict: Dictionary }) {
  const p = dict.projects;
  const a = p.automation;
  const t = p.tools;
  const c = p.concept;

  return (
    <section id="projects" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{p.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {p.heading}
          </h2>
          <p className="mt-4 max-w-xl text-ink-dim">{p.intro}</p>
        </Reveal>

        {/* 01 Automatizace */}
        <div className="mt-16">
          <GroupLabel n="01">{a.label}</GroupLabel>
          <Reveal className="rounded-2xl border border-line bg-bg-raised/40 p-5 sm:p-6 lg:p-10">
            <Status>{a.status}</Status>
            <h4 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{a.title}</h4>
            <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-ink">{a.hook}</p>
            <Disclosure
              more={p.more}
              less={p.less}
              className="mt-8"
              preview={
                <>
                  <PriceLookupVisual visual={a.visual} />
                  <p className="mt-3 text-xs text-ink-faint">{a.visual.caption}</p>
                </>
              }
            >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
              <div className="flex flex-col">
                <p className="leading-relaxed text-ink-dim">{a.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {a.facts.map((f) => (
                    <li key={f} className="rounded-md bg-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-dim">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <ol className="flex flex-col gap-3">
                {a.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-xl border border-line bg-bg p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold tracking-tight">{step.title}</p>
                      <p className="mt-1 text-sm text-ink-dim">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 max-w-3xl border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-ink-dim">
              {a.lesson}
            </p>
            </Disclosure>
          </Reveal>
        </div>

        {/* 02 Systémy a AI */}
        <div className="mt-20">
          <GroupLabel n="02">{c.label}</GroupLabel>
          <Reveal className="rounded-2xl border border-line bg-bg-raised/40 p-5 sm:p-6 lg:p-10">
            <Status>{c.status}</Status>
            <h4 className="mt-5 max-w-4xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h4>
            <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-ink">{c.hook}</p>
            <Disclosure
              more={p.more}
              less={p.less}
              className="mt-8"
              preview={<SystemFlowVisual visual={c.visual} />}
            >
              <p className="max-w-3xl leading-relaxed text-ink-dim">{c.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.facts.map((f) => (
                  <li key={f} className="rounded-md bg-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-dim">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-faint">{c.note}</p>
            </Disclosure>
          </Reveal>
        </div>

        {/* 03 Nástroje */}
        <div className="mt-20">
          <GroupLabel n="03">{t.label}</GroupLabel>
          <Reveal className="rounded-2xl border border-line bg-bg-raised/40 p-5 sm:p-6 lg:p-10">
            <Status>{t.status}</Status>
            <h4 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{t.title}</h4>
            <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-ink">{t.hook}</p>
            <Disclosure more={p.more} less={p.less} className="mt-6">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                <BrowserShot src={t.image} alt={t.imageAlt} />
                <div className="flex flex-col">
                  <p className="leading-relaxed text-ink-dim">{t.description}</p>
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-6 text-xs text-ink-faint">{t.note}</p>
                </div>
              </div>
            </Disclosure>
          </Reveal>
        </div>
        {/* 04 Weby */}
        <div className="mt-20">
          <GroupLabel n="04">{p.webs.label}</GroupLabel>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            {p.webs.items.map((item, i) => (
              <WebCard key={item.title} item={item} i={i} more={p.more} less={p.less} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
