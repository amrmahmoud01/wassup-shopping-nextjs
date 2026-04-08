import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      // "inyourshoe.com",        // <-- FIXED
      "www.inyourshoe.com",
      "www.lcwaikiki.eg",
      "img-lcwaikiki.mncdn.com",
      "dfcdn.defacto.com.tr",
      "or-egypt.com",
      "cloud-clothing.co",
      "rojada-egy.com",
      
    ],
    //TODO Improve security (use proxy) to fetch images instead of allowing every domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inyourshoe.com",
        pathname: "/cdn/**",
      },
      {
        protocol: 'https',
        hostname: '**.com'
      },
      {
        protocol: 'https',
        hostname: '**.co'
      },
      {
        protocol: 'https',
        hostname: '**.net'
      },
      {
        protocol: 'https',
        hostname: '**.org'
      }
    ],
  },
};

export default nextConfig;
// OR: export default withFlowbiteReact(nextConfig);