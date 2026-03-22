import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Mahedi Hasan | Full-Stack Web, WordPress, UI/UX & App Developer";
const DEFAULT_DESCRIPTION =
  "Mahedi Hasan is a full-stack web, WordPress, UI/UX, and app developer creating modern websites, scalable interfaces, and polished digital products for growing brands.";
const DEFAULT_IMAGE = "/Portfolio%20Logo.jpeg";
const SITE_NAME = "Mahedi Hasan";

type RouteMeta = {
  title: string;
  description: string;
  keywords: string;
  type?: "website" | "article";
  robots?: string;
  schema: Record<string, unknown>;
};

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords:
      "Mahedi Hasan, full-stack web developer, WordPress developer, UI UX designer, app developer, Laravel developer, portfolio website, web developer Bangladesh",
    type: "website",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mahedi Hasan",
      jobTitle: "Full-Stack Web, WordPress, UI/UX & App Developer",
      description: DEFAULT_DESCRIPTION,
      email: "mailto:mahedihasan.codes@gmail.com",
      telephone: "+8801768857058",
      image: DEFAULT_IMAGE,
      sameAs: [
        "https://github.com/Mahedi454",
        "https://www.linkedin.com/in/mahedihasan916/",
        "https://www.instagram.com/mahashi916/",
      ],
    },
  },
  "/projects": {
    title: "Projects | Mahedi Hasan",
    description:
      "Explore selected website, WordPress, UI/UX, and product design projects by Mahedi Hasan, including business sites, dashboards, and modern web experiences.",
    keywords:
      "Mahedi Hasan projects, web design portfolio, WordPress portfolio, UI UX case studies, app design portfolio, Laravel portfolio",
    type: "website",
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projects | Mahedi Hasan",
      description:
        "A portfolio collection of website, WordPress, UI/UX, and digital product projects by Mahedi Hasan.",
      about: {
        "@type": "Person",
        name: "Mahedi Hasan",
      },
    },
  },
};

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const ensureLinkTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const current = routeMeta[location.pathname] ?? {
      title: "Page Not Found | Mahedi Hasan",
      description: "The page you are looking for could not be found on Mahedi Hasan's portfolio website.",
      keywords: "404, page not found, Mahedi Hasan portfolio",
      type: "website" as const,
      robots: "noindex, follow",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page Not Found | Mahedi Hasan",
        description: "The requested page does not exist on this portfolio website.",
      },
    };

    const origin = window.location.origin;
    const canonical = new URL(location.pathname, origin).toString();
    const imageUrl = new URL(DEFAULT_IMAGE, origin).toString();

    document.title = current.title;

    ensureMetaTag('meta[name="description"]', { name: "description", content: current.description });
    ensureMetaTag('meta[name="keywords"]', { name: "keywords", content: current.keywords });
    ensureMetaTag('meta[name="robots"]', { name: "robots", content: current.robots ?? "index, follow" });
    ensureMetaTag('meta[property="og:title"]', { property: "og:title", content: current.title });
    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: current.description,
    });
    ensureMetaTag('meta[property="og:type"]', { property: "og:type", content: current.type ?? "website" });
    ensureMetaTag('meta[property="og:url"]', { property: "og:url", content: canonical });
    ensureMetaTag('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    ensureMetaTag('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title", content: current.title });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: current.description,
    });
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    ensureLinkTag('link[rel="canonical"]', { rel: "canonical", href: canonical });

    let schemaTag = document.head.querySelector("#route-schema") as HTMLScriptElement | null;

    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "route-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify(
      {
        ...current.schema,
        url: canonical,
        image: imageUrl,
      },
      null,
      2,
    );
  }, [location.pathname]);

  return null;
};

export default Seo;
