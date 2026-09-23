import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun } from "lucide-react";
import { BrandMark, WordmarkText } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV } from "@/lib/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="relative flex size-11 items-center justify-center rounded-full text-foreground hover:bg-foreground/8"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="relative size-5">
        {theme === "light" ? (
          <Sun className="size-5" aria-hidden="true" />
        ) : (
          <Moon className="size-5" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center gap-2">
        <nav className="glass-panel specular flex min-h-14 flex-1 items-center gap-2 rounded-full py-1.5 pr-1.5 pl-2 sm:pl-3" aria-label="Primary">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-2 rounded-full px-1.5"
            aria-label="APE X home"
          >
            <BrandMark variant="icon" className="h-8 w-7 shrink-0" alt="" />
            <WordmarkText className="text-lg sm:text-xl" />
          </Link>

          <div className="ml-auto hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    to={item.href as "/"}
                    className={cn(
                      "flex h-11 items-center rounded-full px-3.5 text-sm font-medium tracking-[0.01em] text-foreground/90 hover:text-foreground",
                      pathname.startsWith(item.href) && "text-foreground",
                    )}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-[opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      className="glass-panel min-w-72 rounded-2xl p-2"
                      role="menu"
                      aria-label={item.label}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href as "/"}
                          role="menuitem"
                          className="block rounded-xl px-3 py-3 hover:bg-foreground/8 focus-visible:bg-foreground/8"
                        >
                          <div className="text-sm font-semibold tracking-[0.01em] text-foreground">
                            {child.label}
                          </div>
                          <div className="mt-0.5 text-xs leading-relaxed tracking-[0.01em] text-muted">
                            {child.hint}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href as "/"}
                  className={cn(
                    "flex h-11 items-center rounded-full px-3.5 text-sm font-medium tracking-[0.01em] text-foreground/90 hover:text-foreground",
                    pathname.startsWith(item.href) && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/audit">Get Your Discovery Audit</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex size-11 items-center justify-center rounded-full lg:hidden"
                  aria-label="Open menu"
                  aria-expanded={open}
                >
                  <Menu className="size-5" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="glass-panel max-h-[88dvh] overflow-y-auto">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="mb-4 flex items-center gap-2">
                  <BrandMark variant="icon" className="h-8 w-7" alt="" />
                  <WordmarkText className="text-xl" />
                </div>
                <div className="flex flex-col gap-1 pb-8">
                  {NAV.map((item) => (
                    <div key={item.href}>
                      <Link
                        to={item.href as "/"}
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center text-lg font-medium"
                      >
                        {item.label}
                      </Link>
                      {"children" in item && item.children ? (
                        <div className="mb-2 ml-1 flex flex-col">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href as "/"}
                              onClick={() => setOpen(false)}
                              className="flex min-h-11 items-center text-sm text-muted"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  <Button asChild size="lg" className="mt-4 w-full">
                    <Link to="/audit" onClick={() => setOpen(false)}>
                      Get Your Discovery Audit
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
