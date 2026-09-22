import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";

export function FeaturedWork({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-bg-raised">
            <div className="flex items-center gap-4 border-b border-line px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              </div>
              <div className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-faint">
                4ai.eu
              </div>
            </div>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/showcase/site-preview.jpg`}
              alt="4ai.eu"
              width={1440}
              height={760}
              className="w-full"
              priority={false}
              unoptimized
            />
          </div>
          <p className="mt-5 text-center text-sm text-ink-faint">{dict.featuredWork.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
