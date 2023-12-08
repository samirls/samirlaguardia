/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    experimental: true,
  },
}

module.exports = nextConfig
