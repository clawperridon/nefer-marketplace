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

        {/* Realistic Chrome Ball - Horizontal Rotation */}
        <div className="relative z-10 w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
          {/* 3D Shadow under ball */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-gradient-radial from-dune-200/60 via-sand/20 to-transparent blur-xl" />
          
          {/* Main chrome ball with 3D perspective */}
          <div className="absolute inset-0 rounded-full animate-roll">
            {/* Base chrome gradient - horizontal stripes for 3D effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    linear-gradient(180deg, 
                      #f0f0f0 0%, 
                      #d8d8d8 10%, 
                      #e8e8e8 20%, 
                      #c8c8c8 30%, 
                      #f5f5f5 40%, 
                      #bfbfbf 50%, 
                      #e8e8e8 60%, 
                      #cccccc 70%, 
                      #f0f0f0 80%, 
                      #d0d0d0 90%, 
                      #e8e8e8 100%
                    )
                  `,
                }}
              />
            </div>
            
            {/* 3D lighting - creates spherical depth */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse 120% 80% at 50% 120%, rgba(80,80,80,0.6) 0%, transparent 50%),
                  radial-gradient(ellipse 100% 60% at 50% -20%, rgba(255,255,255,0.5) 0%, transparent 40%),
                  radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9) 0%, transparent 25%),
                  radial-gradient(circle at 75% 60%, rgba(200,200,210,0.4) 0%, transparent 20%)
                `,
              }}
            />
            
            {/* Top specular highlight - bright spot */}
            <div className="absolute top-[8%] left-[20%] w-[30%] h-[25%] bg-gradient-to-br from-white via-white/60 to-transparent rounded-full blur-sm" />
            
            {/* Secondary highlight - softer */}
            <div className="absolute top-[20%] right-[25%] w-[15%] h-[12%] bg-gradient-to-bl from-white/40 to-transparent rounded-full blur-xs" />
            
            {/* Bottom reflected light */}
            <div className="absolute bottom-[15%] left-[30%] w-[25%] h-[15%] bg-gradient-to-t from-white/30 to-transparent rounded-full blur-md" />
            
            {/* Edge definition for 3D ball feel */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.15)]" />
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