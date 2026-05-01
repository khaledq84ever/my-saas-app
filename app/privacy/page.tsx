import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Modern SaaS",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-300 mb-6">Last updated: May 1, 2026</p>
          
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Information Sharing</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners who assist us in operating our website.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Security</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            If you have any questions about this Privacy Policy, please contact us at hello@saas.io
          </p>
        </div>
      </div>
    </div>
  );
}