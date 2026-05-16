"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface PendingBrand {
  id: string;
  name: string;
  slug: string;
  email: string;
  category: string;
  description: string;
  appliedDate: string;
}

interface Stats {
  totalBrands: number;
  activeProducts: number;
  totalOrders: number;
  totalRevenue: number;
}

export default function AdminDashboardPage() {
  const [stats] = useState<Stats>({
    totalBrands: 24,
    activeProducts: 156,
    totalOrders: 892,
    totalRevenue: 245600,
  });

  const [pendingBrands, setPendingBrands] = useState<PendingBrand[]>([
    {
      id: "1",
      name: "AURA Copenhagen",
      slug: "aura-copenhagen",
      email: "hello@aura.com",
      category: "Sustainable Fashion",
      description: "Minimalist streetwear from Denmark",
      appliedDate: "2026-05-14",
    },
    {
      id: "2",
      name: "STROM Berlin",
      slug: "strom-berlin",
      email: "team@strom.de",
      category: "Avant-Garde",
      description: "Industrial fashion from Berlin",
      appliedDate: "2026-05-13",
    },
  ]);

  const [activeTab, setActiveTab] = useState("overview");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const approveBrand = (brandId: string) => {
    setPendingBrands(pendingBrands.filter((b) => b.id !== brandId));
    alert(`Brand approved!`);
  };

  const rejectBrand = (brandId: string) => {
    setPendingBrands(pendingBrands.filter((b) => b.id !== brandId));
    alert(`Brand rejected!`);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-muted">Platform management</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Total Brands</div>
              <div className="text-3xl font-display font-bold">{stats.totalBrands}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Active Products</div>
              <div className="text-3xl font-display font-bold">{stats.activeProducts}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Total Orders</div>
              <div className="text-3xl font-display font-bold">{stats.totalOrders}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Revenue</div>
              <div className="text-3xl font-display font-bold">{formatPrice(stats.totalRevenue)}</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-white/10 mb-8">
            {["overview", "brands", "products", "orders", "users"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-4 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-accent border-b-2 border-accent"
                    : "text-muted hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Pending Approvals */}
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Pending Brand Applications
                  {pendingBrands.length > 0 && (
                    <span className="ml-2 bg-accent text-black text-sm px-2 py-0.5 rounded-full">
                      {pendingBrands.length}
                    </span>
                  )}
                </h2>
                {pendingBrands.length > 0 ? (
                  <div className="space-y-4">
                    {pendingBrands.map((brand) => (
                      <div
                        key={brand.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                      >
                        <div>
                          <div className="font-medium">{brand.name}</div>
                          <div className="text-sm text-muted">{brand.category}</div>
                          <div className="text-sm text-muted">{brand.email}</div>
                          <div className="text-sm text-muted">Applied: {brand.appliedDate}</div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveBrand(brand.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectBrand(brand.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No pending applications</p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold">Platform Analytics</div>
                  <div className="text-sm text-muted">View detailed metrics</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">Revenue Reports</div>
                  <div className="text-sm text-muted">Track earnings</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="font-semibold">Settings</div>
                  <div className="text-sm text-muted">Configure platform</div>
                </div>
              </div>
            </div>
          )}

          {/* Brands Tab */}
          {activeTab === "brands" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Brand Management</h2>
              <p className="text-muted">View and manage all brands on the platform</p>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Product Moderation</h2>
              <p className="text-muted">Review and approve new products</p>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">All Orders</h2>
              <p className="text-muted">Track platform-wide orders</p>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">User Management</h2>
              <p className="text-muted">Manage customers and brands</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}