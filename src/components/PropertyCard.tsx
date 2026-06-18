import { Link } from "@tanstack/react-router";
import { Wifi, Car, Utensils, Waves, Coffee, Wind, Dumbbell, Wine, Sparkles } from "lucide-react";
import type { Property } from "@/data/properties";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi, parking: Car, chef: Utensils, pool: Waves, bar: Wine,
  ac: Wind, gym: Dumbbell, coffee: Coffee, spa: Sparkles,
};

function AmenityChip({ label }: { label: string }) {
  const Icon = ICONS[label.toLowerCase()] ?? Coffee;
  return (
    <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
      <Icon className="w-4 h-4 text-[var(--accent)]" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

export function PropertyCard({ property, layout = "row" }: { property: Property; layout?: "row" | "grid" }) {
  if (layout === "grid") {
    return (
      <Link
        to="/property/$slug"
        params={{ slug: property.slug }}
        className="block rounded-2xl overflow-hidden shadow-[var(--card-shadow)] bg-white hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="relative aspect-[4/3]">
          <img src={property.images[0]} alt={property.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs italic px-3 py-1 rounded">
            {property.tag}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-[var(--primary)] mb-1">{property.name}</h3>
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{property.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-[var(--text-secondary)]">Starting @</div>
              <div className="font-bold text-2xl text-[var(--primary)]">
                ₹{property.pricePerNight.toLocaleString("en-IN")}
                <span className="text-sm font-normal text-[var(--text-secondary)]">/night</span>
              </div>
            </div>
            <span className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-4 py-2 rounded-md transition-colors duration-200 text-sm">
              Book Now
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col md:flex-row bg-white shadow-[var(--card-shadow)] mb-6">
      <div className="relative md:w-5/12">
        <img src={property.images[0]} alt={property.name} loading="lazy" className="w-full h-64 md:h-full object-cover" />
        <span className="absolute top-4 left-4 bg-[var(--primary)] text-white text-xs italic px-3 py-1.5 rounded">
          {property.tag}
        </span>
      </div>
      <div className="p-6 flex flex-col justify-between md:w-7/12 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{property.name}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-4">{property.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 border-y border-[var(--border)] py-3">
          {property.amenities.map((a) => <AmenityChip key={a} label={a} />)}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs text-[var(--text-secondary)]">Starting @</div>
            <div className="font-bold text-3xl text-[var(--primary)]">
              ₹{property.pricePerNight.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-[var(--text-secondary)] ml-1">/night</span>
            </div>
          </div>
          <Link
            to="/property/$slug"
            params={{ slug: property.slug }}
            className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-6 py-3 rounded-md transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
