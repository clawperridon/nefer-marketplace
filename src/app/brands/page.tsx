import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Brands | Nefer",
  description: "Meet the emerging fashion brands on Nefer.",
};

const brands = [
  { 
    id: "aura", 
    name: "AURA", 
    origin: "Amsterdam",
    description: "Minimalist streetwear with architectural influence.",
    category: "Streetwear"
  },
  { 
    id: "strom", 
    name: "STROM", 
    origin: "Berlin",
    description: "Futuristic technical apparel.",
    category: "Techwear"
  },
  { 
    id: "nova", 
    name: "NOVA", 
    origin: "London",
    description: "Bold contemporary silhouettes.",
    category: "Contemporary"
  },
  { 
    id: "echo", 
    name: "ECHO", 
    origin: "Milan",
    description: "Luxury essentials with eastern influence.",
    category: "Luxury"
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Brands
          </h1>
          <p className="text-xl text-muted">
            The emerging designers shaping tomorrows fashion.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-cosmic-blue text-white">
            <h2 className="text-2xl font-display font-semibold mb-2">
              Are you a brand?
            </h2>
            <p className="text-white/80 mb-4">
              Join Nefer and reach discerning customers worldwide.
            </p>
            <Link 
              href="/brands/join" 
              className="inline-block px-6 py-3 bg-metallic-sand text-white font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.id} 
              href={`/brand/${brand.id}`}
              className="group p-6 border border-border hover:border-metallic-sand transition-colors"
            >
              <p className="text-xs text-muted uppercase tracking-wider mb-2">
                {brand.origin} · {brand.category}
              </p>
              <h3 className="text-2xl font-display font-bold mb-2">
                {brand.name}
              </h3>
              <p className="text-muted">
                {brand.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}