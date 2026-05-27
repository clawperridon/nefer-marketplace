import Link from "next/link";

const footerLinks = {
  discover: [
    { label: "New Arrivals", href: "/discover?sort=newest" },
    { label: "Trending", href: "/discover?sort=trending" },
    { label: "Designers", href: "/discover/designers" },
    { label: "Collections", href: "/discover/collections" },
  ],
  brands: [
    { label: "For Brands", href: "/brands" },
    { label: "Sell on Nefer", href: "/brands/join" },
    { label: "Brand Stories", href: "/brands/stories" },
    { label: "Partner FAQ", href: "/brands/faq" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-dune-50 bg-canvas">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Column - Brand Book Style */}
          <div className="col-span-2">
            <Link href="/" className="text-xl font-display font-light tracking-widest block mb-4 text-ink">
              nefer
            </Link>
            <p className="text-xs font-body text-dusk/60 max-w-xs leading-relaxed">
              The premier marketplace for emerging fashion brands.<br/>
              Curated · Authentic · Futuristic
            </p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-dusk/50 mb-5 font-body">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-dusk/70 hover:text-ink transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-dusk/50 mb-5 font-body">Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-dusk/70 hover:text-ink transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-dusk/50 mb-5 font-body">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-dusk/70 hover:text-ink transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Brand Book Style */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dune-50 gap-4">
          <div className="text-xs font-mono text-dusk/40">
            �� 2026 — NEFER.WORLD — AMSTERDAM
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-xs font-mono text-dusk/40 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}