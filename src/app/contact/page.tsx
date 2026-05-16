"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted mb-12">
            Get in touch with our team.
          </p>

          {submitted ? (
            <div className="bg-white/5 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-display font-semibold mb-2">Message Sent!</h2>
              <p className="text-muted">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="brands">Partnerships</option>
                  <option value="press">Press</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-black font-semibold py-4 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">General</h3>
              <p className="text-muted text-sm">hello@nefer.com</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Partnerships</h3>
              <p className="text-muted text-sm">partners@nefer.com</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Press</h3>
              <p className="text-muted text-sm">press@nefer.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}