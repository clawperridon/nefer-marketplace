import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press | Nefer",
  description: "Press and media resources for Nefer Marketplace.",
};

export default function PressPage() {
  const pressReleases = [
    {
      title: "NEFER Launches Premier Marketplace for Emerging Fashion Brands",
      date: "May 2026",
      excerpt: "New platform connects visionary designers with fashion-forward customers."
    },
    {
      title: "NEFER Announces $5M Seed Funding",
      date: "April 2026",
      excerpt: "Leading VCs back the future of fashion e-commerce."
    }
  ];

  const mediaAssets = [
    { name: "Brand Guidelines", size: "2.4 MB" },
    { name: "Logo Pack (SVG, PNG)", size: "1.1 MB" },
    { name: "Product Photos", size: "15 MB" },
    { name: "Team Photos", size: "8 MB" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Press</h1>
          <p className="text-xl text-muted mb-12">
            Latest news, media resources, and press contact.
          </p>

          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-display font-semibold">Press Releases</h2>
            {pressReleases.map((release, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6">
                <div className="text-sm text-accent mb-2">{release.date}</div>
                <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                <p className="text-muted">{release.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold">Media Assets</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mediaAssets.map((asset, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                  <span>{asset.name}</span>
                  <button className="text-accent hover:underline text-sm">Download</button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Media Inquiries</h2>
            <p className="text-muted mb-4">
              For press inquiries, interviews, and more:
            </p>
            <a href="mailto:press@nefer.com" className="text-accent hover:underline">
              press@nefer.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}