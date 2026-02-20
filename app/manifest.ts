import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const yearsExp = new Date().getFullYear() - 2020;
  return {
    name: "Lucas Riera — Software Developer",
    short_name: "Lucas Riera",
    description: `Full-stack developer with ${yearsExp}+ years of experience. Building platforms, systems and websites from scratch.`,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
