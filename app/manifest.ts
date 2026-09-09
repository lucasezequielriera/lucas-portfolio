import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const yearsExp = new Date().getFullYear() - 2020;
  return {
    name: "Lucas Riera — Product Engineer",
    short_name: "Lucas Riera",
    description: `Product Engineer with ${yearsExp}+ years of experience building with AI. Building platforms, systems and websites from scratch.`,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
