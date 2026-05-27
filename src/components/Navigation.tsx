"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/lib/cart";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-xs uppercase tracking-[0.2em] text-dusk hover:text-ink transition-colors font-body"
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useCart();
  const [shopOpen, setShopOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(event.target as Node)) {
        setShopOpen(false);
      }
      if (communityRef.current && !communityRef.current.contains(event.target as Node)) {
        setCommunityOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-dune-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Brand Book Style */}
        <Link href="/" className="text-xl font-display font-light tracking-widest text-ink">
          nefer
        </Link>

        {/* Desktop Nav - Minimalist */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Shop */}
          <div className="relative" ref={shopRef}>
            <button 
              onClick={() => setShopOpen(!shopOpen)}
              onMouseEnter={() => setShopOpen(true)}
              className="text-xs uppercase tracking-[0.2em] text-dusk hover:text-ink transition-colors flex items-center gap-1 py-5 font-body"
            >
              Shop
              <svg className={`w-3 h-3 transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {shopOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-canvas/95 backdrop-blur-xl border border-dune-50 rounded-sm overflow-hidden min-w-32">
                  <Link href="/discover?category=women" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body border-b border-dune-50/50">
                    Women
                  </Link>
                  <Link href="/discover?category=men" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body border-b border-dune-50/50">
                    Men
                  </Link>
                  <Link href="/discover?category=kids" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body">
                    Kids
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink href="/brands">Brands</NavLink>

          {/* Community */}
          <div className="relative" ref={communityRef}>
            <button 
              onClick={() => setCommunityOpen(!communityOpen)}
              onMouseEnter={() => setCommunityOpen(true)}
              className="text-xs uppercase tracking-[0.2em] text-dusk hover:text-ink transition-colors flex items-center gap-1 py-5 font-body"
            >
              Community
              <svg className={`w-3 h-3 transition-transform duration-200 ${communityOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {communityOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-canvas/95 backdrop-blur-xl border border-dune-50 rounded-sm overflow-hidden min-w-32">
                  <Link href="/community" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body border-b border-dune-50/50">
                    Community
                  </Link>
                  <Link href="/events" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body border-b border-dune-50/50">
                    Events
                  </Link>
                  <Link href="/nefer-picks" className="block px-5 py-3 text-xs uppercase tracking-wider text-dusk hover:text-ink hover:bg-ivory/50 transition-all font-body">
                    NEFER Picks
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions - Minimalist */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/cart" className="relative p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-sand text-canvas text-[10px] flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>
          <NavLink href="/login">Sign In</NavLink>
          <Link 
            href="/join" 
            className="px-5 py-2 bg-ink text-canvas text-xs uppercase tracking-wider font-body hover:bg-dusk transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-dune-50 bg-canvas">
          <nav className="flex flex-col p-6 gap-6">
            <details className="group">
              <summary className="cursor-pointer text-xs uppercase tracking-wider font-body">Shop</summary>
              <div className="pl-4 mt-3 space-y-3">
                <Link href="/discover?category=women" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">Women</Link>
                <Link href="/discover?category=men" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">Men</Link>
                <Link href="/discover?category=kids" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">Kids</Link>
              </div>
            </details>
            <Link href="/brands" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-wider font-body">Brands</Link>
            <details className="group">
              <summary className="cursor-pointer text-xs uppercase tracking-wider font-body">Community</summary>
              <div className="pl-4 mt-3 space-y-3">
                <Link href="/community" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">Community</Link>
                <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">Events</Link>
                <Link href="/nefer-picks" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-dusk">NEFER Picks</Link>
              </div>
            </details>
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-wider font-body">Cart ({count})</Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-xs uppercase tracking-wider font-body">Sign In</Link>
            <Link 
              href="/join" 
              className="px-5 py-3 bg-ink text-canvas text-center text-xs uppercase tracking-wider font-body"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}