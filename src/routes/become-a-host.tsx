import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ShieldCheck, UserCheck, Trophy } from "lucide-react";
import { hubs } from "@/data/hubsData";

export const Route = createFileRoute("/become-a-host")({
  head: () => ({
    meta: [
      { title: "Become a Host — List Your Property | CoTrav Stays" },
      { name: "description", content: "Partner with CoTrav Stays — India's fastest-growing HNI staycation concierge. Zero commission for your first 3 months." },
    ],
  }),
  component: BecomeAHostPage,
});

const HERO = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80";

const FEATURED = [
  { name: "Wildflower Hall", hub: "Delhi NCR", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800" },
  { name: "Rambagh Palace", hub: "Jaipur", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" },
  { name: "The Ray Estate", hub: "Mumbai", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800" },
  { name: "Coffee Trails Estate", hub: "Bangalore", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800" },
  { name: "Windermere Estate", hub: "Kochi", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800" },
  { name: "Suryagarh Jaisalmer", hub: "Jaipur", img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
];

function BecomeAHostPage() {
  const [form, setForm] = useState({ property: "", owner: "", phone: "", email: "", hub: hubs[0]?.name ?? "", type: "Villa", rooms: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks! Our partnerships team will reach out within 48 hours.");
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={HERO} alt="Luxury property" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)]/75" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-5">LIST YOUR PROPERTY WITH <span className="text-[var(--accent)]">COTRAV STAYS</span></h1>
          <p className="text-lg text-white/85 mb-8">Partner with India's fastest-growing HNI staycation concierge — zero commission for your first 3 months</p>
          <a href="#register" className="inline-block bg-[var(--accent)] text-[var(--primary)] font-bold px-8 py-4 rounded-full hover:bg-[var(--accent-hover)] transition-colors">
            Register Your Property
          </a>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="section-title text-3xl mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "1", t: "Submit Details", d: "Fill a quick form about your property" },
            { n: "2", t: "Verification", d: "Our team visits and curates your listing" },
            { n: "3", t: "Start Earning", d: "We bring verified HNI corporate guests" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center text-2xl font-black mb-4">{s.n}</div>
              <h3 className="font-black text-xl text-[var(--primary)] mb-2">{s.t}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-secondary)] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="section-title text-3xl mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, t: "Zero Commission", d: "For your first 3 months on the platform" },
              { icon: UserCheck, t: "Verified Corporate HNIs", d: "Only vetted high-value guests from our corporate network" },
              { icon: ShieldCheck, t: "Dedicated Relationship Manager", d: "A single point of contact for everything" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white border border-[var(--border)] rounded-2xl p-8">
                <Icon className="w-10 h-10 text-[var(--accent)] mb-4" />
                <h3 className="font-black text-lg text-[var(--primary)] mb-2">{t}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="section-title text-3xl mb-12">Featured Registered Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full">{p.hub}</span>
                <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Verified Partner
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg text-[var(--primary)]">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="bg-[var(--primary)] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2">Register Your Property</h2>
          <p className="text-white/70 text-center mb-10">It takes less than 2 minutes</p>

          <form onSubmit={submit} className="bg-white rounded-2xl p-8 space-y-4">
            {[
              ["Property Name", "property"],
              ["Owner Name", "owner"],
              ["Phone", "phone"],
              ["Email", "email"],
            ].map(([label, key]) => (
              <div key={key}>
                <label className="text-xs text-[var(--text-secondary)] block mb-1">{label} *</label>
                <input required value={(form as never)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--primary)] outline-none focus:border-[var(--accent)]" />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[var(--text-secondary)] block mb-1">Location (Hub) *</label>
                <select value={form.hub} onChange={(e) => setForm({ ...form, hub: e.target.value })} className="w-full border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--primary)] outline-none">
                  {hubs.map((h) => <option key={h.slug}>{h.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-[var(--text-secondary)] block mb-1">Property Type *</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--primary)] outline-none">
                  <option>Villa</option><option>Resort</option><option>Cottage</option><option>Farmhouse</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-[var(--text-secondary)] block mb-1">Number of Rooms *</label>
              <input required type="number" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className="w-full border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--primary)] outline-none focus:border-[var(--accent)]" />
            </div>

            <div>
              <label className="text-xs text-[var(--text-secondary)] block mb-1">Message</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--primary)] outline-none resize-none focus:border-[var(--accent)]" />
            </div>

            <button type="submit" className="w-full bg-[var(--accent)] text-[var(--primary)] font-bold py-4 rounded-xl hover:bg-[var(--accent-hover)] transition-colors">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
