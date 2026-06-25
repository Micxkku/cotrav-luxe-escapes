import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Handshake, Target, Briefcase } from "lucide-react";
import { PartnerBrands } from "@/components/PartnerBrands";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why CoTrav Stays — India's HNI Staycation Concierge" },
      { name: "description", content: "Why CoTrav Stays is India's most trusted HNI staycation concierge — curated properties, corporate trust, and concierge-first service." },
    ],
  }),
  component: WhyUsPage,
});

const stats = [
  { n: "250+", l: "Curated Properties" },
  { n: "11", l: "Hub Circuits Across India" },
  { n: "100+", l: "Corporate Clients" },
  { n: "0%", l: "Commission to Property Partners" },
];

const cards = [
  { icon: Trophy, t: "HNI-Only Curation", d: "Every property handpicked for discerning corporate travellers. No mass listings." },
  { icon: Handshake, t: "Corporate Trust Signal", d: "Backed by CoTrav's 100+ corporate client network — property owners trust us to deliver verified, high-value guests." },
  { icon: Target, t: "Concierge-First Model", d: "Not a marketplace. A dedicated concierge that handles everything from selection to checkout — WhatsApp to confirmation." },
  { icon: Briefcase, t: "BAI Group Credibility", d: "Part of BAI Group — bringing institutional trust and corporate relationships to luxury leisure travel." },
];

function WhyUsPage() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--primary)] text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-[var(--accent)]">WHY COTRAV STAYS?</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">India's most trusted HNI staycation concierge</p>
      </section>

      <section className="bg-[var(--accent)] text-[var(--primary)] py-10">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-black">{s.n}</div>
              <div className="text-sm font-semibold mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="section-title text-3xl mb-12">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-white border border-[var(--border)] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-[var(--accent)]" strokeWidth={2.4} />
              </div>
              <h3 className="font-black text-xl text-[var(--primary)] mb-2">{t}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <PartnerBrands />

      <section className="bg-[var(--primary)] text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Plan Your Perfect Staycation?</h2>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-block bg-[var(--accent)] text-[var(--primary)] font-bold px-8 py-4 rounded-full hover:bg-[var(--accent-hover)] transition-colors">
          Talk to Our Concierge
        </a>
      </section>
    </div>
  );
}
