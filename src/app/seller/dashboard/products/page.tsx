"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  status: "active" | "draft" | "pending";
  stock: number;
  image: string;
}

export default function SellerProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Oversized Tee - White",
      price: 89,
      status: "active",
      stock: 45,
      image: "/placeholder.jpg",
    },
    {
      id: "2",
      name: "Crop Hoodie - Black",
      price: 145,
      status: "active",
      stock: 23,
      image: "/placeholder.jpg",
    },
    {
      id: "3",
      name: "Classic Tee - Navy",
      price: 75,
      status: "draft",
      stock: 0,
      image: "/placeholder.jpg",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

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
              <h1 className="text-3xl font-display font-bold">Products</h1>
              <p className="text-muted">Manage your product catalog</p>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              {showAddForm ? "Cancel" : "+ Add Product"}
            </button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Add New Product</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Product Name</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Price (EUR)</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                  >
                    <option value="">Select category</option>
                    <option value="tops">Tops</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Stock Quantity</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    placeholder="0"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Description</label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    placeholder="Describe your product..."
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors">
                  Save Product
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Products List */}
          <div className="bg-white/5 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-6 text-muted font-medium">Product</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Price</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Stock</th>
                  <th className="text-left py-4 px-6 text-muted font-medium">Status</th>
                  <th className="text-right py-4 px-6 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-white/5">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{formatPrice(product.price)}</td>
                    <td className="py-4 px-6">{product.stock} units</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === "active"
                            ? "bg-green-500/20 text-green-500"
                            : product.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-white/20 text-white"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-accent hover:underline mr-4">Edit</button>
                      <button className="text-red-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {products.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-muted mb-4">No products yet</p>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="text-accent hover:underline"
                >
                  Add your first product
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}