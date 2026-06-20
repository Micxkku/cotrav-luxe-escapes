import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Users, Sparkles, Calendar, Mountain, Coffee } from "lucide-react";

const packages = [
  { icon: Briefcase, title: "Executive Offsites", desc: "Private villas with conference setups, breakout zones and chef-curated menus for leadership retreats." },
  { icon: Users, title: "Team Building", desc: "Full-property buyouts with adventure activities, bonfires and team challenges across 50+ properties." },
  { icon: Sparkles, title: "Annual Kickoffs", desc: "End-to-end production — AV, decor, transport and stay — for company-wide annual gatherings." },
  { icon: Mountain, title: "Adventure Retreats", desc: "Trekking, rafting and forest immersion programs paired with luxury basecamps." },
  { icon: Coffee, title: "Workations", desc: "Long-stay packages with high-speed WiFi, ergonomic setups and weekend curations for distributed teams." },
  { icon: Calendar, title: "Quarterly Reviews", desc: "Recurring access at member rates — book the same trusted properties for every quarterly meet." },
];

export const Route = createFileRoute("/corporate-retreats")({
  head: () => ({
    meta: [
      { title: "Corporate Retreats — CoTrav Stays" },
      { name: "description", content: "Bespoke corporate staycation and offsite packages for companies — from leadership retreats to annual kickoffs." },
    ],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  return (
    <div className="pt-20">
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" alt="Corporate retreat" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-70" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="text-[var(--accent)] uppercase text-sm tracking-[0.3em] mb-4 font-semibold">For Companies</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">CORPORATE RETREATS, RE-IMAGINED</h1>
          <p className="text-lg text-white/90">Bespoke offsites at India's finest private villas — from intimate leadership huddles to 200-person kickoffs.</p>
          <a href="https://wa.me/919999999999" className="inline-block mt-8 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-8 py-4 rounded-full transition-colors">
            Talk to Concierge
          </a>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--primary)] mb-3">Our Packages</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">End-to-end planning — venue, food, logistics and programming — handled by a single point of contact.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-7 shadow-[var(--card-shadow)] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="font-black text-lg text-[var(--primary)] mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--primary)] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">200+ companies trust CoTrav</h2>
          <p className="text-white/80 mb-8">From early-stage startups to listed enterprises — we've hosted offsites for teams of 8 to 800.</p>
          <a href="https://wa.me/919999999999" className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-8 py-4 rounded-full transition-colors">
            Request a Proposal
          </a>
        </div>
      </section>
    </div>
  );
}
