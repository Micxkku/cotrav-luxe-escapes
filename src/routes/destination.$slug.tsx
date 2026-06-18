import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Images, Binoculars, Utensils, ShoppingBag, MapPin } from "lucide-react";
import { getDestinationBySlug, type Destination, type ThingItem } from "@/data/destinations";
import { getPropertiesByDestination } from "@/data/properties";
import { AccordionItem } from "@/components/AccordionItem";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/destination/$slug")({
  loader: ({ params }) => {
    const d = getDestinationBySlug(params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Luxury Staycations | CoTrav Stays` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — CoTrav Stays` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Destination not found</div>,
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  component: DestinationDetail,
});

const TABS = [
  { key: "see", label: "See", Icon: Binoculars },
  { key: "eat", label: "Eat", Icon: Utensils },
  { key: "shop", label: "Shop", Icon: ShoppingBag },
  { key: "placesNearby", label: "Places Nearby", Icon: MapPin },
] as const;

function DestinationDetail() {
  const d = Route.useLoaderData() as Destination;
  const properties = getPropertiesByDestination(d.slug);
  const [famousIdx, setFamousIdx] = useState(0);
  const [itinIdx, setItinIdx] = useState(0);
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("see");

  const visibleFamous = 4;
  const famousScroll = d.famousFor.slice(famousIdx, famousIdx + visibleFamous);
  const visibleItin = 4;
  const itinSlice = d.itinerary.slice(itinIdx, itinIdx + visibleItin);

  const list = d.thingsToDo[tab];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Top: image + summary */}
      <div className="grid lg:grid-cols-5 gap-10 mb-20">
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover" />
          <button className="absolute bottom-4 right-4 bg-[var(--accent)] text-[var(--primary)] p-3 rounded-md hover:bg-[var(--accent-hover)] transition-colors">
            <Images className="w-5 h-5" />
          </button>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <h1 className="text-5xl md:text-6xl font-black uppercase text-[var(--primary)] mb-6">{d.name}</h1>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{d.description}</p>
          <button className="self-start bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] font-bold px-8 py-3 rounded-md transition-colors duration-200 mb-12">
            Explore {d.name}
          </button>

          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-black uppercase text-[var(--primary)]">What is it famous for?</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setFamousIdx((i) => Math.max(0, i - 1))}
                className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setFamousIdx((i) => Math.min(d.famousFor.length - visibleFamous, i + 1))}
                className="w-10 h-10 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {famousScroll.map((f: { name: string; image: string }) => (
              <div key={f.name} className="relative rounded-xl overflow-hidden aspect-square">
                <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white font-bold text-sm">{f.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Itinerary */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black uppercase text-[var(--primary)]">Itinerary</h2>
            <p className="text-[var(--text-secondary)] mt-1">How to spend a day in {d.name}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setItinIdx((i) => Math.max(0, i - 1))}
              className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setItinIdx((i) => Math.min(d.itinerary.length - visibleItin, i + 1))}
              className="w-10 h-10 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-5 left-0 right-0 border-t-2 border-dashed border-[var(--border)]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {itinSlice.map((it: { time: string; activity: string; description: string }) => (
              <div key={it.time} className="flex flex-col items-start">
                <span className="bg-white border border-[var(--border)] rounded-full px-4 py-2 text-sm font-medium text-[var(--primary)] mb-4 relative z-10">
                  {it.time}
                </span>
                <h4 className="font-bold text-[var(--primary)] mb-1">{it.activity}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{it.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="mb-20">
        <h2 className="text-3xl font-black uppercase text-[var(--primary)] mb-8">Things to do in {d.name}</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {TABS.map(({ key, label, Icon }) => {
            const active = tab === key;
            return (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`rounded-full px-6 py-3 flex items-center gap-2 font-bold uppercase text-sm cursor-pointer transition-colors duration-200 ${
                  active
                    ? "bg-[var(--accent)] text-[var(--primary)]"
                    : "bg-white border border-[var(--border)] text-[var(--primary)] hover:border-[var(--accent)]"
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </button>
            );
          })}
        </div>

        <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-white">
          {(list as ThingItem[]).map((item: ThingItem, i: number) => (
            <AccordionItem key={item.name} name={item.name} description={item.description} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Properties */}
      <section>
        <h2 className="text-3xl font-black uppercase text-[var(--primary)] mb-8">Staycations in {d.name}</h2>
        {properties.length === 0 ? (
          <p className="text-[var(--text-secondary)]">More properties coming soon. <Link to="/destinations" className="text-[var(--primary)] underline">Browse other destinations</Link>.</p>
        ) : (
          properties.map((p) => <PropertyCard key={p.id} property={p} />)
        )}
      </section>
    </div>
  );
}
