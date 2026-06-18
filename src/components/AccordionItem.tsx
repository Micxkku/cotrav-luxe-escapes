import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AccordionItem({ name, description, defaultOpen = false }: { name: string; description: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-stretch gap-4 px-5 py-5 text-left hover:bg-[var(--bg-secondary)] transition-colors duration-200"
      >
        <span className="w-1 rounded bg-[var(--accent)] self-stretch shrink-0" />
        <span className="flex-1 font-bold text-lg text-[var(--primary)]">{name}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[var(--text-secondary)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-secondary)]" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pl-10 text-[var(--text-secondary)] leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}
