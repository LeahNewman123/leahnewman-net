import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accents = ["bg-blueprint", "bg-coral", "bg-teal", "bg-berry", "bg-brass", "bg-lilac"];

export function Card({
  title,
  summary,
  href,
  meta,
  status
}: {
  title: string;
  summary: string;
  href: string;
  meta?: string;
  status?: string;
}) {
  const accent = accents[Math.abs(title.length + summary.length) % accents.length];

  return (
    <article className="panel group relative flex h-full flex-col overflow-hidden rounded-lg p-5 transition hover:-translate-y-1 hover:bg-white/80">
      <span className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} aria-hidden="true" />
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-2xl font-semibold text-ink">{title}</h3>
        {status ? <span className="rounded-full bg-duck/25 px-3 py-1 text-xs font-bold text-ink">{status}</span> : null}
      </div>
      {meta ? <p className="mt-2 text-sm font-semibold text-teal">{meta}</p> : null}
      <p className="mt-4 flex-1 leading-7 text-ink/72">{summary}</p>
      <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blueprint">
        Open case study <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
