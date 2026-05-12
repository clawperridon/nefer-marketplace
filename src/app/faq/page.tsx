import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Nefer",
  description: "Frequently asked questions about Nefer Marketplace.",
};

export default function FAQPage() {
  const customerFAQs = [
    {
      question: "What is Nefer?",
      answer: "Nefer is a curated marketplace for emerging fashion brands. We discover and curate the most promising independent designers and emerging labels, bringing them directly to fashion-forward customers who seek something beyond the mainstream.",
    },
    {
      question: "How does Nefer work?",
      answer: "We curate brands through a rigorous selection process, featuring only those that meet our standards for quality, sustainability, and innovation. Browse our curated collections, discover new brands, and shop directly from designers.",
    },
    {
      question: "Shipping and Delivery",
      answer: "Shipping times vary by brand and location. Most orders ship within 3-7 business days. International shipping is available to most countries. Each brand handles their own shipping—check product pages for specific delivery times.",
    },
    {
      question: "Returns and Refunds",
      answer: "We want you to love your purchase. Most brands offer returns within 14-30 days of delivery. Check each product page for the specific return policy. Contact our support team to initiate a return.",
    },
    {
      question: "International Shipping",
      answer: "Yes! We ship internationally to most countries. Shipping costs and times vary by destination. Import taxes and duties may apply and are the responsibility of the customer.",
    },
    {
      question: "Sizing and Fit",
      answer: "Each brand has their own sizing. Check the size guide on each product page. Need help? Use our Fit Passport to find your perfect size across brands.",
    },
    {
      question: "Payment Options",
      answer: "We accept all major credit cards, Apple Pay, Google Pay, and PayPal. All payments are secure and encrypted.",
    },
    {
      question: "Authenticity Guarantee",
      answer: "Every item on Nefer comes directly from verified brands. We authenticate all products and stand behind their quality.",
    },
  ];

  const brandFAQs = [
    {
      question: "How do I apply to sell on Nefer?",
      answer: "Click 'Apply to Sell' on our brands page. You'll fill out an application with your brand details, portfolio, and business information. Our team reviews every application personally.",
    },
    {
      question: "What's the approval process?",
      answer: "We review applications within 5-7 business days. We evaluate brand aesthetic, quality, sustainability practices, and market positioning. You'll hear back with our decision.",
    },
    {
      question: "What are the requirements to sell?",
      answer: "We look for: distinctive design point of view, quality craftsmanship, sustainability commitment, professional business operations, and growth potential.",
    },
    {
      question: "What's the commission structure?",
      answer: "We offer competitive commission rates for emerging brands. Contact our brand team for specific pricing tailored to your stage.",
    },
    {
      question: "How do I upload products?",
      answer: "Once approved, you get access to our seller dashboard where you can upload products, manage inventory, and process orders.",
    },
    {
      question: "When do I get paid?",
      answer: "Payouts are processed bi-weekly. You can track all your sales and earnings in your dashboard.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">FAQ</h1>
          <p className="text-xl text-muted mb-12">Everything you need to know about Nefer.</p>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-6">For Customers</h2>
              <div className="space-y-6">
                {customerFAQs.map((faq, i) => (
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
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold mb-6">For Brands</h2>
              <div className="space-y-6">
                {brandFAQs.map((faq, i) => (
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}