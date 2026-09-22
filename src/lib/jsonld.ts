import { SITE } from "@/lib/site";
import { SERVICE_BUCKETS } from "@/lib/services";
import { ARTICLES, RESOURCE_FAQS } from "@/lib/resources";

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    alternateName: ["APE X", "UX APEX", "UXAPEX"],
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    slogan: SITE.tagline,
    founder: {
      "@type": "Person",
      name: SITE.founder.name,
      jobTitle: SITE.founder.role,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Search Engine Optimization",
      "Experience design",
      "Entity SEO",
    ],
    serviceType: SERVICE_BUCKETS.map((item) => item.title),
    sameAs: [SITE.url],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.shortDescription,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    inLanguage: "en-US",
  };
}

export function faqJsonLd(
  faqs: { q: string; a: string }[] = RESOURCE_FAQS,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(slug: string) {
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.date,
    dateModified: article.updated,
    author: {
      "@type": "Person",
      name: SITE.founder.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/resources/${article.slug}`,
  };
}

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "US",
  };
}
