import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ - Modern SaaS",
  description: "Frequently asked questions about our platform. Find answers to common questions.",
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is this platform?",
        answer: "We are a comprehensive SaaS platform designed to help businesses build, scale, and grow. We provide tools for collaboration, analytics, project management, and more.",
      },
      {
        question: "How do I get started?",
        answer: "Simply sign up for a free account and you can start using our platform immediately. No credit card required.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes! Our Pro plan comes with a 14-day free trial. You can explore all features before committing.",
      },
      {
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        question: "What features are included?",
        answer: "Our platform includes team collaboration, advanced analytics, project management, integrations, API access, and 24/7 support. Higher tiers include more storage and advanced features.",
      },
      {
        question: "Can I integrate with other tools?",
        answer: "Yes! We integrate with 100+ popular tools including Slack, Zapier, Google Workspace, Microsoft 365, and many more via our API.",
      },
      {
        question: "Is there an API?",
        answer: "Yes, we offer a full REST API with comprehensive documentation. Pro and Enterprise plans include API access.",
      },
      {
        question: "How secure is my data?",
        answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is always backed up and protected.",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How does pricing work?",
        answer: "We offer three plans: Free (forever), Pro at $29/month, and Enterprise with custom pricing. All plans include core features.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees. What you see is what you get. All plans include support and regular updates.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "How can I get help?",
        answer: "You can reach our support team via email, chat, or phone. Pro plans get priority support, Enterprise gets dedicated support.",
      },
      {
        question: "Is there documentation?",
        answer: "Yes, we have comprehensive documentation, video tutorials, and a knowledge base available 24/7.",
      },
      {
        question: "Do you offer training?",
        answer: "Yes! We offer free onboarding calls, video tutorials, and webinars. Enterprise plans include personalized training.",
      },
      {
        question: "What are your support hours?",
        answer: "Our support team is available 24/7 for all plans. Response times are typically under 1 hour.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Frequently asked questions
            </h1>
            <p className="text-xl text-slate-600">
              Everything you need to know about our platform.
            </p>
          </div>

          <div className="space-y-16">
            {faqs.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-slate-200 p-6"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Can not find the answer you are looking for? Our team is here to help.
          </p>
          <Button size="lg">Contact Support</Button>
        </div>
      </section>
    </>
  );
}