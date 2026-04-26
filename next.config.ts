import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.com',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
      },
    ],
  },
};

export default nextConfig;
