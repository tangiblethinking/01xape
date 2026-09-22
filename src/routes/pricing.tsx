import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "Why a 6-month retainer minimum?",
    a: "Indexing, corroboration, and co-occurrence lag. A 30-day SEO sprint cannot defend Share of Voice in models that refresh on their own clocks.",
  },
  {
    q: "Is the on-site wizard the paid audit?",
    a: "No. It is a modeled snapshot so we both know the terrain. The AI Visibility & Growth Blueprint is the 30–45 day human deliverable.",
  },
  {
    q: "Do you work outside consumer?",
    a: "If you do not need discovery, we are the wrong room. Consumer brands that sell online are the practice.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: `Pricing — ${SITE.name}` },
      {
        name: "description",
        content:
          "APE X pricing: AI Visibility & Growth Blueprint $8,500–$22,000. Ongoing AEO/GEO/SEO retainers $4,000–$12,000 per month with a 6-month minimum.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [complexity, setComplexity] = useState(40);
  const [heat, setHeat] = useState(55);
  const estimate = useMemo(() => {
    const blueprint = 8500 + Math.round((complexity / 100) * 9000 + (heat / 100) * 4500);
    const retainer = 4000 + Math.round((complexity / 100) * 4500 + (heat / 100) * 3500);
    return {
      blueprint: Math.min(22000, blueprint),
      retainer: Math.min(12000, retainer),
    };
  }, [complexity, heat]);

  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      <PageHero
        kicker="Pricing"
        title="Pay for the blueprint. Keep the citations."
        dek="Two moves. A 30–45 day diagnostic, then a retainer that defends Share of Voice while the models shift."
      />
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          <article className="glass specular rounded-3xl p-6 sm:p-8">
            <p className="text-xs tracking-[0.16em] text-subtle uppercase">
              Entry offer
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold">
              AI Visibility & Growth Blueprint
            </h2>
            <p className="mt-2 font-mono text-2xl tabular-nums">$8,500 – $22,000</p>
            <p className="mt-4 text-sm text-muted">
              Generative search visibility audit, prompt mining, competitor gap
              analysis, technical and content remediation blueprint. 30–45 days.
              The paid trial.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link to="/audit">Start with the audit</Link>
            </Button>
          </article>
          <article className="glass specular rounded-3xl p-6 sm:p-8">
            <p className="text-xs tracking-[0.16em] text-subtle uppercase">
              Core relationship
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold">
              Ongoing AEO / GEO / SEO
            </h2>
            <p className="mt-2 font-mono text-2xl tabular-nums">$4,000 – $12,000 / mo</p>
            <p className="mt-4 text-sm text-muted">
              Density expansion, technical maintenance, entity management,
              co-occurrence, monthly algorithmic adaptation. Six-month minimum.
            </p>
            <Button asChild variant="glass" className="mt-6" size="lg">
              <Link to="/methodology">How we work</Link>
            </Button>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-6xl glass specular rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Fit estimator</h2>
          <p className="mt-2 text-sm text-muted">
            Interactive, not a quote. Site complexity and competitive heat move
            the band. Final numbers follow the audit.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="text-sm">
              Site / catalog complexity · {complexity}
              <input
                type="range"
                min={0}
                max={100}
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="mt-3 w-full accent-foreground"
              />
            </label>
            <label className="text-sm">
              Competitive heat · {heat}
              <input
                type="range"
                min={0}
                max={100}
                value={heat}
                onChange={(e) => setHeat(Number(e.target.value))}
                className="mt-3 w-full accent-foreground"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap gap-8 font-mono tabular-nums">
            <div>
              <div className="text-xs text-subtle">Blueprint</div>
              <div className="text-2xl">${estimate.blueprint.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-subtle">Retainer / mo</div>
              <div className="text-2xl">${estimate.retainer.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((item) => (
            <div key={item.q} className="border-b border-border py-5">
              <h3 className="font-medium">{item.q}</h3>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
