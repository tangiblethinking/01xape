import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/SiteShell";
import { ThemeProvider } from "@/lib/theme";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const THEME_BOOT = `(function(){try{var t=localStorage.getItem("apex-theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");document.documentElement.style.colorScheme="light";}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");document.documentElement.style.colorScheme="dark";}}catch(e){document.documentElement.classList.add("dark");}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — AEO, GEO & SEO studio` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#08080a" },
      { name: "author", content: SITE.founder.name },
      { name: "application-name", content: SITE.name },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">404</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.04em]">
          This URL is not an entity we recognize.
        </h1>
        <p className="mt-4 text-muted">
          Dead links teach models the wrong graph. Go home, or run an audit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Home
          </a>
          <a
            href="/audit"
            className="glass inline-flex h-12 items-center rounded-full px-6 text-sm font-medium"
          >
            Discovery Audit
          </a>
        </div>
      </div>
    </section>
  );
}
