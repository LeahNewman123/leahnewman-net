export function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      <div className="mt-4 text-lg leading-8 text-ink/72">{children}</div>
    </div>
  );
}
