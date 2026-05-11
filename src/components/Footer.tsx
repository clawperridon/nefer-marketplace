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
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tight block mb-4">
              NEFER
            </Link>
            <p className="text-sm text-muted max-w-xs">
              The premier marketplace for emerging fashion brands. 
              Curated, authentic,futuristic.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-medium mb-4">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-medium mb-4">Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="text-sm text-muted">
            © 2026 Nefer. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}