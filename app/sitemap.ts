import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute {
  const baseUrl = "https://my-saas-app-rouge-three.vercel.app";
  
  return {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    pages: [
      { url: `${baseUrl}/`, priority: 1 },
      { url: `${baseUrl}/features`, priority: 0.8 },
      { url: `${baseUrl}/pricing`, priority: 0.8 },
      { url: `${baseUrl}/testimonials`, priority: 0.7 },
      { url: `${baseUrl}/faq`, priority: 0.7 },
      { url: `${baseUrl}/careers`, priority: 0.6 },
      { url: `${baseUrl}/blog`, priority: 0.7 },
      { url: `${baseUrl}/about`, priority: 0.7 },
      { url: `${baseUrl}/contact`, priority: 0.8 },
      { url: `${baseUrl}/login`, priority: 0.5 },
      { url: `${baseUrl}/signup`, priority: 0.5 },
      { url: `${baseUrl}/dashboard`, priority: 0.5 },
      { url: `${baseUrl}/privacy`, priority: 0.5 },
      { url: `${baseUrl}/terms`, priority: 0.5 },
    ],
  };
}