"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  size: string;
  quantity: number;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  shippingAddress: string;
}

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customer: "Sophie Müller",
      email: "sophie@example.com",
      product: "Oversized Tee - White",
      size: "M",
      quantity: 1,
      amount: 89,
      status: "pending",
      date: "2026-05-15",
      shippingAddress: "Herengracht 123, Amsterdam",
    },
    {
      id: "ORD-002",
      customer: "Emma Lindqvist",
      email: "emma@example.com",
      product: "Crop Hoodie - Black",
      size: "S",
      quantity: 1,
      amount: 145,
      status: "shipped",
      date: "2026-05-14",
      shippingAddress: "Keizersgracht 456, Amsterdam",
    },
    {
      id: "ORD-003",
      customer: "Lisa Koster",
      email: "lisa@example.com",
      product: "Classic Tee - Navy, Oversized Tee - White",
      size: "M, L",
      quantity: 2,
      amount: 164,
      status: "delivered",
      date: "2026-05-13",
      shippingAddress: "Prinsengracht 789, Amsterdam",
    },
    {
      id: "ORD-004",
      customer: "Anna Peters",
      email: "anna@example.com",
      product: "Classic Tee - Navy",
      size: "L",
      quantity: 1,
      amount: 75,
      status: "processing",
      date: "2026-05-12",
      shippingAddress: "Kelderstraat 10, Rotterdam",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders =
    filter === "all" ? orders : orders.filter((order) => order.status === filter);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-500";
      case "processing":
        return "bg-blue-500/20 text-blue-500";
      case "shipped":
        return "bg-purple-500/20 text-purple-500";
      case "delivered":
        return "bg-green-500/20 text-green-500";
      case "cancelled":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-white/20 text-white";
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus as Order["status"] } : order
      )
    );
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold">Orders</h1>
              <p className="text-muted">Manage and fulfill orders</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {["all", "pending", "processing", "shipped", "delivered"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === status
                    ? "bg-accent text-black"
                    : "bg-white/10 text-muted hover:text-white"
                }`}
              >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-2 text-xs opacity-70">
                  ({status === "all" ? orders.length : orders.filter((o) => o.status === status).length})
                </span>
              </button>
            ))}
          </div>

          {/* Orders List */}
          <div className="bg-white/5 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-6 text-muted font-medium">Order</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Customer</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Product</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Amount</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Status</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Date</th>
                  <th className="text-right py-4 px-6 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-white/5">
                    <td className="py-4 px-6">
                      <div className="font-medium">{order.id}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div>{order.customer}</div>
                      <div className="text-sm text-muted">{order.email}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div>{order.product}</div>
                      <div className="text-sm text-muted">
                        Size: {order.size} × {order.quantity}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">{formatPrice(order.amount)}</td>
                    <td className="py-4 px-6">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`px-2 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${getStatusColor(
                          order.status
                        )}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-muted">{order.date}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-accent hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Detail Modal */}
          {selectedOrder && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl max-w-lg w-full p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Order {selectedOrder.id}</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-muted hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted">Customer</span>
                    <span>{selectedOrder.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Email</span>
                    <span>{selectedOrder.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Product</span>
                    <span>{selectedOrder.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Size</span>
                    <span>{selectedOrder.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Quantity</span>
                    <span>{selectedOrder.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Amount</span>
                    <span className="font-medium">{formatPrice(selectedOrder.amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Shipping Address</span>
                    <span>{selectedOrder.shippingAddress}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <label className="block text-sm mb-2">Update Status</label>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => {
                      updateOrderStatus(selectedOrder.id, e.target.value);
                      setSelectedOrder({ ...selectedOrder, status: e.target.value as Order["status"] });
                    }}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
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