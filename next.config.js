/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/workbench",
        destination: "/workbench/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
