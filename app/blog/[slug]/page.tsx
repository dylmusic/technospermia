import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import BlogPost from "@/components/blog/BlogPost"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = getPostBySlug(slug)
  if (!meta) return {}
  const ogImage = `https://www.technospermia.com/og?title=${encodeURIComponent(meta.title)}&category=${meta.category}`
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `https://www.technospermia.com/blog/${slug}` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `https://www.technospermia.com/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      publishedTime: meta.date,
      authors: ["Dylan Rhodes"],
      section: meta.category,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = getPostBySlug(slug)
  if (!meta) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { default: Content } = (await import(`@/content/blog/${slug}.mdx`)) as any

  const ogImageUrl = `https://www.technospermia.com/og?title=${encodeURIComponent(meta.title)}&category=${meta.category}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Person",
      name: "Dylan Rhodes",
    },
    publisher: {
      "@type": "Organization",
      name: "Technospermia",
      url: "https://www.technospermia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.technospermia.com/icon-512",
        width: 512,
        height: 512,
      },
    },
    datePublished: meta.date,
    dateModified: meta.date,
    url: `https://www.technospermia.com/blog/${slug}`,
    image: ogImageUrl,
    keywords: meta.keywords.join(", "),
    articleSection: meta.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.technospermia.com/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost meta={meta} relatedPosts={related}>
        <Content />
      </BlogPost>
    </>
  )
}
