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
      title: "4manek AI – AI automatizace, AI agenti a weby pro firmy",
      description:
        "Stavím AI agenty, automatizace firemních procesů a weby. První konzultace je zdarma, cenu navrhnu až po ní.",
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
      headline: ["AI AUTOMATIZACE", "A WEBY, KTERÉ", "FIRMĚ ŠETŘÍ ČAS."],
      sub: "Dělám AI: stavím AI agenty, automatizace firemních procesů a weby. Převezmou opakovanou práci, ušetří čas lidí i peníze a uvolní cashflow pro růst. Mluvíte přímo s tím, kdo to staví.",
      ctaPrimary: "Domluvit bezplatnou konzultaci",
      ctaSecondary: "Projekty",
      trust: ["První konzultace zdarma", "Cenu navrhnu až po ní", "Odpověď do dvou pracovních dnů"],
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
      intro: "Automatizace, nástroje a weby, na kterých ukazuji, jak pracuji. Kliknutím rozbalíte podrobnosti.",
      more: "Zobrazit detaily",
      less: "Skrýt detaily",
      webs: {
        label: "Weby",
        items: [
          {
            status: "V provozu",
            title: "Instalatérství Janák",
            hook: "Web, který z hledání instalatéra udělá jeden telefonát. A každý telefonát se dá změřit.",
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
            hook: "Web šicí dílny, který zákazníkovi spočítá cenu výšivky dřív, než zvedne telefon.",
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
            hook: "Web, který právě čtete. Česky i anglicky, rychlý a bez hotové šablony.",
            description:
              "Tento web. Dvojjazyčný (česky a anglicky), rychlý, s poptávkovým formulářem.",
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
        hook: "143 položek, žádné ruční proklikávání portálů. AI dohledá, člověk schválí.",
        description:
          "Nacenění veřejné zakázky na ochranné pracovní pomůcky znamená najít cenu u každé položky. V jedné zakázce jich bylo 143. AI agent každou položku nejdřív identifikuje, protože název ze zadání se často liší od názvu v ceníku. Pak ji vyhledá v přihlášených B2B portálech dodavatelů a vybere nejvýhodnější dostupnou variantu. Hotovou tabulku ke kontrole dostane člověk.",
        facts: ["143 položek v jedné zakázce", "Ceny jen z přihlášených B2B ceníků", "Výsledek vždy kontroluje člověk"],
        steps: [
          { title: "Identifikace zboží", text: "Zjistí výrobce, typ a alternativní názvy. Doslovné hledání textu ze zadání zboží často mine." },
          { title: "Hledání v B2B portálech", text: "Prochází přihlášené portály dodavatelů jeden po druhém. Veřejné ceny z webů výrobců se nepočítají." },
          { title: "Porovnání a výběr", text: "Z nalezených variant vybere nejvýhodnější dostupnou cenu." },
          { title: "Kontrola člověkem", text: "Tabulka jde ke schválení a položky bez nálezu jsou zřetelně označené." },
        ],
        lesson:
          "Poučení z praxe: porovnání s ruční kalkulací ukázalo, že rozhoduje počet pokrytých portálů. Agent proto nejdřív sestaví úplný seznam dostupných dodavatelských účtů a teprve potom ceny hledá.",
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
    benefits: {
      eyebrow: "PROČ AUTOMATIZOVAT",
      heading: "Automatizace šetří čas lidí i peníze firmy",
      intro: "Přepisování dat, třídění e-mailů nebo ruční nacenění stojí každý měsíc hodiny práce. Automatizace je přebere.",
      items: [
        { title: "Čas zaměstnanců", text: "Opakovanou práci dělá systém. Lidé mají čas na úkoly, které vyžadují úsudek, kontakt se zákazníkem a nápady." },
        { title: "Nižší náklady", text: "Za opakované úkoly přestanete platit mzdový čas. Systém běží bez přestávek a bez front." },
        { title: "Větší cashflow", text: "Uvolněné peníze a kapacity můžete investovat do nových zákazníků, produktů a dalšího růstu firmy." },
      ],
      note: "Kolik přesně ušetříte, spočítáme na bezplatné konzultaci podle vašich procesů. Slibuji jen to, co se dá změřit.",
    },
    ai: {
      eyebrow: "AI V PRAXI",
      heading: "Umělá inteligence, která dělá skutečnou práci",
      intro: "AI není u mě efekt na webu. Je to nástroj, kterým firmám přebírám opakovanou práci.",
      items: [
        { title: "Čte a chápe", text: "AI agenti zpracují e-maily, poptávky a dokumenty a vyčtou z nich, na čem záleží." },
        { title: "Hledá a porovnává", text: "Dohledá zboží a ceny napříč dodavatelskými portály a nabídne nejvýhodnější variantu." },
        { title: "Připravuje podklady", text: "Z dat sestaví koncept nabídky, přehled nebo odpověď. Člověk jen zkontroluje a schválí." },
        { title: "Zavede se do firmy", text: "Napojím AI na vaše systémy a procesy a zaučím tým, aby s ní uměl pracovat." },
      ],
      note: "Tam, kde to má smysl, rozhoduje vždy člověk. AI připravuje, vy schvalujete.",
    },
    services: {
      eyebrow: "CO NABÍZÍM",
      heading: "Čtyři oblasti, ve kterých pomáhám firmám",
      items: [
        {
          title: "Weby a digitální produkty",
          description:
            "Firemní weby, landing pages a interní nástroje, navržené a postavené rychle a s péčí o detail.",
          points: [
            "Design a vývoj na míru",
            "Rychlé a responzivní stránky",
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
            "Návrh datového modelu",
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
            "Zaučení týmu",
          ],
          badge: "První konzultace zdarma",
        },
      ],
      consult: {
        title: "První konzultace je zdarma",
        text: "Probereme, čím se firma zabývá a co zdržuje. Cenu navrhnu až po konzultaci, podle toho, co skutečně dává smysl postavit.",
        cta: "Domluvit konzultaci",
      },
      cta: "Poptat",
    },
    process: {
      eyebrow: "POSTUP",
      heading: "Čtyři kroky od prvního hovoru k provozu",
      items: [
        {
          title: "Bezplatná konzultace",
          description: "Probereme firmu, procesy a to, co vás zdržuje. Bez formulářů na tři strany a bez závazku.",
        },
        {
          title: "Návrh a cena",
          description: "Po konzultaci dostanete konkrétní návrh řešení a písemnou cenovou nabídku předem.",
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
          a: "Cenu navrhuji až po první bezplatné konzultaci, protože záleží na rozsahu a na tom, co už ve firmě funguje. Nabídku dostanete písemně předem.",
        },
        {
          q: "Vyplatí se mi to?",
          a: "Záleží na tom, kolik opakované práce ve firmě je. Na bezplatné konzultaci společně odhadneme, kolik času a nákladů se dá ušetřit, a doporučím jen to, co se vyplatí. Čísla předem slibovat nemohu.",
        },
        {
          q: "Co se děje na první konzultaci?",
          a: "Krátký hovor o tom, čím se firma zabývá, kde se opakuje ruční práce a co byste chtěli vyřešit. Odnesete si doporučení, co má smysl dělat jako první. Klidně i to, že zatím nic.",
        },
        {
          q: "Musím mít přesnou představu o tom, co chci?",
          a: "Ne. Stačí popsat firmu a co vás zdržuje. Na bezplatné konzultaci společně zjistíme, co se vyplatí automatizovat, a navrhneme konkrétní řešení.",
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
          a: "Vám. Žádná závislost na jednom dodavateli (vendor lock-in), žádné skryté závislosti.",
        },
      ],
    },
    about: {
      eyebrow: "O MNĚ",
      heading: "Jmenuji se Jonáš Formánek.",
      role: "Student práv · zakladatel 4manek AI",
      body: [
        "Jsem student práv. Umělá inteligence mě fascinuje od střední školy, kdy se stala dostupnou, a vždycky jsem se snažil s její pomocí ulehčit si práci.",
        "Intenzivně jsem se jí začal věnovat během studia ve Finsku. Nejdřív jsem ji zkoušel na vlastních procesech, potom v rodinné firmě. Tam vznikla třeba automatizace dohledávání cen v B2B portálech.",
        "Dnes tyto služby nabízím dalším firmám. Nejsem agentura, jsem jeden člověk, takže mluvíte přímo s tím, kdo řešení navrhuje a staví. Když něco nedává smysl, řeknu vám to dřív, než za to zaplatíte.",
      ],
      photoAlt: "Jonáš Formánek",
    },
    contact: {
      eyebrow: "KONTAKT",
      heading: "Domluvte si bezplatnou konzultaci",
      sub: "Vyplňte krátký formulář. Nemusíte vědět, co automatizovat. To společně zjistíme na bezplatné konzultaci. Ozvu se do dvou pracovních dnů.",
      assurances: ["Konzultace je zdarma a nezávazná", "Nemusíte vědět, co automatizovat", "Cenu navrhuji až po ní"],
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
      tagline: "Weby, automatizace a AI agenti pro firmy.",
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
      title: "4manek AI – AI automation, AI agents and websites for companies",
      description:
        "I build AI agents, business process automation and websites. The first consultation is free; I quote a price only after it.",
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
      headline: ["AI AUTOMATION", "AND WEBSITES THAT", "SAVE YOUR TIME."],
      sub: "I do AI: I build AI agents, business process automation and websites. They take over repetitive work, save your people's time and money and free up cash flow for growth. You talk directly to the person building it.",
      ctaPrimary: "Book a free consultation",
      ctaSecondary: "Projects",
      trust: ["First consultation is free", "Price quoted only after it", "Reply within two business days"],
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
      intro: "Automation, tools and websites that show how I work. Click to expand the details.",
      more: "Show details",
      less: "Hide details",
      webs: {
        label: "Websites",
        items: [
          {
            status: "Live",
            title: "Instalatérství Janák",
            hook: "A website that turns finding a plumber into one phone call. And every call can be measured.",
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
            hook: "A workshop website that works out the embroidery price before the customer picks up the phone.",
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
            hook: "The site you are reading. In Czech and English, fast and with no off-the-shelf template.",
            description:
              "This site. Bilingual (Czech and English), fast, with an enquiry form.",
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
        hook: "143 items, no manual clicking through portals. AI finds the prices, a person approves.",
        description:
          "Pricing a public tender for protective work equipment means finding a price for every item. One tender had 143 of them. An AI agent first identifies each item, because the name in the tender often differs from the name in the price list. It then searches the suppliers' B2B portals it is logged in to and picks the best available option. A person gets the finished table to review.",
        facts: ["143 items in a single tender", "Prices only from logged-in B2B price lists", "A person always reviews the result"],
        steps: [
          { title: "Identify the product", text: "Finds the manufacturer, type and alternative names. A literal text search for the tender wording often misses the product." },
          { title: "Search B2B portals", text: "Goes through the logged-in supplier portals one by one. Public prices from manufacturers' websites don't count." },
          { title: "Compare and choose", text: "Picks the best available price from the options found." },
          { title: "Human review", text: "The table goes for approval and items with no match are clearly flagged." },
        ],
        lesson:
          "Lesson from practice: comparing with a manual calculation showed that the number of portals covered is what matters. So the agent first builds a complete list of available supplier accounts and only then starts looking for prices.",
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
    benefits: {
      eyebrow: "WHY AUTOMATE",
      heading: "Automation saves your people's time and the company's money",
      intro: "Retyping data, sorting emails or quoting by hand costs hours of work every month. Automation takes it over.",
      items: [
        { title: "Employees' time", text: "The system does the repetitive work. People have time for tasks that need judgement, customer contact and ideas." },
        { title: "Lower costs", text: "You stop paying wage time for repetitive tasks. The system runs without breaks and without queues." },
        { title: "Stronger cash flow", text: "The money and capacity you free up can go into new customers, products and further growth." },
      ],
      note: "How much exactly you save, we work out in the free consultation based on your processes. I only promise what can be measured.",
    },
    ai: {
      eyebrow: "AI IN PRACTICE",
      heading: "Artificial intelligence that does real work",
      intro: "For me AI is not a website effect. It is a tool that takes repetitive work off companies' hands.",
      items: [
        { title: "Reads and understands", text: "AI agents process emails, enquiries and documents and pick out what matters." },
        { title: "Searches and compares", text: "It finds products and prices across supplier portals and suggests the best option." },
        { title: "Prepares drafts", text: "From the data it builds a draft quote, report or reply. A person only reviews and approves." },
        { title: "Fits into your company", text: "I connect AI to your systems and processes and train your team to work with it." },
      ],
      note: "Where it matters, a person always decides. AI prepares, you approve.",
    },
    services: {
      eyebrow: "WHAT I OFFER",
      heading: "Four areas where I help companies",
      items: [
        {
          title: "Websites and digital products",
          description:
            "Company websites, landing pages and internal tools, designed and built with attention to detail and speed.",
          points: [
            "Custom design and development",
            "Fast, responsive pages",
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
            "Data model design",
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
            "Team training",
          ],
          badge: "First consultation free",
        },
      ],
      consult: {
        title: "The first consultation is free",
        text: "We'll talk through what your company does and what slows it down. I quote a price only after the consultation, based on what actually makes sense to build.",
        cta: "Book a consultation",
      },
      cta: "Enquire",
    },
    process: {
      eyebrow: "PROCESS",
      heading: "Four steps from first call to production",
      items: [
        {
          title: "Free consultation",
          description: "We go through your company, your processes and what slows you down. No three-page forms, no obligation.",
        },
        {
          title: "Proposal and price",
          description: "After the consultation you get a concrete proposal and a written quote up front.",
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
          a: "I quote a price only after the first free consultation, because it depends on scope and on what already works in your company. You get the quote in writing, up front.",
        },
        {
          q: "Will it pay off for me?",
          a: "It depends on how much repetitive work there is in your company. In the free consultation we estimate together how much time and cost can be saved, and I recommend only what pays off. I can't promise numbers up front.",
        },
        {
          q: "What happens in the first consultation?",
          a: "A short call about what your company does, where manual work repeats and what you'd like to solve. You leave with a recommendation of what to do first. Even “nothing yet” can be the answer.",
        },
        {
          q: "Do I need to know exactly what I want?",
          a: "No. Just describe your company and what slows you down. We'll work out the specific solution together.",
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
          a: "You do. No vendor lock-in, no hidden dependencies.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      heading: "My name is Jonáš Formánek.",
      role: "Law student · founder of 4manek AI",
      body: [
        "I'm a law student. Artificial intelligence has fascinated me since high school, when it became available, and I've always tried to use it to make my work easier.",
        "I started working with it intensively while studying in Finland. First I tried it on my own processes, then in the family business. That's where, for example, the automated price lookup across B2B portals came from.",
        "Today I offer these services to other companies. I'm not an agency, I'm one person, so you talk directly to the person who designs and builds the solution. If something doesn't make sense, I'll tell you before you pay for it.",
      ],
      photoAlt: "Jonáš Formánek",
    },
    contact: {
      eyebrow: "CONTACT",
      heading: "Book a free consultation",
      sub: "Fill in the short form. You don't need to know what to automate. We'll work that out together in the free consultation. I'll reply within two business days.",
      assurances: ["The consultation is free and non-binding", "You don't need to know what to automate", "I quote a price only after it"],
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
      tagline: "Websites, automation and AI agents for companies.",
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
