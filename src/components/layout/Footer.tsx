import { Link } from "@tanstack/react-router";
import { BrandMark, WordmarkText } from "@/components/BrandMark";
import { SITE, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border px-5 pb-28 pt-16 sm:px-8 sm:pb-16">
      <BrandMark
        variant="icon"
        className="pointer-events-none absolute -right-8 -bottom-10 h-[22rem] w-[18rem] opacity-20 sm:h-[28rem] sm:w-[24rem]"
        alt=""
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <BrandMark variant="icon" className="h-10 w-8" />
            <WordmarkText className="text-2xl" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.tagline} {SITE.positioning}
          </p>
          <p className="mt-3 text-sm text-subtle">
            Founded by {SITE.founder.name} · {SITE.email} · {SITE.domain}
          </p>
        </div>
        <div>
          <div className="text-xs font-medium tracking-[0.18em] text-subtle uppercase">
            Studio
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href as "/"} className="text-muted hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/audit" className="text-muted hover:text-foreground">
                Discovery Audit
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-medium tracking-[0.18em] text-subtle uppercase">
            Legal
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted hover:text-foreground">
                Terms
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs text-subtle">
            Global practice. USA focus. English primary.
          </p>
        </div>
      </div>
    </footer>
  );
}
