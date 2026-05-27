import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const featuredBrands = [
  { name: "AURA", location: "Copenhagen, Denmark", category: "Minimalist Contemporary", slug: "aura" },
  { name: "STROM", location: "Berlin, Germany", category: "Streetwear", slug: "strom" },
  { name: "ECHO", location: "Amsterdam, Netherlands", category: "Avant-Garde", slug: "echo" },
];

const pillars = [
  { title: "Curated", description: "Every brand hand-picked for authenticity and craftsmanship." },
  { title: "Authentic", description: "Direct from emerging designers to your wardrobe." },
  { title: "Futuristic", description: "Tomorrow's style, available today." },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero - Spectacular Brand Book Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Clean white background - studio feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/30" />
        
        {/* Radiant light effect behind sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-pulse-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-silver-mist/30 via-sand/10 to-transparent blur-3xl" />
        </div>

        {/* Luxury Pearl Sphere - Brand Book Aesthetic */}
        <div className="relative z-10 w-[340px] h-[340px] md:w-[500px] md:h-[500px] animate-float-luxury">
          {/* Soft blue ambient shadow behind sphere - very subtle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/8 via-transparent to-blue-200/5 blur-2xl" />
          {/* Ambient glow - sand/champagne */}
          <div className="absolute -inset-16 rounded-full bg-gradient-radial from-sand/15 via-champagne/10 to-transparent blur-2xl" />
          {/* Deep shadow - dusk */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-gradient-radial from-dusk/20 via-dune-100/30 to-transparent blur-2xl" />
          {/* Main ball */}
          <div className="absolute inset-0 rounded-full animate-rotate-luxury">
            {/* Base pearl layer - brand ivory */}
            <div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, #faf7f2 0%, #f4efe6 25%, #f9f8f6 50%, #efe2cc 75%, #faf7f2 100%)'}} />
            {/* Warm iridescent - sand shift */}
            <div className="absolute inset-0 rounded-full opacity-50" style={{background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(201,165,123,0.2) 60deg, rgba(255,247,240,0.4) 120deg, rgba(168,132,82,0.15) 180deg, rgba(201,165,123,0.1) 240deg, rgba(255,247,240,0.3) 300deg, transparent 360deg)'}} />
            {/* 3D depth - dusk shadows */}
            <div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(ellipse 100% 70% at 50% 110%, rgba(68,59,46,0.4) 0%, transparent 45%), radial-gradient(ellipse 90% 50% at 50% -10%, rgba(255,247,240,0.5) 0%, transparent 40%), radial-gradient(circle at 25% 25%, rgba(255,255,255,0.95) 0%, transparent 30%), radial-gradient(circle at 70% 55%, rgba(201,165,123,0.2) 0%, transparent 20%)'}} />
            {/* Main highlight - bright */}
            <div className="absolute top-[10%] left-[18%] w-[35%] h-[28%] bg-gradient-to-br from-white via-ivory/70 to-sand/10 rounded-full blur-sm" />
            {/* Secondary - ochre */}
            <div className="absolute top-[18%] right-[20%] w-[20%] h-[15%] bg-gradient-to-bl from-ochre/25 to-transparent rounded-full blur-xs" />
            {/* Bottom warmth - dune */}
            <div className="absolute bottom-[20%] left-[25%] w-[30%] h-[18%] bg-gradient-to-t from-dune-100/50 via-dune-50/25 to-transparent rounded-full blur-md" />
            {/* Moving streak - soft */}
            <div className="absolute top-[30%] left-[10%] w-[40%] h-[8%] bg-gradient-to-r from-transparent via-ivory/30 to-transparent rounded-full blur-md animate-streak opacity-40" />
            {/* Small accent */}
            <div className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-sand/50 blur-xs animate-pulse" />
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            {/* Edge rim */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_3px_6px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(68,59,46,0.15)]" />
          </div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-sparkle-1 blur-sm" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-silver-mist/80 rounded-full animate-sparkle-2 blur-sm" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-ivory/70 rounded-full animate-sparkle-3 blur-sm" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-sparkle-4 blur-sm" />
        </div>

        {/* Hero Content - Overlaid */}
        <div className="relative z-20 pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
          {/* Brand Name - Like Brand Book */}
          <h1 className="text-6xl md:text-9xl font-display font-light tracking-wider mb-4 text-ink drop-shadow-sm">
            nefer
          </h1>
          {/* Pearl dot replacing the sphere - visual */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white via-silver-mist to-dune-100 animate-pulse shadow-lg shadow-silver-mist/30" />
          </div>
          
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-dusk mb-4 font-body">
            A Fashion Mirage
          </p>
          
          <p className="text-lg md:text-xl text-dusk/80 max-w-xl mx-auto mb-12 font-body font-light leading-relaxed">
            Discover curated emerging brands that define tomorrow&apos;s style.<br/>
            Premium, futuristic, and exclusively yours.
          </p>
          
          {/* Buttons - Minimalist */}
          <div className="flex items-center justify-center gap-6">
            <Link 
              href="/discover" 
              className="px-8 py-3 bg-ink text-canvas font-body text-sm uppercase tracking-wider hover:bg-dusk transition-colors shadow-lg shadow-ink/10"
            >
              Explore
            </Link>
            <Link 
              href="/for-sellers" 
              className="px-8 py-3 border border-dune-100 text-dusk font-body text-sm uppercase tracking-wider hover:border-sand hover:text-sand transition-colors"
            >
              For Sellers
            </Link>
          </div>
        </div>

        {/* Footer Data - Like Brand Book */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs font-mono text-dusk/60 gap-4">
            <span>EST. 2026</span>
            <span>AMSTERDAM</span>
            <span>NEFER.WORLD</span>
          </div>
        </div>
      </section>

      {/* Featured Brands - Editorial Grid */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-ink">
              Featured
            </h2>
            <span className="text-xs font-mono text-dusk/50">§ 01</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dune-50">
            {featuredBrands.map((brand) => (
              <Link 
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className="aspect-[3/4] bg-canvas hover:bg-ivory transition-colors group flex flex-col items-center justify-center p-8"
              >
                <span className="text-3xl font-display font-light tracking-widest group-hover:text-sand transition-colors">
                  {brand.name}
                </span>
                <span className="text-xs font-mono text-dusk/50 mt-4 uppercase tracking-wider">
                  {brand.location}
                </span>
                <span className="text-xs font-body text-dusk/30 mt-2">
                  {brand.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="text-center">
                <span className="text-xs font-mono text-sand/60">§ 0{i + 2}</span>
                <h3 className="text-2xl font-display font-light italic mt-4 mb-3 text-ink">
                  {pillar.title}
                </h3>
                <p className="text-sm font-body text-dusk/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}