import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const featuredBrands = [
  { name: "AURA", location: "Copenhagen, Denmark", category: "Minimalist Contemporary", slug: "aura" },
  { name: "STROM", location: "Berlin, Germany", category: "Streetwear", slug: "strom" },
  { name: "ECHO", location: "Amsterdam, Netherlands", category: "Avant-Garde", slug: "echo" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            The Future of
            <span className="block text-metallic-sand">Fashion</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            Discover curated emerging brands that define tomorrow&apos;s style. 
            Premium, futuristic, and exclusively yours.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/discover" 
              className="px-6 py-3 bg-metallic-sand text-white font-medium hover:opacity-90 transition-opacity"
            >
              Explore Collection
            </Link>
            <Link 
              href="/for-sellers" 
              className="px-6 py-3 border border-border text-foreground font-medium hover:bg-muted/10 transition-colors"
            >
              For Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-10 text-center">
            Featured Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBrands.map((brand) => (
              <Link 
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className="aspect-[3/4] bg-muted/10 border border-border hover:border-metallic-sand transition-colors flex flex-col items-center justify-center p-6"
              >
                <span className="text-2xl font-display font-bold">{brand.name}</span>
                <span className="text-sm text-muted mt-2">{brand.location}</span>
                <span className="text-xs text-metallic-sand mt-1">{brand.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">Curated</h3>
              <p className="text-sm text-muted">Every brand hand-picked for authenticity and craftsmanship.</p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">Authentic</h3>
              <p className="text-sm text-muted">Direct from emerging designers to your wardrobe.</p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">Futuristic</h3>
              <p className="text-sm text-muted">Tomorrow&apos;s style, available today.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}