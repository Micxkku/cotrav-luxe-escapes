import { createFileRoute } from "@tanstack/react-router";
import { Users, Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Founders Forum Weekend", location: "Udaipur", duration: "3 days, 2 nights", group: "20-40 pax", price: "₹45,000 / person", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80", desc: "Lakeside palace stay with curated panels, fireside conversations and a sunset cruise on Lake Pichola." },
  { title: "Engineering Team Offsite", location: "Coorg", duration: "4 days, 3 nights", group: "30-80 pax", price: "₹32,000 / person", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80", desc: "Plantation estate buyout with hackathon zones, coffee trails and an outdoor closing bonfire." },
  { title: "Annual Sales Kickoff", location: "Goa", duration: "3 days, 2 nights", group: "100-250 pax", price: "₹28,000 / person", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80", desc: "Beachfront resort with main-stage production, breakout pods, beach party and awards night." },
  { title: "Leadership Wellness Retreat", location: "Rishikesh", duration: "5 days, 4 nights", group: "10-25 pax", price: "₹62,000 / person", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", desc: "Yoga, breathwork and one-on-one executive coaching by the Ganges." },
  { title: "Adventure Bootcamp", location: "Rishikesh", duration: "3 days, 2 nights", group: "15-60 pax", price: "₹24,000 / person", image: "https://images.unsplash.com/photo-1591018653781-9b46c1ba4222?auto=format&fit=crop&w=1200&q=80", desc: "White-water rafting, cliff jumping and forest treks paired with riverside glamping." },
  { title: "Product Launch Party", location: "Mumbai", duration: "1 night", group: "80-200 pax", price: "₹18,000 / person", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80", desc: "Sea-view venue with branded production, DJ set and bespoke catering." },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — CoTrav Stays" },
      { name: "description", content: "Corporate retreats, team outings and signature event packages by CoTrav Stays." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=80" alt="Events" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-70" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[var(--accent)] uppercase text-sm tracking-[0.3em] mb-4 font-semibold">Curated Experiences</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">EVENTS &amp; TEAM OUTINGS</h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">Six ready-to-book retreat packages — or design your own with our event team.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-[var(--card-shadow)] hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full">
                  {e.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-black text-lg text-[var(--primary)] mb-2">{e.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1">{e.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--primary)] border-t border-[var(--border)] pt-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--accent)]" />{e.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[var(--accent)]" />{e.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3 text-[var(--accent)]" />{e.group}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--primary)] text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-3">Need something custom?</h2>
          <p className="text-white/80 mb-6">Our event team designs bespoke retreats for any group size and budget.</p>
          <a href="https://wa.me/919999999999" className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-8 py-4 rounded-full transition-colors">
            Plan My Event
          </a>
        </div>
      </section>
    </div>
  );
}
