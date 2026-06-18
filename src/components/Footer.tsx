import { Link } from "@tanstack/react-router";
import { MessageCircle, Tent } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tent className="w-7 h-7 text-[var(--accent)]" />
            <span className="font-black tracking-tight text-xl">
              <span className="text-white">COTRAV</span>
              <span className="text-[var(--accent)] ml-1">STAYS</span>
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            India's curated concierge for luxury staycations — handpicked villas, resorts and private properties for discerning travellers.
          </p>
          <a
            href="https://wa.me/919999999999"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-5 py-3 rounded-md transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Concierge
          </a>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-wide mb-4 text-[var(--accent)]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-[var(--accent)]">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-[var(--accent)]">Destinations</Link></li>
            <li><Link to="/membership" className="hover:text-[var(--accent)]">Membership</Link></li>
            <li><Link to="/membership" className="hover:text-[var(--accent)]">Corporate Retreats</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-wide mb-4 text-[var(--accent)]">Top Destinations</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/destination/$slug" params={{ slug: "udaipur" }} className="hover:text-[var(--accent)]">Udaipur</Link></li>
            <li><Link to="/destination/$slug" params={{ slug: "corbett" }} className="hover:text-[var(--accent)]">Corbett</Link></li>
            <li><Link to="/destination/$slug" params={{ slug: "coorg" }} className="hover:text-[var(--accent)]">Coorg</Link></li>
            <li><Link to="/destination/$slug" params={{ slug: "goa" }} className="hover:text-[var(--accent)]">Goa</Link></li>
            <li><Link to="/destination/$slug" params={{ slug: "jaisalmer" }} className="hover:text-[var(--accent)]">Jaisalmer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2025 CoTrav Stays. All rights reserved.</span>
          <span>Part of BAI Group</span>
        </div>
      </div>
    </footer>
  );
}
