import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ClientMock } from "@/components/exemplars/ClientMocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { WORK, WORK_DISCLAIMER, workBySlug } from "@/lib/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = workBySlug(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Case study"} — ${SITE.name}` },
      { name: "description", content: loaderData?.excerpt ?? SITE.shortDescription },
    ],
  }),
  component: WorkDetail,
});

function WorkDetail() {
  const item = Route.useLoaderData();
  const others = WORK.filter((w) => w.slug !== item.slug).slice(0, 2);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CaseStudy",
          name: item.name,
          description: item.excerpt,
          author: { "@type": "Organization", name: SITE.name },
        }}
      />
      <PageHero kicker={`${item.sector} · ${item.year}`} title={item.name} dek={item.kicker} />
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs text-subtle">{WORK_DISCLAIMER}</p>
            <h2 className="mt-6 font-display text-2xl font-bold">The problem</h2>
            <p className="mt-3 leading-relaxed text-muted">{item.challenge}</p>
            <h2 className="mt-8 font-display text-2xl font-bold">What we built</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {item.approach.map((line) => (
                <li key={line}>— {line}</li>
              ))}
            </ul>
            <blockquote className="mt-10 border-l-2 border-foreground/30 pl-5">
              <p className="font-display text-xl font-semibold">{item.quote.text}</p>
              <footer className="mt-3 text-sm text-subtle">
                {item.quote.by}, {item.quote.role}
              </footer>
            </blockquote>
          </div>
          <div>
            <ClientMock type={item.mock} />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {item.results.map((result) => (
                <div key={result.label} className="glass rounded-2xl p-3">
                  <div className="font-mono text-lg tabular-nums">{result.value}</div>
                  <div className="text-[11px] text-subtle">{result.label}</div>
                  <div className="mt-1 text-[11px] text-muted">{result.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/audit">Get Your Discovery Audit</Link>
          </Button>
          {others.map((other) => (
            <Button key={other.slug} asChild variant="glass" size="lg">
              <Link to="/work/$slug" params={{ slug: other.slug }}>
                {other.name}
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </>
  );
}
