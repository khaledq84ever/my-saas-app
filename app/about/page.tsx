import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Modern SaaS",
  description: "Learn about our mission to help businesses build, scale, and grow with modern tools.",
};

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead.",
  },
  {
    title: "Simplicity",
    description: "Complex problems deserve simple solutions. We make technology accessible to everyone.",
  },
  {
    title: "Reliability",
    description: "Trust is earned through consistency. Our platform delivers when it matters most.",
  },
  {
    title: "Customer Success",
    description: "Your growth is our success. We're committed to helping you achieve your goals.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Building the future of business
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We believe that every business deserves access to powerful tools that can
              transform their operations. Our mission is to make enterprise-grade
              solutions accessible to companies of all sizes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2024, we've helped over 10,000 businesses streamline their
              workflows, boost productivity, and achieve measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The passionate people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-slate-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-4xl text-slate-400 font-light">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join our journey
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We're always looking for talented people to join our team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}