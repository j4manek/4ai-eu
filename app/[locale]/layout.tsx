import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { display, body, mono } from "../fonts";
import "../globals.css";
import { locales, getDictionary, type Locale } from "@/lib/dictionaries";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageBackground } from "@/components/PageBackground";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg font-sans text-ink">
        <div className="grain" />
        <PageBackground />
        <div className="relative z-10">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
