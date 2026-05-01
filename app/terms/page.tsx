export const metadata = {
  title: "Terms of Service - Modern SaaS",
  description: "Terms of Service for Modern SaaS platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300">
          <p>Last updated: May 1, 2026</p>
          
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">2. Use License</h2>
          <p>Permission is granted to temporarily use one copy of the materials for personal, non-commercial transitory viewing only.</p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">3. Disclaimer</h2>
          <p>The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">4. Limitations</h2>
          <p>In no event shall we be liable for any damages arising out of or in connection with the use of this website.</p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">5. Revisions</h2>
          <p>We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms.</p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">6. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at hello@saas.io</p>
        </div>
      </div>
    </div>
  );
}