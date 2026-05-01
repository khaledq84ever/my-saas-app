import { MetadataRoute } from "next";

export const metadata: MetadataRoute = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/api/"],
    },
    sitemap: "https://my-saas-app-rouge-three.vercel.app/sitemap.xml",
  };
}