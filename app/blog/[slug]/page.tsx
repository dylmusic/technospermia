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
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `https://www.technospermia.com/blog/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.technospermia.com/blog/${slug}`,
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

  return (
    <BlogPost meta={meta} relatedPosts={related}>
      <Content />
    </BlogPost>
  )
}
