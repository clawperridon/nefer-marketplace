import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

// Sample brand data - will move to database later
const brands: Record<string, {
  id: string;
  slug: string;
  name: string;
  origin: string;
  description: string;
  story: string;
  category: string;
  products: string[];
}> = {
  aura: {
    id: "aura",
    slug: "aura",
    name: "AURA",
    origin: "Amsterdam",
    description: "Minimalist streetwear with architectural influence.",
    story: "Founded in Amsterdam in 2023, AURA creates pieces that bridge the gap between streetwear and high fashion. Each piece is designed with proportion and silhouette as the primary focus.",
    category: "Streetwear",
    products: ["1", "5"],
  },
  strom: {
    id: "strom",
    slug: "strom",
    name: "STROM",
    origin: "Berlin",
    description: "Futuristic technical apparel.",
    story: "STROM emerged from Berlins underground tech scene, creating功能性 apparel that doesnt compromise on aesthetics. Every piece is engineered for modern urban life.",
    category: "Techwear",
    products: ["2", "6"],
  },
  nova: {
    id: "nova",
    slug: "nova",
    name: "NOVA",
    origin: "London",
    description: "Bold contemporary silhouettes.",
    story: "NOVA represents the new wave of London design. Bold shapes and unexpected details define each collection.",
    category: "Contemporary",
    products: ["3"],
  },
  echo: {
    id: "echo",
    slug: "echo",
    name: "ECHO",
    origin: "Milan",
    description: "Luxury essentials with eastern influence.",
    story: "ECHO blends Italian craftsmanship with eastern minimalism. Each piece is a meditation on reduction and essentialism.",
    category: "Luxury",
    products: ["4"],
  },
};

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = brands[slug];
  
  if (!brand) {
    return { title: "Brand Not Found | Nefer" };
  }
  
  return {
    title: `${brand.name} | Nefer`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = brands[slug];
  
  if (!brand) {
    notFound();
  }
  
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted">
            <Link href="/brands" className="hover:text-foreground">
              Brands
            </Link>
            <span> / </span>
            <span className="text-foreground">{brand.name}</span>
          </div>
          
          {/* Brand Header */}
          <div className="mb-12">
            <p className="text-sm text-muted uppercase tracking-wider mb-2">
              {brand.origin} · {brand.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {brand.name}
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              {brand.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Brand Story */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-card border border-border">
            <h2 className="text-xl font-display font-semibold mb-4">Our Story</h2>
            <p className="text-muted max-w-2xl">{brand.story}</p>
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display font-semibold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.products.map((productId) => {
              const products: Record<string, { name: string; price: number }> = {
                "1": { name: "Obsidian Tee", price: 120 },
                "2": { name: "Void Jacket", price: 340 },
                "3": { name: "Lunar Pants", price: 280 },
                "4": { name: "Stellar Dress", price: 420 },
                "5": { name: "Nebula Hoodie", price: 190 },
                "6": { name: "Horizon Bag", price: 250 },
              };
              const product = products[productId];
              
              return (
                <Link
                  key={productId}
                  href={`/product/${productId}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-muted/10 border border-border mb-3" />
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium">{brand.name}</p>
                      <p className="text-sm text-muted">{product.name}</p>
                    </div>
                    <p className="text-sm">€{product.price}</p>
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