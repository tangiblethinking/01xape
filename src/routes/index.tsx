import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { AskTheModel } from "@/components/exemplars/AskTheModel";
import { faqJsonLd, orgJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* HOMEPAGE COPY — edit this file */

const title = "APE X — Let your customers find you";
const description =
  "APE X is a software experience and design studio that engineers Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and SEO so consumer brands get cited, recommended, and chosen — in Google, ChatGPT, Perplexity, Gemini, and every overlay that answers before a click.";
const kicker = "AEO · GEO · SEO · Experience design";
const headline = "When buyers ask AI for recommendations, does your brand show up—or your competitors?";
const subhead = "Let your customers find you. Experience design that meets customers where they are. In the overlay. In ChatGPT. In the answer that happens before the click.";
const ctaPrimary = "Get Your Discovery Audit";
const ctaSecondary = "See the work";
const engines = ["Google AI Overviews","ChatGPT","Perplexity","Gemini","Copilot","You.com","Meta AI","Apple Intelligence"];
const servicesKicker = "Services";
const servicesTitle = "Discovery, engineered.";
const servicesAll = "All services";
const services = [
  { href: "/services/ai-search", kicker: "AEO · GEO · SEO", title: "AI Search", dek: "Show up when the model answers — not after the click is already gone." },
  { href: "/services/technical-seo", kicker: "Indexability", title: "Technical SEO", dek: "If the bot cannot fetch it, the model cannot cite it." },
  { href: "/services/content-architecture", kicker: "Information gain", title: "Content Architecture", dek: "Models retrieve dense, unique, attributable facts. We write for that." },
];
const workKicker = "Case studies";
const workTitle = "Client products, in the browser.";
const workDisclaimer = "Studio exemplars — modeled on consumer programs we run. Names are fictional; the method, surfaces, and magnitude of movement are the point.";
const work = [
  { slug: "lumen-skin", name: "Lumen Skin", sector: "DTC skincare 2026", excerpt: "A clinical-glass storefront that made Lumen the named answer for “niacinamide without the purge.”", results: [{ value: "9 → 44%", label: "AI Share of Voice" }, { value: "+3.1×", label: "Named citations" }] },
  { slug: "northline-audio", name: "Northline Audio", sector: "Consumer audio 2025", excerpt: "A product OS that turned headphone spec sheets into citation bait — and stole the “travel headphones” recommendation.", results: [{ value: "4 → 37%", label: "Perplexity SOV" }, { value: "+61%", label: "Organic demo bookings" }] },
  { slug: "kite-club", name: "Kite Club", sector: "Outdoor membership 2026", excerpt: "A membership product whose local entities and trip reports made Gemini recommend Kite Club before REI.", results: [{ value: "0 → 19 cities", label: "Local AI recs" }, { value: "+44%", label: "Qualified trials" }] },
  { slug: "orbit-pets", name: "Orbit Pets", sector: "Direct-to-consumer pet 2026", excerpt: "A food brand that won TikTok, Pinterest, and the ChatGPT “sensitive stomach kitten” slot in one content model.", results: [{ value: "+5.4×", label: "ChatGPT citations" }, { value: "+73%", label: "Visual entry traffic" }] },
];
const whyKicker = "Why APE X";
const whyTitle = "Apex ape. Unknown variable.";
const whyP1 = "Humans are the current apex ape. We are also the first to know something hungrier is already in the room. The X is that variable — the next iteration, the model that answers before a homepage ever loads.";
const whyP2 = "APE X exists for brands that intend to still be named after that shift. Not prettier decks. Citations.";
const whyFounded = "Founded by Christopher Kenreigh.";
const offerKicker = "Entry offer";
const offerTitle = "AI Visibility & Growth Blueprint";
const offerBody = "30–45 days. Audit, prompt mining, competitor gaps, technical and content blueprint. $8,500–$22,000. The paid trial before a retainer.";
const offerCta = "Start with the audit";
const resourcesTitle = "Resources";
const resourcesAll = "All writing";
const resources = [
  { slug: "what-is-aeo", kicker: "Definition", title: "What is Answer Engine Optimization (AEO)?", dek: "AEO is the discipline of becoming the named answer when a buyer asks a machine — not just ranking a blue link they may never click." },
  { slug: "geo-vs-seo-vs-aeo", kicker: "Framework", title: "GEO vs SEO vs AEO — what actually moves revenue", dek: "Three overlapping crafts. One pipeline. Here is how APE X splits the work without splitting the outcome." },
  { slug: "get-cited-in-chatgpt-perplexity", kicker: "Playbook", title: "How brands get cited in ChatGPT and Perplexity", dek: "A field guide to named citations: entities, information gain, corroboration, and the prompts your buyers already use." },
];
const faqTitle = "Direct answers";
const faqs = [
  { q: "What does APE X stand for?", a: "It is a play on apex. Humans are the current apex ape. The X is the unknown variable — the next iteration we can already see coming. We work on the side of the brands that intend to still be named after that shift." },
  { q: "Who is APE X for?", a: "Consumer brands that sell online and need discovery: DTC, subscriptions, marketplaces, consumer apps. If you do not need to be found, we are the wrong room." },
  { q: "Who founded APE X?", a: "Christopher Kenreigh founded APE X. The studio operates globally with a USA focus." },
  { q: "Do I need an audit before a call?", a: "Yes. Run the Discovery Audit on uxapex.com. That is the start of every engagement." },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }] }),
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd data={[orgJsonLd(), websiteJsonLd(), faqJsonLd(faqs)]} />
      <section className="relative overflow-hidden px-5 pt-4 pb-16 sm:px-8 sm:pt-8 sm:pb-24">
        <BrandMark variant="x" className="pointer-events-none absolute top-8 -left-4 h-40 w-28 opacity-20 sm:h-56 sm:w-40" alt="" />
        <div className="relative mx-auto max-w-6xl">
          <img src="/brand/mascot-cinematic-light.png" alt="" aria-hidden="true" className="mask-fade-left pointer-events-none absolute top-[-4.5rem] left-[min(36rem,52%)] hidden h-[44rem] w-auto max-w-none sm:block dark:hidden" />
          <img src="/brand/mascot-cinematic.jpg" alt="" aria-hidden="true" className="mask-fade-left pointer-events-none absolute top-[-4.5rem] left-[min(36rem,52%)] hidden h-[44rem] w-auto max-w-none brightness-125 contrast-125 mix-blend-screen dark:sm:block" />
          <p className="reveal text-xs font-medium tracking-[0.22em] text-muted uppercase">{kicker}</p>
          <h1 className="reveal reveal-d1 mt-5 max-w-5xl font-display text-[2.35rem] leading-[1.16] font-extrabold tracking-[-0.012em] sm:text-6xl lg:text-7xl">{headline}</h1>
          <p className="reveal reveal-d2 mt-6 max-w-xl text-lg text-muted sm:text-xl">{subhead}</p>
          <div className="reveal reveal-d3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl"><Link to="/audit">{ctaPrimary} <ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="glass" size="xl"><Link to="/work">{ctaSecondary}</Link></Button>
          </div>
        </div>
      </section>
      <div className="border-y border-border py-4">
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max gap-10 px-6 text-xs font-medium tracking-[0.18em] text-subtle uppercase">
            {[...engines, ...engines].map((engine, i) => (
              <span key={`${engine}-${i}`} className="flex items-center gap-10">{engine}<BrandMark variant="x" className="h-4 w-3 opacity-50" alt="" /></span>
            ))}
          </div>
        </div>
      </div>
      <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-6xl"><AskTheModel /></div></section>
      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">{servicesKicker}</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">{servicesTitle}</h2>
            </div>
            <Button asChild variant="ghost" className="hidden sm:inline-flex"><Link to="/services">{servicesAll}</Link></Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((bucket) => (
              <Link key={bucket.href} to={bucket.href} className="glass specular group rounded-3xl p-6 transition-[box-shadow,transform] duration-200 hover:shadow-glass-hover">
                <div className="text-xs tracking-[0.16em] text-subtle uppercase">{bucket.kicker}</div>
                <h3 className="mt-3 font-display text-2xl font-bold">{bucket.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{bucket.dek}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">Open <ArrowRight className="size-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">{workKicker}</p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">{workTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm text-subtle">{workDisclaimer}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {work.map((item) => (
              <Link key={item.slug} to="/work/$slug" params={{ slug: item.slug }} className="glass specular rounded-3xl p-6">
                <div className="text-xs text-subtle">{item.sector}</div>
                <h3 className="mt-4 font-display text-2xl font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
                <div className="mt-5 flex gap-6">
                  {item.results.map((result) => (
                    <div key={result.label}>
                      <div className="font-mono text-lg tabular-nums">{result.value}</div>
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
        <BrandMark variant="icon" className="pointer-events-none absolute right-0 bottom-0 h-80 w-64 opacity-20" alt="" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">{whyKicker}</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.012em] sm:text-5xl">{whyTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted">{whyP1}</p>
            <p className="mt-4 leading-relaxed text-muted">{whyP2}</p>
            <p className="mt-6 text-sm text-subtle">{whyFounded}</p>
          </div>
          <div className="glass specular rounded-3xl p-6 sm:p-8">
            <p className="text-xs tracking-[0.16em] text-subtle uppercase">{offerKicker}</p>
            <h3 className="mt-3 font-display text-2xl font-bold">{offerTitle}</h3>
            <p className="mt-3 text-sm text-muted">{offerBody}</p>
            <Button asChild className="mt-6" size="lg"><Link to="/audit">{offerCta}</Link></Button>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold tracking-[-0.012em]">{resourcesTitle}</h2>
            <Link to="/resources" className="text-sm text-muted hover:text-foreground">{resourcesAll}</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {resources.map((article) => (
              <Link key={article.slug} to="/resources/$slug" params={{ slug: article.slug }} className="rounded-3xl border border-border p-5">
                <div className="text-xs text-subtle">{article.kicker}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{article.title}</h3>
                <p className="mt-2 text-sm text-muted">{article.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-[-0.012em]">{faqTitle}</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((item) => (
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
