import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, UserCircle2, Tent, X, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hubs } from "@/data/hubsData";

const WHATSAPP = "https://wa.me/919999999999";

const mobileLinks = [
  { label: "Staycation", to: "/destinations" },
  { label: "Villas", to: "/destinations" },
  { label: "Destination", to: "/destinations" },
  { label: "Hubs", to: "/hubs" },
  { label: "Workation", to: "/membership" },
  { label: "Corporate Retreats", to: "/corporate-retreats" },
  { label: "Membership", to: "/membership" },
  { label: "Events", to: "/events" },
];

const villaCards = [
  { title: "Luxury Villas", desc: "Oberoi, IHCL & Aman properties", type: "luxury" },
  { title: "Independent Estates", desc: "Privately owned heritage homes", type: "independent" },
  { title: "Curated Marketplace", desc: "StayVista, SaffronStays & more", type: "marketplace" },
  { title: "Corporate Retreats", desc: "Large estates for teams", type: "corporate" },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenu(false);
      }
    }
    if (userMenu) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [userMenu]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[var(--border)]">
      <nav className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Tent className="w-7 h-7 text-[var(--primary)]" strokeWidth={2.2} />
          <span className="font-black tracking-tight text-xl">
            <span className="text-[var(--primary)]">COTRAV</span>
            <span className="text-[var(--accent)] ml-1">STAYS</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {/* Staycation */}
          <li className="relative" onMouseEnter={() => setOpen("Staycation")} onMouseLeave={() => setOpen(null)}>
            <Link to="/destinations" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Staycation <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Staycation" && (
              <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl py-2 z-50">
                  <Link to="/destinations" className="block px-4 py-2 text-sm hover:bg-[var(--bg-secondary)]">All Staycations</Link>
                  <Link to="/" className="block px-4 py-2 text-sm hover:bg-[var(--bg-secondary)]">Featured</Link>
                </div>
              </div>
            )}
          </li>

          {/* Villas */}
          <li className="relative" onMouseEnter={() => setOpen("Villas")} onMouseLeave={() => setOpen(null)}>
            <Link to="/destinations" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Villas <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Villas" && (
              <div className="absolute top-full left-0 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl p-4 z-50 grid grid-cols-2 gap-3 w-[520px]">
                  {villaCards.map((v) => (
                    <Link
                      key={v.type}
                      to="/destinations"
                      search={{ type: v.type } as never}
                      className="group p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[var(--primary)]">{v.title}</span>
                        <ArrowRight className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{v.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Destination — mega dropdown grouped by hub */}
          <li className="relative" onMouseEnter={() => setOpen("Destination")} onMouseLeave={() => setOpen(null)}>
            <Link to="/destinations" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Destination <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Destination" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl p-6 z-50 grid grid-cols-6 gap-5 w-[1100px]">
                  {hubs.slice(0, 6).map((h) => (
                    <div key={h.slug}>
                      <Link to="/hubs" hash={h.slug} className="font-bold text-sm text-[var(--primary)] block mb-2 hover:text-[var(--accent)]">
                        {h.name}
                      </Link>
                      <ul className="space-y-1">
                        {h.spokes.slice(0, 4).map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/destination/$slug"
                              params={{ slug: s.slug }}
                              className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] block"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Hubs */}
          <li className="relative" onMouseEnter={() => setOpen("Hubs")} onMouseLeave={() => setOpen(null)}>
            <Link to="/hubs" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Hubs <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Hubs" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl p-4 z-50 grid grid-cols-2 gap-1 w-[480px]">
                  {hubs.map((h) => (
                    <Link
                      key={h.slug}
                      to="/hubs"
                      hash={h.slug}
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-[var(--bg-secondary)]"
                    >
                      <span className="text-sm font-medium text-[var(--primary)] flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                        {h.name}
                      </span>
                      <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--accent)] rounded-full px-2 py-0.5">
                        {h.spokes.length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li><Link to="/membership" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Workation</Link></li>
          <li><Link to="/corporate-retreats" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Corporate Retreats</Link></li>
          <li><Link to="/membership" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Membership</Link></li>
          <li><Link to="/events" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Events</Link></li>
        </ul>

        <div className="flex items-center gap-3 bg-[var(--bg-secondary)] rounded-full px-3 py-2 relative" ref={userMenuRef}>
          <button onClick={() => setDrawer(true)} aria-label="Open menu">
            <Menu className="w-5 h-5 text-[var(--primary)]" />
          </button>
          <button onClick={() => setUserMenu((v) => !v)} aria-label="User menu">
            <UserCircle2 className="w-7 h-7 text-[var(--primary)]" />
          </button>

          {userMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-[var(--border)] py-2 nav-dropdown z-50">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--bg-secondary)] text-[var(--primary)]">Sign In</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--bg-secondary)] text-[var(--primary)]">Create Account</button>
              <div className="my-1 border-t border-[var(--border)]" />
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--bg-secondary)] text-[var(--primary)]">
                <MessageCircle className="w-4 h-4 text-green-600" /> Contact Concierge
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Drawer */}
      {drawer && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setDrawer(false)} />
          <aside className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 drawer-slide flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
              <span className="font-black text-[var(--primary)]">MENU</span>
              <button onClick={() => setDrawer(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-[var(--primary)]" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {mobileLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setDrawer(false)}
                  className="block px-6 py-3 text-base font-medium text-[var(--primary)] hover:bg-[var(--bg-secondary)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-[var(--border)]">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full py-3 w-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Chat with Concierge
              </a>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
