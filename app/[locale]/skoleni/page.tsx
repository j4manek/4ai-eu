import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { getProducts } from "@/lib/products";
import { Nav } from "@/components/Nav";
import { ProductHero } from "@/components/ProductHero";
import { CardGrid } from "@/components/CardGrid";
import { StepList } from "@/components/StepList";
import { FaqSection } from "@/components/FaqSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  return getProducts(locale as Locale).training.meta;
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const t = getProducts(locale as Locale).training;
  const contactDict = {
    ...dict,
    contact: {
      ...dict.contact,
      ...t.contact,
      form: { ...dict.contact.form, messagePlaceholder: t.contact.messagePlaceholder },
    },
  };

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} subpage ctaHref="#contact" />
      <main>
        <ProductHero eyebrow={t.eyebrow} headline={t.headline} sub={t.sub} cta={{ href: "#contact", label: t.cta }} />
        <CardGrid heading={t.audience.heading} items={t.audience.items} label="ROLE" />
        <CardGrid heading={t.modules.heading} intro={t.modules.intro} items={t.modules.items} label="MODUL" />
        <CardGrid heading={t.format.heading} items={t.format.items} label="FORMÁT" />
        <StepList heading={t.steps.heading} items={t.steps.items} />
        <FaqSection faq={t.faq} />
        <Contact dict={contactDict} locale={locale as Locale} topic="training" />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
