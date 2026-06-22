import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar as CalendarIcon, Users, Search, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";
import { hubs } from "@/data/hubsData";
import { DestinationCard } from "@/components/DestinationCard";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionTitle } from "@/components/SectionTitle";
import { PartnerBrands } from "@/components/PartnerBrands";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoTrav Stays — Curated Luxury Staycations in India" },
      { name: "description", content: "Handpicked luxury villas, resorts and private properties across India's finest escapes — from Udaipur to Coorg." },
      { property: "og:title", content: "CoTrav Stays — Curated Luxury Staycations" },
      { property: "og:description", content: "Handpicked luxury villas, resorts and private properties across India's finest escapes." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [hubSlug, setHubSlug] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [destOpen, setDestOpen] = useState(false);

  const selectedHub = useMemo(() => hubs.find((h) => h.slug === hubSlug), [hubSlug]);
  const destinationOptions = useMemo(
    () => (selectedHub ? selectedHub.spokes.map((s) => s.name) : hubs.flatMap((h) => h.spokes.map((s) => s.name))),
    [selectedHub],
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Indian villa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <p className="text-[var(--accent)] uppercase text-sm tracking-[0.3em] mb-4 font-semibold">
            Curated Luxury Staycations
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            YOUR PERFECT STAYCATION AWAITS
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Handpicked luxury villas, resorts &amp; private properties across India's finest escapes
          </p>

          <div className="bg-white rounded-full p-2 shadow-2xl flex flex-col md:flex-row items-stretch gap-2 max-w-5xl mx-auto">
            {/* Hub selector */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-3 flex-1 text-left">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                  <span className={`text-sm flex-1 ${hubSlug ? "text-[var(--primary)]" : "text-[var(--text-secondary)]"}`}>
                    {selectedHub ? selectedHub.name : "Hub"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-1" align="start">
                <button
                  onClick={() => { setHubSlug(""); setDestination(""); }}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  All Hubs
                </button>
                {hubs.map((h) => (
                  <button
                    key={h.slug}
                    onClick={() => { setHubSlug(h.slug); setDestination(""); }}
                    className="w-full text-left px-3 py-2 text-sm rounded hover:bg-[var(--bg-secondary)] text-[var(--primary)]"
                  >
                    {h.name}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
            <div className="hidden md:block w-px bg-[var(--border)]" />

            {/* Destination (filtered by hub) */}
            <div className="flex items-center gap-2 px-4 py-3 flex-1 relative">
              <MapPin className="w-5 h-5 text-[var(--accent)]" />
              <input
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setDestOpen(true); }}
                onFocus={() => setDestOpen(true)}
                onBlur={() => setTimeout(() => setDestOpen(false), 150)}
                placeholder="Destination"
                className="bg-transparent text-[var(--primary)] placeholder:text-[var(--text-secondary)] text-sm outline-none w-full"
              />
              {destOpen && destinationOptions.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[var(--border)] rounded-lg shadow-xl max-h-64 overflow-y-auto z-50 text-left">
                  {destinationOptions
                    .filter((d) => d.toLowerCase().includes(destination.toLowerCase()))
                    .slice(0, 12)
                    .map((d) => (
                      <button
                        key={d}
                        onMouseDown={() => { setDestination(d); setDestOpen(false); }}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-[var(--bg-secondary)] text-[var(--primary)]"
                      >
                        {d}
                      </button>
                    ))}
                </div>
              )}
            </div>
            <div className="hidden md:block w-px bg-[var(--border)]" />

            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-3 flex-1 text-left">
                  <CalendarIcon className="w-5 h-5 text-[var(--accent)]" />
                  <span className={`text-sm ${checkIn ? "text-[var(--primary)]" : "text-[var(--text-secondary)]"}`}>
                    {checkIn ? format(checkIn, "MMM d, yyyy") : "Check-in"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus className="p-3 pointer-events-auto" captionLayout="dropdown" />
              </PopoverContent>
            </Popover>

            <div className="hidden md:block w-px bg-[var(--border)]" />

            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-3 flex-1 text-left">
                  <CalendarIcon className="w-5 h-5 text-[var(--accent)]" />
                  <span className={`text-sm ${checkOut ? "text-[var(--primary)]" : "text-[var(--text-secondary)]"}`}>
                    {checkOut ? format(checkOut, "MMM d, yyyy") : "Check-out"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus className="p-3 pointer-events-auto" captionLayout="dropdown" disabled={checkIn ? { before: checkIn } : undefined} />
              </PopoverContent>
            </Popover>

            <div className="hidden md:block w-px bg-[var(--border)]" />
            <div className="flex items-center gap-2 px-4 py-3 flex-1">
              <Users className="w-5 h-5 text-[var(--accent)]" />
              <input placeholder="Rooms" aria-label="Rooms" className="bg-transparent text-[var(--primary)] placeholder:text-[var(--text-secondary)] text-sm outline-none w-full" />
            </div>
            <button className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionTitle>Destinations</SectionTitle>
          <div className="flex items-center gap-2 border border-[var(--border)] rounded-full px-4 py-2 w-full sm:w-80">
            <Search className="w-4 h-4 text-[var(--text-secondary)]" />
            <input placeholder="Search destinations" className="bg-transparent text-sm outline-none w-full text-[var(--primary)]" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {destinations.map((d) => (
            <DestinationCard key={d.id} slug={d.slug} name={d.name} image={d.image} />
          ))}
        </div>
      </section>

      <PartnerBrands />


      {/* Featured Staycations */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-12">
          <SectionTitle>Featured Staycations</SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 6).map((p) => (
            <PropertyCard key={p.id} property={p} layout="grid" />
          ))}
        </div>
      </section>
    </div>
  );
}
