import type { NextConfig } from "next";

// Use GITHUB_ACTIONS environment variable to detect GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  basePath: isGitHubPages ? '/my' : '',   // Use /my only on GitHub Pages
  assetPrefix: isGitHubPages ? '/my/' : '', // Ensure assets are loaded from correct path
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  reactCompiler: true,
};

export default nextConfig;
