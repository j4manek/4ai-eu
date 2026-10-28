import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Ads } from "@/components/Ads";
import { Benefits } from "@/components/Benefits";
import { AiPractice } from "@/components/AiPractice";
import { Faq } from "@/components/Faq";
import { About } from "@/components/About";
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
        <Benefits dict={dict} />
        <Projects dict={dict} />
        <AiPractice dict={dict} />
        <Services dict={dict} />
        <Ads dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
