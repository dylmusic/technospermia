"use client"

import Link from "next/link"
import { useShuffledPosts } from "./HomepageArticlesProvider"

const CATEGORY_COLORS: Record<string, string> = {
  ASTROBIOLOGY: "#1ECFB0",
  CONSCIOUSNESS: "#7B5EA7",
  PHARMACOLOGY: "#E8C872",
  THEORY: "#F0EEE8",
}

export default function HomepageBottomArticles() {
  const allPosts = useShuffledPosts()
  const posts = allPosts.slice(3, 7)
  const total = allPosts.length
  if (posts.length === 0) return null

  return (
    <section className="pt-16">
      {/* Section header with violet rule */}
      <div className="text-center mb-10">
        <div
          className="mx-auto mb-6"
          style={{
            height: "1px",
            maxWidth: "120px",
            background: "linear-gradient(90deg, transparent, rgba(123,94,167,0.6), transparent)",
          }}
        />
        <p
          className="font-grotesk tracking-[0.18em] uppercase"
          style={{ fontSize: "0.75rem", color: "#F0EEE8", opacity: 0.5 }}
        >
          More From The Signal
        </p>
      </div>

      {/* 2x2 grid on desktop, single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => {
          const color = CATEGORY_COLORS[post.category] || "#F0EEE8"
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
              style={{ minHeight: "44px" }}
            >
              <div
                className="p-5 h-full flex flex-col gap-2 transition-all duration-300 group-hover:border-accent-violet/40 group-hover:shadow-[0_0_20px_rgba(123,94,167,0.15)]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                } as React.CSSProperties}
              >
                <span
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color }}
                >
                  {post.category}
                </span>
                <p
                  className="font-grotesk text-base leading-snug group-hover:text-white transition-colors"
                  style={{ color: "#F0EEE8" }}
                >
                  {post.title}
                </p>
                <p
                  className="font-sans text-sm leading-relaxed flex-1"
                  style={{
                    color: "#8A8A9A",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties}
                >
                  {post.excerpt}
                </p>
                <span className="font-mono text-[10px] mt-1" style={{ color: "rgba(138,138,154,0.4)" }}>
                  {post.readingTime}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Explore all link */}
      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-100"
          style={{ color: "#1ECFB0", opacity: 0.6 }}
        >
          Explore All {total > 0 ? total : 45} Transmissions →
        </Link>
      </div>
    </section>
  )
}
