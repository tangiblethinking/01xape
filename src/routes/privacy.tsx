import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy — ${SITE.name}` },
      {
        name: "description",
        content: "Privacy policy for APE X / uxapex.com. How we handle Discovery Audit submissions and site analytics.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy"
        dek={`Last updated September 2026. Operator: ${SITE.name}, founded by ${SITE.founder.name}.`}
        showMascot={false}
      />
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
          <p>
            This site collects what you type into the Discovery Audit: website
            URL, company, industry, competitor, goals, name, email, and a
            preferred contact window. That packet is used to confirm your
            request, complete a human follow-up within 24–48 hours, and — if we
            both proceed — to scope a blueprint or retainer.
          </p>
          <p>
            In this preview environment, submissions are stored locally in your
            browser so you can see the confirmation flow. Production intake is
            processed by {SITE.name} staff and subprocessors needed to host
            email and the website. We do not sell your data. We do not use
            audit contents to train public models.
          </p>
          <p>
            We may keep basic server logs (IP, user agent, pages) for security
            and performance. You can request deletion of your lead packet at{" "}
            {SITE.email}. Do not submit information about children, health,
            or other sensitive categories — we do not need it to run an AEO
            diagnostic.
          </p>
          <p>
            This policy covers {SITE.domain} and the APE X studio brand. Third
            party sites we cite are not ours.
          </p>
        </div>
      </section>
    </>
  );
}
