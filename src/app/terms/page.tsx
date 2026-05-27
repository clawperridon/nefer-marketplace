import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Nefer",
  description: "Terms of Service for Nefer Marketplace.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-6">Terms of Service</h1>
          <p className="text-muted mb-8">Last updated: May 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted">
                By accessing and using NEFER Marketplace, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted">
                Permission is granted to temporarily use NEFER for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
              <p className="text-muted">
                You agree to provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Product Listings</h2>
              <p className="text-muted">
                Sellers agree to accurately represent their products and comply with all applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Payments and Refunds</h2>
              <p className="text-muted">
                All payments are processed securely. Our refund policy allows returns within 14-30 days for most items.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Disclaimer</h2>
              <p className="text-muted">
                NEFER is provided "as is". We make no warranties about the accuracy or reliability of any content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
              <p className="text-muted">
                For questions about these terms, contact us at <a href="mailto:legal@nefer.world" className="text-accent">legal@nefer.world</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}