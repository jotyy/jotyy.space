/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // https://avatars.githubusercontent.com/u/30037764?v=4
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/*",
      },
    ],
  },
};

export default nextConfig;
