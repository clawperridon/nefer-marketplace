"use client";

import Link from "next/link";

const stats = [
  { label: "Total Orders", value: "3" },
  { label: "Pending", value: "1" },
  { label: "Delivered", value: "2" },
];

const recentOrders = [
  { id: "ORD-001", date: "2026-05-10", status: "Delivered", total: 420 },
  { id: "ORD-002", date: "2026-05-08", status: "Shipped", total: 190 },
  { id: "ORD-003", date: "2026-05-05", status: "Pending", total: 340 },
];

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-display font-semibold mb-6">Overview</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 border border-border">
            <p className="text-sm text-muted mb-1">{stat.label}</p>
            <p className="text-2xl font-display font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Recent Orders */}
      <h3 className="text-lg font-display font-semibold mb-4">Recent Orders</h3>
      <div className="border border-border">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr className="text-left text-sm text-muted">
              <th className="py-3 px-4 font-normal">Order</th>
              <th className="py-3 px-4 font-normal">Date</th>
              <th className="py-3 px-4 font-normal">Status</th>
              <th className="py-3 px-4 font-normal">Total</th>
              <th className="py-3 px-4 font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-border last:border-0">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4 text-muted">{order.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs ${
                    order.status === "Delivered" ? "bg-green-500/10 text-green-500" :
                    order.status === "Shipped" ? "bg-blue-500/10 text-blue-500" :
                    "bg-yellow-500/10 text-yellow-500"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">€{order.total}</td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/orders/${order.id}`} className="text-sm text-muted hover:text-foreground">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}