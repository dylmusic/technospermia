import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technospermia & Psychospermia",
    short_name: "Technospermia",
    description:
      "The theory that psychedelic plants and fungi are engineered biological technologies seeded across the universe by advanced civilizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon-192", sizes: "192x192", type: "image/png" },
      { src: "/icon-512", sizes: "512x512", type: "image/png" },
    ],
  }
}
