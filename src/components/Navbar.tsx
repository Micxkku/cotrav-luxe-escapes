import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, UserCircle2, Tent } from "lucide-react";
import { useState } from "react";

type NavLink = {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
};

const links: NavLink[] = [
  {
    label: "Staycation",
    to: "/destinations",
    dropdown: [
      { label: "All Staycations", to: "/destinations" },
      { label: "Featured", to: "/" },
    ],
  },
  {
    label: "Villas",
    to: "/destinations",
    dropdown: [
      { label: "All Villas", to: "/destinations" },
      { label: "Luxury Villas", to: "/destinations" },
    ],
  },
  {
    label: "Destination",
    to: "/destinations",
    dropdown: [
      { label: "All Destinations", to: "/destinations" },
    ],
  },
  {
    label: "Hubs",
    to: "/hubs",
    dropdown: [
      { label: "Delhi Hub", to: "/hubs" },
      { label: "Mumbai Hub", to: "/hubs" },
      { label: "Bengaluru Hub", to: "/hubs" },
      { label: "Rajasthan Hub", to: "/hubs" },
      { label: "Wellness Circuit", to: "/hubs" },
    ],
  },
  { label: "Workation", to: "/membership" },
  { label: "Corporate Retreats", to: "/corporate-retreats" },
  { label: "Membership", to: "/membership" },
  { label: "Events", to: "/events" },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);

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
          {links.map((l) => (
            <li
              key={l.label}
              className="relative"
              onMouseEnter={() => l.dropdown && setOpen(l.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                to={l.to}
                className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-200 py-2"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              {l.dropdown && open === l.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                  <div className="bg-white border border-[var(--border)] rounded-lg shadow-lg py-2">
                    {l.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        to={d.to}
                        className="block px-4 py-2 text-sm text-[var(--primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 bg-[var(--bg-secondary)] rounded-full px-3 py-2">
          <Menu className="w-5 h-5 text-[var(--primary)]" />
          <UserCircle2 className="w-7 h-7 text-[var(--primary)]" />
        </div>
      </nav>
    </header>
  );
}
