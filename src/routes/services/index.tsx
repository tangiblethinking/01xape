import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { RESEARCH_BUCKET, RETAINER, SERVICE_BUCKETS, SERVICE_OFFERS } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: `Services — ${SITE.name}` },
      {
        name: "description",
        content:
          "APE X services: AEO, GEO, SEO, research audits, digital product UX, UI systems, brand entity, and discovery retainers for consumer brands.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={[
          orgJsonLd(),
          serviceJsonLd(
            "APE X services",
            "Answer Engine Optimization, Generative Engine Optimization, and SEO for consumer brands.",
            `${SITE.url}/services`,
          ),
        ]}
      />
      <PageHero
        kicker="Services"
        title="If they cannot find you, the rest of the stack is cosplay."
        dek="AI search, technical SEO, and content architecture — plus the research, product, entity, and retainer work that keeps citations after the algorithm moves."
      >
        <Button asChild size="lg">
          <Link to="/audit">Get Your Discovery Audit</Link>
        </Button>
      </PageHero>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {SERVICE_BUCKETS.map((bucket) => (
            <Link
              key={bucket.slug}
              to={bucket.href}
              className="glass specular rounded-3xl p-6"
            >
              <div className="text-xs tracking-[0.16em] text-subtle uppercase">
                {bucket.kicker}
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold">{bucket.title}</h2>
              <p className="mt-3 text-sm text-muted">{bucket.answer}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {bucket.bullets.map((b) => (
                  <li key={b}>— {b}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em]">
            {RESEARCH_BUCKET.title}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">{RESEARCH_BUCKET.dek}</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {SERVICE_OFFERS.map((offer) => (
              <article key={offer.id} className="rounded-2xl border border-border p-5">
                <h3 className="font-medium">{offer.name}</h3>
                <p className="mt-2 text-sm text-muted">{offer.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl glass specular rounded-3xl p-6 sm:p-10">
          <h2 className="font-display text-3xl font-bold">{RETAINER.title}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {RETAINER.items.map((item) => (
              <li key={item} className="text-muted">
                — {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-subtle">
            Typical retainer $4,000–$12,000 / month. Six-month minimum — indexing
            and authority are not a sprint.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link to="/pricing">Pricing</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
