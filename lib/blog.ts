import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type Category = "ASTROBIOLOGY" | "CONSCIOUSNESS" | "PHARMACOLOGY" | "THEORY"

export interface PostMeta {
  slug: string
  title: string
  description: string
  keywords: string[]
  date: string
  category: Category
  excerpt: string
  readingTime: string
  tags: string[]
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8")
    const { data, content } = matter(raw)
    const rt = readingTime(content)
    return {
      slug,
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      keywords: (data.keywords as string[]) || [],
      date: (data.date as string) || "",
      category: (data.category as Category) || "THEORY",
      excerpt: (data.excerpt as string) || "",
      readingTime: rt.text,
      tags: (data.tags as string[]) || [],
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  try {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8")
    const { data, content } = matter(raw)
    const rt = readingTime(content)
    return {
      slug,
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      keywords: (data.keywords as string[]) || [],
      date: (data.date as string) || "",
      category: (data.category as Category) || "THEORY",
      excerpt: (data.excerpt as string) || "",
      readingTime: rt.text,
      tags: (data.tags as string[]) || [],
    }
  } catch {
    return undefined
  }
}
