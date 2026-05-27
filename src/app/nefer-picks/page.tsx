import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEFER Picks | Nefer",
  description: "Curated favorites selected by NEFER.",
};

export default function NeferPicksPage() {
  const picks = [
    {
      title: "The Minimalist Edit",
      description: "Clean lines and timeless pieces for the modern wardrobe.",
      items: ["Cotton poplin shirts", "Tailored trousers", "Neutral tones"],
    },
    {
      title: "Bold & Bright",
      description: "Statement pieces that stand out.",
      items: ["Vibrant outerwear", "Artistic prints", "Color blocking"],
    },
    {
      title: "Sustainable Favorites",
      description: "Eco-conscious picks we love.",
      items: ["Organic cotton", "Recycled materials", "Vegan leather"],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">NEFER Picks</h1>
          <p className="text-xl text-muted mb-12">
            Our curated favorites — pieces we believe in, selected by us.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {picks.map((pick, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8">
                <h2 className="text-xl font-display font-semibold mb-4">{pick.title}</h2>
                <p className="text-muted mb-6">{pick.description}</p>
                <ul className="space-y-2">
                  {pick.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white/5 rounded-2xl">
            <h2 className="text-2xl font-display font-semibold mb-4">How We Choose</h2>
            <p className="text-muted mb-6">
              Our team personally tests and reviews every product. We look for:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted">
              <li>✓ Quality craftsmanship</li>
              <li>✓ Unique design point of view</li>
              <li>✓ Sustainable practices</li>
              <li>✓ Great value for money</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/discover" 
              className="inline-block bg-accent text-black font-semibold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors"
            >
              Shop All Picks
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}