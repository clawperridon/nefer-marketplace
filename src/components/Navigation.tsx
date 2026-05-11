"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-muted hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tight">
          NEFER
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/discover">Discover</NavLink>
          <NavLink href="/brands">Brands</NavLink>
          <NavLink href="/community">Community</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart" className="relative p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-metallic-sand text-white text-[10px] flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>
          <NavLink href="/login">Sign In</NavLink>
          <Link 
            href="/join" 
            className="px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
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
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/discover" onClick={() => setMobileMenuOpen(false)}>
              Discover
            </Link>
            <Link href="/brands" onClick={() => setMobileMenuOpen(false)}>
              Brands
            </Link>
            <Link href="/community" onClick={() => setMobileMenuOpen(false)}>
              Community
            </Link>
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
              Cart ({count})
            </Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link 
              href="/join" 
              className="px-4 py-3 bg-foreground text-background text-center font-medium"
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