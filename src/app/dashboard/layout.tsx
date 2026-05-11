"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/orders", label: "Orders", icon: "bag" },
  { href: "/dashboard/account", label: "Account", icon: "user" },
  { href: "/dashboard/addresses", label: "Addresses", icon: "location" },
  { href: "/dashboard/payment", label: "Payment", icon: "card" },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7m2-2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6" />,
    bag: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />,
    location: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.994 1.994 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a4 4 0 11-8 0 4 4 0 018 0z" />,
    card: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
  };
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icons[name]}</svg>;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("/dashboard");

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="md:w-64 flex-shrink-0">
              <h1 className="text-2xl font-display font-bold mb-6">Dashboard</h1>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2 text-sm ${
                      active === item.href
                        ? "bg-foreground text-background"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => setActive(item.href)}
                  >
                    <Icon name={item.icon} />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>
            
            {/* Content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}