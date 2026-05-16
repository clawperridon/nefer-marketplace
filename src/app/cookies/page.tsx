import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Nefer",
  description: "Cookie Policy for Nefer Marketplace.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted mb-8">Last updated: May 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-muted">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-muted mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 text-muted space-y-2">
                <li>Keep you logged in</li>
                <li>Remember your preferences</li>
                <li>Understand how you use our site</li>
                <li>Improve your experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Types of Cookies</h2>
              <ul className="space-y-4 text-muted">
                <li><strong>Essential</strong> - Required for the site to work</li>
                <li><strong>Analytics</strong> - Help us understand usage</li>
                <li><strong>Marketing</strong> - Used to deliver relevant content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted">
                You can disable cookies in your browser settings. Note that some features of our site may not work properly without cookies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}