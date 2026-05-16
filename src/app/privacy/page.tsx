import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nefer",
  description: "Privacy Policy for Nefer Marketplace.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: May 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted">
                At NEFER, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted mb-4">We collect information you provide directly, including:</p>
              <ul className="list-disc pl-6 text-muted space-y-2">
                <li>Account information (name, email)</li>
                <li>Payment details (processed securely)</li>
                <li>Shipping addresses</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted space-y-2">
                <li>To process your orders</li>
                <li>To communicate with you about your account</li>
                <li>To improve our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Data Protection</h2>
              <p className="text-muted">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted mb-4">Under GDPR and other regulations, you have the right to:</p>
              <ul className="list-disc pl-6 text-muted space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted">
                For privacy-related questions, contact us at <a href="mailto:privacy@nefer.com" className="text-accent">privacy@nefer.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}