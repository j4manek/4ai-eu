import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const p = dict.privacy;

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} />
      <main className="mx-auto max-w-[800px] px-6 pb-28 pt-40 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          {p.updated}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-6 text-ink-dim">{p.intro}</p>

        <div className="mt-14 flex flex-col gap-10">
          {p.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-ink-dim">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
