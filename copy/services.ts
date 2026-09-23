export type ServiceBucket = {
  slug: string;
  kicker: string;
  title: string;
  navLabel: string;
  href: string;
  dek: string;
  answer: string;
  bullets: string[];
};

export const SERVICE_BUCKETS: ServiceBucket[] = [
  {
    slug: "ai-search",
    kicker: "AEO · GEO · SEO",
    title: "AI Search",
    navLabel: "AI Search",
    href: "/services/ai-search",
    dek: "Show up when the model answers — not after the click is already gone.",
    answer:
      "APE X engineers fact-dense, structured, citation-ready surfaces so ChatGPT, Perplexity, Gemini, and Google AI Overviews name your brand instead of your competitor.",
    bullets: [
      "Generative knowledge graph & citation optimization",
      "Conversational intent and prompt mapping",
      "Share of Voice across AI engines",
      "PageRank sculpting & off-site authority",
    ],
  },
  {
    slug: "technical-seo",
    kicker: "Indexability",
    title: "Technical SEO",
    navLabel: "Technical SEO",
    href: "/services/technical-seo",
    dek: "If the bot cannot fetch it, the model cannot cite it.",
    answer:
      "We make your architecture machine-legible: JS rendering, schema, Core Web Vitals, crawl budget, and entity JSON-LD that LLMs can parse on the first pass.",
    bullets: [
      "Technical indexability & crawl optimization",
      "Advanced schema & entity architecture",
      "Headless CMS content modeling",
      "WCAG, semantic HTML, conversational UI",
    ],
  },
  {
    slug: "content-architecture",
    kicker: "Information gain",
    title: "Content Architecture",
    navLabel: "Content Architecture",
    href: "/services/content-architecture",
    dek: "Models retrieve dense, unique, attributable facts. We write for that.",
    answer:
      "We expand pages with unique statistics, expert authorship, and high-density facts until they clear the retrieval threshold of the engines your buyers actually use.",
    bullets: [
      "Information gain & fact-density expansion",
      "E-E-A-T and authorship optimization",
      "Search-first navigation architecture",
      "Visual search, ASO, and local entity feeds",
    ],
  },
];

export const SERVICE_OFFERS = [
  { id: "graph", bucket: "ai-search", name: "Generative Knowledge Graph & Citation Optimization", copy: "Engineering fact-dense, structured content to secure brand citations and recommendations in AI Overviews, Perplexity, ChatGPT, and Gemini." },
  { id: "density", bucket: "content-architecture", name: "Information Gain & Fact-Density Expansion", copy: "Upgrading existing pages with unique statistics, expert quotes, and high-density facts to meet the retrieval thresholds of LLMs." },
  { id: "schema", bucket: "technical-seo", name: "Advanced Schema & Entity Architecture", copy: "JSON-LD for FAQ, Business Entity, and Product — translating web architecture into machine-readable structured data." },
  { id: "crawl", bucket: "technical-seo", name: "Technical Indexability & Crawl Optimization", copy: "Site health audits, JavaScript rendering, and Core Web Vitals so fetching is unhindered for every major bot." },
  { id: "intent", bucket: "ai-search", name: "Conversational Intent Mapping", copy: "Aligning architecture and on-page content with multi-turn, long-form conversational buyer prompts." },
  { id: "authority", bucket: "ai-search", name: "PageRank Sculpting & Off-Site Authority", copy: "Internal link architecture and high-authority digital PR that drive domain trust and referral signals." },
  { id: "audit", bucket: "research", name: "Generative Search Visibility Audit", copy: "Baseline Share of Voice, citation frequency, and competitor overlap across major AI engines." },
  { id: "prompts", bucket: "research", name: "Synthetic Query & Prompt Mining", copy: "Reverse-engineering the conversational questions, follow-ups, and comparative prompts buyers actually type." },
  { id: "gaps", bucket: "research", name: "Competitor Gap & Adjacency Analysis", copy: "Where competitors win citations — and the exact information density required to unseat them." },
  { id: "attribution", bucket: "research", name: "Probabilistic Attribution & Dark Social Modeling", copy: "Multi-touch tracking, brand lift, and referral modeling for untracked direct and in-app AI conversions." },
  { id: "dashboard", bucket: "research", name: "Custom AI Visibility Dashboard", copy: "AI-referred traffic, downstream leads, and generative snapshot frequency in one readout." },
  { id: "nav", bucket: "product", name: "Search-First Navigation Architecture", copy: "Journeys and taxonomy that match how searchers branch and filter." },
  { id: "funnels", bucket: "product", name: "Intent-Driven Conversion Funnels", copy: "Onboarding and micro-interactions built for high-intent traffic from AI and search surfaces." },
  { id: "a11y", bucket: "product", name: "WCAG Accessibility & Conversational UI", copy: "Interactive elements that are compliant, machine-readable, and extractable by voice and screen readers." },
  { id: "html", bucket: "web", name: "Semantic HTML5 Web Development", copy: "High-performance architecture optimized for AI bots and traditional crawlers." },
  { id: "cms", bucket: "web", name: "Headless CMS & Content Modeling", copy: "Backend structures that feed front-end interfaces and API-driven search agents." },
  { id: "ds", bucket: "web", name: "Structured Component Libraries", copy: "Modular UI systems that keep accessibility and semantic hierarchy at enterprise scale." },
  { id: "entity", bucket: "brand", name: "Digital Entity Engineering", copy: "Wikidata, knowledge panels, and tier-1 aggregators that build authoritative entity trust." },
  { id: "eeat", bucket: "brand", name: "E-E-A-T & Authorship Optimization", copy: "Verifiable thought-leadership profiles, credentials, and bylines that LLMs require for validation." },
  { id: "cooccur", bucket: "brand", name: "Platform Co-Occurrence Management", copy: "Narrative, sentiment, and authority on Reddit, Quora, and Stack Overflow — corpora the models actually train on." },
  { id: "visual", bucket: "discovery", name: "Visual Search Engine Optimization", copy: "Tagging and metadata for high-intent discovery on YouTube, TikTok, and Pinterest." },
  { id: "local", bucket: "discovery", name: "Multi-Location & Local Entity Management", copy: "Google Business Profiles and localized feeds for hyper-local “near me” AI recommendations." },
  { id: "aso", bucket: "discovery", name: "App Store Optimization", copy: "Keyword and intent work for in-app visibility, category rank, and install velocity." },
] as const;

export const RESEARCH_BUCKET = {
  title: "Research, Intelligence & Audits",
  dek: "We do not guess what the models will say. We measure it, then we change it.",
};

export const RETAINER = {
  title: "Growth Retainers & Strategic Partnerships",
  items: [
    "Ongoing AEO/GEO/SEO managed execution",
    "Algorithmic shift adaptation across Overviews, Perplexity, and major LLMs",
    "Monthly visibility & pipeline reporting",
    "Dedicated growth lead for quarterly roadmaps",
  ],
};
