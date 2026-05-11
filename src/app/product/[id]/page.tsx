import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// Sample product data - will move to database later
const products: Record<string, {
  id: string;
  name: string;
  brand: string;
  brandSlug: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category: string;
}> = {
  "1": {
    id: "1",
    name: "Obsidian Tee",
    brand: "AURA",
    brandSlug: "aura",
    price: 120,
    description: "Minimalist cotton tee with architectural silhouette. Features dropped shoulders and elongated sleeves.",
    images: [],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops",
  },
  "2": {
    id: "2",
    name: "Void Jacket",
    brand: "STROM",
    brandSlug: "strom",
    price: 340,
    description: "Technical outerwear with reflective detailing. Water-resistant and breathable.",
    images: [],
    sizes: ["S", "M", "L", "XL"],
    category: "Outerwear",
  },
  "3": {
    id: "3",
    name: "Lunar Pants",
    brand: "NOVA",
    brandSlug: "nova",
    price: 280,
    description: "Wide-leg trousers in Japanese denim. High-waisted with clean finish.",
    images: [],
    sizes: ["24", "26", "28", "30", "32"],
    category: "Bottoms",
  },
  "4": {
    id: "4",
    name: "Stellar Dress",
    brand: "ECHO",
    brandSlug: "echo",
    price: 420,
    description: "Asymmetric dress with architectural draping. Pure silk construction.",
    images: [],
    sizes: ["XS", "S", "M", "L"],
    category: "Dresses",
  },
  "5": {
    id: "5",
    name: "Nebula Hoodie",
    brand: "AURA",
    brandSlug: "aura",
    price: 190,
    description: "Heavyweight cotton hoodie with oversized fit. Embroidered logo.",
    images: [],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops",
  },
  "6": {
    id: "6",
    name: "Horizon Bag",
    brand: "STROM",
    brandSlug: "strom",
    price: 250,
    description: "Tech nylon crossbody with multiple compartments. Water-resistant.",
    images: [],
    sizes: ["One Size"],
    category: "Accessories",
  },
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products[id];
  
  if (!product) {
    return { title: "Product Not Found | Nefer" };
  }
  
  return {
    title: `${product.name} | Nefer`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products[id];
  
  if (!product) {
    notFound();
  }
  
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted">
            <Link href="/discover" className="hover:text-foreground">
              Discover
            </Link>
            <span> / </span>
            <Link href={`/brand/${product.brandSlug}`} className="hover:text-foreground">
              {product.brand}
            </Link>
            <span> / </span>
            <span className="text-foreground">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery - Placeholder */}
            <div className="aspect-[3/4] bg-muted/10 border border-border">
              <div className="w-full h-full flex items-center justify-center text-muted">
                Product Image
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <Link 
                href={`/brand/${product.brandSlug}`} 
                className="text-sm text-muted hover:text-foreground"
              >
                {product.brand}
              </Link>
              <h1 className="text-3xl font-display font-bold mt-1 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl mb-6">€{product.price}</p>
              
              <p className="text-muted mb-8">
                {product.description}
              </p>
              
              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="min-w-[3rem] px-3 py-2 border border-border text-sm hover:border-foreground transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Add to Cart */}
              <button className="w-full py-4 bg-foreground text-background font-medium hover:opacity-90 transition-opacity mb-4">
                Add to Cart
              </button>
              
              <button className="w-full py-4 border border-border text-foreground font-medium hover:bg-muted/10 transition-colors">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}