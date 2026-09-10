import type { MetadataRoute } from "next";

const BASE = "https://www.lucasriera.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Nothing under /api renders a page, so keeping crawlers out of it
        // avoids burning crawl budget on endpoints that only return JSON.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
