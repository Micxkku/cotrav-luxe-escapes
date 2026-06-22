const brands = [
  "Ama Stays & Trails",
  "IHCL (Taj Hotels)",
  "StayVista",
  "SaffronStays",
  "Elivaas",
  "Lohono Stays",
  "Marriott Villas",
  "Elite Havens",
  "Evolve Back",
  "Airbnb Luxe",
  "Oberoi Group",
  "Rosastays",
];

export function PartnerBrands() {
  const loop = [...brands, ...brands];
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-8">
        <p className="text-center text-sm uppercase tracking-widest text-[var(--text-secondary)]">
          Our Curated Property Partners
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <div className="marquee-track flex gap-4">
          {loop.map((b, i) => (
            <span
              key={i}
              className="shrink-0 border border-[var(--border)] px-6 py-3 bg-white shadow-sm rounded-full text-sm font-semibold text-[var(--primary)] whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
