import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Nefer",
  description: "Join the team at Nefer Marketplace.",
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Frontend Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Build the future of fashion e-commerce with React, Next.js, and more."
    },
    {
      title: "Brand Partnerships Manager",
      location: "Amsterdam",
      type: "Full-time",
      description: "Grow our network of emerging fashion brands across Europe."
    },
    {
      title: "Marketing Lead",
      location: "Remote",
      type: "Full-time",
      description: "Define and execute our marketing strategy across channels."
    },
    {
      title: "Customer Success",
      location: "Remote",
      type: "Part-time",
      description: "Help our customers have amazing experiences with NEFER."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Careers</h1>
          <p className="text-xl text-muted mb-12">
            Join us in reshaping the future of fashion.
          </p>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="text-sm text-accent">{job.type}</span>
                </div>
                <p className="text-muted mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">📍 {job.location}</span>
                  <button className="text-accent hover:underline">Apply →</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Don't see the right role?</h2>
            <p className="text-muted mb-4">
              We're always looking for talented people. Send us your CV and tell us how you can help.
            </p>
            <a href="mailto:careers@nefer.com" className="text-accent hover:underline">
              careers@nefer.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}