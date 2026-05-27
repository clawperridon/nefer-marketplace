import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Events | Nefer",
  description: "Join our upcoming events, pop-ups, and experiences.",
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "NEFER Studio Pop-up",
      location: "Amsterdam",
      date: "June 2026",
      description: "Meet your favorite designers in person at our flagship studio."
    },
    {
      title: "Fashion Panel: The Future of Design",
      location: "Amsterdam",
      date: "June 2026",
      description: "Join industry leaders for an evening of discussion."
    },
  ];

  const pastEvents = [
    { title: "NEFER Launch Party", date: "May 2026" },
    { title: "Designer Meet & Greet", date: "April 2026" },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Events</h1>
          <p className="text-xl text-muted mb-12">
            Join us for exclusive experiences, pop-ups, and more.
          </p>

          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-display font-semibold">Upcoming Events</h2>
            {upcomingEvents.map((event, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6">
                <div className="flex flex-wrap gap-4 text-sm text-accent mb-2">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-display font-semibold">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pastEvents.map((event, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm text-muted mb-1">{event.date}</div>
                  <div className="font-medium">{event.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-muted mb-4">
              Follow us on Instagram for the latest events and pop-ups.
            </p>
            <a href="https://instagram.com/nefer.world" className="text-accent hover:underline">
              @nefer.world →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}