import Link from "next/link"
import type { PostMeta } from "@/lib/blog"

const CATEGORY_COLORS: Record<string, string> = {
  ASTROBIOLOGY: "#1ECFB0",
  CONSCIOUSNESS: "#7B5EA7",
  PHARMACOLOGY: "#E8C872",
  THEORY: "#F0EEE8",
}

const TAG_COLORS: Record<string, string> = {
  "HIDDEN HISTORY": "#8B0000",
}

export default function BlogCard({ post }: { post: PostMeta }) {
  const color = CATEGORY_COLORS[post.category] || "#F0EEE8"
  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <div
        className="glass h-full p-6 flex flex-col transition-all duration-300 group-hover:border-white/15"
        style={{ borderTop: `2px solid ${color}30` }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>
            {post.category}
          </span>
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs tracking-widest uppercase px-1.5 py-0.5 rounded"
              style={{ color: "#fff", background: TAG_COLORS[tag] || "#333" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-grotesk text-lg md:text-xl text-cream tracking-wide mt-3 mb-3 leading-snug group-hover:text-white transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
          <span className="font-mono text-xs text-muted/50">
            {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="font-mono text-xs text-muted/50">{post.readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
