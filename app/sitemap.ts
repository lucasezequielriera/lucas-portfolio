import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lucasriera.com";
  const now = new Date();

  const projectUrls = projects.flatMap((p) => [
    { url: `${base}/es/proyectos/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/en/proyectos/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ]);

  return [
    { url: `${base}/es`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es/proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...projectUrls,
  ];
}
