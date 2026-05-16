import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand FAQ | Nefer",
  description: "Frequently asked questions for brands selling on Nefer Marketplace.",
};

export default function BrandsFAQPage() {
  const faqs = [
    {
      question: "How do I apply to sell on NEFER?",
      answer: "Click 'Apply to Sell' on our brands page. You'll fill out an application with your brand details, portfolio, and business information. Our team reviews every application personally."
    },
    {
      question: "What's the approval process?",
      answer: "We review applications within 5-7 business days. We evaluate brand aesthetic, quality, sustainability practices, and market positioning. You'll hear back with our decision."
    },
    {
      question: "What are the requirements to sell?",
      answer: "We look for: distinctive design point of view, quality craftsmanship, sustainability commitment, professional business operations, and growth potential."
    },
    {
      question: "What's the commission structure?",
      answer: "We offer competitive commission rates for emerging brands. Contact our brand team for specific pricing tailored to your stage."
    },
    {
      question: "How do I upload products?",
      answer: "Once approved, you get access to our seller dashboard where you can upload products, manage inventory, and process orders."
    },
    {
      question: "When do I get paid?",
      answer: "Payouts are processed bi-weekly. You can track all your sales and earnings in your dashboard."
    },
    {
      question: "Do you help with shipping?",
      answer: "We provide guidance on international shipping logistics. Brands are responsible for fulfilling orders, but we offer best practices and partner recommendations."
    },
    {
      question: "Can I use NEFER for wholesale?",
      answer: "Yes! Our platform supports both retail and wholesale. Contact us to learn more about wholesale options."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/brands/join" className="text-accent hover:underline mb-4 inline-block">← Back to Brand Application</Link>
          <h1 className="text-4xl font-display font-bold mb-4">Brand FAQ</h1>
          <p className="text-xl text-muted mb-12">Everything you need to know about selling on NEFER.</p>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-lg group-open:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted mb-4">Our brand team is here to help.</p>
            <Link href="/contact" className="text-accent hover:underline">Contact Us →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}