import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Join | Nefer",
  description: "Create your Nefer account.",
};

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-center">
            Create Account
          </h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-border bg-background"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-border bg-background"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-border bg-background"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-border bg-background"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-foreground text-background font-medium"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-muted text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}