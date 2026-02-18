import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the local project directory is treated as the workspace root
    root: __dirname,
  },
};

export default nextConfig;
