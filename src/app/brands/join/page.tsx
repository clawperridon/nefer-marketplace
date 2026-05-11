import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Apply to Sell | Nefer",
  description: "Apply to sell your brand on Nefer Marketplace.",
};

export default function BrandsJoinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Apply to Sell</h1>
          <p className="text-xl text-muted mb-12">Join Nefer as a seller and reach discerning customers worldwide.</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Brand Name</label>
              <input type="text" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="Your brand name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="contact@brand.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Website</label>
              <input type="url" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="https://brand.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">About Your Brand</label>
              <textarea className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none h-32" placeholder="Tell us about your brand..." />
            </div>
            <button type="submit" className="w-full py-4 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity">
              Submit Application
            </button>
          </form>
          
          <p className="mt-8 text-sm text-muted text-center">
            Already have an account? <Link href="/seller/login" className="text-metallic-sand hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}