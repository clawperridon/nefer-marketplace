import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nefer | Premium Fashion Marketplace",
  description: "Discover emerging fashion brands on Nefer - the premier marketplace for luxury contemporary fashion.",
  keywords: ["fashion", "marketplace", "luxury", "emerging brands", "contemporary"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}