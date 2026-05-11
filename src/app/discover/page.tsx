import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Discover | Nefer",
  description: "Explore curated emerging fashion brands on Nefer.",
};

const products = [
  { id: 1, name: "Obsidian Tee", brand: "AURA", price: "€120", category: "Tops" },
  { id: 2, name: "Void Jacket", brand: "STROM", price: "€340", category: "Outerwear" },
  { id: 3, name: "Lunar Pants", brand: "NOVA", price: "€280", category: "Bottoms" },
  { id: 4, name: "Stellar Dress", brand: "ECHO", price: "€420", category: "Dresses" },
  { id: 5, name: "Nebula Hoodie", brand: "AURA", price: "€190", category: "Tops" },
  { id: 6, name: "Horizon Bag", brand: "STROM", price: "€250", category: "Accessories" },
];

export default function DiscoverPage() {
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
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-muted/10 border border-border mb-3" />
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{product.brand}</p>
                    <p className="text-sm text-muted">{product.name}</p>
                  </div>
                  <p className="text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}