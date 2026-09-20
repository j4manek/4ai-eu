import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Nav dict={dict} locale={locale as Locale} />
      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Stats dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
