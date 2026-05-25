import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Three.js packages need transpiling because they ship ESM.
  // Only used on desktop via dynamic import — not included in mobile bundle.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
