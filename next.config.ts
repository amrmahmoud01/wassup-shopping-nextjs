import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "inyourshoe.com",
      "www.lcwaikiki.eg",
      "img-lcwaikiki.mncdn.com",
      "dfcdn.defacto.com.tr",
    ],
  },
};

export default withFlowbiteReact(nextConfig); // ✅ this line is required
