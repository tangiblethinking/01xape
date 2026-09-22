import { createFileRoute } from "@tanstack/react-router";
import { AuditWizard } from "@/components/audit/AuditWizard";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: `Discovery Audit — ${SITE.name}` },
      {
        name: "description",
        content:
          "Run the APE X Discovery Audit. A modeled AI visibility snapshot, then a 24–48 hour human follow-up. Required before any conversation.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): { url?: string } => {
    const url = typeof search.url === "string" ? search.url : undefined;
    return url ? { url } : {};
  },
  component: AuditPage,
});

function AuditPage() {
  const { url } = Route.useSearch();
  return (
    <section className="px-5 py-6 pb-24 sm:px-8 sm:py-10">
      <JsonLd
        data={serviceJsonLd(
          "APE X Discovery Audit",
          "Modeled AI visibility snapshot and entry point to the AI Visibility & Growth Blueprint.",
          `${SITE.url}/audit`,
        )}
      />
      <AuditWizard initialUrl={url ?? ""} />
    </section>
  );
}
