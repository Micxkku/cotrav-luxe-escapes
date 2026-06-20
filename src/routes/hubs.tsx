import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";

const hubs = [
  { slug: "delhi", name: "Delhi Hub", count: 12, desc: "Curated weekend escapes within a 4-hour drive of the capital — heritage havelis, forest retreats and Aravalli villas.", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80" },
  { slug: "mumbai", name: "Mumbai Hub", count: 10, desc: "Coastal getaways and Sahyadri hill villas a short drive from the city — from Alibaug to Lonavala.", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80" },
  { slug: "bengaluru", name: "Bengaluru Hub", count: 9, desc: "Coffee estates, vineyards and Western Ghats hideaways — slow weekends from Coorg to Chikmagalur.", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80" },
  { slug: "rajasthan", name: "Rajasthan Hub", count: 14, desc: "A circuit of palaces and desert camps — Udaipur, Jaipur, Jaisalmer and Ranthambore under one itinerary.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80" },
  { slug: "wellness", name: "Wellness Circuit", count: 8, desc: "Ayurveda, yoga and forest bathing — Rishikesh, Kerala backwaters and Himalayan wellness retreats.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80" },
];

export const Route = createFileRoute("/hubs")({
  head: () => ({
    meta: [
      { title: "Hubs — CoTrav Stays" },
      { name: "description", content: "Explore CoTrav's curated hubs — themed staycation circuits across India's finest regions." },
    ],
  }),
  component: HubsPage,
});

function HubsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=80" alt="Hubs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-70" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[var(--accent)] uppercase text-sm tracking-[0.3em] mb-4 font-semibold">Themed Circuits</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">EXPLORE BY HUB</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">Five curated regions, each with its own character — pick the circuit that matches your weekend.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((h) => (
            <Link key={h.slug} to="/destinations" className="group rounded-2xl overflow-hidden bg-white shadow-[var(--card-shadow)] hover:shadow-xl transition-all">
              <div className="relative h-56 overflow-hidden">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {h.count} destinations
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl text-[var(--primary)] mb-2">{h.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{h.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)] group-hover:gap-2 transition-all">
                  Explore hub <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
