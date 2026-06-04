import type { MDXComponents } from "mdx/types"
import {
  ComparisonTable,
  DataPoint,
  StatGrid,
  TimelineGraphic,
  PullQuote,
  GlowCard,
  ConceptDiagram,
} from "@/components/blog/BlogGraphic"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ComparisonTable,
    DataPoint,
    StatGrid,
    TimelineGraphic,
    PullQuote,
    GlowCard,
    ConceptDiagram,
    h1: ({ children }) => (
      <h1 className="font-grotesk text-3xl md:text-4xl text-cream font-bold tracking-wide mb-6 mt-12 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-grotesk text-2xl md:text-3xl text-cream font-bold tracking-wide mb-4 mt-12 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-grotesk text-xl text-cream font-semibold tracking-wide mb-3 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted leading-relaxed mb-6 text-base md:text-lg">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent-teal hover:text-cream transition-colors underline underline-offset-4"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="text-muted space-y-2 mb-6 ml-6 list-disc">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="text-muted space-y-2 mb-6 ml-6 list-decimal">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-base leading-relaxed">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="text-cream font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-cream/90 italic">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-8 px-6 py-4 italic"
        style={{
          borderLeft: "2px solid rgba(123,94,167,0.5)",
          background: "rgba(123,94,167,0.04)",
          borderRadius: "0 8px 8px 0",
          color: "#C8C4BC",
        }}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-white/8 my-12" />,
    code: ({ children }) => (
      <code
        className="font-mono text-sm px-1.5 py-0.5 rounded"
        style={{ background: "rgba(255,255,255,0.06)", color: "#1ECFB0" }}
      >
        {children}
      </code>
    ),
  }
}
