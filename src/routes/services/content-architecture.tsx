import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/jsonld";
import { SERVICE_BUCKETS, SERVICE_OFFERS } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/content-architecture")({
  head: () => ({
    meta: [
      { title: `Content Architecture | ${SITE.name}` },
      { name: "description", content: SERVICE_BUCKETS[2].answer },
    ],
  }),
  component: ContentArchitecturePage,
});

function ContentArchitecturePage() {
  const bucket = SERVICE_BUCKETS[2];
  const offers = SERVICE_OFFERS.filter(
    (o) =>
      o.bucket === "content-architecture" ||
      o.bucket === "brand" ||
      o.bucket === "product",
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
      </section>
    </>
  );
}
