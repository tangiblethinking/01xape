import { SITE } from "@/lib/site";

export type PageSeoInput = {
  title: string;
  description: string;
  /** Site path, e.g. "/" or "/services/ai-search" */
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

/** Shared head tags for SEO + AEO/GEO (Open Graph, Twitter, canonical, robots). */
export function pageHead({
  title,
  description,
  path,
  type = "website",
  image,
  noIndex = false,
  publishedTime,
  modifiedTime,
}: PageSeoInput) {
  const url = absoluteUrl(path);
  const ogImage = image ?? `${SITE.url}/og.jpg`;
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { name: "googlebot", content: noIndex ? "noindex, nofollow" : "index, follow" },
    { name: "bingbot", content: noIndex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: SITE.founder.name },
    { name: "creator", content: SITE.name },
    {
      name: "keywords",
      content:
        "Answer Engine Optimization, AEO, Generative Engine Optimization, GEO, SEO, AI search, ChatGPT citations, Perplexity, Google AI Overviews, entity SEO",
    },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
  ];

  if (publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
  }
  if (modifiedTime) {
    meta.push({ property: "article:modified_time", content: modifiedTime });
  }

  return {
    meta,
    links: [
      { rel: "canonical", href: url },
      {
        rel: "alternate",
        type: "text/plain",
        href: `${SITE.url}/llms.txt`,
        title: "llms.txt",
      },
    ],
  };
}
