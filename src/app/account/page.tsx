"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Order {
  id: string;
  date: string;
  items: string;
  total: number;
  status: "processing" | "shipped" | "delivered";
}

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export default function AccountPage() {
  const [user] = useState({
    name: "Flo Perridon",
    email: "florence@perridon.nl",
    avatar: null,
  });

  const [orders] = useState<Order[]>([
    {
      id: "ORD-7821",
      date: "2026-05-10",
      items: "Oversized Tee - White",
      total: 89,
      status: "delivered",
    },
    {
      id: "ORD-7822",
      date: "2026-05-12",
      items: "Crop Hoodie - Black",
      total: 145,
      status: "shipped",
    },
  ]);

  const [addresses] = useState<Address[]>([
    {
      id: "1",
      name: "Home",
      street: "Herengracht 123",
      city: "Amsterdam",
      zip: "1016 BC",
      country: "Netherlands",
      isDefault: true,
    },
    {
      id: "2",
      name: "Office",
      street: "Zuidas 456",
      city: "Amsterdam",
      zip: "1077 DX",
      country: "Netherlands",
      isDefault: false,
    },
  ]);

  const [activeTab, setActiveTab] = useState("profile");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-blue-500/20 text-blue-500";
      case "shipped":
        return "bg-purple-500/20 text-purple-500";
      case "delivered":
        return "bg-green-500/20 text-green-500";
      default:
        return "bg-white/20 text-white";
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-black text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold">{user.name}</h1>
              <p className="text-muted">{user.email}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-white/10 mb-8 overflow-x-auto">
            {["profile", "orders", "addresses", "payment", "wishlist"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-4 font-medium capitalize transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-accent border-b-2 border-accent"
                    : "text-muted hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <button className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-6">Order History</h2>
              {orders.map((order) => (
                <div key={order.id} className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-medium">Order {order.id}</div>
                      <div className="text-sm text-muted">{order.date}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div>{order.items}</div>
                      <div className="font-medium mt-1">{formatPrice(order.total)}</div>
                    </div>
                    <button className="text-accent hover:underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                <button className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-accent/90">
                  + Add Address
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`bg-white/5 rounded-xl p-6 ${address.isDefault ? "border border-accent" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">{address.name}</div>
                      {address.isDefault && (
                        <span className="text-xs bg-accent text-black px-2 py-1 rounded">Default</span>
                      )}
                    </div>
                    <div className="text-muted">
                      {address.street}<br />
                      {address.zip} {address.city}<br />
                      {address.country}
                    </div>
                    <div className="flex gap-4 mt-4 text-sm">
                      <button className="text-accent hover:underline">Edit</button>
                      {!address.isDefault && (
                        <button className="text-muted hover:text-white">Set as Default</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Tab */}
          {activeTab === "payment" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                      💳
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted">Expires 12/27</div>
                    </div>
                  </div>
                  <button className="text-accent hover:underline">Edit</button>
                </div>
              </div>
              <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                + Add Payment Method
              </button>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Wishlist</h2>
              <p className="text-muted">Your wishlist is empty</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}