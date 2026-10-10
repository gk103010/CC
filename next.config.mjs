/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/Models/:path*',
        destination: '/models/:path*',
      },
    ];
  },
};

export default nextConfig;
