import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Community | Nefer",
  description: "Join the Nefer fashion community.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Community
          </h1>
          <p className="text-xl text-muted max-w-xl mx-auto">
            Connect with fellow fashion enthusiasts and discover the future of style.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}