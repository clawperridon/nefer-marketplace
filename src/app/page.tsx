import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tight">
            NEFER
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/discover" className="text-sm text-muted hover:text-foreground transition-colors">
              Discover
            </Link>
            <Link href="/brands" className="text-sm text-muted hover:text-foreground transition-colors">
              Brands
            </Link>
            <Link href="/community" className="text-sm text-muted hover:text-foreground transition-colors">
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/join" 
              className="px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            The Future of
            <span className="block text-metallic-sand">Fashion</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            Discover curated emerging brands that define tomorrows style. 
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
              href="/brands" 
              className="px-6 py-3 border border-border text-foreground font-medium hover:bg-muted/10 transition-colors"
            >
              For Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Brands - Placeholder */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-10 text-center">
            Featured Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="aspect-[3/4] bg-muted/10 border border-border flex items-center justify-center"
              >
                <span className="text-muted">Brand {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted">
            © 2026 Nefer. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-muted hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}