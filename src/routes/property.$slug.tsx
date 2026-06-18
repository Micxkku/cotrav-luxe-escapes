import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MapPin, Star, Wifi, Car, Utensils, Waves, Wind, Wine, Sparkles, Dumbbell, Coffee } from "lucide-react";
import { getPropertyBySlug, properties } from "@/data/properties";
import { getDestinationBySlug } from "@/data/destinations";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/property/$slug")({
  loader: ({ params }) => {
    const p = getPropertyBySlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — CoTrav Stays` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — CoTrav Stays` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Property not found</div>,
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  component: PropertyDetail,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi, parking: Car, chef: Utensils, pool: Waves, bar: Wine,
  ac: Wind, gym: Dumbbell, spa: Sparkles, coffee: Coffee,
};

function PropertyDetail() {
  const p = Route.useLoaderData();
  const destination = getDestinationBySlug(p.destinationSlug);
  const similar = properties.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
        <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-[16/10]">
          <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex md:flex-col gap-3">
          {(p.images.slice(1, 3).length ? p.images.slice(1, 3) : [p.images[0], p.images[0]]).map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden flex-1 aspect-[16/10] md:aspect-auto">
              <img src={src} alt={`${p.name} ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left: details */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-3">{p.name}</h1>
          <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-4">
            <MapPin className="w-4 h-4 text-[var(--accent)]" />
            <span className="capitalize">{destination?.name ?? p.destinationSlug}</span>
          </div>
          <div className="flex items-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[var(--accent)] fill-[var(--accent)]" />
            ))}
            <span className="ml-2 text-sm text-[var(--text-secondary)]">5.0 · 124 reviews</span>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">{p.description}</p>

          <h3 className="text-2xl font-black uppercase text-[var(--primary)] mb-5">Amenities</h3>
          <div className="grid sm:grid-cols-3 gap-3 mb-10">
            {p.amenities.map((a) => {
              const Icon = ICONS[a.toLowerCase()] ?? Coffee;
              return (
                <div key={a} className="flex items-center gap-3 border border-[var(--border)] rounded-xl p-4 bg-white">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-medium text-[var(--primary)]">{a}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: sticky booking */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 border border-[var(--border)] rounded-2xl p-6 bg-white shadow-[var(--card-shadow)]">
            <div className="mb-5">
              <span className="text-xs text-[var(--text-secondary)]">Starting @</span>
              <div className="font-black text-3xl text-[var(--primary)]">
                ₹{p.pricePerNight.toLocaleString("en-IN")}
                <span className="text-sm font-normal text-[var(--text-secondary)]">/night</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label className="text-xs text-[var(--text-secondary)] flex flex-col gap-1">
                Check-in
                <input type="date" className="border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--primary)]" />
              </label>
              <label className="text-xs text-[var(--text-secondary)] flex flex-col gap-1">
                Check-out
                <input type="date" className="border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--primary)]" />
              </label>
            </div>
            <label className="text-xs text-[var(--text-secondary)] flex flex-col gap-1 mb-5">
              Guests
              <select className="border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--primary)]">
                <option>2 Guests</option><option>4 Guests</option><option>6 Guests</option><option>8 Guests</option>
              </select>
            </label>

            <div className="border-t border-[var(--border)] pt-4 mb-5 space-y-2 text-sm">
              <div className="flex justify-between text-[var(--text-secondary)]">
                <span>3 nights × ₹{p.pricePerNight.toLocaleString("en-IN")}</span>
                <span>₹{(p.pricePerNight * 3).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[var(--text-secondary)]">
                <span>Concierge fee</span>
                <span>₹2,500</span>
              </div>
              <div className="flex justify-between font-bold text-[var(--primary)] text-base pt-2 border-t border-[var(--border)]">
                <span>Total</span>
                <span>₹{(p.pricePerNight * 3 + 2500).toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold py-3 rounded-md transition-colors duration-200 mb-3">
              Request Booking
            </button>
            <p className="text-xs text-[var(--text-secondary)] text-center">
              Our concierge team will confirm within 2 hours
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-black uppercase text-[var(--primary)] mb-8">Similar Staycations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similar.map((s) => <PropertyCard key={s.id} property={s} layout="grid" />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/destinations" className="text-[var(--primary)] font-bold underline hover:text-[var(--accent)]">
            Browse all destinations →
          </Link>
        </div>
      </section>
    </div>
  );
}
