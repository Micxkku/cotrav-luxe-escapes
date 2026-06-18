import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — CoTrav Stays" },
      { name: "description", content: "Exclusive HNI concierge access for India's most discerning travellers." },
      { property: "og:title", content: "Exclusive HNI Concierge — CoTrav Stays" },
      { property: "og:description", content: "Private concierge access to India's finest staycations." },
    ],
  }),
  component: MembershipPage,
});

const STEPS = [
  { n: 1, title: "Apply", desc: "Share your travel preferences with our concierge desk." },
  { n: 2, title: "Curate", desc: "We hand-build a private collection of properties for you." },
  { n: 3, title: "Travel", desc: "Book, stay and unwind — every detail handled end-to-end." },
];

const BENEFITS = [
  "Priority access to off-market villas and private estates",
  "24/7 dedicated concierge across all your bookings",
  "Member-only rates and complimentary upgrades",
  "Private chef, butler and chauffeur coordination",
  "Custom itineraries built by destination specialists",
  "Last-minute booking guarantees at partner properties",
];

function MembershipPage() {
  return (
    <div>
      <section className="bg-[var(--primary)] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--accent)] uppercase tracking-[0.3em] text-sm font-semibold mb-4">CoTrav Inner Circle</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[var(--accent)] leading-tight mb-6">
            Exclusive HNI Concierge Access
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A private membership for India's most discerning travellers — curated stays, priority access, and a concierge that knows you by name.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-[var(--primary)] mb-12 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center px-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center text-2xl font-black mb-5">
                {s.n}
              </div>
              <h3 className="text-xl font-black uppercase text-[var(--primary)] mb-2">{s.title}</h3>
              <p className="text-[var(--text-secondary)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[var(--primary)] mb-6">Member Benefits</h2>
          <ul className="space-y-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="mt-1 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[var(--primary)]" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-black uppercase text-[var(--primary)] mb-3">Apply Now</h3>
          <p className="text-[var(--text-secondary)] mb-6">Speak with a concierge over WhatsApp — we respond within the hour.</p>
          <a
            href="https://wa.me/919999999999"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-7 py-4 rounded-full transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
