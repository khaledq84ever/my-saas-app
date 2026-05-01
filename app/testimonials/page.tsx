import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Testimonials - Modern SaaS",
  description: "Hear what our customers have to say about their experience with our platform.",
};

const testimonials = [
{
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "This platform has transformed how we work. We have saved over 20 hours per week on manual tasks and can focus on what really matters - growing our business.",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "The best investment we have made this year. The analytics alone have helped us make better decisions and increase revenue by 40%.",
  },
  {
    name: "Emily Davis",
    role: "Product Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Finally, a tool that actually works as advertised. The team collaboration features have brought us closer together, even while working remotely.",
  },
  {
    name: "James Wilson",
    role: "Founder, ScaleUp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "From day one, the support has been incredible. They really care about our success and it shows in every interaction.",
  },
  {
    name: "Lisa Thompson",
    role: "Director, Marketing Pro",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    quote: "We have tried everything else - nothing comes close. This is the only tool our team actually enjoys using every day.",
  },
  {
    name: "David Martinez",
    role: "VP Engineering, CloudTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote: "The API is a developers dream. Clean, well-documented, and powerful. Integration took less than an hour.",
  },
];

const logos = [
  "TechStartup", "DataFlow", "InnovateCo", "ScaleUp", "CloudTech", "Marketing Pro"
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Loved by teams everywhere
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by industry leaders
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-slate-400">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to join them?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Start your free trial today and see why teams love working with us.
          </p>
          <Button variant="secondary" size="lg">
            Get Started Free
          </Button>
        </div>
      </section>
    </>
  );
}