import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Seller Sign Up | Nefer",
  description: "Create a seller account on Nefer.",
};

export default function SellerSignupPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-center">Seller Account</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Brand Name</label>
              <input type="text" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="Your brand" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="seller@brand.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-border bg-transparent focus:border-metallic-sand outline-none" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full py-4 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity">
              Create Account
            </button>
          </form>
          
          <p className="mt-6 text-sm text-muted text-center">
            Already have an account? <Link href="/seller/login" className="text-metallic-sand hover:underline">Sign in</Link>
          </p>
          <p className="mt-4 text-sm text-muted text-center">
            <Link href="/brands/join" className="text-metallic-sand hover:underline">Apply to sell</Link> before creating an account.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}