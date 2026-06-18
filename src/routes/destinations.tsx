import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/DestinationCard";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — CoTrav Stays" },
      { name: "description", content: "Explore CoTrav Stays' curated luxury destinations across India." },
      { property: "og:title", content: "Destinations — CoTrav Stays" },
      { property: "og:description", content: "Curated luxury destinations across India." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [q, setQ] = useState("");
  const filtered = destinations.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <nav className="text-sm text-[var(--text-secondary)] mb-8">
        <Link to="/" className="hover:text-[var(--accent)]">Home</Link> <span>›</span> <span className="text-[var(--primary)] font-medium">Destinations</span>
      </nav>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <SectionTitle>Destinations</SectionTitle>
        <div className="flex items-center gap-2 border border-[var(--border)] rounded-full px-4 py-2 w-full sm:w-80">
          <Search className="w-4 h-4 text-[var(--text-secondary)]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search destinations"
            className="bg-transparent text-sm outline-none w-full text-[var(--primary)]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {filtered.map((d) => (
          <DestinationCard key={d.id} slug={d.slug} name={d.name} image={d.image} />
        ))}
      </div>
    </div>
  );
}
