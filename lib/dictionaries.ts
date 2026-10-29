export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export interface WebProject {
  status: string;
  title: string;
  hook: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href?: string;
  hrefLabel?: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    projects: string;
    services: string;
    process: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    headline: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    demo: {
      title: string;
      savedLabel: string;
      perMonth: string;
      currency: string;
      numberLocale: string;
      hoursLabel: string;
      tasksLabel: string;
      hourUnit: string;
      tickerLabel: string;
      tasks: { name: string; count: number; hours: number }[];
      caption: string;
    };
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    more: string;
    less: string;
    webs: { label: string; items: WebProject[] };
    automation: {
      label: string;
      status: string;
      title: string;
      hook: string;
      description: string;
      facts: string[];
      steps: { title: string; text: string }[];
      lesson: string;
      visual: {
        itemsLabel: string;
        items: string[];
        identifyLabel: string;
        identifyText: string;
        portalsLabel: string;
        portals: string[];
        resultLabel: string;
        resultText: string;
        caption: string;
      };
    };
    concept: {
      label: string;
      status: string;
      title: string;
      hook: string;
      description: string;
      facts: string[];
      note: string;
      visual: {
        inputsLabel: string;
        hubLabel: string;
        humanLabel: string;
        agents: { title: string; system: string }[];
        logLabel: string;
        log: string[];
        caption: string;
      };
    };
    tools: {
      label: string;
      status: string;
      title: string;
      hook: string;
      description: string;
      points: string[];
      image: string;
      imageAlt: string;
      note: string;
    };
  };
  ads: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; badge?: string; text: string; points: string[] }[];
    cta: string;
  };
  benefits: { eyebrow: string; heading: string; intro: string; items: { title: string; text: string }[]; note: string };
  ai: { eyebrow: string; heading: string; intro: string; items: { title: string; text: string }[]; note: string };
  services: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string; points: string[]; badge?: string }[];
    consult: { title: string; text: string; cta: string };
    cta: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  about: { eyebrow: string; heading: string; role: string; body: string[]; photoAlt: string };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    assurances: string[];
    form: {
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      revenue: string;
      revenuePlaceholder: string;
      revenueOptions: string[];
      message: string;
      messagePlaceholder: string;
      consent: string;
      consentLink: string;
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
      title: "4manek AI – automatizace, AI agenti a weby pro firmy",
      description:
        "4manek AI dělá firmám weby, automatizace, AI agenty a správu reklam. První konzultace je zdarma, pak navrhneme řešení na míru.",
    },
    nav: {
      projects: "Projekty",
      services: "Služby",
      process: "Postup",
      faq: "Otázky",
      contact: "Kontakt",
      cta: "Bezplatná konzultace",
      menu: "Menu",
    },
    hero: {
      eyebrow: "AI STUDIO · AUTOMATIZACE · WEBY",
      headline: ["AUTOMATIZACE", "A WEBY, KTERÉ", "UŠETŘÍ PRÁCI."],
      sub: "Zabýváme se weby, automatizací firemních procesů, AI agenty a správou reklam. První konzultace je zdarma, pak pro vás připravíme návrh na míru a podle něj pokračujeme.",
      ctaPrimary: "Domluvit bezplatnou konzultaci",
      ctaSecondary: "Projekty",
      trust: ["První konzultace zdarma · návrh na míru · odpovídám do dvou pracovních dnů"],
      demo: {
        title: "Co automatizace ušetří",
        savedLabel: "Ušetřeno automatizací",
        perMonth: "za měsíc",
        currency: "Kč",
        numberLocale: "cs-CZ",
        hoursLabel: "hodin práce",
        tasksLabel: "úkolů zpracováno",
        hourUnit: "h",
        tickerLabel: "Právě automatizováno",
        tasks: [
          { name: "Přepis objednávek do ERP", count: 310, hours: 22 },
          { name: "Třídění příchozích e-mailů", count: 420, hours: 31 },
          { name: "Ruční nacenění poptávek", count: 180, hours: 18 },
          { name: "Párování faktur s platbami", count: 260, hours: 26 },
          { name: "Aktualizace skladových karet", count: 150, hours: 14 },
          { name: "Reporty pro vedení", count: 90, hours: 20 },
          { name: "Zápis kontaktů do CRM", count: 120, hours: 12 },
          { name: "Upomínky nezaplacených faktur", count: 240, hours: 25 },
        ],
        caption: "Ilustrativní příklad při 350 Kč/h. Skutečnou úsporu spočítáme na konzultaci.",
      },
    },
    projects: {
      eyebrow: "PROJEKTY",
      heading: "Co už jsem postavil",
      intro: "Pár věcí, které jsem dělal. Rozklikněte, co vás zajímá.",
      more: "Zobrazit detaily",
      less: "Skrýt detaily",
      webs: {
        label: "Weby",
        items: [
          {
            status: "V provozu",
            title: "Instalatérství Janák",
            hook: "Aby lidé, kteří hledají instalatéra, zavolali. A abychom věděli, kolik jich zavolalo.",
            description:
              "Web instalatérské firmy pro Královéhradecký a Pardubický kraj. Stránky služeb, mimo jiné pro bytové domy a SVJ, poptávkové formuláře a měření telefonátů a poptávek pro Google Ads.",
            tags: ["Web na míru", "Formuláře", "GA4 + Google Ads"],
            image: "janak.jpg",
            imageAlt: "Úvodní stránka webu Instalatérství Janák",
            href: "https://instalaterstvi-janak.cz",
            hrefLabel: "instalaterstvi-janak.cz",
          },
          {
            status: "Redesign",
            title: "Koftex – šití a výšivky",
            hook: "Zákazník si na webu spočítá cenu výšivky sám, ještě než firmě zavolá.",
            description:
              "Přepracovaný web šicí dílny a výšivkárny v Kolíně. Zaměřený na firemní zákazníky, s rychlou poptávkou, sekcí s častými dotazy a kalkulačkou ceny.",
            tags: ["Redesign", "B2B poptávka", "Kalkulačka"],
            image: "koftex.jpg",
            imageAlt: "Nový web Koftex",
            href: "https://koftex.cz",
            hrefLabel: "koftex.cz",
          },
          {
            status: "Právě čtete",
            title: "4manek AI",
            hook: "Web, na kterém právě jste.",
            description:
              "Česky i anglicky, napsaný od nuly bez hotové šablony. Formulář chodí rovnou na můj e-mail.",
            tags: ["Next.js", "CZ / EN", "Poptávkový formulář"],
            image: "site-preview.jpg",
            imageAlt: "Náhled webu 4manek AI",
          },
        ],
      },
      automation: {
        label: "Automatizace",
        status: "Použito na reálné zakázce",
        title: "Dohledání cen z B2B portálů",
        hook: "143 položek ze zakázky a žádné proklikávání portálů. Agent hledá, člověk schvaluje.",
        description:
          "Při nacenění veřejné zakázky na pracovní pomůcky se hledá cena u každé položky. V jedné jich bylo 143. Agent nejdřív zjistí, co se v zadání doopravdy myslí, protože název se často liší od ceníku. Pak položku najde v B2B portálech dodavatelů a vybere nejlevnější dostupnou variantu. Člověk dostane tabulku ke kontrole.",
        facts: ["143 položek v jedné zakázce", "Ceny jen z přihlášených B2B ceníků", "Výsledek vždy kontroluje člověk"],
        steps: [
          { title: "Identifikace zboží", text: "Zjistí výrobce, typ a alternativní názvy. Doslovné hledání textu ze zadání zboží často mine." },
          { title: "Hledání v B2B portálech", text: "Prochází přihlášené portály dodavatelů jeden po druhém. Veřejné ceny z webů výrobců se nepočítají." },
          { title: "Porovnání a výběr", text: "Z nalezených variant vybere nejvýhodnější dostupnou cenu." },
          { title: "Kontrola člověkem", text: "Tabulka jde ke schválení a položky bez nálezu jsou zřetelně označené." },
        ],
        lesson:
          "Co jsem se naučil: při srovnání s ruční kalkulací rozhodovalo, kolik portálů se pokryje. Agent proto nejdřív sestaví seznam všech dodavatelských účtů a až pak hledá ceny.",
        visual: {
          itemsLabel: "Položky ze zadání",
          items: ["Zimní pracovní rukavice", "Svářečský oblek", "Chrániče sluchu", "Pracovní obuv S3", "Ochranné brýle"],
          identifyLabel: "Identifikace",
          identifyText: "výrobce · typ · alternativní názvy",
          portalsLabel: "B2B portály dodavatelů",
          portals: ["Dodavatel A", "Dodavatel B", "Dodavatel C", "Dodavatel D"],
          resultLabel: "Výsledek",
          resultText: "Nejvýhodnější dostupná cena z B2B ceníku",
          caption: "Ilustrativní ukázka průběhu. Skutečné ceny a názvy dodavatelů se nezobrazují.",
        },
      },
      concept: {
        label: "Systémy a AI",
        status: "Návrh řešení",
        title: "Od poptávky k nabídce: AI agenti napojení na firemní systémy",
        hook: "Jeden propojený systém místo pěti ručních kroků. Agenti čtou, hledají a počítají, systémy drží data a člověk schvaluje.",
        description:
          "Ukázka uceleného řešení pro obchodní firmu. Skládá dohromady části, které umím postavit: zpracování e-mailů a poptávek, identifikaci zboží, dohledání cen v B2B portálech a data z ERP. Agenti spolupracují přes orchestrátor, který hlídá pořadí kroků, chyby a výjimky. Do firemních systémů se zapisuje jen to, co člověk schválí.",
        facts: ["Více AI agentů s rozdělenými rolemi", "Napojení na ERP, CRM a e-mail", "Záznam každého kroku a opakování při chybě", "Člověk schvaluje před odesláním"],
        note: "Jde o návrh architektury, ne o hotový produkt. Konkrétní podoba vždy vychází z toho, jaké systémy firma používá.",
        visual: {
          inputsLabel: "Vstupy",
          hubLabel: "Orchestrátor",
          humanLabel: "Schválení člověkem",
          agents: [
            { title: "Příjem a třídění", system: "E-mail" },
            { title: "Identifikace zboží", system: "ERP" },
            { title: "Cenotvorba", system: "B2B portály" },
            { title: "Kontrola a pojistky", system: "CRM" },
          ],
          logLabel: "Průběh zakázky",
          log: [
            "Příjem: poptávka rozpoznána, položky vyčteny z e-mailu a přílohy",
            "Identifikace: názvy ze zadání spárovány se zbožím v ERP",
            "Cenotvorba: ceny dohledány v B2B portálech, použita přirážka",
            "Kontrola: jedna nejasná položka označena k posouzení",
            "Koncept nabídky čeká na schválení člověkem",
          ],
          caption: "Ilustrativní ukázka průběhu. Nejde o skutečná data.",
        },
      },
      tools: {
        label: "Nástroje",
        status: "Hotovo, před nasazením",
        title: "Kalkulačka ceny oděvů s výšivkou",
        hook: "Zákazník si sám spočítá cenu. Firma dostane hotové zadání místo vágního e-mailu.",
        description:
          "Zákazník si na webu krok za krokem zvolí oděv, barvy, velikosti a výšivku loga a hned vidí orientační cenu včetně množstevní slevy. Souhrn pak odešle jako poptávku, takže firma dostane hotové zadání místo vágního e-mailu.",
        points: [
          "Výběr oděvu, barev a počtu kusů po velikostech",
          "Cena se přepočítává při každé změně, včetně množstevní slevy",
          "Poptávka se odešle i s vyplněnou kalkulací",
          "Ceník se upravuje v jednom souboru",
        ],
        image: "kalkulacka.jpg",
        imageAlt: "Kalkulačka ceny oděvů s výšivkou na webu Koftex",
        note: "Ceny v ukázce jsou výchozí odhad. Před ostrým nasazením se nahradí skutečným ceníkem firmy.",
      },
    },
    ads: {
      eyebrow: "REKLAMA",
      heading: "Správa reklam i nezávislý audit",
      intro: "Reklama je jen tak dobrá, jak dobře je nastavený web, měření a kampaně. Postarám se o celý řetězec, nebo jen nezávisle zkontroluji, co už běží.",
      items: [
        {
          title: "Kompletní správa reklam",
          text: "Od základů po každodenní optimalizaci. Reklama začíná webem a měřením, proto nastavím všechno, ne jen kampaně.",
          points: [
            "Nastavení nebo úprava webu pro reklamu",
            "Měření konverzí: telefonáty, formuláře, poptávky",
            "Tvorba reklam a kampaní",
            "Průběžná správa a optimalizace",
            "Přehledné vyhodnocování výsledků",
          ],
        },
        {
          title: "Externí audit reklam",
          badge: "Bez převzetí správy",
          text: "Nejste si jistí, že váš současný správce dosahuje dostatečných výsledků? Udělám nezávislý audit, bez závazku změnit dodavatele.",
          points: [
            "Kontrola účtu, kampaní a rozpočtu",
            "Ověření, že se správně měří konverze",
            "Hledání plýtvání rozpočtem",
            "Písemná doporučení, co zlepšit jako první",
          ],
        },
      ],
      cta: "Poptat audit nebo správu",
    },
    benefits: {
      eyebrow: "PROČ AUTOMATIZOVAT",
      heading: "Co se dá ušetřit",
      intro: "Přepisování dat, třídění e-mailů, ruční nacenění. Dohromady to bývají hodiny práce každý měsíc.",
      items: [
        { title: "Méně ruční práce", text: "Opakované úkoly dělá systém. Lidé řeší to, co vyžaduje úsudek a kontakt se zákazníkem." },
        { title: "Menší náklady", text: "Za opakované úkoly přestanete platit hodiny práce. Systém u nich nemá fronty ani čekání." },
        { title: "Prostor pro růst", text: "Uvolněný čas a peníze můžete dát do nových zákazníků a produktů." },
      ],
      note: "Kolik přesně u vás, spočítáme při první konzultaci. Čísla slibovat předem nebudu.",
    },
    ai: {
      eyebrow: "AI V PRAXI",
      heading: "Co AI u firem opravdu dělá",
      intro: "Žádné chatovací okénko na webu. AI u mě přebírá konkrétní opakovanou práci.",
      items: [
        { title: "E-maily a poptávky", text: "AI agenti zpracují e-maily, poptávky a dokumenty a vyčtou z nich, na čem záleží." },
        { title: "Hledání a porovnání cen", text: "Dohledá zboží a ceny napříč dodavatelskými portály a nabídne nejvýhodnější variantu." },
        { title: "Koncepty nabídek", text: "Z dat sestaví koncept nabídky, přehled nebo odpověď. Člověk jen zkontroluje a schválí." },
        { title: "Zavedení do firmy", text: "Napojím AI na vaše systémy a procesy a zaučím tým, aby s ní uměl pracovat." },
      ],
      note: "AI připravuje, vy schvalujete.",
    },
    services: {
      eyebrow: "CO NABÍZÍM",
      heading: "Co dělám",
      items: [
        {
          title: "Weby a digitální produkty",
          description:
            "Firemní weby, landing pages a interní nástroje, navržené a postavené rychle a s péčí o detail.",
          points: [
            "Design a vývoj na míru",
            "Poptávkové formuláře a měření konverzí",
            "Nasazení a dlouhodobá údržba",
          ],
        },
        {
          title: "Automatizace a AI agenti",
          description:
            "Procesy, které dnes dělá někdo ručně, začnou běžet samy. Šetří čas zaměstnanců i náklady na opakovanou práci, s lidskou kontrolou tam, kde je potřeba.",
          points: [
            "Zpracování e-mailů, poptávek a dokumentů",
            "Napojení na ERP, CRM a další systémy",
            "n8n, vlastní skripty, agentní workflow",
            "Monitoring, upozornění a záložní postupy",
          ],
        },
        {
          title: "Databáze a datové systémy",
          description:
            "Data, která dávají smysl: nasbíraná, vyčištěná a připravená k použití v obchodním oddělení i v provozu.",
          points: [
            "Sběr a obohacování dat z veřejných zdrojů",
            "Datové pipeline a automatické aktualizace",
            "Přehledy a dashboardy",
          ],
        },
        {
          title: "Konzultace a AI strategie",
          description:
            "Nevíte, kde s AI začít? Projdeme procesy a najdeme, co se vyplatí automatizovat jako první.",
          points: [
            "Audit procesů",
            "Seřazení podle přínosu a náročnosti",
            "Plán zavedení",
          ],
          badge: "První konzultace zdarma",
        },
      ],
      consult: {
        title: "První konzultace je zdarma",
        text: "Probereme, čím se firma zabývá a co zdržuje. Podle toho pro vás připravím návrh na míru a pak pokračujeme.",
        cta: "Domluvit konzultaci",
      },
      cta: "Poptat",
    },
    process: {
      eyebrow: "POSTUP",
      heading: "Jak spolupráce probíhá",
      items: [
        {
          title: "Bezplatná konzultace",
          description: "Probereme firmu, procesy a to, co vás zdržuje. Bez formulářů na tři strany a bez závazku.",
        },
        {
          title: "Návrh na míru",
          description: "Po konzultaci připravím návrh řešení na míru. Dostanete ho písemně, včetně nabídky, a pak se rozhodnete, jestli pokračujeme.",
        },
        {
          title: "Realizace",
          description: "Řešení stavím a průběžně ukazuji rozpracovanou verzi. Nečekáte na velké finále na konci.",
        },
        {
          title: "Nasazení a podpora",
          description: "Řešení jde do provozu hned, jak je hotové. Po předání zůstávám k dispozici pro úpravy a dohled.",
        },
      ],
    },
    faq: {
      eyebrow: "ČASTÉ OTÁZKY",
      heading: "Na co se lidé ptají před spoluprací",
      items: [
        {
          q: "Kolik to stojí?",
          a: "Záleží na rozsahu a na tom, co už u vás funguje. Po první konzultaci dostanete návrh řešení na míru a písemnou nabídku, takže před startem víte, do čeho jdete.",
        },
        {
          q: "Vyplatí se mi to?",
          a: "Podle toho, kolik opakované práce máte. V hovoru ji spolu odhadneme, a když se to nevyplatí, řeknu vám to.",
        },
        {
          q: "Děláte i samotný audit reklam?",
          a: "Ano. Pokud si nejste jisti, že současný správce dosahuje dostatečných výsledků, udělám nezávislý audit bez převzetí správy. Nemusíte kvůli tomu měnit dodavatele.",
        },
        {
          q: "Co se děje na první konzultaci?",
          a: "Krátký hovor o tom, čím se firma zabývá, kde se opakuje ruční práce a co vás zdržuje. Nemusíte mít přesnou představu, co chcete. Odnesete si doporučení, co dělat jako první, klidně i to, že zatím nic.",
        },
        {
          q: "Napojíte se na naše stávající systémy?",
          a: "Ano, na e-mail, ERP, CRM, účetnictví nebo vlastní API. U starších systémů bez moderního API, jako je Helios Red, pracuji s automatickými exporty a naplánovanými úlohami.",
        },
        {
          q: "Odesílá automatizace něco zákazníkům sama?",
          a: "Jen pokud to chcete. Výchozí nastavení je, že systém připraví návrh a člověk ho před odesláním schválí.",
        },
        {
          q: "Komu patří kód a data?",
          a: "Vám. Kód i data jsou vaše, na mně nezávisíte.",
        },
      ],
    },
    about: {
      eyebrow: "O MNĚ",
      heading: "Jonáš Formánek",
      role: "Zakladatel 4manek AI · student práv",
      body: [
        "Jonáš Formánek je zakladatel 4manek AI a student práv. S umělou inteligencí experimentuje od střední školy, kdy se stala dostupnou, a od začátku ji využívá k ulehčení práce.",
        "Naplno se jí věnuje od studia ve Finsku. Nejdřív se zkoušela na vlastních procesech, potom v rodinné firmě, kde vznikla třeba automatizace dohledávání cen v B2B portálech.",
        "Dnes tyto služby 4manek AI nabízí dalším firmám. Když něco nedává smysl, uslyšíte to dřív, než za to zaplatíte.",
      ],
      photoAlt: "Jonáš Formánek",
    },
    contact: {
      eyebrow: "KONTAKT",
      heading: "Domluvte si bezplatnou konzultaci",
      sub: "Napište pár vět o firmě a o tom, co vás zdržuje. Nemusíte vědět, co automatizovat. Ozvu se do dvou pracovních dnů.",
      assurances: ["První konzultace je zdarma a nezávazná"],
      form: {
        company: "Název firmy",
        companyPlaceholder: "Např. Novák s.r.o.",
        email: "E-mail",
        emailPlaceholder: "vy@firma.cz",
        phone: "Telefon",
        phonePlaceholder: "+420 …",
        revenue: "Roční obrat firmy",
        revenuePlaceholder: "Vyberte",
        revenueOptions: ["Do 5 mil. Kč", "5–10 mil. Kč", "10–20 mil. Kč", "20–50 mil. Kč", "50–100 mil. Kč", "100–500 mil. Kč", "Nad 500 mil. Kč"],
        message: "Čím se zabýváte a co chcete vyřešit",
        messagePlaceholder:
          "Stručně popište, čím se firma zabývá. Pokud máte představu, napište, co byste chtěli: nový web, nebo co automatizovat. Pokud ne, nevadí, právě s tím vám na konzultaci pomohu.",
        consent: "Odesláním formuláře beru na vědomí zpracování údajů podle",
        consentLink: "zásad ochrany osobních údajů",
        submit: "Odeslat poptávku",
        submitting: "Odesílám…",
        success: "Děkuji, ozvu se do dvou pracovních dnů.",
        error: "Něco se pokazilo. Zkuste to prosím znovu, nebo napište přímo na e-mail níže.",
      },
    },
    footer: {
      tagline: "AI, automatizace, weby a reklama pro firmy.",
      rights: "Všechna práva vyhrazena.",
      email: "jony.form@seznam.cz",
      privacyLink: "Zásady ochrany osobních údajů",
    },
    privacy: {
      title: "Zásady ochrany osobních údajů",
      updated: "Poslední aktualizace: 28. 10. 2026",
      intro:
        "Tyto zásady popisují, jak 4manek AI (Jonáš Formánek) zpracovává osobní údaje návštěvníků webu, kteří vyplní kontaktní formulář.",
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
            "Název firmy, e-mail, telefon a text zprávy o činnosti firmy a požadavcích, tedy jen to, co sami vyplníte v kontaktním formuláři.",
          ],
        },
        {
          heading: "3. Účel a právní základ zpracování",
          body: [
            "Údaje zpracovávám za účelem vyřízení vaší poptávky a navazující komunikace. Právním základem je oprávněný zájem reagovat na poptávku (čl. 6 odst. 1 písm. f) GDPR), případně provedení opatření před uzavřením smlouvy a plnění smlouvy, pokud z poptávky vznikne spolupráce (čl. 6 odst. 1 písm. b) GDPR).",
          ],
        },
        {
          heading: "4. Doba uchování",
          body: [
            "Údaje z poptávky uchovávám po dobu nezbytnou k jejímu vyřízení a případné navazující komunikaci, nejdéle dva roky od posledního kontaktu, poté je mažu.",
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
            "Web aktuálně nepoužívá žádné analytické ani marketingové cookies. Ukládám pouze technickou (nezbytnou) cookie „locale“, která si pamatuje zvolený jazyk a nevyžaduje souhlas.",
          ],
        },
        {
          heading: "7. Vaše práva",
          body: [
            "Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Kdykoliv mě můžete kontaktovat na jony.form@seznam.cz. Pokud se domníváte, že údaje zpracovávám v rozporu s právními předpisy, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz).",
          ],
        },
      ],
    },
  },
  en: {
    meta: {
      title: "4manek AI – automation, AI agents and websites for companies",
      description:
        "4manek AI builds websites, automation and AI agents for companies and manages their ads. The first consultation is free, then we propose a solution tailored to you.",
    },
    nav: {
      projects: "Projects",
      services: "Services",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      cta: "Free consultation",
      menu: "Menu",
    },
    hero: {
      eyebrow: "AI STUDIO · AUTOMATION · WEBSITES",
      headline: ["AUTOMATION AND", "WEBSITES THAT", "SAVE YOU WORK."],
      sub: "We build websites, automate business processes, develop AI agents and manage ads. The first consultation is free, then we prepare a proposal tailored to you and carry on from there.",
      ctaPrimary: "Book a free consultation",
      ctaSecondary: "Projects",
      trust: ["First consultation free · tailored proposal · I reply within two business days"],
      demo: {
        title: "What automation saves",
        savedLabel: "Saved by automation",
        perMonth: "per month",
        currency: "CZK",
        numberLocale: "en-GB",
        hoursLabel: "hours of work",
        tasksLabel: "tasks processed",
        hourUnit: "h",
        tickerLabel: "Automated just now",
        tasks: [
          { name: "Keying orders into the ERP", count: 310, hours: 22 },
          { name: "Sorting incoming emails", count: 420, hours: 31 },
          { name: "Manual quoting of enquiries", count: 180, hours: 18 },
          { name: "Matching invoices to payments", count: 260, hours: 26 },
          { name: "Updating stock records", count: 150, hours: 14 },
          { name: "Management reports", count: 90, hours: 20 },
          { name: "Entering contacts into the CRM", count: 120, hours: 12 },
          { name: "Overdue invoice reminders", count: 240, hours: 25 },
        ],
        caption: "Illustrative example at CZK 350/h. We work out the real saving in the consultation.",
      },
    },
    projects: {
      eyebrow: "PROJECTS",
      heading: "What I've already built",
      intro: "A few things I've worked on. Expand whatever interests you.",
      more: "Show details",
      less: "Hide details",
      webs: {
        label: "Websites",
        items: [
          {
            status: "Live",
            title: "Instalatérství Janák",
            hook: "So people looking for a plumber pick up the phone. And so we know how many did.",
            description:
              "The website of a plumbing company serving two Czech regions. Service pages including apartment buildings and homeowners' associations (SVJ), enquiry forms, and tracking of calls and enquiries for Google Ads.",
            tags: ["Custom site", "Forms", "GA4 + Google Ads"],
            image: "janak.jpg",
            imageAlt: "Homepage of the Instalatérství Janák website",
            href: "https://instalaterstvi-janak.cz",
            hrefLabel: "instalaterstvi-janak.cz",
          },
          {
            status: "Redesign",
            title: "Koftex – sewing and embroidery",
            hook: "Customers work out the embroidery price on the site themselves, before they ever call.",
            description:
              "A redesigned website for a sewing and embroidery workshop in Kolín. Aimed at business customers, with a quick enquiry form, FAQ and a price calculator.",
            tags: ["Redesign", "B2B enquiry", "Calculator"],
            image: "koftex.jpg",
            imageAlt: "New Koftex website",
            href: "https://koftex.cz",
            hrefLabel: "koftex.cz",
          },
          {
            status: "You're reading it",
            title: "4manek AI",
            hook: "The site you're on right now.",
            description:
              "In Czech and English, built from scratch with no off-the-shelf template. The form goes straight to my email.",
            tags: ["Next.js", "CZ / EN", "Enquiry form"],
            image: "site-preview.jpg",
            imageAlt: "Preview of the 4manek AI website",
          },
        ],
      },
      automation: {
        label: "Automation",
        status: "Used on a real tender",
        title: "Price lookup across B2B portals",
        hook: "143 items from a tender and no clicking through portals. The agent searches, a person approves.",
        description:
          "Pricing a public tender for work equipment means finding a price for every item. One had 143. The agent first works out what the tender actually means, because the name often differs from the price list. Then it finds the item in suppliers' B2B portals and picks the cheapest available option. A person gets the table to review.",
        facts: ["143 items in a single tender", "Prices only from logged-in B2B price lists", "A person always reviews the result"],
        steps: [
          { title: "Identify the product", text: "Finds the manufacturer, type and alternative names. A literal text search for the tender wording often misses the product." },
          { title: "Search B2B portals", text: "Goes through the logged-in supplier portals one by one. Public prices from manufacturers' websites don't count." },
          { title: "Compare and choose", text: "Picks the best available price from the options found." },
          { title: "Human review", text: "The table goes for approval and items with no match are clearly flagged." },
        ],
        lesson:
          "What I learned: compared with a manual calculation, what mattered was how many portals were covered. So the agent first lists all supplier accounts and only then looks for prices.",
        visual: {
          itemsLabel: "Items from the tender",
          items: ["Winter work gloves", "Welding suit", "Ear defenders", "Safety shoes S3", "Safety glasses"],
          identifyLabel: "Identification",
          identifyText: "manufacturer · type · alternative names",
          portalsLabel: "Supplier B2B portals",
          portals: ["Supplier A", "Supplier B", "Supplier C", "Supplier D"],
          resultLabel: "Result",
          resultText: "Best available price from the B2B price list",
          caption: "Illustrative run-through. Real prices and supplier names are not shown.",
        },
      },
      concept: {
        label: "Systems and AI",
        status: "Solution concept",
        title: "From enquiry to quote: AI agents connected to company systems",
        hook: "One connected system instead of five manual steps. Agents read, search and calculate, systems hold the data and a person approves.",
        description:
          "An example of a complete solution for a trading company. It combines parts I can build: processing emails and enquiries, identifying products, finding prices in B2B portals and using ERP data. The agents cooperate through an orchestrator that watches the order of steps, errors and exceptions. Only what a person approves is written to company systems.",
        facts: ["Several AI agents with separate roles", "Connection to ERP, CRM and email", "Every step logged, retries on failure", "A person approves before sending"],
        note: "This is an architecture concept, not a finished product. The actual design always depends on the systems the company uses.",
        visual: {
          inputsLabel: "Inputs",
          hubLabel: "Orchestrator",
          humanLabel: "Human approval",
          agents: [
            { title: "Intake and triage", system: "Email" },
            { title: "Product identification", system: "ERP" },
            { title: "Pricing", system: "B2B portals" },
            { title: "Checks and safeguards", system: "CRM" },
          ],
          logLabel: "Order run",
          log: [
            "Intake: enquiry recognised, items extracted from the email and attachment",
            "Identification: tender names matched to products in the ERP",
            "Pricing: prices found in B2B portals, markup applied",
            "Checks: one unclear item flagged for review",
            "Draft quote is waiting for human approval",
          ],
          caption: "Illustrative run-through. This is not real data.",
        },
      },
      tools: {
        label: "Tools",
        status: "Built, pre-launch",
        title: "Embroidered clothing price calculator",
        hook: "Customers work out the price themselves. The company gets a complete brief instead of a vague email.",
        description:
          "On the website, the customer picks the garment, colours, sizes and logo embroidery step by step and instantly sees an estimated price including quantity discounts. They then send the summary as an enquiry, so the company gets a complete brief instead of a vague email.",
        points: [
          "Choose garment, colours and quantity per size",
          "Price recalculates on every change, including quantity discounts",
          "The enquiry is sent together with the calculation",
          "The price list is edited in a single file",
        ],
        image: "kalkulacka.jpg",
        imageAlt: "Embroidered clothing price calculator on the Koftex website",
        note: "Prices in the demo are placeholder estimates. They will be replaced with the company's real price list before launch.",
      },
    },
    ads: {
      eyebrow: "ADVERTISING",
      heading: "Ad management and independent audits",
      intro: "Advertising is only as good as your website, tracking and campaigns. I can take care of the whole chain, or just independently check what is already running.",
      items: [
        {
          title: "Complete ad management",
          text: "From the foundations to daily optimisation. Advertising starts with the website and tracking, so I set up everything, not just campaigns.",
          points: [
            "Setting up or adjusting the website for advertising",
            "Conversion tracking: calls, forms, enquiries",
            "Creating ads and campaigns",
            "Ongoing management and optimisation",
            "Clear reporting of results",
          ],
        },
        {
          title: "External ad audit",
          badge: "No takeover of management",
          text: "Not sure your current manager delivers good enough results? I'll run an independent audit, with no obligation to change supplier.",
          points: [
            "Review of the account, campaigns and budget",
            "Checking that conversions are tracked correctly",
            "Finding wasted budget",
            "Written recommendations on what to improve first",
          ],
        },
      ],
      cta: "Request an audit or management",
    },
    benefits: {
      eyebrow: "WHY AUTOMATE",
      heading: "What can be saved",
      intro: "Retyping data, sorting emails, quoting by hand. Together that is often hours of work every month.",
      items: [
        { title: "Less manual work", text: "The system does the repetitive tasks. People handle what needs judgement and customer contact." },
        { title: "Lower costs", text: "You stop paying hours of work for repetitive tasks. The system has no queues or waiting." },
        { title: "Room to grow", text: "The time and money you free up can go into new customers and products." },
      ],
      note: "How much exactly, we work out in the first consultation. I won't promise numbers up front.",
    },
    ai: {
      eyebrow: "AI IN PRACTICE",
      heading: "What AI actually does for companies",
      intro: "No chat bubble on a website. For me AI takes over specific repetitive work.",
      items: [
        { title: "Emails and enquiries", text: "AI agents process emails, enquiries and documents and pick out what matters." },
        { title: "Finding and comparing prices", text: "It finds products and prices across supplier portals and suggests the best option." },
        { title: "Draft quotes", text: "From the data it builds a draft quote, report or reply. A person only reviews and approves." },
        { title: "Rolling it out", text: "I connect AI to your systems and processes and train your team to work with it." },
      ],
      note: "AI prepares, you approve.",
    },
    services: {
      eyebrow: "WHAT I OFFER",
      heading: "What I do",
      items: [
        {
          title: "Websites and digital products",
          description:
            "Company websites, landing pages and internal tools, designed and built with attention to detail and speed.",
          points: [
            "Custom design and development",
            "Enquiry forms and conversion tracking",
            "Deployment and long-term upkeep",
          ],
        },
        {
          title: "Automation and AI agents",
          description:
            "Processes someone does by hand today start running on their own. It saves employees' time and the cost of repetitive work, with human oversight where it matters.",
          points: [
            "Processing emails, enquiries and documents",
            "Integration with ERP, CRM and other systems",
            "n8n, custom scripts, agent workflows",
            "Monitoring, alerts and fallbacks",
          ],
        },
        {
          title: "Databases and data systems",
          description:
            "Data that makes sense: collected, cleaned and ready to use in sales and operations.",
          points: [
            "Collecting and enriching data from public sources",
            "Data pipelines and automatic updates",
            "Reports and dashboards",
          ],
        },
        {
          title: "Consulting and AI strategy",
          description:
            "Not sure where to start with AI? We'll map your processes and find what's worth automating first.",
          points: [
            "Process audit",
            "Ranking by impact and effort",
            "Implementation roadmap",
          ],
          badge: "First consultation free",
        },
      ],
      consult: {
        title: "The first consultation is free",
        text: "We'll talk through what your company does and what slows it down. Based on that I prepare a proposal tailored to you, and we carry on from there.",
        cta: "Book a consultation",
      },
      cta: "Enquire",
    },
    process: {
      eyebrow: "PROCESS",
      heading: "How working together goes",
      items: [
        {
          title: "Free consultation",
          description: "We go through your company, your processes and what slows you down. No three-page forms, no obligation.",
        },
        {
          title: "Tailored proposal",
          description: "After the consultation I prepare a proposal tailored to you. You get it in writing, with a quote, and then decide whether we carry on.",
        },
        {
          title: "Implementation",
          description: "I build the solution and keep showing work in progress. You aren't left waiting for one big reveal at the end.",
        },
        {
          title: "Launch and support",
          description: "It goes live as soon as it's ready. After handoff I stay available for changes and oversight.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "What people ask before working together",
      items: [
        {
          q: "How much does it cost?",
          a: "It depends on scope and on what already works in your company. After the first consultation you get a tailored proposal and a written quote, so you know what you're getting into before we start.",
        },
        {
          q: "Will it pay off for me?",
          a: "It depends on how much repetitive work you have. We estimate it together in the call, and if it won't pay off, I'll tell you.",
        },
        {
          q: "Do you also do standalone ad audits?",
          a: "Yes. If you're not sure your current manager delivers good enough results, I'll run an independent audit without taking over management. You don't have to change supplier for that.",
        },
        {
          q: "What happens in the first consultation?",
          a: "A short call about what your company does, where manual work repeats and what slows you down. You don't need a precise idea of what you want. You leave with a recommendation of what to do first, even if it's “nothing yet”.",
        },
        {
          q: "Can you connect to our existing systems?",
          a: "Yes: email, ERP, CRM, accounting or custom APIs. For older systems without a modern API, such as Helios Red, I work with automatic exports and scheduled tasks.",
        },
        {
          q: "Does the automation send anything to customers on its own?",
          a: "Only if you want it to. By default the system prepares a draft and a person approves it before it goes out.",
        },
        {
          q: "Who owns the code and the data?",
          a: "You do. The code and data are yours, and you don't depend on me.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      heading: "Jonáš Formánek",
      role: "Founder of 4manek AI · law student",
      body: [
        "Jonáš Formánek is the founder of 4manek AI and a law student. Artificial intelligence has been a fascination since high school, when it became available, and Jonáš has always tried to use it to make work easier.",
        "It became a serious focus during studies in Finland. It was tried first on internal processes, then in the family business, which is where the automated price lookup across B2B portals came from.",
        "Today 4manek AI offers these services to other companies. If something doesn't make sense, you'll hear it before you pay for it.",
      ],
      photoAlt: "Jonáš Formánek",
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Book a free consultation",
      sub: "Write a few lines about your company and what slows it down. You don't need to know what to automate. I'll reply within two business days.",
      assurances: ["The first consultation is free and non-binding"],
      form: {
        company: "Company name",
        companyPlaceholder: "E.g. Smith Ltd.",
        email: "Email",
        emailPlaceholder: "you@company.com",
        phone: "Phone",
        phonePlaceholder: "+420 …",
        revenue: "Annual company revenue",
        revenuePlaceholder: "Select",
        revenueOptions: ["Up to CZK 5m", "CZK 5–10m", "CZK 10–20m", "CZK 20–50m", "CZK 50–100m", "CZK 100–500m", "Over CZK 500m"],
        message: "What your company does and what you want to solve",
        messagePlaceholder:
          "Briefly describe what your company does. If you have an idea, tell me what you'd like: a new website, or what to automate. If not, that's fine. I'll help you work it out in the consultation.",
        consent: "By submitting this form you acknowledge the processing of your data under the",
        consentLink: "privacy policy",
        submit: "Send enquiry",
        submitting: "Sending…",
        success: "Thank you, I'll reply within two business days.",
        error: "Something went wrong. Please try again, or email me directly at the address below.",
      },
    },
    footer: {
      tagline: "AI, automation, websites and advertising for companies.",
      rights: "All rights reserved.",
      email: "jony.form@seznam.cz",
      privacyLink: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: 28 October 2026",
      intro:
        "This policy describes how 4manek AI (Jonáš Formánek) processes the personal data of visitors who submit the contact form.",
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
            "Company name, email, phone and the message about your business and requirements – only what you enter into the contact form yourself.",
          ],
        },
        {
          heading: "3. Purpose and legal basis",
          body: [
            "I process this data to handle your enquiry and any follow-up communication. The legal basis is legitimate interest in responding to your request (GDPR Art. 6(1)(f)), or taking steps before entering into a contract and performance of a contract if the enquiry turns into a collaboration (GDPR Art. 6(1)(b)).",
          ],
        },
        {
          heading: "4. Retention period",
          body: [
            "I keep enquiry data for as long as needed to handle it and any follow-up, for a maximum of 2 years from the last contact, after which it is deleted.",
          ],
        },
        {
          heading: "5. Third parties",
          body: [
            "The form is delivered via FormSubmit.co, which acts as a technical processor forwarding the message to my inbox. I do not share or sell your data to any other third parties.",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "The site currently uses no analytics or marketing cookies. The only stored value is a strictly necessary \"locale\" cookie that remembers your chosen language – it does not require consent.",
          ],
        },
        {
          heading: "7. Your rights",
          body: [
            "You have the right to access, correct or erase your data, to restrict its processing, to data portability, and to object to it. You can contact me at any time at jony.form@seznam.cz. If you believe your data has been processed unlawfully, you may file a complaint with the Czech Office for Personal Data Protection (uoou.cz).",
          ],
        },
      ],
    },
  },
};

// Czech typography: no one-letter word (v, k, s, z, u, o, a, i) or number left dangling at a line end.
function nbsp<T>(value: T): T {
  if (typeof value === "string") {
    return value
      .replace(/(^|[\s(„])([vkszuoaiVKSZUOAI]) /g, "$1$2\u00a0")
      .replace(/(\d) (?=\p{L})/gu, "$1\u00a0") as T;
  }
  if (Array.isArray(value)) return value.map(nbsp) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, nbsp(v)])) as T;
  }
  return value;
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "cs" ? nbsp(dictionaries.cs) : dictionaries.en;
}
