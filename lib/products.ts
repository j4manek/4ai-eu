import type { Locale } from "./dictionaries";

type Item = { title: string; text: string };

export interface ProductsCopy {
  navLabel: string;
  teaser: {
    eyebrow: string;
    heading: string;
    intro: string;
    training: { badge: string; title: string; text: string; points: string[]; cta: string };
    course: { badge: string; title: string; text: string; points: string[]; cta: string };
  };
  training: {
    meta: { title: string; description: string };
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    audience: { heading: string; items: Item[] };
    modules: { heading: string; intro: string; items: Item[] };
    format: { heading: string; items: Item[] };
    steps: { heading: string; items: { title: string; description: string }[] };
    faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
    contact: { eyebrow: string; heading: string; sub: string; assurances: string[]; messagePlaceholder: string };
  };
  course: {
    meta: { title: string; description: string };
    eyebrow: string;
    badge: string;
    headline: string;
    sub: string;
    cta: string;
    inside: { heading: string; items: Item[] };
    audience: { heading: string; items: Item[] };
    waitlist: {
      eyebrow: string;
      heading: string;
      sub: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      consent: string;
      consentLink: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  };
}

const cs: ProductsCopy = {
  navLabel: "Školení",
  teaser: {
    eyebrow: "ŠKOLENÍ A KURZ",
    heading: "Naučím vás i váš tým pracovat s AI",
    intro:
      "AI se vyplatí, jen když ji lidé skutečně používají. Nabízím dvě cesty: školení přímo ve firmě a digitální kurz pro jednotlivce.",
    training: {
      badge: "Pro firmy",
      title: "Školení AI pro firmy a týmy",
      text: "Praktický workshop na míru, na místě nebo online. Zkoušíte si to na příkladech ze své firmy.",
      points: ["Na míru oboru a rolím v týmu", "Důraz na praxi, ne na slajdy", "Pravidla bezpečnosti a GDPR"],
      cta: "Zjistit víc o školení",
    },
    course: {
      badge: "Připravuji",
      title: "Digitální kurz AI pro jednotlivce",
      text: "Praktický průvodce, kterým se naučíte používat AI v každodenní práci vlastním tempem.",
      points: ["Vlastní tempo, kdykoli", "Bez technického žargonu", "Šablony zadání k okamžitému použití"],
      cta: "Dát vědět o spuštění",
    },
  },
  training: {
    meta: {
      title: "AI školení pro firmy a týmy | 4manek AI",
      description:
        "Praktické školení, jak ve firmě pracovat s umělou inteligencí. Workshop na míru na místě nebo online, na příkladech z vaší firmy. První konzultace je zdarma.",
    },
    eyebrow: "AI ŠKOLENÍ PRO FIRMY",
    headline: "Naučte tým používat AI tak, aby z toho měla firma užitek",
    sub: "Praktické workshopy na míru pro vaše lidi. Na místě nebo online, na příkladech z vaší firmy, ne na obecných ukázkách.",
    cta: "Domluvit školení",
    audience: {
      heading: "Pro koho je školení určené",
      items: [
        { title: "Majitelé a vedení", text: "Pochopíte, co AI dnes reálně umí, kde se vyplatí a kde ne, a podle toho se rozhodnete." },
        { title: "Administrativa a obchod", text: "E-maily, nabídky, zápisy a podklady, které dnes zabírají hodiny, zvládnete výrazně rychleji." },
        { title: "Provoz a zákaznická podpora", text: "Odpovědi, shrnutí a opakované postupy s AI jako pomocníkem a s člověkem jako rozhodujícím." },
        { title: "Týmy bez zkušeností", text: "Nemusíte nic umět. Začínáme od základů a každý si vše hned vyzkouší sám." },
      ],
    },
    modules: {
      heading: "Co se na školení naučíte",
      intro: "Obsah upravím podle oboru a rolí. Základ tvoří tyto okruhy.",
      items: [
        { title: "Jak AI funguje a kde chybuje", text: "Co od ní čekat, proč si občas vymýšlí a jak to poznat dřív, než to skončí u zákazníka." },
        { title: "Zadání, která dávají použitelný výsledek", text: "Jak AI zadávat, aby odpověď nebylo nutné celou přepisovat." },
        { title: "AI v každodenní práci", text: "E-maily, nabídky, shrnutí schůzek, texty a podklady na příkladech z vašeho provozu." },
        { title: "Dokumenty a data", text: "Práce s dlouhými dokumenty, smlouvami a tabulkami: shrnutí, porovnání, vytěžení klíčových údajů." },
        { title: "Bezpečnost a GDPR", text: "Co do AI nepatří, jak nastavit firemní pravidla a jak chránit data klientů." },
        { title: "První kroky k automatizaci", text: "Které opakované postupy lze předat AI agentům a jak vypadá cesta od nápadu k fungujícímu řešení." },
      ],
    },
    format: {
      heading: "Jak školení probíhá",
      items: [
        { title: "Na místě ve firmě", text: "Workshop u vás, nejlépe s vlastními notebooky a reálnými úkoly týmu." },
        { title: "Online", text: "Stejný obsah na dálku, vhodné pro týmy na více pobočkách nebo práci z domova." },
        { title: "Program na míru", text: "Série kratších setkání s praktickými úkoly mezi nimi, aby se naučené skutečně zabydlelo." },
      ],
    },
    steps: {
      heading: "Postup od první konzultace po školení",
      items: [
        { title: "Konzultace zdarma", description: "Probereme, čím se firma zabývá, kdo bude školen a co tým zdržuje." },
        { title: "Příprava na míru", description: "Připravím cvičení z vašich skutečných situací, ne z učebnice." },
        { title: "Školení", description: "Krátký výklad a hlavně praxe. Každý účastník si vše zkouší sám." },
        { title: "Po školení", description: "Dostanete podklady a ověřená zadání k dalšímu použití a můžete se na cokoli doptat." },
      ],
    },
    faq: {
      eyebrow: "OTÁZKY",
      heading: "Časté otázky ke školení",
      items: [
        { q: "Potřebují účastníci nějakou předchozí zkušenost?", a: "Ne. Školení přizpůsobím úrovni týmu, od úplných začátečníků po ty, kdo AI už zkoušejí." },
        { q: "S jakými nástroji se na školení pracuje?", a: "S těmi, které firma už používá nebo chce používat. Nástroje vybereme společně podle toho, jaká máte pravidla pro práci s daty." },
        { q: "Kolik školení stojí?", a: "Cenu navrhnu po bezplatné konzultaci podle počtu lidí, rozsahu a formy. Žádná pevná cena z ceníku neexistuje, protože každé školení se liší." },
        { q: "Jak dlouho školení trvá?", a: "Podle zadání. Typicky od půl dne po celý den, případně jako série kratších setkání." },
        { q: "Dá se po školení pokračovat?", a: "Ano. Pokud z workshopu vyjde, co se vyplatí automatizovat, mohu to navázat stavbou automatizace nebo AI agenta." },
        { q: "A školíte i jednotlivce?", a: "Pro jednotlivce připravuji digitální kurz. Můžete si nechat napsat, až bude hotový." },
      ],
    },
    contact: {
      eyebrow: "POPTÁVKA ŠKOLENÍ",
      heading: "Domluvte si školení pro svůj tým",
      sub: "Napište, kdo by měl být proškolen a co chcete, aby tým po školení zvládal. Ozvu se do dvou pracovních dnů.",
      assurances: ["Konzultace je zdarma a nezávazná", "Obsah upravím podle vašeho oboru", "Cenu navrhuji až po konzultaci"],
      messagePlaceholder: "Kolik lidí, jaké role, co by měli po školení umět. Pokud nevíte, nevadí, doladíme to na konzultaci.",
    },
  },
  course: {
    meta: {
      title: "AI v práci: digitální kurz pro jednotlivce | 4manek AI",
      description:
        "Praktický digitální kurz, jak používat umělou inteligenci v každodenní práci. Připravuji. Zanechte e-mail a dám vám vědět jako prvnímu.",
    },
    eyebrow: "DIGITÁLNÍ KURZ",
    badge: "Připravuji",
    headline: "AI v práci: praktický průvodce pro každého",
    sub: "Digitální kurz pro ty, kdo chtějí AI používat každý den, ne jen zkoušet. Krok za krokem, bez technického žargonu.",
    cta: "Dát mi vědět o spuštění",
    inside: {
      heading: "Co v kurzu bude",
      items: [
        { title: "Základy bez omáčky", text: "Jak AI funguje, co umí a kde chybuje, jen tolik teorie, kolik potřebujete k praxi." },
        { title: "Zadání, která fungují", text: "Jak psát zadání, po kterých dostanete použitelný výsledek hned napoprvé." },
        { title: "E-maily, texty a podklady", text: "Jak s AI zrychlit každodenní psaní a přitom si udržet vlastní styl." },
        { title: "Dokumenty a tabulky", text: "Shrnutí dlouhých textů, porovnání a vytěžení důležitých informací." },
        { title: "Ověřování výstupů", text: "Jak poznat, že si AI vymýšlí, a jak se na ni nespolehnout tam, kde nesmíte." },
        { title: "Vlastní sada postupů", text: "Šablony zadání, které si upravíte pro svou práci a budete používat dál." },
      ],
    },
    audience: {
      heading: "Pro koho kurz je",
      items: [
        { title: "OSVČ a freelanceři", text: "Ušetříte hodiny administrativy a psaní každý týden." },
        { title: "Zaměstnanci v kancelářské práci", text: "Zvládnete víc za méně času a nebudete záviset na tom, že vás AI naučí někdo jiný." },
        { title: "Vedoucí malých týmů", text: "Vyzkoušíte si AI sami a pak víte, jak ji zavést ve svém týmu." },
      ],
    },
    waitlist: {
      eyebrow: "SEZNAM ZÁJEMCŮ",
      heading: "Dejte mi vědět, až bude kurz hotový",
      sub: "Zanechte e-mail. Napíšu vám, jakmile bude kurz k dispozici. Nezavazuje vás to k ničemu.",
      name: "Jméno (nepovinné)",
      namePlaceholder: "Jak vás mám oslovit",
      email: "E-mail",
      emailPlaceholder: "vy@email.cz",
      consent: "Odesláním beru na vědomí zpracování údajů podle",
      consentLink: "zásad ochrany osobních údajů",
      submit: "Zapsat se",
      submitting: "Zapisuji…",
      success: "Děkuji, jste na seznamu. Ozvu se, jakmile bude kurz k dispozici.",
      error: "Něco se pokazilo. Zkuste to prosím znovu, nebo napište přímo na e-mail v patičce.",
    },
    faq: {
      eyebrow: "OTÁZKY",
      heading: "Časté otázky ke kurzu",
      items: [
        { q: "Kdy bude kurz k dispozici?", a: "Pevné datum zatím nemám. Kdo je na seznamu, dozví se to jako první." },
        { q: "Kolik bude kurz stát?", a: "Cena zatím není stanovená. Zapsání na seznam k ničemu nezavazuje." },
        { q: "Je to i pro firmy?", a: "Firmy a týmy mohou využít školení přímo ve firmě, které se přizpůsobuje oboru a rolím." },
        { q: "Bude kurz v češtině?", a: "Ano, kurz připravuji v češtině." },
      ],
    },
  },
};

const en: ProductsCopy = {
  navLabel: "Training",
  teaser: {
    eyebrow: "TRAINING & COURSE",
    heading: "I will teach you and your team to work with AI",
    intro:
      "AI only pays off when people actually use it. I offer two ways: training inside your company and a digital course for individuals.",
    training: {
      badge: "For companies",
      title: "AI training for companies and teams",
      text: "A practical, tailor-made workshop, on site or online. You practise on examples from your own company.",
      points: ["Tailored to your industry and team roles", "Practice over slides", "Data security and GDPR rules"],
      cta: "More about the training",
    },
    course: {
      badge: "In preparation",
      title: "Digital AI course for individuals",
      text: "A practical guide to using AI in your daily work, at your own pace.",
      points: ["Your own pace, any time", "No technical jargon", "Ready-to-use prompt templates"],
      cta: "Notify me at launch",
    },
  },
  training: {
    meta: {
      title: "AI training for companies and teams | 4manek AI",
      description:
        "Practical training on working with AI in your company. Tailor-made workshop on site or online, built on examples from your business. The first consultation is free.",
    },
    eyebrow: "AI TRAINING FOR COMPANIES",
    headline: "Teach your team to use AI so the company actually benefits",
    sub: "Practical, tailor-made workshops for your people. On site or online, using examples from your company, not generic demos.",
    cta: "Book a training",
    audience: {
      heading: "Who the training is for",
      items: [
        { title: "Owners and management", text: "Understand what AI can realistically do today, where it pays off and where it does not, and decide accordingly." },
        { title: "Administration and sales", text: "Emails, quotes, notes and documents that take hours today get done much faster." },
        { title: "Operations and customer support", text: "Replies, summaries and repeated procedures with AI as the helper and a person as the decision maker." },
        { title: "Teams with no experience", text: "No prior knowledge needed. We start from the basics and everyone tries everything hands-on." },
      ],
    },
    modules: {
      heading: "What you will learn",
      intro: "I adapt the content to your industry and roles. These topics form the core.",
      items: [
        { title: "How AI works and where it fails", text: "What to expect, why it sometimes makes things up, and how to spot it before it reaches a customer." },
        { title: "Prompts that give usable results", text: "How to instruct AI so you do not have to rewrite the whole answer." },
        { title: "AI in everyday work", text: "Emails, quotes, meeting summaries, texts and documents, practised on examples from your operations." },
        { title: "Documents and data", text: "Working with long documents, contracts and spreadsheets: summaries, comparisons, extracting key data." },
        { title: "Security and GDPR", text: "What does not belong in AI, how to set company rules and how to protect client data." },
        { title: "First steps to automation", text: "Which repeated procedures can be handed to AI agents and what the path from idea to working solution looks like." },
      ],
    },
    format: {
      heading: "How the training works",
      items: [
        { title: "On site at your company", text: "A workshop at your place, ideally with your own laptops and real team tasks." },
        { title: "Online", text: "The same content remotely, suited to teams across several offices or working from home." },
        { title: "Tailor-made programme", text: "A series of shorter sessions with practical tasks in between so that the learning sticks." },
      ],
    },
    steps: {
      heading: "From first consultation to training day",
      items: [
        { title: "Free consultation", description: "We discuss what the company does, who will be trained and what slows the team down." },
        { title: "Tailored preparation", description: "I prepare exercises from your real situations, not from a textbook." },
        { title: "The training", description: "A short explanation and mostly practice. Every participant tries it themselves." },
        { title: "Afterwards", description: "You receive materials and proven prompts to reuse, and you can ask follow-up questions." },
      ],
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Training FAQ",
      items: [
        { q: "Do participants need prior experience?", a: "No. I adapt the training to the team's level, from complete beginners to people already experimenting with AI." },
        { q: "Which tools do we work with?", a: "The ones your company already uses or wants to use. We choose them together based on your rules for handling data." },
        { q: "How much does it cost?", a: "I propose a price after the free consultation based on headcount, scope and format. There is no fixed price list because every training differs." },
        { q: "How long does it take?", a: "Depending on the brief. Typically half a day to a full day, or a series of shorter sessions." },
        { q: "Can we continue afterwards?", a: "Yes. If the workshop shows what is worth automating, I can follow up by building the automation or an AI agent." },
        { q: "Do you train individuals too?", a: "For individuals I am preparing a digital course. You can leave your email and be notified when it is ready." },
      ],
    },
    contact: {
      eyebrow: "TRAINING INQUIRY",
      heading: "Book a training for your team",
      sub: "Tell me who should be trained and what you want the team to be able to do afterwards. I will get back to you within two working days.",
      assurances: ["The consultation is free and non-binding", "Content adapted to your industry", "Price proposed only after the consultation"],
      messagePlaceholder: "How many people, which roles, what they should be able to do afterwards. If you are unsure, we will work it out during the consultation.",
    },
  },
  course: {
    meta: {
      title: "AI at Work: digital course for individuals | 4manek AI",
      description:
        "A practical digital course on using AI in daily work. In preparation. Leave your email and I will let you know first.",
    },
    eyebrow: "DIGITAL COURSE",
    badge: "In preparation",
    headline: "AI at Work: a practical guide for everyone",
    sub: "A digital course for people who want to use AI every day, not just try it out. Step by step, without technical jargon.",
    cta: "Notify me at launch",
    inside: {
      heading: "What the course will cover",
      items: [
        { title: "Basics without the fluff", text: "How AI works, what it can do and where it fails, with just enough theory to get practical." },
        { title: "Prompts that work", text: "How to write instructions that give a usable result on the first try." },
        { title: "Emails, texts and documents", text: "How to speed up daily writing with AI while keeping your own style." },
        { title: "Documents and spreadsheets", text: "Summarising long texts, comparing and extracting the important information." },
        { title: "Checking the output", text: "How to tell when AI is making things up and where never to rely on it." },
        { title: "Your own toolkit", text: "Prompt templates you can adapt to your work and keep using." },
      ],
    },
    audience: {
      heading: "Who the course is for",
      items: [
        { title: "Freelancers and self-employed", text: "Save hours of admin and writing every week." },
        { title: "Office employees", text: "Get more done in less time without waiting for someone else to teach you AI." },
        { title: "Small team leads", text: "Try AI yourself first, then know how to introduce it to your team." },
      ],
    },
    waitlist: {
      eyebrow: "WAITLIST",
      heading: "Let me know when the course is ready",
      sub: "Leave your email. I will write to you as soon as the course is available. It does not commit you to anything.",
      name: "Name (optional)",
      namePlaceholder: "How should I address you",
      email: "Email",
      emailPlaceholder: "you@email.com",
      consent: "By submitting I acknowledge the processing of my data according to the",
      consentLink: "privacy policy",
      submit: "Join the waitlist",
      submitting: "Signing up…",
      success: "Thank you, you are on the list. I will be in touch as soon as the course is available.",
      error: "Something went wrong. Please try again or write to the email in the footer.",
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Course FAQ",
      items: [
        { q: "When will the course be available?", a: "I do not have a fixed date yet. People on the list will hear first." },
        { q: "How much will it cost?", a: "The price has not been set yet. Joining the list commits you to nothing." },
        { q: "Is it for companies too?", a: "Companies and teams can use the on-site training, which is tailored to the industry and roles." },
        { q: "Which language is the course in?", a: "The course is being prepared in Czech." },
      ],
    },
  },
};

export const productSlugs = { training: "skoleni", course: "kurz" } as const;

export function getProducts(locale: Locale): ProductsCopy {
  return locale === "en" ? en : cs;
}
