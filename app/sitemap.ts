import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { landingEntries } from "@/lib/seo-landings";
import { locales } from "@/lib/dictionaries";

const BASE = "https://www.lucasriera.com";

/**
 * Every page exists in all three locales, so each entry ships the full set of
 * hreflang alternates. Without them Google treats the translations as competing
 * duplicates instead of alternates of the same page.
 */
function entry(
  pathFor: (locale: string) => string,
  {
    priority,
    changeFrequency = "monthly",
    lastModified = new Date(),
  }: {
    priority: number | ((locale: string) => number);
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: Date;
  }
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${BASE}${pathFor(l)}`])
  );

  return locales.map((locale) => ({
    url: `${BASE}${pathFor(locale)}`,
    lastModified,
    changeFrequency,
    priority: typeof priority === "function" ? priority(locale) : priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  // French is a partial translation, so it sits slightly below es/en throughout.
  const byLocale = (main: number, fr: number) => (l: string) =>
    l === "fr" ? fr : main;

  return [
    ...entry((l) => `/${l}`, { priority: byLocale(1, 0.9) }),
    ...entry((l) => `/${l}/sobre-mi`, { priority: byLocale(0.85, 0.8) }),
    ...entry((l) => `/${l}/proyectos`, { priority: byLocale(0.8, 0.75) }),
    ...entry((l) => `/${l}/herramientas`, { priority: byLocale(0.8, 0.75) }),

    ...projects.flatMap((p) =>
      entry((l) => `/${l}/proyectos/${p.slug}`, {
        priority: byLocale(0.7, 0.65),
      })
    ),

    ...landingEntries.flatMap((e) =>
      entry((l) => `/${l}/services/${e.slug[l as keyof typeof e.slug]}`, {
        priority: byLocale(0.85, 0.8),
      })
    ),

    ...["privacidad", "aviso-legal", "cookies"].flatMap((page) =>
      entry((l) => `/${l}/${page}`, {
        priority: 0.3,
        changeFrequency: "yearly",
      })
    ),
  ];
}
