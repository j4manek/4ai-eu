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

## Obsah / copy

Všechny texty (CZ i EN) jsou v `lib/dictionaries.ts` — úpravy nadpisů, popisků služeb atd. se dělají tam,
ne v komponentách.

## Nasazení

Doporučeno Vercel (free tier, `vercel.com` → import repo → done). Až bude koupená doména `4ai.eu`,
napojí se v nastavení projektu na Vercelu.
