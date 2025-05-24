/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove static export for Vercel - we want full Next.js features
  // output: 'export', // Remove this line
  trailingSlash: true,
}

export default nextConfig
