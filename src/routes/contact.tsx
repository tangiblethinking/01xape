import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      {
        name: "description",
        content: `Contact APE X. We do not take cold intro calls. Run the Discovery Audit first. ${SITE.email}`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="We don’t do cold intros."
        dek="A requisite before any conversation is the Discovery Audit. That’s how we show up prepared — and how you find out if the machines already prefer someone else."
      />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl glass specular rounded-3xl p-6 sm:p-10">
          <p className="text-muted">
            Email for existing work and press:{" "}
            <a className="text-foreground underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="mt-3 text-sm text-subtle">
            {SITE.name} · {SITE.domain} · Founded by {SITE.founder.name} · Global,
            USA focus
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/audit">Get Your Discovery Audit</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
