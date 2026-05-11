"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState, Suspense } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    // Simulate sign in - replace with real Supabase auth
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Demo: just show error for now
    setError("Configure Supabase to enable authentication");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm mb-2">Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background"
          placeholder="••••••••"
          required
        />
      </div>
      <button 
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-foreground text-background font-medium disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-center">
            Sign In
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
          <p className="text-sm text-muted text-center mt-6">
            Dont have an account?{" "}
            <Link href="/join" className="underline">
              Join
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}