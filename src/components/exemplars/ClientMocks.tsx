import { useState } from "react";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/lib/work";

function Frame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass specular overflow-hidden rounded-3xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="ml-2 truncate font-mono text-[11px] text-subtle">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function LumenMock() {
  const [sku, setSku] = useState<"night" | "c" | "barrier">("night");
  const data = {
    night: { name: "Night 10", fact: "10% niacinamide · 0.4% irritation in 12-wk panel" },
    c: { name: "C-Stable", fact: "15% ethylated C · no fragrance · derm-authored" },
    barrier: { name: "Barrier Milk", fact: "Ceramide NP 0.3% · pH 5.2 · quoted in 18 prompts" },
  }[sku];
  return (
    <Frame title="lumen.skin / serum">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-foreground/6 p-6">
          <div className="text-xs tracking-[0.16em] text-subtle uppercase">
            Entity · Product
          </div>
          <div className="mt-3 font-display text-2xl font-bold">{data.name}</div>
          <p className="mt-2 text-sm text-muted">{data.fact}</p>
          <button
            type="button"
            className="mt-5 h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Add — $38
          </button>
        </div>
        <div>
          <div className="text-xs text-subtle">Cited for</div>
          <div className="mt-2 flex flex-col gap-2">
            {(
              [
                ["night", "niacinamide without purge"],
                ["c", "stable vitamin C"],
                ["barrier", "ceramide milk"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setSku(id)}
                className={cn(
                  "min-h-11 rounded-xl px-3 text-left text-sm",
                  sku === id ? "bg-primary text-primary-foreground" : "bg-foreground/6",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function AudioMock() {
  const [anc, setAnc] = useState(72);
  return (
    <Frame title="northline.audio / os">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-display text-xl font-bold">Line-04</div>
          <div className="text-sm text-muted">Travel · glasses-safe hinge</div>
        </div>
        <div className="text-right font-mono text-sm tabular-nums">
          {anc} dB
          <div className="text-[11px] text-subtle">ANC at 200Hz</div>
        </div>
      </div>
      <label className="mt-6 block text-xs text-subtle">
        Transparency mix
        <input
          type="range"
          min={40}
          max={96}
          value={anc}
          onChange={(e) => setAnc(Number(e.target.value))}
          className="mt-2 w-full accent-foreground"
        />
      </label>
      <div className="mt-5 rounded-2xl bg-foreground/6 p-4 text-sm">
        Unique measurement graph the incumbents do not publish. This is the
        information gain — the reason a model has to retrieve Northline instead
        of paraphrasing Bose.
      </div>
    </Frame>
  );
}

function ClubMock() {
  const cities = ["Austin", "Portland", "Denver", "Brooklyn"];
  const [city, setCity] = useState(cities[0]);
  return (
    <Frame title="kite.club / chapters">
      <div className="flex flex-wrap gap-2">
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            className={cn(
              "h-10 rounded-full px-3 text-sm",
              city === c ? "bg-primary text-primary-foreground" : "bg-foreground/8",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-foreground/6 p-4">
          <div className="text-xs text-subtle">LocalBusiness</div>
          <div className="mt-1 font-medium">{city} chapter</div>
          <div className="mt-2 text-sm text-muted">
            Beginner trad · this weekend · not a gym
          </div>
        </div>
        <div className="rounded-2xl bg-foreground/6 p-4">
          <div className="text-xs text-subtle">Gemini rec</div>
          <div className="mt-1 font-medium">Named in “near me”</div>
          <div className="mt-2 text-sm text-muted">
            Hours, terrain, member conditions — logistics, not vibes.
          </div>
        </div>
      </div>
    </Frame>
  );
}

function PetsMock() {
  const [tab, setTab] = useState<"facts" | "visual">("facts");
  return (
    <Frame title="orbitpets.com / tuna-kitten">
      <div className="flex gap-2">
        {(["facts", "visual"] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-10 rounded-full px-4 text-sm capitalize",
              tab === id ? "bg-primary text-primary-foreground" : "bg-foreground/8",
            )}
          >
            {id}
          </button>
        ))}
      </div>
      {tab === "facts" ? (
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-foreground/6 p-3">
            <dt className="text-xs text-subtle">Protein</dt>
            <dd className="font-mono tabular-nums">41%</dd>
          </div>
          <div className="rounded-2xl bg-foreground/6 p-3">
            <dt className="text-xs text-subtle">Chicken</dt>
            <dd>None. Tuna + hydrolyzed pea.</dd>
          </div>
          <div className="col-span-2 rounded-2xl bg-foreground/6 p-3">
            <dt className="text-xs text-subtle">Public fact card</dt>
            <dd className="mt-1 text-muted">
              Exposed to bots so ChatGPT stops inventing chicken in a fish formula.
            </dd>
          </div>
        </dl>
      ) : (
        <div className="mt-4 rounded-2xl bg-foreground/6 p-4 text-sm text-muted">
          Pack-shot metadata, Pinterest titles, TikTok alt — visual search that
          agrees with the entity graph. One content model, three discovery
          surfaces.
        </div>
      )}
    </Frame>
  );
}

export function ClientMock({ type }: { type: WorkItem["mock"] }) {
  if (type === "store") return <LumenMock />;
  if (type === "audio") return <AudioMock />;
  if (type === "club") return <ClubMock />;
  return <PetsMock />;
}
