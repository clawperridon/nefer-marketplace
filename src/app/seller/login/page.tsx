import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Seller Login | Nefer",
  description: "Sign in to your seller account.",
};

export default function SellerLoginPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-center">Seller Login</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="seller@brand.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full py-4 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </form>
          
          <p className="mt-6 text-sm text-muted text-center">
            New seller? <Link href="/brands/join" className="text-metallic-sand hover:underline">Apply now</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}