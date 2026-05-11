"use client";

import Link from "next/link";

const orders = [
  { 
    id: "ORD-001", 
    date: "2026-05-10", 
    status: "Delivered", 
    total: 420,
    items: [
      { name: "Stellar Dress", brand: "ECHO", size: "M", price: 420, quantity: 1 }
    ]
  },
  { 
    id: "ORD-002", 
    date: "2026-05-08", 
    status: "Shipped", 
    total: 190,
    items: [
      { name: "Nebula Hoodie", brand: "AURA", size: "L", price: 190, quantity: 1 }
    ]
  },
  { 
    id: "ORD-003", 
    date: "2026-05-05", 
    status: "Pending", 
    total: 340,
    items: [
      { name: "Void Jacket", brand: "STROM", size: "M", price: 340, quantity: 1 }
    ]
  },
];

export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-xl font-display font-semibold mb-6">Orders</h2>
      
      {orders.length === 0 ? (
        <p className="text-muted">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border border-border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted">{order.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs ${
                  order.status === "Delivered" ? "bg-green-500/10 text-green-500" :
                  order.status === "Shipped" ? "bg-blue-500/10 text-blue-500" :
                  "bg-yellow-500/10 text-yellow-500"
                }`}>
                  {order.status}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <div>
                      <p className="text-sm">{item.brand} - {item.name}</p>
                      <p className="text-sm text-muted">Size: {item.size} × {item.quantity}</p>
                    </div>
                    <p className="text-sm">€{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">€{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}