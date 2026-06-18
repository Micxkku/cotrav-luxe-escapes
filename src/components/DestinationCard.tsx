import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

export function DestinationCard({ slug, name, image }: { slug: string; name: string; image: string }) {
  return (
    <Link
      to="/destination/$slug"
      params={{ slug }}
      className="group relative block rounded-2xl overflow-hidden aspect-[3/4] shadow-[var(--card-shadow)]"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
          <MapPin className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" />
          <span className="text-sm font-black uppercase tracking-wide text-[var(--primary)]">
            {name}
          </span>
        </span>
      </div>
    </Link>
  );
}
