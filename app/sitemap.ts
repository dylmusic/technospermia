import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

const BASE = "https://www.technospermia.com"

const HIGH_PRIORITY_SLUGS: Record<string, number> = {
  "war-on-drugs-suppression-theory": 0.9,
  "government-admits-aliens-real-uap-disclosure": 0.9,
  "cancer-bad-guy-tech-theory": 0.85,
  "what-is-technospermia": 0.95,
  "best-explanation-why-psychedelics-are-illegal": 0.85,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: HIGH_PRIORITY_SLUGS[post.slug] ?? 0.7,
    lastModified: new Date(post.date),
  }))

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
    {
      url: `${BASE}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date("2026-05-24"),
    },
    ...blogEntries,
  ]
}
