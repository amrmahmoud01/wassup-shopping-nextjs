import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "inyourshoe.com",        // <-- FIXED
      "www.inyourshoe.com",
      "www.lcwaikiki.eg",
      "img-lcwaikiki.mncdn.com",
      "dfcdn.defacto.com.tr",
      "or-egypt.com",
      "cloud-clothing.co",
      "https://rojada-egy.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inyourshoe.com",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
// OR: export default withFlowbiteReact(nextConfig);