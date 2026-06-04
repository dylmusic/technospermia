import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Three.js packages need transpiling because they ship ESM.
  // Only used on desktop via dynamic import — not included in mobile bundle.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "technospermia.com" }],
        destination: "https://www.technospermia.com/:path*",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
