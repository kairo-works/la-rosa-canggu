/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img-verda.wongnai.com", pathname: "/**" },
      { protocol: "https", hostname: "www.kitchensanctuary.com", pathname: "/**" },
      { protocol: "https", hostname: "thewoksoflife.com", pathname: "/**" },
      { protocol: "https", hostname: "www.dahliaskitchen.hungrrr.co.uk", pathname: "/**" },
      { protocol: "https", hostname: "www.acouplecooks.com", pathname: "/**" },
      { protocol: "https", hostname: "images.baliuntold.com", pathname: "/**" },
      { protocol: "https", hostname: "blog-img-dev.s3.ap-south-1.amazonaws.com", pathname: "/**" },
      { protocol: "https", hostname: "thesurfatlas.com", pathname: "/**" },
      { protocol: "https", hostname: "roavara.com", pathname: "/**" },
      { protocol: "https", hostname: "www.sunsetandbikini.com", pathname: "/**" },
      { protocol: "https", hostname: "images.trvl-media.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
