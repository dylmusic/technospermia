import type { MetadataRoute } from "next"

const BASE = "https://technospermia.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date("2026-05-24"),
    },
    {
      url: `${BASE}/evidence`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: new Date("2026-05-24"),
    },
    {
      url: `${BASE}/map`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: new Date("2026-05-24"),
    },
    {
      url: `${BASE}/entities`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date("2026-05-24"),
    },
    {
      url: `${BASE}/spread`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date("2026-05-24"),
    },
  ]
}
