import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/jsonld";
import { SERVICE_BUCKETS, SERVICE_OFFERS } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      { title: `Technical SEO | ${SITE.name}` },
      { name: "description", content: SERVICE_BUCKETS[1].answer },
    ],
  }),
  component: TechnicalSeoPage,
});

function TechnicalSeoPage() {
  const bucket = SERVICE_BUCKETS[1];
  const offers = SERVICE_OFFERS.filter(
    (o) => o.bucket === "technical-seo" || o.bucket === "web",
  );
  return (
    <>
      <JsonLd data={serviceJsonLd(bucket.title, bucket.answer, `${SITE.url}${bucket.href}`)} />
      <PageHero kicker={bucket.kicker} title={bucket.title} dek={bucket.answer}>
        <Button asChild size="lg">
          <Link to="/audit">Get Your Discovery Audit</Link>
        </Button>
      </PageHero>
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.id} className="glass rounded-3xl p-6">
              <h2 className="font-display text-xl font-bold">{offer.name}</h2>
              <p className="mt-3 text-sm text-muted">{offer.copy}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-border p-6">
          <h2 className="font-display text-2xl font-bold">
            If the bot cannot fetch it, the model cannot cite it.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            We ship semantic HTML, JSON-LD in the first response, render paths
            that don’t depend on a client-only shell, and Core Web Vitals that
            keep crawl budget on the pages that actually earn citations.
          </p>
        </div>
      </section>
    </>
  );
}
