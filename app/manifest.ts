import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const yearsExp = new Date().getFullYear() - 2020;
  return {
    name: "Lucas Riera — Product Engineer",
    short_name: "Lucas Riera",
    description: `AI Product Engineer. ${yearsExp} years building software, three of them at United Airlines.`,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
