import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { WORK, WORK_DISCLAIMER } from "@/lib/work";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: `Case Studies — ${SITE.name}` },
      {
        name: "description",
        content:
          "APE X studio exemplars: consumer brands that moved AI Share of Voice, citations, and discovery across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <PageHero
        kicker="Case studies"
        title="Play the product. Don’t just read the case."
        dek={WORK_DISCLAIMER}
      />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {WORK.map((item) => (
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
