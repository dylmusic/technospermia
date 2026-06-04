"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import type { PostMeta } from "@/lib/blog"
import ShareButtons from "@/components/ShareButtons"

const CATEGORY_COLORS: Record<string, string> = {
  ASTROBIOLOGY: "#1ECFB0",
  CONSCIOUSNESS: "#7B5EA7",
  PHARMACOLOGY: "#E8C872",
  THEORY: "#F0EEE8",
}

export default function BlogPost({
  meta,
  children,
  relatedPosts,
}: {
  meta: PostMeta
  children: React.ReactNode
  relatedPosts: PostMeta[]
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const color = CATEGORY_COLORS[meta.category] || "#F0EEE8"

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5" style={{ background: "rgba(255,255,255,0.05)" }}>
        <div className="h-full" style={{ width: `${progress}%`, background: "#7B5EA7", transition: "width 0.1s linear" }} />
      </div>

      <article className="pt-28 pb-40 px-6 max-w-[720px] mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="font-mono text-xs tracking-widest uppercase text-muted/60 hover:text-muted transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Transmissions
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>
            {meta.category}
          </span>

          <h1
            className="font-grotesk font-bold tracking-wide text-cream mt-4 mb-6 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
          >
            {meta.title}
          </h1>

          <div className="flex items-center gap-4 text-muted/50 font-mono text-xs">
            <span>
              {new Date(meta.date + "T00:00:00").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{meta.readingTime}</span>
          </div>

          <div className="mt-8 h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        </header>

        {/* MDX content */}
        <div className="blog-content">{children}</div>

        {/* Share section */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="font-grotesk text-xs tracking-widest uppercase text-muted/60 text-center mb-2">
            Share this transmission
          </p>
          <ShareButtons />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h3 className="font-grotesk text-xs tracking-widest uppercase text-muted/60 mb-6">
              Related Transmissions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <div className="glass p-4 h-full transition-all duration-200 group-hover:border-white/15">
                    <span
                      className="font-mono text-xs tracking-widest uppercase"
                      style={{ color: CATEGORY_COLORS[p.category] || "#F0EEE8" }}
                    >
                      {p.category}
                    </span>
                    <p className="font-grotesk text-sm text-cream mt-2 leading-snug group-hover:text-white transition-colors">
                      {p.title}
                    </p>
                    <p className="font-mono text-xs text-muted/40 mt-2">{p.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
