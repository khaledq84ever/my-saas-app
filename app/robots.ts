import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/api/"],
    },
    sitemap: "https://my-saas-app-rouge-three.vercel.app/sitemap.xml",
  };
}