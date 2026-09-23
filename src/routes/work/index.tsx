import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";

/* CASE STUDIES INDEX COPY — edit in this file */

const title = "Case Studies — APE X";
const description =
  "APE X studio exemplars: consumer brands that moved AI Share of Voice, citations, and discovery across ChatGPT, Perplexity, Gemini, and Google AI Overviews.";
const heroKicker = "Case studies";
const heroTitle = "Play the product. Don’t just read the case.";
const heroDek =
  "Studio exemplars — modeled on consumer programs we run. Names are fictional; the method, surfaces, and magnitude of movement are the point.";

const work = [
  {
    slug: "lumen-skin",
    name: "Lumen Skin",
    sector: "DTC skincare",
    year: "2026",
    kicker: "Cited in the overlay",
    excerpt: "A clinical-glass storefront that made Lumen the named answer for “niacinamide without the purge.”",
    results: [
      { label: "AI Share of Voice", value: "9 → 44%" },
      { label: "Named citations", value: "+3.1×" },
      { label: "Assisted revenue", value: "+28%" },
    ],
  },
  {
    slug: "northline-audio",
    name: "Northline Audio",
    sector: "Consumer audio",
    year: "2025",
    kicker: "The model had a favorite. It wasn’t them.",
    excerpt: "A product OS that turned headphone spec sheets into citation bait — and stole the “travel headphones” recommendation.",
    results: [
      { label: "Perplexity SOV", value: "4 → 37%" },
      { label: "Organic demo bookings", value: "+61%" },
      { label: "Schema coverage", value: "12 → 96%" },
    ],
  },
  {
    slug: "kite-club",
    name: "Kite Club",
    sector: "Outdoor membership",
    year: "2026",
    kicker: "Near me, according to the model",
    excerpt: "A membership product whose local entities and trip reports made Gemini recommend Kite Club before REI.",
    results: [
      { label: "Local AI recs", value: "0 → 19 cities" },
      { label: "Qualified trials", value: "+44%" },
      { label: "Entity completeness", value: "31 → 92%" },
    ],
  },
  {
    slug: "orbit-pets",
    name: "Orbit Pets",
    sector: "Direct-to-consumer pet",
    year: "2026",
    kicker: "Visual search, then the overlay",
    excerpt: "A food brand that won TikTok, Pinterest, and the ChatGPT “sensitive stomach kitten” slot in one content model.",
    results: [
      { label: "ChatGPT citations", value: "+5.4×" },
      { label: "Visual entry traffic", value: "+73%" },
      { label: "Wrong-ingredient hallucinations", value: "−81%" },
    ],
  },
];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <PageHero kicker={heroKicker} title={heroTitle} dek={heroDek} />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {work.map((item) => (
            <Link
              key={item.slug}
              to="/work/$slug"
              params={{ slug: item.slug }}
              className="glass specular rounded-3xl p-6 sm:p-8"
            >
              <div className="flex justify-between text-xs text-subtle">
                <span>{item.sector}</span>
                <span>{item.year}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold">{item.name}</h2>
              <p className="mt-2 text-sm font-medium text-muted">{item.kicker}</p>
              <p className="mt-3 text-sm text-muted">{item.excerpt}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {item.results.map((result) => (
                  <div key={result.label}>
                    <div className="font-mono text-lg tabular-nums">{result.value}</div>
                    <div className="text-[11px] text-subtle">{result.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
