"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useFavorites, mapCategoryToType } from "@/lib/favorites";

const products = [
  { id: 1, name: "Obsidian Tee", brand: "AURA", price: "€120", priceNum: 120, category: "Tops" },
  { id: 2, name: "Void Jacket", brand: "STROM", price: "€340", priceNum: 340, category: "Outerwear" },
  { id: 3, name: "Lunar Pants", brand: "NOVA", price: "€280", priceNum: 280, category: "Bottoms" },
  { id: 4, name: "Stellar Dress", brand: "ECHO", price: "€420", priceNum: 420, category: "Dresses" },
  { id: 5, name: "Nebula Hoodie", brand: "AURA", price: "€190", priceNum: 190, category: "Tops" },
  { id: 6, name: "Horizon Bag", brand: "STROM", price: "€250", priceNum: 250, category: "Accessories" },
];

// Minimalist heart SVG icon
function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={`w-5 h-5 transition-all duration-200 ${filled ? 'text-sand fill-sand' : 'text-dusk/40 hover:text-sand'}`}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
      />
    </svg>
  );
}

export default function DiscoverPage() {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    e.stopPropagation();
    const productId = String(product.id);
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite({
        id: `fav-${product.id}`,
        productId,
        name: product.name,
        brand: product.brand,
        price: product.priceNum,
        category: mapCategoryToType(product.category),
      });
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Discover
          </h1>
          <p className="text-xl text-muted">
            Curated pieces from the worlds most promising emerging brands.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {["All", "Tops", "Bottoms", "Outerwear", "Dresses", "Accessories"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm border ${
                cat === "All" 
                  ? "bg-foreground text-background" 
                  : "border-border text-muted hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const isFav = isFavorite(String(product.id));
              return (
                <Link 
                  key={product.id} 
                  href={`/product/${product.id}`}
                  className="group relative"
                >
                  <div className="aspect-[3/4] bg-muted/10 border border-border mb-3" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">{product.brand}</p>
                      <p className="text-sm text-muted">{product.name}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-sm">{product.price}</p>
                      {/* Minimalist Heart */}
                      <button
                        onClick={(e) => toggleFavorite(e, product)}
                        className="p-1 hover:scale-110 transition-transform"
                        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                      >
                        <HeartIcon filled={isFav} />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}