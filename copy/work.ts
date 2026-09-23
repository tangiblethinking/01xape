export type WorkItem = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  kicker: string;
  excerpt: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string; detail: string }[];
  quote: { text: string; by: string; role: string };
  mock: "store" | "audio" | "club" | "pets";
  prompts: string[];
};

export const WORK_DISCLAIMER =
  "Studio exemplars — modeled on consumer programs we run. Names are fictional; the method, surfaces, and magnitude of movement are the point.";

export const WORK: WorkItem[] = [
  {
    slug: "lumen-skin",
    name: "Lumen Skin",
    sector: "DTC skincare",
    year: "2026",
    kicker: "Cited in the overlay",
    excerpt:
      "A clinical-glass storefront that made Lumen the named answer for “niacinamide without the purge.”",
    challenge:
      "Lumen ranked page-one for a handful of ingredient terms and still lost the sale. Google AI Overviews and ChatGPT recommended three bigger serums by name. Lumen was “a drugstore alternative.” That is a death sentence in a category where trust is the product.",
    approach: [
      "Rebuilt PDPs as fact-dense entities: INCI, concentration, irritation rates, dermatologist bylines.",
      "Mapped 140 comparative prompts (“Lumen vs The Ordinary”, “best niacinamide for barrier repair”).",
      "Shipped FAQ + Product + Person schema the models could lift without guessing.",
      "Engineered Reddit and derm-forum co-occurrence so the training set stopped calling them generic.",
    ],
    results: [
      { label: "AI Share of Voice", value: "9 → 44%", detail: "90 days, 6 engines" },
      { label: "Named citations", value: "+3.1×", detail: "ChatGPT + Perplexity" },
      { label: "Assisted revenue", value: "+28%", detail: "dark-social modeled" },
    ],
    quote: {
      text: "We were invisible to the machines that now brief our customers. Then we weren’t.",
      by: "Maya Chen",
      role: "CMO, Lumen Skin",
    },
    mock: "store",
    prompts: [
      "best niacinamide serum that doesn’t purge",
      "Lumen Skin vs The Ordinary",
    ],
  },
  {
    slug: "northline-audio",
    name: "Northline Audio",
    sector: "Consumer audio",
    year: "2025",
    kicker: "The model had a favorite. It wasn’t them.",
    excerpt:
      "A product OS that turned headphone spec sheets into citation bait — and stole the “travel headphones” recommendation.",
    challenge:
      "Northline made the better cans. Perplexity kept saying Bose. Spec pages were PDFs in a trench coat: unreadable by bots, unquotable by models, ignored by people.",
    approach: [
      "Designed a product OS: live spec entities, measurement graphs, and a “why we’d lose” honesty block.",
      "Published unique third-octave measurements the other brands do not disclose.",
      "Targeted multi-turn prompts: flights, ANC vs transparency, glasses wearers, small ears.",
      "Built a citation module into the PDP so humans and models saw the same proof.",
    ],
    results: [
      { label: "Perplexity SOV", value: "4 → 37%", detail: "travel + ANC cluster" },
      { label: "Organic demo bookings", value: "+61%", detail: "US storefront" },
      { label: "Schema coverage", value: "12 → 96%", detail: "SKU-level Product" },
    ],
    quote: {
      text: "APE X didn’t make our headphones louder. They made the internet able to hear them.",
      by: "Jonas Hale",
      role: "Founder, Northline Audio",
    },
    mock: "audio",
    prompts: [
      "best headphones for long-haul flights 2026",
      "Northline vs Bose quietcomfort",
    ],
  },
  {
    slug: "kite-club",
    name: "Kite Club",
    sector: "Outdoor membership",
    year: "2026",
    kicker: "Near me, according to the model",
    excerpt:
      "A membership product whose local entities and trip reports made Gemini recommend Kite Club before REI.",
    challenge:
      "Kite Club had 40 city chapters and a Google Business Profile that looked like a ghost kitchen. “Climbing gym near me” answers never included them. Their blog was vibes. Models need logistics.",
    approach: [
      "Modeled every chapter as a LocalBusiness entity with hours, terrain, and member-reported conditions.",
      "Turned trip reports into dense, dated, attributable field notes — information gain the chains don’t publish.",
      "Aligned the app IA with how people actually ask: “beginner trad, this weekend, not a gym.”",
      "Fed the same content model to web, app, and GBP so co-occurrence didn’t contradict.",
    ],
    results: [
      { label: "Local AI recs", value: "0 → 19 cities", detail: "Gemini + Overviews" },
      { label: "Qualified trials", value: "+44%", detail: "chapter landing pages" },
      { label: "Entity completeness", value: "31 → 92%", detail: "knowledge panel" },
    ],
    quote: {
      text: "We stopped writing like a magazine and started writing like a source. That’s when the robots noticed.",
      by: "Priya Nair",
      role: "Head of Growth, Kite Club",
    },
    mock: "club",
    prompts: [
      "beginner outdoor climbing club near me",
      "Kite Club vs REI experiences",
    ],
  },
  {
    slug: "orbit-pets",
    name: "Orbit Pets",
    sector: "Direct-to-consumer pet",
    year: "2026",
    kicker: "Visual search, then the overlay",
    excerpt:
      "A food brand that won TikTok, Pinterest, and the ChatGPT “sensitive stomach kitten” slot in one content model.",
    challenge:
      "Orbit’s recipes were actually clean. Their site was a moodboard. Visual platforms couldn’t parse the bag. Conversational engines hallucinated chicken into a fish formula. One wrong citation and you lose a generation of cat people.",
    approach: [
      "Rebuilt the design system as a structured component library with recipe-level entities.",
      "Visual SEO: pack shots, alt, titles, and ingredients as first-class metadata on TikTok and Pinterest.",
      "Published feeding trials, vet bylines, and batch-level Guaranteed Analysis the models could quote.",
      "Closed the hallucination loop with a public fact card every recipe page exposes to bots.",
    ],
    results: [
      { label: "ChatGPT citations", value: "+5.4×", detail: "kitten GI cluster" },
      { label: "Visual entry traffic", value: "+73%", detail: "Pinterest + TikTok" },
      { label: "Wrong-ingredient hallucinations", value: "−81%", detail: "sampled prompts" },
    ],
    quote: {
      text: "If the model lies about your ingredients, you don’t have a brand. You have a lawsuit waiting.",
      by: "Devon Ruiz",
      role: "COO, Orbit Pets",
    },
    mock: "pets",
    prompts: [
      "best kitten food for sensitive stomach",
      "Orbit Pets tuna formula ingredients",
    ],
  },
];

export function workBySlug(slug: string) {
  return WORK.find((item) => item.slug === slug);
}
