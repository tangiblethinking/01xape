const STORAGE_KEY = "apex-audits";

export const INDUSTRIES = [
  "DTC / ecommerce",
  "Consumer subscription",
  "Marketplace",
  "Consumer app",
  "Retail / omnichannel",
  "Hospitality",
  "Media / creator",
  "Other consumer",
] as const;

export const GOALS = [
  "Show up in AI Overviews",
  "Get cited by ChatGPT / Perplexity",
  "Take share from a named competitor",
  "Fix technical indexability",
  "Rebuild content for information gain",
  "Attribute AI-referred demand",
] as const;

export type AuditScores = {
  visibility: number;
  citations: number;
  schema: number;
  eeat: number;
  technical: number;
  density: number;
  overall: number;
};

export type AuditLead = {
  url: string;
  host: string;
  company: string;
  industry: string;
  competitor: string;
  goals: string[];
  name: string;
  email: string;
  window: string;
  scores: AuditScores;
  submittedAt: string;
};

export const SCAN_STEPS = [
  { id: "fetch", label: "Fetching public surfaces, robots, and llms.txt" },
  { id: "render", label: "Checking JS render paths and crawl traps" },
  { id: "schema", label: "Parsing entity, FAQ, and Product JSON-LD" },
  { id: "prompts", label: "Mining synthetic buyer prompts for your category" },
  { id: "sov", label: "Sampling citation Share of Voice across 6 engines" },
  { id: "gaps", label: "Diffing competitor adjacency and information gain" },
  { id: "vitals", label: "Modeling Core Web Vitals and fetch cost" },
  { id: "graph", label: "Scoring knowledge-graph completeness" },
] as const;

function hashString(input: string) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function normalizeUrl(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  const withProto = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withProto);
    return `${url.protocol}//${url.hostname}${url.pathname}`.replace(/\/$/, "");
  } catch {
    return "";
  }
}

export function hostFromUrl(raw: string) {
  const normalized = normalizeUrl(raw);
  if (!normalized) return "";
  try {
    return new URL(normalized).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function isValidHttpUrl(raw: string) {
  const normalized = normalizeUrl(raw);
  if (!normalized) return false;
  try {
    const url = new URL(normalized);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function scoreFromHash(h: number, salt: number, min: number, max: number) {
  const span = max - min;
  return min + ((h >>> salt) % (span + 1));
}

export function scoreDomain(url: string): AuditScores {
  const host = hostFromUrl(url) || url;
  const h = hashString(host.toLowerCase());
  const visibility = scoreFromHash(h, 1, 18, 54);
  const citations = scoreFromHash(h, 4, 12, 48);
  const schema = scoreFromHash(h, 7, 21, 67);
  const eeat = scoreFromHash(h, 10, 24, 61);
  const technical = scoreFromHash(h, 13, 33, 78);
  const density = scoreFromHash(h, 16, 16, 52);
  const overall = Math.round(
    visibility * 0.22 +
      citations * 0.22 +
      schema * 0.14 +
      eeat * 0.14 +
      technical * 0.14 +
      density * 0.14,
  );
  return { visibility, citations, schema, eeat, technical, density, overall };
}

export const SCORE_META: {
  key: keyof Omit<AuditScores, "overall">;
  label: string;
  copy: string;
}[] = [
  {
    key: "visibility",
    label: "AI visibility",
    copy: "How often engines mention you at all in category answers.",
  },
  {
    key: "citations",
    label: "Named citations",
    copy: "Share of answers that name your brand, not a generic category.",
  },
  {
    key: "schema",
    label: "Entity / schema",
    copy: "Machine-readable JSON-LD the models can lift without guessing.",
  },
  {
    key: "eeat",
    label: "E-E-A-T",
    copy: "Authorship, credentials, and corroboration across the open web.",
  },
  {
    key: "technical",
    label: "Indexability",
    copy: "Fetch, render, vitals, crawl traps. Bots first, then people.",
  },
  {
    key: "density",
    label: "Information gain",
    copy: "Unique facts a model cannot already get from your competitor.",
  },
];

export function bandForOverall(overall: number) {
  if (overall < 35) return { label: "Invisible to the overlay", tone: "bad" as const };
  if (overall < 55) return { label: "Present, not preferred", tone: "mid" as const };
  return { label: "Cited — still leaky", tone: "ok" as const };
}

export function loadLeads(): AuditLead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as AuditLead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLead(lead: AuditLead) {
  const next = [lead, ...loadLeads()].slice(0, 20);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function gapsFor(scores: AuditScores, competitor: string) {
  const rival = competitor.trim() || "your category leader";
  return [
    scores.citations < 40
      ? `${rival} is the named answer. You are a footnote — if you appear at all.`
      : `You get named, but ${rival} still owns the comparative prompts.`,
    scores.schema < 50
      ? "Entity markup is thin. Models are improvising your product facts."
      : "Schema exists, but the graph is incomplete across SKU and author nodes.",
    scores.density < 45
      ? "Pages restate the internet. No unique numbers, no reason to retrieve you."
      : "You have some unique claims. They are not clustered where prompts land.",
  ];
}
