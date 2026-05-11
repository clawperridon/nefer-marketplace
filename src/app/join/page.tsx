"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState, Suspense } from "react";

function JoinForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    // Simulate sign up - replace with real Supabase auth
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Demo: show placeholder message
    setError("Configure Supabase to enable sign up");
    setLoading(false);
  }

  if (registered) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Check Your Email</h1>
        <p className="text-muted mb-8">
          We sent a confirmation link to {email}.
        </p>
        <Link href="/login" className="underline">
          Back to Sign In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm mb-2">First Name</label>
        <input 
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background"
          placeholder="Jane"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-2">Last Name</label>
        <input 
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background"
          placeholder="Doe"
          required
        />
      </div>
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
          minLength={8}
          required
        />
      </div>
      <button 
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-foreground text-background font-medium disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8 text-center">
            Create Account
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <JoinForm />
          </Suspense>
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