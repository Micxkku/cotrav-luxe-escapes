export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`section-title text-4xl md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
