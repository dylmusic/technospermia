"use client"

import Link from "next/link"
import { useShuffledPosts } from "./HomepageArticlesProvider"

const CATEGORY_COLORS: Record<string, string> = {
  ASTROBIOLOGY: "#1ECFB0",
  CONSCIOUSNESS: "#7B5EA7",
  PHARMACOLOGY: "#E8C872",
  THEORY: "#F0EEE8",
}

export default function HomepageArticleRow() {
  const posts = useShuffledPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <div className="w-full">
      {/* Label */}
      <p
        className="font-grotesk text-center mb-4"
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#1ECFB0",
          opacity: 0.65,
        }}
      >
        Latest Transmissions
      </p>

      {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
      <div
        className="no-scrollbar flex gap-3 md:grid md:grid-cols-3 md:gap-4"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {posts.map((post) => {
          const color = CATEGORY_COLORS[post.category] || "#F0EEE8"
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex-shrink-0 snap-start block group"
              style={{ width: "85vw", maxWidth: "300px" } as React.CSSProperties}
            >
              <div
                className="p-4 h-full flex flex-col gap-2 transition-all duration-300 group-hover:border-accent-violet/40 group-hover:shadow-[0_0_16px_rgba(123,94,167,0.18)]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  minHeight: "44px",
                } as React.CSSProperties}
              >
                <span
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color }}
                >
                  {post.category}
                </span>
                <p
                  className="font-grotesk text-sm leading-snug flex-1 group-hover:text-white transition-colors"
                  style={{
                    color: "#F0EEE8",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties}
                >
                  {post.title}
                </p>
                <span className="font-mono text-[10px] mt-1" style={{ color: "rgba(138,138,154,0.5)" }}>
                  {post.readingTime}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* View all link */}
      <div className="text-center mt-4">
        <Link
          href="/blog"
          className="font-mono text-[10px] tracking-widest uppercase transition-opacity hover:opacity-100"
          style={{ color: "#1ECFB0", opacity: 0.6 }}
        >
          View All Transmissions →
        </Link>
      </div>
    </div>
  )
}
