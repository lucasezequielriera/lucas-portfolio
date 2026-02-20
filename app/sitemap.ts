import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lucasriera.com";
  const now = new Date();

  return [
    { url: `${base}/es`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es/proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
