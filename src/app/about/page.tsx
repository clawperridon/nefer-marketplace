import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Nefer",
  description: "About Nefer Marketplace - The premier platform for emerging fashion brands.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-6">About NEFER</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted mb-8">
              NEFER is the premier marketplace for emerging fashion brands. 
              We bridge the gap between visionary designers and fashion-forward customers who seek something beyond the mainstream.
            </p>

            <h2 className="text-2xl font-display font-semibold mb-4 mt-8">Our Mission</h2>
            <p className="text-muted mb-6">
              We believe in the power of emerging talent. NEFER was created to give independent designers 
              a platform to reach customers who appreciate authenticity, sustainability, and innovative design.
            </p>

            <h2 className="text-2xl font-display font-semibold mb-4 mt-8">What We Do</h2>
            <p className="text-muted mb-6">
              We curate the most promising emerging brands and connect them with customers who are looking 
              for something different. Every brand on NEFER is vetted for quality, sustainability, and unique design DNA.
            </p>

            <h2 className="text-2xl font-display font-semibold mb-4 mt-8">Our Values</h2>
            <ul className="space-y-3 text-muted mb-6">
              <li>✨ <strong>Authenticity</strong> - Real designers, real craftsmanship</li>
              <li>🌿 <strong>Sustainability</strong> - Conscious fashion for the future</li>
              <li>🎯 <strong>Quality</strong> - Built to last, designed to inspire</li>
              <li>🌍 <strong>Inclusivity</strong> - Fashion for everyone</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold mb-4 mt-8">The Team</h2>
            <p className="text-muted mb-6">
              Founded in 2026, NEFER is a team of fashion enthusiasts, technologists, and strategists 
              working to reshape the future of fashion retail.
            </p>

            <h2 className="text-2xl font-display font-semibold mb-4 mt-8">Join Us</h2>
            <p className="text-muted mb-6">
              Interested in partnering with NEFER? We're always looking for emerging brands that 
              share our vision. <a href="/brands/join" className="text-accent hover:underline">Apply to join our marketplace</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}