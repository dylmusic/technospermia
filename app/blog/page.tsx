import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import BlogCard from "@/components/blog/BlogCard"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Transmissions — Signals from the Research",
  description:
    "Deep dives into technospermia, psychospermia, psilocybin origins, consciousness research, and astrobiology. The evidence, the theory, and the implications explained.",
  alternates: { canonical: "https://www.technospermia.com/blog" },
  openGraph: {
    type: "website",
    title: "Transmissions — Signals from the Research",
    description:
      "Deep dives into technospermia, psychospermia, psilocybin origins, consciousness research, and astrobiology.",
    url: "https://www.technospermia.com/blog",
    images: [{ url: "https://www.technospermia.com/og?title=Transmissions&category=THEORY", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transmissions — Signals from the Research",
    description: "Deep dives into technospermia, psilocybin origins, consciousness research, and astrobiology. The evidence and the theory explained.",
    images: ["https://www.technospermia.com/og?title=Transmissions&category=THEORY"],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 pb-40 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-20">
        <ScrollReveal>
          <h1
            className="font-grotesk font-bold tracking-[0.1em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", color: "#F0EEE8" }}
          >
            Transmissions
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted text-base md:text-lg mt-4">Signals from the research</p>
        </ScrollReveal>
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.08}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-mono text-sm text-muted/50 tracking-widest">NO TRANSMISSIONS YET</p>
        </div>
      )}
    </div>
  )
}
