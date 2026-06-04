import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compress: true,
  // Three.js packages need transpiling because they ship ESM.
  // Only used on desktop via dynamic import — not included in mobile bundle.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter"],
  },
})

export default withMDX(nextConfig)
