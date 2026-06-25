import { X, Phone } from "lucide-react";
import { useState } from "react";
import { hubs } from "@/data/hubsData";

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", code: "+91 India", phone: "", email: "",
    interest: "Staycation", location: hubs[0]?.name ?? "", message: "",
  });
  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert("Request received! Our concierge will contact you shortly.");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-[var(--primary)]">Send a Request</h2>
          <button onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--bg-secondary)]">
            <X className="w-4 h-4 text-[var(--primary)]" />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <Field label="Full Name" required>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Phone Code" required>
              <select value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="input">
                <option>+91 India</option>
                <option>+1 USA</option>
                <option>+44 UK</option>
                <option>+971 UAE</option>
                <option>+65 Singapore</option>
              </select>
            </Field>
            <Field label="Phone Number" required>
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
            </Field>
          </div>

          <Field label="Email" required>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Interested In" required>
              <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input">
                <option>Staycation</option>
                <option>Corporate Retreat</option>
                <option>Villa Rental</option>
                <option>Workation</option>
              </select>
            </Field>
            <Field label="Location" required>
              <select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="input">
                {hubs.map((h) => <option key={h.slug}>{h.name}</option>)}
              </select>
            </Field>
          </div>

          <Field label="Message">
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" />
          </Field>

          <button type="submit" className="w-full bg-[var(--accent)] text-[var(--primary)] font-bold py-4 rounded-xl hover:bg-[var(--accent-hover)] transition-colors">
            Submit
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-secondary)]">OR</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <a href="tel:+919876543210" className="flex items-center justify-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] font-bold py-3 rounded-xl hover:bg-[var(--primary)] hover:text-white transition-colors">
            <Phone className="w-4 h-4" /> CALL US +91 98765 43210
          </a>
        </form>

        <style>{`.input{width:100%;border:1px solid var(--border);border-radius:0.5rem;padding:0.625rem 0.75rem;font-size:0.875rem;background:white;color:var(--primary);font-weight:600;outline:none;}.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,215,0,0.2);}`}</style>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-[var(--text-secondary)] mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
