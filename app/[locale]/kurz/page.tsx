import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { getProducts } from "@/lib/products";
import { Nav } from "@/components/Nav";
import { ProductHero } from "@/components/ProductHero";
import { CardGrid } from "@/components/CardGrid";
import { FaqSection } from "@/components/FaqSection";
import { CourseWaitlist } from "@/components/CourseWaitlist";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  return getProducts(locale as Locale).course.meta;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const c = getProducts(locale as Locale).course;

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} subpage />
      <main>
        <ProductHero
          eyebrow={c.eyebrow}
          badge={c.badge}
          headline={c.headline}
          sub={c.sub}
          cta={{ href: "#waitlist", label: c.cta }}
          note={c.price}
        />
        <CardGrid heading={c.inside.heading} items={c.inside.items} label="LEKCE" />
        <CardGrid heading={c.audience.heading} items={c.audience.items} label="PRO" />
        <CourseWaitlist copy={c.waitlist} locale={locale as Locale} />
        <FaqSection faq={c.faq} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
