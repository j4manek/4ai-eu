# 4AI — osobní web

Next.js 16 (App Router, Turbopack) + Tailwind v4 + Framer Motion + GSAP-ready + Lenis smooth scroll.
Dvojjazyčný (CS/EN) přes `app/[locale]`, obsah v `lib/dictionaries.ts`.

## Vývoj

```bash
npm run dev      # http://localhost:3000
npm run build    # produkční build
npm run start    # spuštění produkčního buildu
```

## Kontaktní formulář

`app/api/contact/route.ts` bez konfigurace jen loguje odeslané zprávy do konzole (nic se neztratí,
ale ani nikam neodejde e-mail). Pro reálné odesílání e-mailů nastav v `.env.local`:

```
RESEND_API_KEY=...      # z resend.com (free tier)
CONTACT_EMAIL=ty@...    # kam mají poptávky chodit
CONTACT_FROM=4AI <onboarding@resend.dev>   # volitelné, odesílací adresa
```

## Tracking (GA4 + Google Ads)

Bez konfigurace se nic netrackuje a nic se ani nenačítá (žádný náklad, žádný script navíc).
Pro zapnutí nastav v `.env.local` (a stejné proměnné v nastavení projektu na Vercelu):

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX     # z GA4 → Admin → Data streams
NEXT_PUBLIC_ADS_CONVERSION_ID=AW-XXXXXXXXX/YourLabel   # volitelné, z Google Ads → Conversions
```

Jakmile je `NEXT_PUBLIC_GA_MEASUREMENT_ID` nastavené, `gtag.js` se načte automaticky (`app/[locale]/layout.tsx`).
Úspěšné odeslání kontaktního formuláře pošle GA4 event `generate_lead` (doporučený GA4 event pro leady —
v GA4 admin ho označ jako "key event", pak jde napojit jako konverze v Google Ads přes GA4-Ads link).
Pokud radši používáš samostatnou Ads konverzi bez GA4 provázání, nastav i `NEXT_PUBLIC_ADS_CONVERSION_ID`
a odešle se rovnou i `gtag('event', 'conversion', ...)`.

Vlastní eventy (např. kliknutí na "Poptat" u konkrétní služby) se přidávají přes `trackEvent()` z `lib/analytics.ts`.

## Obsah / copy

Všechny texty (CZ i EN) jsou v `lib/dictionaries.ts` — úpravy nadpisů, popisků služeb atd. se dělají tam,
ne v komponentách.

## Nasazení

Doporučeno Vercel (free tier, `vercel.com` → import repo → done). Až bude koupená doména `4ai.eu`,
napojí se v nastavení projektu na Vercelu.
