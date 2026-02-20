import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const yearsExp = new Date().getFullYear() - 2020;
  return {
    name: "Lucas Riera — Software Developer",
    short_name: "Lucas Riera",
    description:
      `Desarrollador full-stack con +${yearsExp} años de experiencia. Creo plataformas, sistemas y webs desde cero.`,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
