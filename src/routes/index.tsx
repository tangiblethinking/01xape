import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { AskTheModel } from "@/components/exemplars/AskTheModel";
import { faqJsonLd, orgJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { ENGINES, SITE } from "@/lib/site";
import { SERVICE_BUCKETS } from "@/lib/services";
import { ARTICLES, RESOURCE_FAQS } from "@/lib/resources";
import { WORK, WORK_DISCLAIMER } from "@/lib/work";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Let your customers find you` },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd data={[orgJsonLd(), websiteJsonLd(), faqJsonLd()]} />

      <section className="relative overflow-hidden px-5 pt-4 pb-16 sm:px-8 sm:pt-8 sm:pb-24">
        <BrandMark
          variant="x"
          className="pointer-events-none absolute top-8 -left-4 h-40 w-28 opacity-20 sm:h-56 sm:w-40"
          alt=""
        />
        <div className="relative mx-auto max-w-6xl">
          <img
            src="/brand/mascot-cinematic.jpg"
            alt=""
            aria-hidden="true"
            className="mask-fade-left pointer-events-none absolute top-[-4.5rem] left-[min(36rem,52%)] hidden h-[44rem] w-auto max-w-none invert contrast-125 brightness-110 mix-blend-multiply sm:block dark:invert-0 dark:brightness-125 dark:contrast-125 dark:mix-blend-screen"
          />
          <p className="reveal text-xs font-medium tracking-[0.22em] text-muted uppercase">
            AEO · GEO · SEO · Experience design
          </p>
          <h1 className="reveal reveal-d1 mt-5 max-w-5xl font-display text-[2.35rem] leading-[1.16] font-extrabold tracking-[-0.012em] sm:text-6xl lg:text-7xl">
            When buyers ask AI for recommendations, does your brand show up—or
            your competitors?
          </h1>
          <p className="reveal reveal-d2 mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {SITE.tagline} {SITE.positioning} In the overlay. In ChatGPT. In the
            answer that happens before the click.
          </p>
          <div className="reveal reveal-d3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link to="/audit">
                Get Your Discovery Audit <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/work">See the work</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-border py-4">
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max gap-10 px-6 text-xs font-medium tracking-[0.18em] text-subtle uppercase">
            {[...ENGINES, ...ENGINES].map((engine, i) => (
              <span key={`${engine}-${i}`} className="flex items-center gap-10">
                {engine}
                <BrandMark variant="x" className="h-4 w-3 opacity-50" alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <AskTheModel />
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                Services
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">
                Discovery, engineered.
              </h2>
            </div>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/services">All services</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SERVICE_BUCKETS.map((bucket) => (
              <Link
                key={bucket.slug}
                to={bucket.href}
                className="glass specular group rounded-3xl p-6 transition-[box-shadow,transform] duration-200 hover:shadow-glass-hover"
              >
                <div className="text-xs tracking-[0.16em] text-subtle uppercase">
                  {bucket.kicker}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  {bucket.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {bucket.dek}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  Open <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            Case studies
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">
            Client products, in the browser.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-subtle">{WORK_DISCLAIMER}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {WORK.map((item) => (
              <Link
                key={item.slug}
                to="/work/$slug"
                params={{ slug: item.slug }}
                className="glass specular rounded-3xl p-6"
              >
                <div className="flex items-center justify-between text-xs text-subtle">
                  <span>{item.sector}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
                <div className="mt-5 flex gap-6">
                  {item.results.slice(0, 2).map((result) => (
                    <div key={result.label}>
                      <div className="font-mono text-lg tabular-nums">
                        {result.value}
                      </div>
                      <div className="text-xs text-subtle">{result.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8">
        <BrandMark
          variant="icon"
          className="pointer-events-none absolute right-0 bottom-0 h-80 w-64 opacity-20"
          alt=""
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Why APE X
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">
              Apex ape. Unknown variable.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Humans are the current apex ape. We are also the first to know
              something hungrier is already in the room. The X is that
              variable — the next iteration, the model that answers before a
              homepage ever loads.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              APE X exists for brands that intend to still be named after that
              shift. Not prettier decks. Citations.
            </p>
            <p className="mt-6 text-sm text-subtle">
              Founded by {SITE.founder.name}.
            </p>
          </div>
          <div className="glass specular rounded-3xl p-6 sm:p-8">
            <p className="text-xs tracking-[0.16em] text-subtle uppercase">
              Entry offer
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              AI Visibility & Growth Blueprint
            </h3>
            <p className="mt-3 text-sm text-muted">
              30–45 days. Audit, prompt mining, competitor gaps, technical and
              content blueprint. $8,500–$22,000. The paid trial before a
              retainer.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link to="/audit">Start with the audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold tracking-[-0.012em]">
              Resources
            </h2>
            <Link to="/resources" className="text-sm text-muted hover:text-foreground">
              All writing
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to="/resources/$slug"
                params={{ slug: article.slug }}
                className="rounded-3xl border border-border p-5"
              >
                <div className="text-xs text-subtle">{article.kicker}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{article.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-[-0.012em]">
            Direct answers
          </h2>
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
