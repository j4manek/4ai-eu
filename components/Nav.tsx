import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { getProducts, productSlugs } from "@/lib/products";
import { LangSwitch } from "./LangSwitch";
import { MobileNav } from "./MobileNav";
import { Brand } from "./Brand";

export function Nav({
  dict,
  locale,
  subpage = false,
  ctaHref,
}: {
  dict: Dictionary;
  locale: Locale;
  subpage?: boolean;
  ctaHref?: string;
}) {
  // On subpages the section anchors live on the home page, so they need the locale prefix.
  const prefix = subpage ? `/${locale}/` : "";
  const cta = ctaHref ?? `${prefix}#contact`;
  const products = getProducts(locale);
  const links = [
    { href: `${prefix}#projects`, label: dict.nav.projects },
    { href: `${prefix}#services`, label: dict.nav.services },
    { href: `/${locale}/${productSlugs.training}/`, label: products.navLabel },
    { href: `/${locale}/${productSlugs.course}/`, label: products.courseNavLabel },
    { href: `${prefix}#process`, label: dict.nav.process },
    { href: `${prefix}#faq`, label: dict.nav.faq },
    { href: `${prefix}#contact`, label: dict.nav.contact },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      {/* blur lives on its own layer: backdrop-filter on the header would trap the fixed mobile menu inside it */}
      <div aria-hidden className="absolute inset-0 -z-10 border-b border-line bg-bg/75 backdrop-blur-md" />
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:h-[72px] lg:px-12">
        <Link
          href={`/${locale}`}
          className="-my-3 min-w-[5.6rem] py-3 font-display text-lg font-semibold tracking-tight"
        >
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-wider text-ink-dim md:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="py-3 transition-colors hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} />
          <Link
            href={cta}
            className="hidden rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-bg transition-transform hover:scale-105 sm:inline-block"
          >
            {dict.nav.cta} →
          </Link>
          <MobileNav dict={dict} links={links} ctaHref={cta} />
        </div>
      </div>
    </header>
  );
}
