import { Link, useRouterState } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideDock = pathname.startsWith("/audit");

  return (
    <div className="relative min-h-dvh">
      <div className="apex-noise" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="relative pt-28">
        {children}
      </main>
      <Footer />
      <div
        className={cn(
          "fixed inset-x-3 bottom-3 z-40 sm:hidden",
          hideDock && "hidden",
        )}
      >
        <Button asChild size="lg" className="w-full shadow-glass">
          <Link to="/audit">Get Your Discovery Audit</Link>
        </Button>
      </div>
    </div>
  );
}
