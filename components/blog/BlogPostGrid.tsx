"use client"

import { useState, useEffect } from "react"
import type { PostMeta } from "@/lib/blog"
import BlogCard from "@/components/blog/BlogCard"
import ScrollReveal from "@/components/ScrollReveal"

export default function BlogPostGrid({ posts }: { posts: PostMeta[] }) {
  const [shuffled, setShuffled] = useState<PostMeta[]>([])

  useEffect(() => {
    setShuffled([...posts].sort(() => Math.random() - 0.5))
  }, [])

  if (shuffled.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="glass h-52" style={{ opacity: 0.25 }} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {shuffled.map((post, i) => (
        <ScrollReveal key={post.slug} delay={Math.min(i * 0.04, 0.28)}>
          <BlogCard post={post} />
        </ScrollReveal>
      ))}
    </div>
  )
}
