import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { hubs } from "@/data/hubsData";

export const Route = createFileRoute("/hubs")({
  head: () => ({
    meta: [
      { title: "Hubs — CoTrav Stays" },
      { name: "description", content: "Explore CoTrav's curated hub circuits across India — each hub connects to luxury staycations within a 4-6 hour drive." },
    ],
  }),
  component: HubsPage,
});

function HubsPage() {
  const [expanded, setExpanded] = useState<string | null>(hubs[0]?.slug ?? null);

  return (
    <div className="pt-20">
      <section className="bg-[var(--primary)] text-white py-20 px-6 text-center">
        <p className="text-[var(--accent)] uppercase text-sm tracking-[0.3em] mb-4 font-semibold">Hub & Spoke Network</p>
        <h1 className="text-4xl md:text-6xl font-black mb-4">EXPLORE BY <span className="text-[var(--accent)]">HUB</span></h1>
        <p className="text-lg max-w-2xl mx-auto text-white/80">11 curated hub circuits across India. Each hub connects to luxury staycations within a short drive.</p>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-16 space-y-4">
        {hubs.map((h) => {
          const isOpen = expanded === h.slug;
          return (
            <div key={h.slug} id={`hub-${h.slug}`} className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden scroll-mt-24">
              <button
                onClick={() => setExpanded(isOpen ? null : h.slug)}
                className="w-full flex items-center justify-between p-6 hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-[var(--primary)]">{h.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{h.spokes.length} destinations</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-[var(--primary)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="p-6 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
                  <div className="flex flex-wrap gap-2">
                    {h.spokes.map((s) => (
                      <Link
                        key={s.slug}
                        to="/destination/$slug"
                        params={{ slug: s.slug }}
                        className="px-4 py-2 bg-white border border-[var(--border)] rounded-full text-sm font-semibold text-[var(--primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
