import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

const icons = [
  // conversation
  <path key="1" d="M4 5h16v11H9l-5 4V5Z" />,
  // direction / compass
  <>
    <circle key="c" cx="12" cy="12" r="8.5" />
    <path key="2" d="m15 9-4.2 2.8L9 16l4.2-2.8L15 9Z" />
  </>,
  // build with AI / chip
  <>
    <rect key="r" x="7" y="7" width="10" height="10" rx="1.5" />
    <path key="3" d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M19 5l-2 2M5 19l2-2M19 19l-2-2" />
  </>,
  // iteration / loop
  <path key="4" d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2M15 4v3.2h-3.2M9 20v-3.2h3.2" />,
  // deploy / upload
  <path key="5" d="M12 16V4M7 9l5-5 5 5M4 19h16" />,
  // support / continuity
  <path key="6" d="M12 21s-7-4.35-7-10a4.2 4.2 0 0 1 7-3.1A4.2 4.2 0 0 1 19 11c0 5.65-7 10-7 10Z" />,
];

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="border-t border-line py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {dict.process.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {dict.process.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.process.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="rounded-2xl border border-line p-7 transition-colors hover:border-line-strong"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-accent"
              >
                {icons[i]}
              </svg>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                <span className="mr-2 font-mono text-xs font-normal text-ink-faint">
                  0{i + 1}
                </span>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-dim">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
