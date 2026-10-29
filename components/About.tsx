import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

// Photos are optional: until the file exists in public/, a monogram card is shown instead.
const hasPhoto = (photo: string) => fs.existsSync(path.join(process.cwd(), "public", photo));

export function About({ dict }: { dict: Dictionary }) {
  const a = dict.about;
  return (
    <section id="about" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{a.eyebrow}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-16">
          {a.people.map((person) => (
            <div key={person.name} className="flex flex-col gap-8">
              <Reveal>
                <div className="relative aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-2xl border border-line bg-bg-raised sm:max-w-[260px]">
                  {hasPhoto(person.photo) ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${person.photo}`}
                      alt={person.photoAlt}
                      fill
                      sizes="(min-width: 1024px) 400px, 80vw"
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-display text-7xl font-semibold tracking-tight text-ink-faint">
                      {person.initials}
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                  {person.name}
                </h2>
                <div className="mt-6 flex flex-col gap-5">
                  {person.body.map((p) => (
                    <p key={p} className="text-lg leading-relaxed text-ink-dim">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
