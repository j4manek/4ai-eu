import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { LangSwitch } from "./LangSwitch";
import { MobileNav } from "./MobileNav";

export function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href={`/${locale}`}
          className="font-display text-lg font-semibold tracking-tight"
        >
          4AI
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-ink-dim md:flex">
          <a href="#services" className="transition-colors hover:text-ink">
            {dict.nav.services}
          </a>
          <a href="#process" className="transition-colors hover:text-ink">
            {dict.nav.process}
          </a>
          <a href="#about" className="transition-colors hover:text-ink">
            {dict.nav.about}
          </a>
          <a href="#contact" className="transition-colors hover:text-ink">
            {dict.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-dim sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {dict.nav.status}
          </span>
          <LangSwitch locale={locale} />
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-bg transition-transform hover:scale-105 sm:inline-block"
          >
            {dict.nav.cta} →
          </a>
          <MobileNav dict={dict} />
        </div>
      </div>
    </header>
  );
}
