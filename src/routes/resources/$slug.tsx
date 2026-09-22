import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { articleBySlug, ARTICLES } from "@/lib/resources";
import { SITE } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Resources"} — ${SITE.name}` },
      { name: "description", content: loaderData?.dek ?? SITE.shortDescription },
      { name: "author", content: SITE.founder.name },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <article className="px-5 py-6 pb-20 sm:px-8">
      <JsonLd data={[articleJsonLd(article.slug), faqJsonLd(article.faqs)]} />
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.18em] text-muted uppercase">
          {article.kicker}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{article.dek}</p>
        <p className="mt-4 text-sm text-subtle">
          {SITE.founder.name} · {SITE.name} · Updated {article.updated} ·{" "}
          {article.readMinutes} min
        </p>
        <div className="glass mt-8 rounded-3xl p-5 text-sm leading-relaxed">
          <strong className="text-foreground">Direct answer. </strong>
          <span className="text-muted">{article.answer}</span>
        </div>
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 space-y-2 text-muted">
                {section.bullets.map((b) => (
                  <li key={b}>— {b}</li>
                ))}
              </ul>
            ) : null}
            {section.pull ? (
              <blockquote className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em]">
                {section.pull}
              </blockquote>
            ) : null}
          </section>
        ))}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="mt-2">
            {article.faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <Button asChild size="lg" className="mt-10">
          <Link to="/audit">Get Your Discovery Audit</Link>
        </Button>
        <div className="mt-16 grid gap-3">
          {more.map((item) => (
            <Link
              key={item.slug}
              to="/resources/$slug"
              params={{ slug: item.slug }}
              className="rounded-2xl border border-border p-4 text-sm"
            >
              <div className="text-xs text-subtle">{item.kicker}</div>
              <div className="font-medium">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
