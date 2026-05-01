import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Blog - Modern SaaS",
  description: "Insights, tips, and stories from our team. Stay updated with the latest news.",
};

const posts = [
  {
    slug: "how-we-built-our-platform",
    title: "How we built our platform to scale to 1 million users",
    excerpt: "A deep dive into our architecture decisions and lessons learned from scaling.",
    author: "Michael Chen",
    date: "April 15, 2026",
    category: "Engineering",
    readTime: "8 min read",
  },
  {
    slug: "10-tips-for-remote-teams",
    title: "10 tips for running effective remote team meetings",
    excerpt: "Best practices for keeping your distributed team engaged and productive.",
    author: "Sarah Johnson",
    date: "April 10, 2026",
    category: "Productivity",
    readTime: "5 min read",
  },
  {
    slug: "future-of-saas",
    title: "The future of SaaS: Trends to watch in 2026",
    excerpt: "Our predictions for what the next year holds for the industry.",
    author: "Emily Davis",
    date: "April 5, 2026",
    category: "Industry",
    readTime: "6 min read",
  },
  {
    slug: "building-analytics-dashboard",
    title: "Building an analytics dashboard from scratch",
    excerpt: "A step-by-step guide to creating powerful data visualizations.",
    author: "James Wilson",
    date: "March 28, 2026",
    category: "Engineering",
    readTime: "10 min read",
  },
  {
    slug: "customer-success-story",
    title: "How TechStartup increased revenue by 40%",
    excerpt: "A case study on how one customer transformed their business.",
    author: "Lisa Thompson",
    date: "March 20, 2026",
    category: "Case Study",
    readTime: "7 min read",
  },
  {
    slug: "api-best-practices",
    title: "REST API best practices for 2026",
    excerpt: "Modern patterns and techniques for building reliable APIs.",
    author: "David Martinez",
    date: "March 15, 2026",
    category: "Engineering",
    readTime: "8 min read",
  },
];

const categories = [
  "All", "Engineering", "Productivity", "Industry", "Case Study"
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Insights, tips, and stories from our team
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                    <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h9M9 21h9" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{post.author}</span>
                      <span className="text-slate-500">{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Subscribe to our newsletter
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
}