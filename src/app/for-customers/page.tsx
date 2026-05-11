import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Customers | Nefer",
  description: "Discover emerging fashion brands on Nefer.",
};

export default function ForCustomersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Shop <span className="text-metallic-sand">Emerging</span> Fashion</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">Discover unique pieces from the world&apos;s most promising emerging designers. Curated for those who define tomorrow&apos;s style.</p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <Link href="/discover" className="px-6 py-3 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity">
              Explore Collection
            </Link>
            <Link href="/join" className="px-6 py-3 border border-border font-medium hover:bg-muted/10 transition-colors">
              Create Account
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Curated Selection</h3>
              <p className="text-sm text-muted">Every brand is hand-picked for quality and authenticity.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Secure Checkout</h3>
              <p className="text-sm text-muted">Safe payments with full buyer protection.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Exclusive Access</h3>
              <p className="text-sm text-muted">First access to limited releases and collaborations.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}