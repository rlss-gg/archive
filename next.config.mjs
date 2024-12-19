/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rlss.gg",
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
