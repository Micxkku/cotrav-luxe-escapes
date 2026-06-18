import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, UserCircle2, Tent } from "lucide-react";

const links: { label: string; to?: string; hasDropdown?: boolean }[] = [
  { label: "Staycation", hasDropdown: true, to: "/destinations" },
  { label: "Villas", hasDropdown: true, to: "/destinations" },
  { label: "Destination", hasDropdown: true, to: "/destinations" },
  { label: "Workation", to: "/membership" },
  { label: "Corporate Retreats", to: "/membership" },
  { label: "Membership", to: "/membership" },
  { label: "Events", to: "/membership" },
];

export function Navbar() {
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
            <li key={l.label}>
              <Link
                to={l.to ?? "/"}
                className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
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
