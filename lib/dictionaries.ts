export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    services: string;
    process: string;
    about: string;
    contact: string;
    cta: string;
    status: string;
  };
  hero: {
    eyebrow: string;
    headline: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    skip: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string; points: string[] }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  about: { eyebrow: string; heading: string; body: string[] };
  stats: { items: { index: string; title: string; description: string }[] };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
  footer: { tagline: string; rights: string };
}

export const dictionaries: Record<Locale, Dictionary> = {
  cs: {
    meta: {
      title: "4AI",
      description:
        "Weby, AI agenti a datové systémy postavené s umělou inteligencí. Osobní AI-native studio.",
    },
    nav: {
      services: "Služby",
      process: "Proces",
      about: "O mně",
      contact: "Kontakt",
      cta: "Napiš mi",
      status: "Dostupný pro nové projekty",
    },
    hero: {
      eyebrow: "SOLO STUDIO · AI-NATIVE",
      headline: ["STAVÍM DIGITÁLNÍ", "VĚCI RYCHLEJI,", "NEŽ ČEKÁŠ."],
      sub: "Weby, AI agenti a datové systémy — postavené s AI po ruce, ne s velkým týmem. Od nápadu k funkčnímu produktu, bez zbytečných meetingů a specifikací na týdny.",
      ctaPrimary: "Napiš mi",
      ctaSecondary: "Prohlédnout služby",
      skip: "Přeskočit ↓",
    },
    services: {
      eyebrow: "CO DĚLÁM",
      heading: "Čtyři věci, ve kterých jsem dobrý",
      items: [
        {
          title: "Weby & digitální produkty",
          description:
            "Landing pages, portfolia, interní nástroje — navržené a postavené rychle, s důrazem na detail.",
          points: [
            "Design + vývoj na míru",
            "Animace a mikro-interakce",
            "Rychlé, responzivní, bez balastu",
            "Nasazení a dlouhodobá údržba",
          ],
        },
        {
          title: "Automatizace & AI agenti",
          description:
            "Workflow, které dřív dělal člověk ručně, teď běží samy — spolehlivě a bez přestávek.",
          points: [
            "Návrh a nasazení agentních pipeline",
            "Integrace nástrojů a API",
            "n8n, custom skripty, agent orchestrace",
            "Monitoring, alerty, fallbacky",
          ],
        },
        {
          title: "Databáze & datové systémy",
          description:
            "Data, která dávají smysl — posbíraná, vyčištěná a připravená k použití.",
          points: [
            "Návrh datového modelu",
            "Scraping a enrichment",
            "Datové pipeline a ETL",
            "Reporting a dashboardy",
          ],
        },
        {
          title: "Konzultace & AI strategie",
          description:
            "Nevíš, kde s AI ve firmě začít? Projdeme procesy a najdeme, co dává smysl automatizovat první.",
          points: [
            "Audit procesů",
            "Prioritizace podle dopadu",
            "Implementační plán",
            "Zaškolení týmu",
          ],
        },
      ],
      cta: "Poptat",
    },
    process: {
      eyebrow: "JAK TO FUNGUJE",
      heading: "Šest kroků, žádné překvapení",
      items: [
        { title: "Rozhovor", description: "Probereme, co řešíš a proč. Bez brief formulářů na tři strany." },
        { title: "Návrh", description: "Do pár dní vidíš první konkrétní směr, ne prázdný dokument." },
        { title: "Stavba s AI", description: "AI se mnou píše, testuje a refaktoruje kód v reálném čase." },
        { title: "Iterace", description: "Ukazuju rozpracované věci — nečekáš na velký reveal na konci." },
        { title: "Nasazení", description: "Jde to do provozu hned, jak je to hotové, ne až po tichém schvalování." },
        { title: "Podpora", description: "Po předání to nemizí ze scény — drobné úpravy a dohled dál řeším." },
      ],
    },
    about: {
      eyebrow: "O MNĚ",
      heading: "„Nejsem agentura. Jsem jeden člověk s AI parťákem.“",
      body: [
        "AI se mnou plánuje architekturu, píše kód, hledá chyby a někdy mě i opraví, když jedu špatným směrem. Nepoužívám ji, abych vypadal produktivně — používám ji, protože to funguje.",
        "Výsledek? Věci, který by dřív dělal tým lidí týdny, mám hotové za dny — a pořád přesně vím, proč každá část kódu vypadá tak, jak vypadá.",
      ],
    },
    stats: {
      items: [
        { index: "01", title: "Začneme rychle", description: "První návrh vidíš do pár dní, ne týdnů." },
        { index: "02", title: "Pokrok každý týden", description: "Žádné černé skříňky — vidíš, jak se to vyvíjí." },
        { index: "03", title: "Kód patří tobě", description: "Žádný vendor lock-in, žádné skryté závislosti." },
        { index: "04", title: "Řeknu to nahlas", description: "Když něco nedává smysl, upozorním tě dřív, než to zaplatíš." },
      ],
    },
    contact: {
      eyebrow: "KONTAKT",
      heading: "Napiš, co řešíš",
      sub: "Pár vět stačí. Ozvu se, jakmile to přečtu — obvykle do druhého dne.",
      form: {
        name: "Jméno",
        namePlaceholder: "Jak ti mám říkat",
        email: "E-mail",
        emailPlaceholder: "ty@firma.cz",
        message: "O čem to je",
        messagePlaceholder: "Popiš stručně, co bys chtěl postavit nebo vyřešit…",
        submit: "Odeslat",
        submitting: "Odesílám…",
        success: "Díky, ozvu se co nejdřív.",
        error: "Něco se pokazilo. Zkus to prosím znovu nebo napiš přímo.",
      },
    },
    footer: {
      tagline: "Weby, automatizace a data — postavené s AI.",
      rights: "Všechna práva vyhrazena.",
    },
  },
  en: {
    meta: {
      title: "4AI",
      description:
        "Websites, AI agents and data systems built with artificial intelligence. A personal AI-native studio.",
    },
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Get in touch",
      status: "Available for new projects",
    },
    hero: {
      eyebrow: "SOLO STUDIO · AI-NATIVE",
      headline: ["I BUILD DIGITAL", "THINGS FASTER", "THAN YOU EXPECT."],
      sub: "Websites, AI agents and data systems — built with AI by my side, not a big team. From idea to working product, without weeks of meetings and specs.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See what I do",
      skip: "Skip ↓",
    },
    services: {
      eyebrow: "WHAT I DO",
      heading: "Four things I'm good at",
      items: [
        {
          title: "Websites & digital products",
          description:
            "Landing pages, portfolios, internal tools — designed and built fast, with real attention to detail.",
          points: [
            "Custom design + development",
            "Animation and micro-interactions",
            "Fast, responsive, no bloat",
            "Deployment and long-term upkeep",
          ],
        },
        {
          title: "Automation & AI agents",
          description:
            "Workflows a human used to run by hand now run themselves — reliably, without breaks.",
          points: [
            "Agent pipeline design and deployment",
            "Tool and API integrations",
            "n8n, custom scripts, agent orchestration",
            "Monitoring, alerts, fallbacks",
          ],
        },
        {
          title: "Databases & data systems",
          description: "Data that makes sense — collected, cleaned, and ready to use.",
          points: [
            "Data model design",
            "Scraping and enrichment",
            "Data pipelines and ETL",
            "Reporting and dashboards",
          ],
        },
        {
          title: "Consulting & AI strategy",
          description:
            "Not sure where to start with AI in your company? We'll map your processes and find what's worth automating first.",
          points: [
            "Process audit",
            "Impact-based prioritization",
            "Implementation roadmap",
            "Team onboarding",
          ],
        },
      ],
      cta: "Get in touch",
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "Six steps, no surprises",
      items: [
        { title: "Conversation", description: "We talk through what you're solving and why. No three-page brief forms." },
        { title: "Direction", description: "You see a concrete first direction within days, not an empty document." },
        { title: "Building with AI", description: "AI writes, tests, and refactors code alongside me in real time." },
        { title: "Iteration", description: "I show work in progress — you're not waiting for one big reveal." },
        { title: "Deployment", description: "It ships the moment it's ready, not after silent approval cycles." },
        { title: "Support", description: "I don't disappear after handoff — small fixes and oversight continue." },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      heading: "“I'm not an agency. I'm one person with an AI partner.”",
      body: [
        "AI plans architecture with me, writes code, hunts bugs, and sometimes corrects me when I'm heading the wrong way. I don't use it to look productive — I use it because it works.",
        "The result? Things that used to take a team weeks, I have done in days — and I still know exactly why every part of the code looks the way it does.",
      ],
    },
    stats: {
      items: [
        { index: "01", title: "We start fast", description: "You see a first draft within days, not weeks." },
        { index: "02", title: "Progress every week", description: "No black boxes — you see it evolve." },
        { index: "03", title: "The code is yours", description: "No vendor lock-in, no hidden dependencies." },
        { index: "04", title: "I say it out loud", description: "If something doesn't make sense, I flag it before you pay for it." },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Tell me what you're solving",
      sub: "A few sentences are enough. I reply as soon as I read it — usually within a day.",
      form: {
        name: "Name",
        namePlaceholder: "What should I call you",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "What's this about",
        messagePlaceholder: "Briefly describe what you'd like to build or solve…",
        submit: "Send",
        submitting: "Sending…",
        success: "Thanks — I'll get back to you soon.",
        error: "Something went wrong. Please try again or reach out directly.",
      },
    },
    footer: {
      tagline: "Websites, automation and data — built with AI.",
      rights: "All rights reserved.",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
