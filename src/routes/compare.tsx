import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Star, Info, RotateCcw, Plus, ChevronDown, Download, ArrowRight, Wifi, Waves, Snowflake, Utensils, ParkingCircle, Trees, Trophy, DollarSign, Sparkles, X, Check } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Properties — CoTrav Stays" },
      { name: "description", content: "Compare luxury staycation properties side-by-side across 24 factors to find your perfect stay." },
    ],
  }),
  component: ComparePage,
});

type CompareProperty = {
  id: string; type: string; name: string; location: string; rating: number; reviews: number; price: number; taxes: number; img: string;
  price_value: string; price_badge?: string; loc_detail: string; star: string; reviews_str: string; cleanliness: string; room: string; service: string; safety: string;
  amenities: string[];
};

const SAMPLE: CompareProperty[] = [
  { id: "1", type: "Luxury Villa", name: "Azure Beach Villa", location: "Candolim Beach, Goa", rating: 4.8, reviews: 126, price: 18999, taxes: 3420, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800", price_value: "Excellent", price_badge: "Best Value", loc_detail: "On Candolim Beach · 0.2 km to beach", star: "5 Star Luxury", reviews_str: "4.8/5 (126 reviews)", cleanliness: "Excellent", room: "Spacious with sea view", service: "Exceptional", safety: "Excellent - 24/7 Security", amenities: ["wifi","pool","ac","kitchen","parking","garden"] },
  { id: "2", type: "Resort", name: "Palm Grove Resort", location: "Calangute, Goa", rating: 4.5, reviews: 89, price: 12499, taxes: 2250, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800", price_value: "Good", loc_detail: "Near Calangute Beach · 0.8 km to beach", star: "4 Star Resort", reviews_str: "4.5/5 (89 reviews)", cleanliness: "Very Good", room: "Comfortable with garden view", service: "Very Good", safety: "Very Good", amenities: ["wifi","pool","ac","parking"] },
  { id: "3", type: "Boutique Hotel", name: "The Art House Goa", location: "Anjuna, Goa", rating: 4.3, reviews: 67, price: 9999, taxes: 1800, img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800", price_value: "Good", price_badge: "Budget Friendly", loc_detail: "Near Anjuna Beach · 1.2 km to beach", star: "4 Star Boutique", reviews_str: "4.3/5 (67 reviews)", cleanliness: "Very Good", room: "Stylish with unique design", service: "Good", safety: "Very Good", amenities: ["wifi","ac","kitchen","parking"] },
];

const FACTORS = [
  "Price & Value for Money", "Location", "Star Rating & Quality", "Reviews & Ratings",
  "Cleanliness & Hygiene", "Amenities", "Room Quality", "Customer Service", "Safety & Security",
  "Check-in Flexibility", "Cancellation Policy", "Pet Friendly",
];

const AMENITY_ICONS: Record<string, typeof Wifi> = { wifi: Wifi, pool: Waves, ac: Snowflake, kitchen: Utensils, parking: ParkingCircle, garden: Trees };

function ComparePage() {
  const [selected, setSelected] = useState<Record<string, boolean>>({ "1": true, "2": true, "3": true });
  const [showAll, setShowAll] = useState(false);

  const visibleFactors = showAll ? FACTORS : FACTORS.slice(0, 9);
  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <div className="pt-20 bg-[var(--bg-secondary)] min-h-screen pb-32">
      <div className="max-w-[1400px] mx-auto px-6 pt-8">
        <div className="text-xs text-[var(--text-secondary)] mb-2">
          <Link to="/" className="hover:text-[var(--accent)]">Home</Link> <span className="mx-1">›</span> Compare Properties
        </div>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[var(--primary)]">Compare Properties</h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">Compare features, amenities, and policies side-by-side to find your perfect stay.</p>
          </div>
          <button className="inline-flex items-center gap-2 border border-[var(--border)] bg-white rounded-lg px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--bg-secondary)]">
            Add More Properties <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Search summary bar */}
        <div className="bg-white rounded-xl border border-[var(--border)] p-4 flex flex-wrap items-center gap-4 mb-6">
          <div className="flex-1 min-w-[200px] flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[var(--accent)]" />
            <div>
              <div className="text-[10px] text-[var(--text-secondary)] uppercase">Destination</div>
              <div className="text-sm font-bold text-[var(--primary)]">Goa, India</div>
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <div className="text-[10px] text-[var(--text-secondary)] uppercase">Check-in</div>
            <div className="text-sm font-bold text-[var(--primary)]">20 Jun 2025</div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <div className="text-[10px] text-[var(--text-secondary)] uppercase">Check-out</div>
            <div className="text-sm font-bold text-[var(--primary)]">23 Jun 2025</div>
          </div>
          <button className="bg-[var(--primary)] text-white font-bold rounded-lg px-5 py-2.5 text-sm">Change Search</button>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Comparing <b className="text-[var(--primary)]">{selectedCount} properties</b> in Goa, India
        </p>

        <div className="flex gap-6">
          {/* Left sidebar */}
          <aside className="w-56 shrink-0 hidden lg:block">
            <div className="bg-white border border-[var(--border)] rounded-xl p-5 sticky top-24">
              <h3 className="font-black text-[var(--primary)]">24 Comparison Factors</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1 mb-4">Select important factors to you</p>
              <button className="flex items-center gap-1 text-xs text-[var(--accent)] font-semibold">
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>
          </aside>

          {/* Main table */}
          <div className="flex-1 min-w-0 bg-white border border-[var(--border)] rounded-xl overflow-hidden">
            {/* Property header row */}
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-[var(--border)]">
              {SAMPLE.map((p) => (
                <div key={p.id} className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">{p.type}</span>
                    <button onClick={() => setSelected({ ...selected, [p.id]: !selected[p.id] })} className={`w-5 h-5 rounded flex items-center justify-center ${selected[p.id] ? "bg-blue-600" : "border-2 border-[var(--border)]"}`}>
                      {selected[p.id] && <Check className="w-3 h-3 text-white" />}
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <img src={p.img} alt={p.name} className="w-24 h-24 object-cover rounded-lg shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-black text-[var(--primary)] text-base leading-tight">{p.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] mt-1">
                        <MapPin className="w-3 h-3" /> {p.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs mt-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-[var(--primary)]">{p.rating}</span>
                        <span className="text-[var(--text-secondary)]">({p.reviews} reviews)</span>
                      </div>
                      <div className="text-xl font-black text-[var(--primary)] mt-1">₹{p.price.toLocaleString()}<span className="text-xs font-normal text-[var(--text-secondary)]"> per night</span></div>
                      <div className="text-[10px] text-[var(--text-secondary)]">+₹{p.taxes.toLocaleString()} taxes & fees</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Factor rows */}
            {visibleFactors.map((f, idx) => (
              <FactorRow key={f} index={idx + 1} title={f} props={SAMPLE} />
            ))}

            <button onClick={() => setShowAll((v) => !v)} className="w-full py-4 border-t border-[var(--border)] flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:bg-[var(--bg-secondary)]">
              {showAll ? "Show Less" : "View All 24 Factors"} <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Right sidebar */}
          <aside className="w-72 shrink-0 hidden xl:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border border-[var(--border)] rounded-xl p-5">
                <h3 className="font-black text-[var(--primary)] flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-600" /> Your Comparison Summary</h3>
                <p className="text-xs text-[var(--text-secondary)] mb-4">Based on 24 factors comparison</p>
                <SummaryItem icon={Trophy} color="text-yellow-500" label="Best Overall" name="Azure Beach Villa" sub="Best in 15 out of 24 factors" />
                <SummaryItem icon={DollarSign} color="text-green-600" label="Best Value" name="The Art House Goa" sub="Most affordable option" />
                <SummaryItem icon={Sparkles} color="text-purple-600" label="Best for Amenities" name="Palm Grove Resort" sub="Most amenities & facilities" />
              </div>

              <div className="bg-white border border-[var(--border)] rounded-xl p-5">
                <h3 className="font-black text-[var(--primary)]">Need Help Deciding?</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2 mb-4">Our stay experts can help you choose the perfect property.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--primary)] text-white rounded-xl px-4 py-2.5 text-sm font-bold w-full justify-center">
                  Chat with Expert <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-[var(--border)] shadow-lg z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="font-black text-[var(--primary)]">{selectedCount} Properties Selected</div>
            <div className="text-xs text-[var(--text-secondary)]">Goa, India • 20 Jun - 23 Jun 2025</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--primary)] rounded-lg px-4 py-2.5 text-sm font-bold">
              <Download className="w-4 h-4" /> Export Comparison
            </button>
            <button className="inline-flex items-center gap-2 bg-[var(--primary)] text-white rounded-lg px-5 py-2.5 text-sm font-bold">
              View Properties <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FactorRow({ index, title, props }: { index: number; title: string; props: CompareProperty[] }) {
  const bg = index % 2 === 0 ? "bg-[var(--bg-secondary)]" : "bg-white";
  return (
    <div className={`grid grid-cols-[200px_1fr] border-t border-[var(--border)] ${bg}`}>
      <div className="p-4 flex items-center gap-2 text-sm font-semibold text-[var(--primary)] border-r border-[var(--border)]">
        <span className="text-xs text-[var(--text-secondary)]">{index}.</span> {title}
        <Info className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {props.map((p) => (
          <div key={p.id} className="text-sm text-[var(--primary)]">
            {renderCell(title, p)}
          </div>
        ))}
      </div>
    </div>
  );
}

function renderCell(title: string, p: CompareProperty) {
  switch (title) {
    case "Price & Value for Money":
      return (
        <div className="flex items-center gap-2">
          {p.price_value}
          {p.price_badge && <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">{p.price_badge}</span>}
        </div>
      );
    case "Location": return <span className="text-xs">{p.loc_detail}</span>;
    case "Star Rating & Quality": return p.star;
    case "Reviews & Ratings": return p.reviews_str;
    case "Cleanliness & Hygiene": return p.cleanliness;
    case "Amenities":
      return (
        <div className="flex items-center gap-1.5 flex-wrap">
          {p.amenities.slice(0, 5).map((a) => {
            const Icon = AMENITY_ICONS[a];
            return Icon ? <Icon key={a} className="w-4 h-4 text-[var(--primary)]" /> : null;
          })}
          {p.amenities.length > 5 && <span className="text-[10px] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">+{p.amenities.length - 5}</span>}
        </div>
      );
    case "Room Quality": return <span className="text-xs">{p.room}</span>;
    case "Customer Service": return p.service;
    case "Safety & Security": return p.safety;
    case "Check-in Flexibility": return "Flexible 24/7";
    case "Cancellation Policy": return "Free up to 48h";
    case "Pet Friendly": return p.amenities.includes("garden") ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-red-400" />;
    default: return "—";
  }
}

function SummaryItem({ icon: Icon, color, label, name, sub }: { icon: typeof Trophy; color: string; label: string; name: string; sub: string }) {
  return (
    <div className="flex gap-3 py-3 border-t border-[var(--border)] first:border-t-0">
      <Icon className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
      <div>
        <div className="text-[10px] text-[var(--text-secondary)] uppercase font-semibold">{label}</div>
        <div className="font-bold text-sm text-[var(--primary)]">{name}</div>
        <div className="text-xs text-[var(--text-secondary)]">{sub}</div>
      </div>
    </div>
  );
}
