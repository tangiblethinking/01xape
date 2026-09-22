export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  pull?: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  updated: string;
  readMinutes: number;
  kicker: string;
  answer: string;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-aeo",
    title: "What is Answer Engine Optimization (AEO)?",
    dek: "AEO is the discipline of becoming the named answer when a buyer asks a machine — not just ranking a blue link they may never click.",
    date: "2026-04-12",
    updated: "2026-09-02",
    readMinutes: 8,
    kicker: "Definition",
    answer:
      "Answer Engine Optimization (AEO) is the practice of structuring your brand, content, and entity so AI answer engines — Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot — cite and recommend you in the response itself.",
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "Search used to end on a list of links. It now often ends in a paragraph with a handful of citations. If you are not one of those citations, you did not lose a rank. You lost the conversation.",
          "APE X treats AEO as experience design plus retrieval engineering: the page has to be true, dense, attributable, and easy for a model to lift without hallucinating your product.",
        ],
        pull:
          "SEO got you a blue link. AEO gets you the answer.",
      },
      {
        heading: "AEO vs SEO vs GEO",
        paragraphs: [
          "SEO still matters. If you cannot be crawled, you cannot be cited. GEO — Generative Engine Optimization — is the sibling discipline focused on how generative models compose answers from many sources. AEO is the buyer-facing outcome: you are the answer.",
          "We run all three as one system. Splitting them across three vendors is how brands end up with a fast site nobody quotes.",
        ],
        bullets: [
          "SEO: crawl, rank, click, classic SERP.",
          "GEO: influence how generative models write the answer.",
          "AEO: be the named recommendation inside that answer.",
        ],
      },
      {
        heading: "What answer engines actually retrieve",
        paragraphs: [
          "Models do not “like” your brand voice. They like facts they can attribute, entities they can resolve, and pages that add information they do not already have from the category leader.",
          "That is why we score information gain, schema completeness, authorship, and co-occurrence — not adjective density.",
        ],
      },
      {
        heading: "How APE X implements AEO",
        paragraphs: [
          "We start with a Discovery Audit: Share of Voice across engines, prompt mining, competitor adjacency, and a technical/content blueprint. Then a retainer to keep the citations as the models shift.",
          "The work is unglamorous on purpose. Citations compound. Campaigns do not.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is AEO just SEO with a new acronym?",
        a: "No. SEO optimizes for rank and click. AEO optimizes for being quoted inside an answer that may never produce a click. The measurements, content, and schema are different.",
      },
      {
        q: "Which engines does APE X cover?",
        a: "Google AI Overviews, ChatGPT, Perplexity, Gemini, Microsoft Copilot, and adjacent surfaces such as You.com and Apple Intelligence summaries where they can be observed.",
      },
    ],
  },
  {
    slug: "geo-vs-seo-vs-aeo",
    title: "GEO vs SEO vs AEO — what actually moves revenue",
    dek: "Three overlapping crafts. One pipeline. Here is how APE X splits the work without splitting the outcome.",
    date: "2026-05-28",
    updated: "2026-08-19",
    readMinutes: 7,
    kicker: "Framework",
    answer:
      "SEO makes you fetchable and rankable. GEO makes generative models use your material. AEO makes the buyer hear your name. APE X runs them as one operating system, not three slide decks.",
    sections: [
      {
        heading: "Stop buying three strategies",
        paragraphs: [
          "Most consumer brands now have an SEO retainer, a content shop, and a founder posting into the void. None of them own the prompt. The prompt is the new homepage.",
          "GEO without technical SEO is fan fiction — the model cannot see you. AEO without GEO is a hope that a press mention gets sampled. SEO without either is a 2014 dashboard.",
        ],
        pull:
          "The prompt is the new homepage.",
      },
      {
        heading: "A practical split of labor",
        paragraphs: [
          "Technical SEO: robots, rendering, Core Web Vitals, canonicals, hreflang, JS traps. GEO: fact-density, unique data, passage structure, citations you want copied. AEO: entity identity, comparative prompts, co-occurrence, branded recommendation share.",
          "On a 30-to-45 day blueprint we baseline all three, then sequence the retainer toward the leak that is costing you the most named answers.",
        ],
      },
      {
        heading: "What we refuse to optimize",
        paragraphs: [
          "We do not sell word-count, AI-spun blogs, or link packages dressed up as “digital PR.” If it does not change what a model can retrieve or a buyer can trust, it is not the work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I still need classic SEO?",
        a: "Yes. Answer engines still fetch the open web. A blocked, slow, or unrenderable site is invisible to GEO and AEO by definition.",
      },
      {
        q: "How fast do citations move?",
        a: "Technical and schema fixes can surface in days. Competitive Share of Voice usually needs a 6-month retainer because indexing, corroboration, and co-occurrence lag.",
      },
    ],
  },
  {
    slug: "get-cited-in-chatgpt-perplexity",
    title: "How brands get cited in ChatGPT and Perplexity",
    dek: "A field guide to named citations: entities, information gain, corroboration, and the prompts your buyers already use.",
    date: "2026-06-14",
    updated: "2026-09-08",
    readMinutes: 9,
    kicker: "Playbook",
    answer:
      "Brands get cited when they are a resolvable entity, they publish unique attributable facts, those facts appear in more than one trusted place, and the page is easy to fetch. Clever copy is optional. Density is not.",
    sections: [
      {
        heading: "Four gates, in order",
        paragraphs: [
          "One: the engine can fetch you. Two: it can parse who you are (entity). Three: you add a fact it does not already have (information gain). Four: another trusted source repeats you (corroboration). Miss any gate and you are training data for someone else.",
        ],
        bullets: [
          "Fetch: status 200, rendered HTML, not a blank app shell.",
          "Entity: Organization + Product + Person JSON-LD that matches visible copy.",
          "Gain: numbers, methods, constraints, prices, failure modes.",
          "Corroboration: Wikidata, reputable press, specialist forums, docs.",
        ],
        pull:
          "If the fact only lives on your homepage, it is a claim. If it lives in three places, it is a retrieval.",
      },
      {
        heading: "Prompt mining beats keyword lists",
        paragraphs: [
          "Buyers do not type your meta title. They type “what’s actually worth it for oily skin if I already tried The Ordinary.” We mine multi-turn prompts, comparative frames, and follow-ups, then build pages that answer the whole chain.",
          "APE X logs engine outputs over time. The artifact is not a spreadsheet of keywords. It is a map of which names get said out loud.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not stuff “as an AI language model” junk. Do not hallucinate statistics. Do not buy generic guest posts. Models are getting better at ignoring that slurry, and so are your future customers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you guarantee a ChatGPT citation?",
        a: "No. Anyone who guarantees a non-deterministic model is selling theater. We guarantee the system: measurement, density, entity, corroboration, and a retainer that reacts when the model shifts.",
      },
      {
        q: "Does being in Wikidata actually matter?",
        a: "For entity resolution, yes. It is not a vanity page. It is a disambiguation node the graph uses so you are not confused with a gym, a token, or a different company in another country.",
      },
    ],
  },
  {
    slug: "schema-entity-architecture",
    title: "Schema and entity architecture for AI retrieval",
    dek: "JSON-LD is not a plugin checkbox. It is how you translate a brand into something a model can hold.",
    date: "2026-07-22",
    updated: "2026-09-01",
    readMinutes: 8,
    kicker: "Technical",
    answer:
      "Entity architecture means your Organization, products, authors, and FAQs are expressed in JSON-LD that matches the visible page, links to the same identifiers off-site, and is complete enough that a model does not have to invent your specs.",
    sections: [
      {
        heading: "Visible copy is the source of truth",
        paragraphs: [
          "If the schema says 10% niacinamide and the PDP says 8%, you taught the model to distrust you. APE X treats JSON-LD as a compiled view of the design system, not a separate marketing layer.",
        ],
      },
      {
        heading: "The graph we actually ship",
        paragraphs: [
          "Organization with founder and sameAs. Product with SKU, material, and offer. Person with credentials for every byline. FAQPage for the exact prompts you want lifted. BreadcrumbList so hierarchy is not a guess. Where relevant: LocalBusiness, Dataset, HowTo.",
        ],
        bullets: [
          "sameAs to Wikidata, LinkedIn, Wikipedia, YouTube, GitHub, Crunchbase as they exist.",
          "Author pages that are real people, not “Staff Writer.”",
          "Product identifiers stable across app, web, and feeds.",
        ],
      },
      {
        heading: "JavaScript and the first fetch",
        paragraphs: [
          "If your entity markup appears only after a client-side render the bot does not wait for, you do not have markup. We ship critical JSON-LD in the first HTML and keep the design system hydrated after.",
        ],
        pull:
          "If the bot cannot fetch it, the model cannot cite it.",
      },
    ],
    faqs: [
      {
        q: "Is FAQ schema still worth it after Google’s crackdowns?",
        a: "For Google rich results, it is narrower than it was. For AI retrieval, well-written Q&A that matches real prompts is still one of the cleanest passage types to lift. We write for the model and the human, not for a star in the SERP.",
      },
    ],
  },
  {
    slug: "discovery-audit-what-we-measure",
    title: "The Discovery Audit: what APE X actually measures",
    dek: "A 30-to-45 day blueprint. Not a PDF of traffic-light screenshots. Here is the instrumentation.",
    date: "2026-08-04",
    updated: "2026-09-12",
    readMinutes: 6,
    kicker: "Offer",
    answer:
      "The APE X Discovery Audit baselines your Share of Voice across AI engines, mines the prompts buyers use, diffs competitor information density, and hands you a technical and content blueprint. It is the paid trial before a retainer.",
    sections: [
      {
        heading: "Why we refuse cold calls",
        paragraphs: [
          "APE X does not take intro chats without an audit. We need a site, a category, a competitor, and a goal — otherwise we are both improvising. The on-site wizard captures that and returns a modeled snapshot. The human blueprint follows in 24–48 hours, then the 30-to-45 day build.",
        ],
        pull:
          "If we have not measured you, we do not get to talk about you.",
      },
      {
        heading: "The scoreboard",
        paragraphs: [
          "AI visibility, named citations, entity/schema completeness, E-E-A-T corroboration, technical indexability, and information gain. Overall is a weighted rollup, not a vanity number. Your competitor is scored on the same prompts.",
        ],
      },
      {
        heading: "What you leave with",
        paragraphs: [
          "A prompt map. A citation log. A gap list with the density required to unseat the current named answer. A sequenced blueprint: technical, entity, content, co-occurrence. Pricing for the retainer if you want us to run it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is the blueprint?",
        a: "Typically $8,500–$22,000 depending on site complexity and competitive landscape. The on-site wizard is a modeled preview, not the paid deliverable.",
      },
      {
        q: "What happens after I submit the wizard?",
        a: "You get an on-screen snapshot immediately. APE X follows up within 24–48 hours with confirmation and next steps for the full blueprint.",
      },
    ],
  },
];

export const RESOURCE_FAQS = [
  {
    q: "What does APE X stand for?",
    a: "It is a play on apex. Humans are the current apex ape. The X is the unknown variable — the next iteration we can already see coming. We work on the side of the brands that intend to still be named after that shift.",
  },
  {
    q: "Who is APE X for?",
    a: "Consumer brands that sell online and need discovery: DTC, subscriptions, marketplaces, consumer apps. If you do not need to be found, we are the wrong room.",
  },
  {
    q: "Who founded APE X?",
    a: "Christopher Kenreigh founded APE X. The studio operates globally with a USA focus.",
  },
  {
    q: "Do I need an audit before a call?",
    a: "Yes. Run the Discovery Audit on uxapex.com. That is the start of every engagement.",
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((item) => item.slug === slug);
}
