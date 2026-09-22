import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Measure the overlay",
    copy: "Share of Voice, citation logs, prompt mining, competitor adjacency. If we have not measured you, we do not get to talk about you.",
  },
  {
    n: "02",
    title: "Make the entity real",
    copy: "Organization, product, author, sameAs. Wikidata and knowledge-panel hygiene so the graph can hold you without guessing.",
  },
  {
    n: "03",
    title: "Raise information gain",
    copy: "Unique numbers, methods, constraints, failure modes. Pages that add a fact the incumbent roundup does not have.",
  },
  {
    n: "04",
    title: "Unblock the fetch",
    copy: "Render, schema in the first HTML, Core Web Vitals, crawl traps. Bots first.",
  },
  {
    n: "05",
    title: "Corroborate in the wild",
    copy: "Co-occurrence on the corpora the models actually sample: specialist press, forums, docs — not generic guest posts.",
  },
  {
    n: "06",
    title: "Defend the citation",
    copy: "Retainer. Algorithms move. We move first. Monthly readouts on AI-referred demand, not vanity traffic.",
  },
];

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: `Methodology — ${SITE.name}` },
      {
        name: "description",
        content:
          "The APE X method: measure AI Share of Voice, engineer entities, raise information gain, unblock fetch, corroborate, and defend citations on retainer.",
      },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <PageHero
        kicker="Methodology"
        title="Six moves. Then we stay in the graph."
        dek="APE X is not a content mill with a new acronym. It is a sequence. Skip a step and the model keeps naming someone else."
      />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="grid gap-3 border-b border-border py-8 sm:grid-cols-[5rem_1fr]"
            >
              <div className="font-mono text-sm text-subtle">{step.n}</div>
              <div>
                <h2 className="font-display text-2xl font-bold">{step.title}</h2>
                <p className="mt-2 text-muted">{step.copy}</p>
              </div>
            </article>
          ))}
          <Button asChild size="lg" className="mt-10">
            <Link to="/audit">Get Your Discovery Audit</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
