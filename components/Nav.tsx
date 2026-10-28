import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { LangSwitch } from "./LangSwitch";
import { MobileNav } from "./MobileNav";
import { Brand } from "./Brand";

export function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      {/* blur lives on its own layer: backdrop-filter on the header would trap the fixed mobile menu inside it */}
      <div aria-hidden className="absolute inset-0 -z-10 border-b border-line bg-bg/75 backdrop-blur-md" />
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:h-[72px] lg:px-12">
        <Link
          href={`/${locale}`}
          className="-my-3 py-3 font-display text-lg font-semibold tracking-tight"
        >
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-ink-dim md:flex">
          {[
            ["#projects", dict.nav.projects],
            ["#services", dict.nav.services],
            ["#process", dict.nav.process],
            ["#faq", dict.nav.faq],
            ["#contact", dict.nav.contact],
          ].map(([href, label]) => (
            <a key={href} href={href} className="py-3 transition-colors hover:text-ink">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
