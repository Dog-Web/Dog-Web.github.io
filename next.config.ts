import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  // No basePath needed for user site (Dog-Web.github.io)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  reactCompiler: true,
};

export default nextConfig;
