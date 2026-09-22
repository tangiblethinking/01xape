import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  GOALS,
  INDUSTRIES,
  SCAN_STEPS,
  bandForOverall,
  gapsFor,
  hostFromUrl,
  isValidHttpUrl,
  normalizeUrl,
  saveLead,
  scoreDomain,
  SCORE_META,
  type AuditScores,
} from "@/lib/audit";
import { cn } from "@/lib/utils";

type Step = "url" | "scan" | "snapshot" | "context" | "reach" | "done";

export function AuditWizard({ initialUrl = "" }: { initialUrl?: string }) {
  const [step, setStep] = useState<Step>(initialUrl ? "scan" : "url");
  const [url, setUrl] = useState(initialUrl);
  const [urlError, setUrlError] = useState("");
  const [scanIndex, setScanIndex] = useState(0);
  const [scores, setScores] = useState<AuditScores | null>(null);
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState<string>(INDUSTRIES[0]);
  const [competitor, setCompetitor] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [windowPref, setWindowPref] = useState("Anytime in the next 48 hours");
  const [submitError, setSubmitError] = useState("");

  const host = hostFromUrl(url);

  useEffect(() => {
    if (step !== "scan") return;
    setScanIndex(0);
    const timers: number[] = [];
    SCAN_STEPS.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => {
          setScanIndex(i + 1);
          if (i === SCAN_STEPS.length - 1) {
            const next = scoreDomain(url);
            setScores(next);
            setStep("snapshot");
          }
        }, 520 * (i + 1)),
      );
    });
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [step, url]);

  function startScan() {
    if (!isValidHttpUrl(url)) {
      setUrlError("Paste a real http(s) URL. That’s the whole point.");
      return;
    }
    setUrlError("");
    setUrl(normalizeUrl(url));
    setStep("scan");
  }

  const band = scores ? bandForOverall(scores.overall) : null;
  const progress =
    step === "url"
      ? 8
      : step === "scan"
        ? 18 + (scanIndex / SCAN_STEPS.length) * 30
        : step === "snapshot"
          ? 55
          : step === "context"
            ? 72
            : step === "reach"
              ? 88
              : 100;

  const gaps = useMemo(
    () => (scores ? gapsFor(scores, competitor) : []),
    [scores, competitor],
  );

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
  }

  function submit() {
    if (!company.trim() || !competitor.trim()) {
      setSubmitError("Company and closest competitor. No theater.");
      setStep("context");
      return;
    }
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError("Name and a real email so we can send the confirmation.");
      setStep("reach");
      return;
    }
    if (!scores) return;
    saveLead({
      url: normalizeUrl(url),
      host,
      company: company.trim(),
      industry,
      competitor: competitor.trim(),
      goals,
      name: name.trim(),
      email: email.trim(),
      window: windowPref,
      scores,
      submittedAt: new Date().toISOString(),
    });
    setSubmitError("");
    setStep("done");
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-6 flex items-center justify-between text-xs tracking-[0.16em] text-subtle uppercase">
        <span>Discovery Audit</span>
        <span className="tabular-nums">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="mb-8" />

      {step === "url" && (
        <div className="reveal">
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            Paste the site. We’ll tell you if the machines already have a favorite.
          </h1>
          <p className="mt-4 text-muted">
            This snapshot is modeled from public patterns. The human blueprint
            lands in 24–48 hours. No cold call without this.
          </p>
          <div className="mt-8">
            <Label htmlFor="url">Website</Label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Input
                id="url"
                value={url}
                inputMode="url"
                autoComplete="url"
                placeholder="https://yourbrand.com"
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") startScan();
                }}
              />
              <Button size="lg" onClick={startScan} className="sm:w-auto">
                Run snapshot <ArrowRight className="size-4" />
              </Button>
            </div>
            {urlError ? (
              <p className="mt-2 text-sm text-heat">{urlError}</p>
            ) : null}
          </div>
        </div>
      )}

      {step === "scan" && (
        <div className="glass specular relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="scan-line pointer-events-none absolute inset-x-8 top-0 h-24" />
          <p className="font-mono text-xs text-subtle">{host || "scanning"}</p>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Reading the public graph…
          </h2>
          <ul className="mt-6 space-y-3">
            {SCAN_STEPS.map((item, i) => {
              const done = i < scanIndex;
              const active = i === scanIndex;
              return (
                <li
                  key={item.id}
                  className={cn(
                    "flex items-center gap-3 text-sm",
                    done && "text-foreground",
                    active && "text-foreground",
                    !done && !active && "text-subtle",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-7 items-center justify-center rounded-full",
                      done ? "bg-primary text-primary-foreground" : "bg-foreground/10",
                    )}
                  >
                    {done ? <Check className="size-3.5" /> : <span className="size-1.5 rounded-full bg-current" />}
                  </span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {step === "snapshot" && scores && band && (
        <div className="reveal">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">
            Modeled snapshot · {host}
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.04em]">
            {scores.overall}
            <span className="text-xl text-muted"> / 100</span>
          </h2>
          <p className="mt-2 text-lg text-muted">{band.label}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SCORE_META.map((meta) => (
              <div key={meta.key} className="glass rounded-2xl p-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium">{meta.label}</span>
                  <span className="font-mono text-sm tabular-nums">
                    {scores[meta.key]}
                  </span>
                </div>
                <Progress value={scores[meta.key]} className="mt-3" />
                <p className="mt-2 text-xs text-subtle">{meta.copy}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {gaps.map((gap) => (
              <li key={gap}>— {gap}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-subtle">
            Preview model, not the paid blueprint. Next we need context so the
            human pass isn’t generic.
          </p>
          <Button size="lg" className="mt-6" onClick={() => setStep("context")}>
            Continue <ArrowRight className="size-4" />
          </Button>
        </div>
      )}

      {step === "context" && (
        <div className="reveal space-y-5">
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em]">
            Who are we unseating?
          </h2>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              className="mt-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Goods"
            />
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-2 flex h-12 w-full rounded-xl bg-foreground/6 px-4 text-base shadow-glass outline-none"
            >
              {INDUSTRIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="competitor">Closest competitor</Label>
            <Input
              id="competitor"
              className="mt-2"
              value={competitor}
              onChange={(e) => setCompetitor(e.target.value)}
              placeholder="The brand the models already love"
            />
          </div>
          <div>
            <Label>Goals</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {GOALS.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  className={cn(
                    "min-h-11 rounded-full px-3.5 text-sm",
                    goals.includes(goal)
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted",
                  )}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Anything else</Label>
            <Textarea
              id="notes"
              className="mt-2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Markets, SKUs, a launch date, a wound."
            />
          </div>
          {submitError ? (
            <p className="text-sm text-heat">{submitError}</p>
          ) : null}
          <Button size="lg" onClick={() => setStep("reach")}>
            How we reach you <ArrowRight className="size-4" />
          </Button>
        </div>
      )}

      {step === "reach" && (
        <div className="reveal space-y-5">
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em]">
            Where the blueprint goes.
          </h2>
          <div>
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              className="mt-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              className="mt-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <Label htmlFor="window">Preferred window</Label>
            <select
              id="window"
              value={windowPref}
              onChange={(e) => setWindowPref(e.target.value)}
              className="mt-2 flex h-12 w-full rounded-xl bg-foreground/6 px-4 text-base shadow-glass outline-none"
            >
              <option>Anytime in the next 48 hours</option>
              <option>Weekday mornings (US)</option>
              <option>Weekday afternoons (US)</option>
              <option>I’ll reply to the confirmation</option>
            </select>
          </div>
          {submitError ? (
            <p className="text-sm text-heat">{submitError}</p>
          ) : null}
          <Button size="lg" onClick={submit}>
            Send snapshot & request blueprint
          </Button>
        </div>
      )}

      {step === "done" && (
        <div className="reveal glass specular rounded-3xl p-6 sm:p-10">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">
            Confirmation
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.04em]">
            We have it.
          </h2>
          <p className="mt-4 text-muted">
            Check {email}. Expect a confirmation now and a human follow-up from
            APE X within 24–48 hours. The modeled snapshot is a teaser — the
            blueprint is the work.
          </p>
          <p className="mt-3 text-sm text-subtle">
            {company} vs {competitor} · {host}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/methodology">See the method</Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/work">Case studies</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
