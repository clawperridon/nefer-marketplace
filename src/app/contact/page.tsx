"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend/API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const topics = [
    { value: "general", label: "General Question", description: "Anything else you want to ask" },
    { value: "brands", label: "Become a Brand", description: "Interested in selling on NEFER" },
    { value: "press", label: "Press & Media", description: "Media inquiries, interviews" },
    { value: "careers", label: "Careers", description: "Job opportunities at NEFER" },
    { value: "support", label: "Customer Support", description: "Help with an order" },
    { value: "partnership", label: "Partnership", description: "Business partnerships" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Have a question? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto bg-white/5 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h2 className="text-2xl font-display font-semibold mb-2">Message Received!</h2>
              <p className="text-muted mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+31 6 12345678"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      What is this about? <span className="text-accent">*</span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {topics.map((topic) => (
                        <label
                          key={topic.value}
                          className={`relative cursor-pointer`}
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={topic.value}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="peer sr-only"
                            required
                          />
                          <div className="p-4 rounded-xl border border-white/10 peer-checked:border-accent peer-checked:bg-accent/10 transition-all">
                            <div className="font-medium text-sm">{topic.label}</div>
                            <div className="text-xs text-muted mt-1">{topic.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about what you'd like to know or discuss..."
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-accent text-black font-semibold py-4 rounded-xl hover:bg-accent/90 transition-colors text-lg"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-center text-sm text-muted">
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              </div>

              {/* Contact Info Cards */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted text-sm mb-4">For general questions</p>
                  <a href="mailto:hello@nefer.world" className="text-accent hover:underline font-medium">
                    hello@nefer.world
                  </a>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="font-semibold text-lg mb-2">Partnerships</h3>
                  <p className="text-muted text-sm mb-4">For brand collaborations</p>
                  <a href="mailto:partners@nefer.world" className="text-accent hover:underline font-medium">
                    partners@nefer.world
                  </a>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-3xl mb-3">📰</div>
                  <h3 className="font-semibold text-lg mb-2">Press</h3>
                  <p className="text-muted text-sm mb-4">For media inquiries</p>
                  <a href="mailto:press@nefer.world" className="text-accent hover:underline font-medium">
                    press@nefer.world
                  </a>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted text-sm">
                    Amsterdam<br />
                    Netherlands
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}