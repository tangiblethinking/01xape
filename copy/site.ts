export const SITE = {
  name: "APE X",
  domain: "uxapex.com",
  url: "https://uxapex.com",
  email: "hello@uxapex.com",
  founder: {
    name: "Christopher Kenreigh",
    role: "Founder",
  },
  tagline: "Let your customers find you.",
  positioning:
    "Experience design that meets customers where they are.",
  heroOffer:
    "When buyers ask AI and search engines for recommendations, does your brand show up—or your competitors?",
  description:
    "APE X is a software experience and design studio that engineers Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and SEO so consumer brands get cited, recommended, and chosen — in Google, ChatGPT, Perplexity, Gemini, and every overlay that answers before a click.",
  shortDescription:
    "AEO, GEO, and SEO studio. We make sure that when buyers ask AI who to trust, the answer is you.",
} as const;

export const NAV = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "AI Search",
        href: "/services/ai-search",
        hint: "AEO & GEO — citations, overviews, prompts",
      },
      {
        label: "Technical SEO",
        href: "/services/technical-seo",
        hint: "Crawl, render, schema, Core Web Vitals",
      },
      {
        label: "Content Architecture",
        href: "/services/content-architecture",
        hint: "Fact-density, entities, information gain",
      },
    ],
  },
  { label: "Case Studies", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Methodology", href: "/methodology" },
] as const;

export const ENGINES = [
  "Google AI Overviews",
  "ChatGPT",
  "Perplexity",
  "Gemini",
  "Copilot",
  "You.com",
  "Meta AI",
  "Apple Intelligence",
] as const;
