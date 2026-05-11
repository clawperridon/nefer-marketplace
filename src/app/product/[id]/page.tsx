"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const products: Record<string, {
  id: string;
  name: string;
  brand: string;
  brandSlug: string;
  price: number;
  description: string;
  material: string;
  sizes: string[];
  category: string;
}> = {
  "1": { id: "1", name: "Obsidian Tee", brand: "AURA", brandSlug: "aura", price: 120, description: "Minimalist cotton tee with architectural silhouette.", material: "100% Organic Cotton", sizes: ["XS", "S", "M", "L", "XL"], category: "Tops" },
  "2": { id: "2", name: "Void Jacket", brand: "STROM", brandSlug: "strom", price: 340, description: "Technical outerwear with reflective detailing.", material: "Nylon/Polyester", sizes: ["S", "M", "L", "XL"], category: "Outerwear" },
  "3": { id: "3", name: "Lunar Pants", brand: "NOVA", brandSlug: "nova", price: 280, description: "Wide-leg trousers in Japanese denim.", material: "Japanese Denim", sizes: ["24", "26", "28", "30", "32"], category: "Bottoms" },
  "4": { id: "4", name: "Stellar Dress", brand: "ECHO", brandSlug: "echo", price: 420, description: "Asymmetric dress with architectural draping.", material: "100% Silk", sizes: ["XS", "S", "M", "L"], category: "Dresses" },
  "5": { id: "5", name: "Nebula Hoodie", brand: "AURA", brandSlug: "aura", price: 190, description: "Heavyweight cotton hoodie with oversized fit.", material: "100% Cotton", sizes: ["XS", "S", "M", "L", "XL"], category: "Tops" },
  "6": { id: "6", name: "Horizon Bag", brand: "STROM", brandSlug: "strom", price: 250, description: "Tech nylon crossbody with multiple compartments.", material: "Tech Nylon", sizes: ["One Size"], category: "Accessories" },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <main className="min-h-screen"><Navigation /><section className="pt-32 pb-20 px-6"><div className="max-w-7xl mx-auto text-center"><h1 className="text-3xl font-display font-bold mb-4">Product Not Found</h1><Link href="/discover" className="text-metallic-sand hover:underline">Back to Discover</Link></div></section><Footer /></main>
    );
  }

  const handleAddToCart = () => {
    addItem({ id: `${product.id}-${selectedSize}`, productId: product.id, name: product.name, brand: product.brand, price: product.price, size: selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-sm text-muted">
            <Link href="/discover">Discover</Link> / <Link href={`/brand/${product.brandSlug}`}>{product.brand}</Link> / <span className="text-foreground">{product.name}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-[3/4] bg-gradient-to-br from-muted/20 to-muted/5 border border-border flex items-center justify-center">
              <div className="text-center"><div className="w-32 h-32 mx-auto mb-4 rounded-full bg-metallic-sand/10 flex items-center justify-center"><span className="text-4xl text-metallic-sand">{product.name.charAt(0)}</span></div><p className="text-muted text-sm">{product.name}</p><p className="text-xs text-metallic-sand">{product.brand}</p></div>
            </div>
            <div>
              <Link href={`/brand/${product.brandSlug}`} className="text-sm text-muted hover:text-foreground">{product.brand}</Link>
              <h1 className="text-3xl font-display font-bold mt-1 mb-2">{product.name}</h1>
              <p className="text-2xl mb-6">€{product.price}</p>
              <p className="text-muted mb-8">{product.description}</p>
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-[3rem] px-3 py-2 border text-sm transition-colors ${selectedSize === size ? "border-metallic-sand bg-metallic-sand text-white" : "border-border hover:border-foreground"}`}>{size}</button>
                  ))}
                </div>
              </div>
              <button onClick={handleAddToCart} className="w-full py-4 bg-foreground text-background font-medium hover:opacity-90 transition-opacity mb-4">{added ? "Added to Cart ✓" : "Add to Cart"}</button>
              <Link href="/cart" className="w-full block py-4 border border-border text-foreground font-medium hover:bg-muted/10 transition-colors text-center">View Cart</Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-border"><h3 className="text-lg font-display font-semibold mb-2">Material</h3><p className="text-sm text-muted">{product.material}</p></div>
            <div className="p-6 border border-border"><h3 className="text-lg font-display font-semibold mb-2">Shipping & Returns</h3><p className="text-sm text-muted">Free shipping on orders over €200. Returns within 14 days.</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}