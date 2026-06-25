import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, UserCircle2, Tent, X, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hubs } from "@/data/hubsData";
import { EnquiryModal } from "./EnquiryModal";

const WHATSAPP = "https://wa.me/919876543210";
const TEL = "+919876543210";

const mobileLinks = [
  { label: "Staycation", to: "/destinations" },
  { label: "Destination", to: "/destinations" },
  { label: "Hubs", to: "/hubs" },
  { label: "Why Us", to: "/why-us" },
  { label: "Workation", to: "/membership" },
  { label: "Corporate Retreats", to: "/corporate-retreats" },
  { label: "Membership", to: "/membership" },
  { label: "Events", to: "/events" },
  { label: "Become a Host", to: "/become-a-host" },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [enquiry, setEnquiry] = useState(false);
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
      <nav className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Tent className="w-7 h-7 text-[var(--primary)]" strokeWidth={2.2} />
          <span className="font-black tracking-tight text-xl">
            <span className="text-[var(--primary)]">COTRAV</span>
            <span className="text-[var(--accent)] ml-1">STAYS</span>
          </span>
        </Link>

        <ul className="hidden xl:flex items-center gap-5">
          {/* Staycation mega — all destinations grouped by hub */}
          <li className="relative" onMouseEnter={() => setOpen("Staycation")} onMouseLeave={() => setOpen(null)}>
            <Link to="/destinations" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Staycation <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Staycation" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl p-6 z-50 grid grid-cols-6 gap-5 w-[1100px]">
                  {hubs.slice(0, 6).map((h) => (
                    <div key={h.slug}>
                      <Link to="/hubs" hash={`hub-${h.slug}`} className="font-bold text-sm text-[var(--primary)] block mb-2 hover:text-[var(--accent)]">
                        {h.name}
                      </Link>
                      <ul className="space-y-1">
                        {h.spokes.slice(0, 5).map((s) => (
                          <li key={s.slug}>
                            <Link to="/destination/$slug" params={{ slug: s.slug }} className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] block">
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-6 pt-3 border-t border-[var(--border)] text-right">
                    <Link to="/destinations" className="text-sm font-bold text-[var(--accent)]">View All Destinations →</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Destination */}
          <li className="relative" onMouseEnter={() => setOpen("Destination")} onMouseLeave={() => setOpen(null)}>
            <Link to="/destinations" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Destination <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Destination" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl p-6 z-50 grid grid-cols-6 gap-5 w-[1100px]">
                  {hubs.slice(0, 6).map((h) => (
                    <div key={h.slug}>
                      <Link to="/hubs" hash={`hub-${h.slug}`} className="font-bold text-sm text-[var(--primary)] block mb-2 hover:text-[var(--accent)]">
                        {h.name}
                      </Link>
                      <ul className="space-y-1">
                        {h.spokes.slice(0, 5).map((s) => (
                          <li key={s.slug}>
                            <Link to="/destination/$slug" params={{ slug: s.slug }} className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] block">
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

          {/* Hubs — simple list */}
          <li className="relative" onMouseEnter={() => setOpen("Hubs")} onMouseLeave={() => setOpen(null)}>
            <Link to="/hubs" className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">
              Hubs <ChevronDown className="w-4 h-4" />
            </Link>
            {open === "Hubs" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="nav-dropdown bg-white border border-[var(--border)] rounded-xl shadow-xl py-2 z-50 w-72">
                  {hubs.map((h) => (
                    <Link key={h.slug} to="/hubs" hash={`hub-${h.slug}`} className="flex items-center justify-between px-4 py-2.5 hover:bg-[var(--bg-secondary)]">
                      <span className="text-sm font-bold text-[var(--primary)] flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" /> {h.name}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)]">{h.spokes.length} destinations</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li><Link to="/why-us" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Why Us</Link></li>
          <li><Link to="/membership" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Workation</Link></li>
          <li><Link to="/corporate-retreats" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Corporate Retreats</Link></li>
          <li><Link to="/membership" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Membership</Link></li>
          <li><Link to="/events" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] py-2">Events</Link></li>
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/become-a-host" className="hidden md:inline-flex border border-[var(--primary)] text-[var(--primary)] rounded-full px-4 py-2 text-sm font-bold hover:bg-[var(--primary)] hover:text-white transition-colors">
            Become a Host
          </Link>

          <div className="relative">
            <button onClick={() => setOpen(open === "GIT" ? null : "GIT")} className="inline-flex items-center gap-1 bg-[var(--accent)] text-[var(--primary)] rounded-full px-4 py-2 text-sm font-bold hover:bg-[var(--accent-hover)] transition-colors">
              Get in Touch <ChevronDown className="w-4 h-4" />
            </button>
            {open === "GIT" && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setOpen(null)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[var(--border)] py-2 nav-dropdown z-50">
                  <a href={`tel:${TEL}`} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-secondary)] cursor-pointer text-sm text-[var(--primary)] font-medium">
                    <Phone className="w-4 h-4 text-[var(--accent)]" /> +91 98765 43210
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-secondary)] cursor-pointer text-sm text-[var(--primary)] font-medium">
                    <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp Us
                  </a>
                  <button onClick={() => { setOpen(null); setEnquiry(true); }} className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-secondary)] cursor-pointer text-sm text-[var(--primary)] font-medium">
                    <Mail className="w-4 h-4 text-[var(--accent)]" /> Send an Enquiry
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 bg-[var(--bg-secondary)] rounded-full px-2 py-1.5 relative" ref={userMenuRef}>
            <button onClick={() => setDrawer(true)} aria-label="Open menu" className="p-1">
              <Menu className="w-5 h-5 text-[var(--primary)]" />
            </button>
            <button onClick={() => setUserMenu((v) => !v)} aria-label="User menu" className="p-0.5">
              <UserCircle2 className="w-6 h-6 text-[var(--primary)]" />
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
        </div>
      </nav>

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
                <Link key={l.label} to={l.to} onClick={() => setDrawer(false)} className="block px-6 py-3 text-base font-medium text-[var(--primary)] hover:bg-[var(--bg-secondary)]">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-[var(--border)]">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full py-3 w-full transition-colors">
                <MessageCircle className="w-4 h-4" /> Chat with Concierge
              </a>
            </div>
          </aside>
        </>
      )}

      <EnquiryModal open={enquiry} onClose={() => setEnquiry(false)} />
    </header>
  );
}
