import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { landingEntries } from "@/lib/seo-landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lucasriera.com";
  const now = new Date();

  const projectUrls = projects.flatMap((p) => [
    {
      url: `${base}/es/proyectos/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/en/proyectos/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/fr/proyectos/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
  ]);

  const legalPages = ["privacidad", "aviso-legal", "cookies"].flatMap(
    (page) => [
      {
        url: `${base}/es/${page}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
      {
        url: `${base}/en/${page}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
      {
        url: `${base}/fr/${page}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
    ]
  );

  const toolsPages = [
    {
      url: `${base}/es/herramientas`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/herramientas`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/fr/herramientas`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const serviceLandings = landingEntries.flatMap((entry) => [
    {
      url: `${base}/es/services/${entry.slug.es}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/en/services/${entry.slug.en}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/fr/services/${entry.slug.fr}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    {
      url: `${base}/es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/fr`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/es/proyectos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/en/proyectos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/fr/proyectos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...projectUrls,
    ...toolsPages,
    ...serviceLandings,
    ...legalPages,
  ];
}
