/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  experimental: {
    serverComponents: true
  }
}

module.exports = nextConfig
