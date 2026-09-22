import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import { ARTICLES, RESOURCE_FAQS } from "@/lib/resources";
import { SITE } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: `Resources — ${SITE.name}` },
      {
        name: "description",
        content:
          "APE X writing on AEO, GEO, SEO, schema, and how consumer brands get cited in ChatGPT, Perplexity, Gemini, and Google AI Overviews. By Christopher Kenreigh.",
      },
    ],
  }),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        kicker="Resources"
        title="Writing the models can cite. Humans can too."
        dek="Fact-dense notes from the studio. Authored by Christopher Kenreigh. Updated when the engines move."
      />
      <section className="px-5 pb-10 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to="/resources/$slug"
              params={{ slug: article.slug }}
              className="glass specular flex flex-col rounded-3xl p-6 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <div className="text-xs text-subtle">
                  {article.kicker} · {article.readMinutes} min · {SITE.founder.name}
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold">{article.title}</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">{article.dek}</p>
              </div>
              <div className="mt-4 text-sm text-subtle sm:mt-0">{article.updated}</div>
            </Link>
          ))}
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="mt-4">
            {RESOURCE_FAQS.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
