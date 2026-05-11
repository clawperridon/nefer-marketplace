import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "For Sellers | Nefer",
  description: "Sell your emerging fashion brand on Nefer.",
};

export default function ForSellersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Sell on <span className="text-metallic-sand">Nefer</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">The premier marketplace for emerging fashion brands. Reach discerning customers who value authenticity, craftsmanship, and tomorrow&apos;s style.</p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <Link href="/brands/join" className="px-6 py-3 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity">
              Apply Now
            </Link>
            <Link href="/seller/login" className="px-6 py-3 border border-border font-medium hover:bg-muted/10 transition-colors">
              Seller Login
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-muted">Connect with customers in 50+ countries who trust Nefer for curated emerging design.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Powerful Tools</h3>
              <p className="text-sm text-muted">Manage inventory, orders, and analytics from your seller dashboard.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-lg font-display font-semibold mb-2">Low Fees</h3>
              <p className="text-sm text-muted">Competitive commission rates with no upfront costs.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}