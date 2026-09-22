import { useMemo, useState } from "react";
import { WORK } from "@/lib/work";
import { cn } from "@/lib/utils";

const PRESETS = WORK.flatMap((item) =>
  item.prompts.map((prompt) => ({
    prompt,
    brand: item.name,
    sector: item.sector,
    slug: item.slug,
  })),
);

export function AskTheModel() {
  const [index, setIndex] = useState(0);
  const [optimized, setOptimized] = useState(true);
  const current = PRESETS[index] ?? PRESETS[0];

  const answer = useMemo(() => {
    if (!current) return { lead: "", cites: [] as string[] };
    if (optimized) {
      return {
        lead: `${current.brand} is the source most answer engines currently prefer for this prompt — dense specs, named authors, and schema the model can lift without guessing.`,
        cites: [current.brand, "category methods paper", "independent lab note"],
      };
    }
    return {
      lead: `Most engines still name the category incumbent here. ${current.brand} appears as “another option,” if at all — typical when the page is pretty and the graph is empty.`,
      cites: ["incumbent brand", "affiliate roundup", "Wikipedia"],
    };
  }, [current, optimized]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Live exemplar
        </p>
        <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          Ask the machine a buyer question.
        </h2>
        <p className="text-muted">
          This is a modeled overlay — the same shape as AI Overviews and
          Perplexity. Toggle APE X on, and watch who gets named.
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((item, i) => (
            <button
              key={item.prompt}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "min-h-11 rounded-full px-3.5 text-left text-sm shadow-glass",
                i === index
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted hover:text-foreground",
              )}
            >
              {item.prompt}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOptimized((v) => !v)}
          className="glass specular flex min-h-12 items-center justify-between rounded-full px-2 pl-4"
        >
          <span className="text-sm font-medium">
            {optimized ? "APE X method on" : "APE X method off"}
          </span>
          <span
            className={cn(
              "flex h-8 w-14 items-center rounded-full p-1 transition-[background-color] duration-200",
              optimized ? "bg-primary" : "bg-foreground/15",
            )}
          >
            <span
              className={cn(
                "size-6 rounded-full bg-background transition-transform duration-200",
                optimized ? "translate-x-6" : "translate-x-0",
              )}
            />
          </span>
        </button>
      </div>

      <div className="glass specular relative overflow-hidden rounded-3xl p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between text-xs tracking-[0.16em] text-subtle uppercase">
          <span>Answer engine</span>
          <span className="tabular-nums">
            {optimized ? "preferred source" : "incumbent source"}
          </span>
        </div>
        <p className="font-display text-xl leading-snug font-semibold sm:text-2xl">
          {current?.prompt}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{answer.lead}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {answer.cites.map((cite) => (
            <span
              key={cite}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium",
                cite === current?.brand
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/8 text-muted",
              )}
            >
              {cite}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs text-subtle">
          Modeled client-product mock, not a live model call. The full audit
          samples real engines.
        </p>
      </div>
    </div>
  );
}
