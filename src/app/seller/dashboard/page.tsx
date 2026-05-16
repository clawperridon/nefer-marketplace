"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface BrandStats {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
}

interface RecentOrder {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: string;
  date: string;
}

export default function SellerDashboardPage() {
  const [stats, setStats] = useState<BrandStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Load demo data - in real app this comes from Supabase
    setStats({
      totalProducts: 12,
      totalOrders: 48,
      totalRevenue: 12450,
      pendingOrders: 3,
    });
    setRecentOrders([
      {
        id: "1",
        customer: "Sophie M.",
        product: "Oversized Tee - White",
        amount: 89,
        status: "pending",
        date: "2026-05-15",
      },
      {
        id: "2",
        customer: "Emma L.",
        product: "Crop Hoodie - Black",
        amount: 145,
        status: "shipped",
        date: "2026-05-14",
      },
      {
        id: "3",
        customer: "Lisa K.",
        product: "Classic Tee - Navy",
        amount: 75,
        status: "delivered",
        date: "2026-05-13",
      },
    ]);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold">Brand Dashboard</h1>
              <p className="text-muted">Manage your brand and products</p>
            </div>
            <button className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors">
              + Add Product
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Total Products</div>
              <div className="text-3xl font-display font-bold">{stats.totalProducts}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Total Orders</div>
              <div className="text-3xl font-display font-bold">{stats.totalOrders}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Revenue</div>
              <div className="text-3xl font-display font-bold">{formatPrice(stats.totalRevenue)}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-sm text-muted mb-2">Pending</div>
              <div className="text-3xl font-display font-bold text-accent">{stats.pendingOrders}</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-white/10 mb-8">
            {["overview", "products", "orders", "analytics"].map((tab) => (
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
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-muted font-medium">Customer</th>
                        <th className="text-left py-3 px-4 text-muted font-medium">Product</th>
                        <th className="text-left py-3 px-4 text-muted font-medium">Amount</th>
                        <th className="text-left py-3 px-4 text-muted font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-muted font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-white/5">
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{order.product}</td>
                          <td className="py-3 px-4">{formatPrice(order.amount)}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === "pending"
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : order.status === "shipped"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-green-500/20 text-green-500"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-muted">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <button className="bg-white/5 rounded-xl p-6 text-left hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">📦</div>
                  <div className="font-semibold">Manage Products</div>
                  <div className="text-sm text-muted">Add, edit or remove products</div>
                </button>
                <button className="bg-white/5 rounded-xl p-6 text-left hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold">View Analytics</div>
                  <div className="text-sm text-muted">Track your performance</div>
                </button>
                <button className="bg-white/5 rounded-xl p-6 text-left hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="font-semibold">Brand Settings</div>
                  <div className="text-sm text-muted">Update your profile</div>
                </button>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your Products</h2>
                <button className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-accent/90">
                  + Add Product
                </button>
              </div>
              <p className="text-muted">No products yet. Add your first product to get started.</p>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">All Orders</h2>
              <p className="text-muted">No orders to display.</p>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Analytics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-sm text-muted mb-2">Total Revenue</div>
                  <div className="text-3xl font-display font-bold">{formatPrice(stats.totalRevenue)}</div>
                  <div className="text-sm text-green-500 mt-2">↑ 12% this month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-sm text-muted mb-2">Conversion Rate</div>
                  <div className="text-3xl font-display font-bold">3.2%</div>
                  <div className="text-sm text-green-500 mt-2">↑ 0.5% this month</div>
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