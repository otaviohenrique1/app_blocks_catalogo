/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plugin-storage.nyc3.digitaloceanspaces.com',
        port: '',
        // pathname: '/account123/**',
      }
    ]
  },
}

module.exports = nextConfig
