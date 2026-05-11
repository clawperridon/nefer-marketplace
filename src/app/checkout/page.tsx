"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setOrderPlaced(true);
    clearCart();
    setLoading(false);
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">Order Confirmed!</h1>
            <p className="text-muted mb-8">
              Thank you for your order. You will receive a confirmation email shortly.
            </p>
            <Link href="/discover" className="text-metallic-sand hover:underline">
              Continue Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <p className="text-muted mb-6">Your cart is empty</p>
            <Link href="/discover" className="text-metallic-sand hover:underline">
              Continue Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact & Shipping */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-semibold">Contact</h2>
              
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input 
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input 
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-display font-semibold pt-4">Shipping</h2>
              
              <div>
                <label className="block text-sm mb-2">Address</label>
                <input 
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">City</label>
                  <input 
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Postal Code</label>
                  <input 
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-display font-semibold pt-4">Payment</h2>
              
              <div>
                <label className="block text-sm mb-2">Card Number</label>
                <input 
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="4242 4242 4242 4242"
                  className="w-full px-4 py-3 border border-border bg-background"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Expiry</label>
                  <input 
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">CVC</label>
                  <input 
                    type="text"
                    name="cvc"
                    value={form.cvc}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full px-4 py-3 border border-border bg-background"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-card border border-border p-6 sticky top-24">
                <h2 className="text-xl font-display font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}`} className="flex justify-between text-sm">
                      <span>{item.name} ({item.size}) × {item.quantity}</span>
                      <span>€{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal</span>
                    <span>€{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{total}</span>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-foreground text-background font-medium disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Place Order"}
                </button>
                
                <p className="text-xs text-muted text-center mt-4">
                  Demo - no real payment will be processed
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}