import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

const PHOTO = "about/jonas.jpg";
// The photo is optional: until public/about/jonas.jpg exists, a monogram card is shown instead.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO));

export function About({ dict }: { dict: Dictionary }) {
  const a = dict.about;
  return (
    <section id="about" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-[200px] sm:max-w-[260px] lg:mx-auto lg:max-w-sm overflow-hidden rounded-2xl border border-line bg-bg-raised">
            {hasPhoto ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${PHOTO}`}
                alt={a.photoAlt}
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center font-display text-7xl font-semibold tracking-tight text-ink-faint">
                JF
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{a.eyebrow}</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {a.heading}
          </h2>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">{a.role}</p>
          <div className="mt-6 flex flex-col gap-5">
            {a.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-dim">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
