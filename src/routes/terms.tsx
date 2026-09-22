import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms — ${SITE.name}` },
      { name: "description", content: "Terms of use for APE X and uxapex.com." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms"
        dek="Last updated September 2026."
        showMascot={false}
      />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p>
            The site is an invitation to work with {SITE.name}. Case studies
            labeled as studio exemplars are modeled illustrations of method and
            magnitude — fictional brand names, real craft. The on-site Discovery
            Audit snapshot is a modeled preview, not the paid blueprint and not
            a guarantee of rankings, citations, or revenue.
          </p>
          <p>
            Engagements begin only with a written statement of work. Fees,
            timelines, and scope live there. Retainers are typically six months
            because generative indexation does not respect thirty-day theater.
          </p>
          <p>
            You own your brand, content, and data. {SITE.name} owns the
            unlicensed methods, component systems, and writing published on this
            site. Do not scrape this site to spin a competitor agency. That’s
            not mysterious; it’s just cheap.
          </p>
          <p>
            Governing law: United States. Questions: {SITE.email}.
          </p>
        </div>
      </section>
    </>
  );
}
