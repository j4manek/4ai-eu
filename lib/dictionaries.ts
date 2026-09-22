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
    menu: string;
  };
  hero: {
    eyebrow: string;
    headline: string[];
    sub: string;
    ctaPrimary: string;
    skip: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    priceNote: string;
    items: { title: string; description: string; points: string[]; priceFrom: string }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  featuredWork: { caption: string };
  currentWork: {
    eyebrow: string;
    heading: string;
    projects: { status: string; title: string; description: string; image?: string; imageAlt?: string }[];
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
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOther: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
  footer: { tagline: string; rights: string; email: string; privacyLink: string };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string[] }[];
  };
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
      menu: "Menu",
    },
    hero: {
      eyebrow: "SOLO STUDIO · AI-NATIVE",
      headline: ["WEBY, AI AGENTI", "A DATOVÉ SYSTÉMY.", "HOTOVO ZA DNY, NE MĚSÍCE."],
      sub: "Pro firmy a projekty, co potřebují fungující produkt rychle — bez agenturních vrstev mezi tebou a tím, kdo to fakt dělá.",
      ctaPrimary: "Napiš mi",
      skip: "Přeskočit ↓",
    },
    services: {
      eyebrow: "CO DĚLÁM",
      heading: "Čtyři věci, ve kterých jsem dobrý",
      priceNote: "Orientační ceny. Přesnou částku dostaneš po krátkém, nezávazném rozhovoru.",
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
          priceFrom: "od 9 000 Kč",
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
          priceFrom: "od 5 000 Kč",
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
          priceFrom: "od 11 000 Kč",
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
          priceFrom: "od 1 250 Kč / hod",
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
    featuredWork: {
      caption: "Tohle vidíš přímo teď — žádný mockup, žádný Figma odkaz. Živá stránka, co si právě prohlížíš.",
    },
    currentWork: {
      eyebrow: "PROJEKTY",
      heading: "Konkrétní práce, ne jen sliby",
      projects: [
        {
          status: "Ve vývoji",
          title: "E-mail → cenová nabídka, automaticky",
          description:
            "Firma dostává poptávky do e-mailu a nabídku pokaždé dělá někdo jiný, jinak. Stavím systém, co poptávku přečte, dohledá ceny ve starém ERP (Helios Red — bez moderního API, takže je to reálná práce s legacy databází, ne hezké demo) a připraví draft nabídky s přirážkou. Člověk ho vždycky zkontroluje — automaticky se nikam neodesílá.",
        },
        {
          status: "Hotovo",
          title: "Registr SVJ — 2 837 domů, 9 měst",
          description:
            "Databáze společenství vlastníků jednotek napříč Královéhradeckým a Pardubickým krajem, postavená z dat ARES (oficiální rejstřík) a doplněná cíleným dohledáváním. Nešlo o jedno stažení — každý nález prošel druhým, nezávislým zdrojem, než se vzal za ověřený. Výstup je živý filtrovatelný přehled, ne tabulka, co za měsíc zastará.",
          image: "svj-registry.jpg",
          imageAlt: "Ukázka registru SVJ — osobní údaje anonymizované",
        },
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
        phone: "Telefon",
        phonePlaceholder: "Nepovinné",
        service: "O jakou službu jde",
        servicePlaceholder: "Vyber si",
        serviceOther: "Jiné",
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
      email: "jony.form@seznam.cz",
      privacyLink: "Zásady ochrany osobních údajů",
    },
    privacy: {
      title: "Zásady ochrany osobních údajů",
      updated: "Poslední aktualizace: 21. 9. 2026",
      intro:
        "Tyto zásady popisují, jak 4AI (Jonáš Formánek) zpracovává osobní údaje návštěvníků webu, kteří vyplní kontaktní formulář.",
      sections: [
        {
          heading: "1. Správce osobních údajů",
          body: [
            "Jonáš Formánek, IČO: (doplním)",
            "Kontaktní e-mail: jony.form@seznam.cz",
          ],
        },
        {
          heading: "2. Jaké údaje zpracovávám",
          body: [
            "Jméno, e-mail, telefon (nepovinné), vybraná služba a text zprávy — tedy jen to, co sám/sama vyplníš v kontaktním formuláři.",
          ],
        },
        {
          heading: "3. Účel a právní základ zpracování",
          body: [
            "Údaje zpracovávám za účelem vyřízení tvé poptávky a navazující komunikace. Právním základem je oprávněný zájem reagovat na dotaz (čl. 6 odst. 1 písm. f) GDPR), případně plnění smlouvy, pokud z poptávky vznikne spolupráce (čl. 6 odst. 1 písm. b) GDPR).",
          ],
        },
        {
          heading: "4. Doba uchování",
          body: [
            "Údaje z poptávky uchovávám po dobu nezbytnou k jejímu vyřízení a případné navazující komunikaci, nejdéle 2 roky od posledního kontaktu, poté je mažu.",
          ],
        },
        {
          heading: "5. Předávání třetím stranám",
          body: [
            "Formulář odesílá zprávu přes službu FormSubmit.co, která funguje jako technický zpracovatel doručující e-mail do mé schránky. Jiným třetím stranám údaje nepředávám a neprodávám.",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "Web aktuálně nepoužívá žádné analytické ani marketingové cookies. Jediný ukládaný údaj je technická (nezbytná) cookie „locale“, která si pamatuje zvolený jazyk stránky — ta ke svému nastavení nevyžaduje souhlas.",
          ],
        },
        {
          heading: "7. Tvá práva",
          body: [
            "Máš právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Kdykoliv mě můžeš kontaktovat na jony.form@seznam.cz. Pokud máš pocit, že se zpracováním údajů nakládám v rozporu se zákonem, máš právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz).",
          ],
        },
      ],
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
      menu: "Menu",
    },
    hero: {
      eyebrow: "SOLO STUDIO · AI-NATIVE",
      headline: ["WEBSITES, AI AGENTS", "AND DATA SYSTEMS.", "SHIPPED IN DAYS, NOT MONTHS."],
      sub: "For companies and projects that need a working product fast — no agency layers between you and the person actually building it.",
      ctaPrimary: "Get in touch",
      skip: "Skip ↓",
    },
    services: {
      eyebrow: "WHAT I DO",
      heading: "Four things I'm good at",
      priceNote: "Ballpark pricing. You'll get an exact number after a short, no-obligation call.",
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
          priceFrom: "from €375",
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
          priceFrom: "from €200",
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
          priceFrom: "from €450",
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
          priceFrom: "from €50/hr",
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
    featuredWork: {
      caption: "This is what you're looking at right now — no mockup, no Figma link. A live site you're browsing this second.",
    },
    currentWork: {
      eyebrow: "PROJECTS",
      heading: "Real work, not just promises",
      projects: [
        {
          status: "In progress",
          title: "Email → price quote, automatically",
          description:
            "A company gets requests by email, and every quote gets put together differently by whoever's free. I'm building a system that reads the request, looks up prices in an old ERP (Helios Red — no modern API, so this is real legacy-database work, not a pretty demo), and drafts a quote with the right markup. A human always checks it before it goes out — it never sends itself.",
        },
        {
          status: "Shipped",
          title: "Homeowner-association registry — 2,837 buildings, 9 towns",
          description:
            "A database of homeowner-association boards across two Czech regions, built from the official business registry (ARES) and filled in with targeted lookups. Not a one-shot scrape — every match got checked against a second, independent source before it counted as verified. The output is a live, filterable registry, not a spreadsheet that's stale in a month.",
          image: "svj-registry.jpg",
          imageAlt: "Registry preview — personal data anonymized",
        },
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
        phone: "Phone",
        phonePlaceholder: "Optional",
        service: "Which service is this about",
        servicePlaceholder: "Choose one",
        serviceOther: "Other",
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
      email: "jony.form@seznam.cz",
      privacyLink: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: Sep 21, 2026",
      intro:
        "This policy describes how 4AI (Jonáš Formánek) processes the personal data of visitors who submit the contact form.",
      sections: [
        {
          heading: "1. Data controller",
          body: [
            "Jonáš Formánek, Company ID (IČO): (to be added)",
            "Contact email: jony.form@seznam.cz",
          ],
        },
        {
          heading: "2. What data I process",
          body: [
            "Name, email, phone (optional), the selected service, and your message — only what you enter into the contact form yourself.",
          ],
        },
        {
          heading: "3. Purpose and legal basis",
          body: [
            "I process this data to handle your inquiry and any follow-up communication. The legal basis is legitimate interest in responding to your request (GDPR Art. 6(1)(f)), or performance of a contract if the inquiry turns into a collaboration (GDPR Art. 6(1)(b)).",
          ],
        },
        {
          heading: "4. Retention period",
          body: [
            "I keep inquiry data for as long as needed to handle it and any follow-up, for a maximum of 2 years from the last contact, after which it is deleted.",
          ],
        },
        {
          heading: "5. Third parties",
          body: [
            "The form is delivered via FormSubmit.co, which acts as a technical processor forwarding the message to my inbox. I do not share or sell your data to any other third party.",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "The site currently uses no analytics or marketing cookies. The only stored value is a strictly necessary \"locale\" cookie that remembers your chosen language — it does not require consent.",
          ],
        },
        {
          heading: "7. Your rights",
          body: [
            "You have the right to access, correct, erase, restrict, or port your data, and to object to its processing. Reach out any time at jony.form@seznam.cz. If you believe your data has been processed unlawfully, you may file a complaint with the Czech Office for Personal Data Protection (uoou.cz).",
          ],
        },
      ],
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
