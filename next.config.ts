import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    // The logos are flat artwork, so AVIF wins big over PNG here.
    formats: ["image/avif", "image/webp"],
    // Nothing on the site renders a logo above ~96px, and the brand SVG is
    // served as-is; generating the full default ladder only wastes cache.
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    deviceSizes: [640, 828, 1080, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // Brand artwork is content-stable; let it sit in the browser cache.
        source: "/brand/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
