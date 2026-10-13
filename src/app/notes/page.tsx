import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Placeholder article system for future writing by Leah Newman."
};

export default function NotesPage() {
  return (
    <section className="container-page py-14" id="main">
      <SectionIntro eyebrow="Notes" title="A future technical sketchbook.">
        <p>
          This is a simple article system for future writing on assistive technology, clinical 3D printing, robotics debugging and engineering education.
        </p>
      </SectionIntro>
      <div className="mt-8 grid gap-4">
        {notes.map((note) => (
          <article key={note.slug} className="rounded-lg border border-ink/10 bg-white/50 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">{note.status}</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold">{note.title}</h2>
              </div>
              <Link href={`/notes/${note.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blueprint">
                Read <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-3 leading-7 text-ink/72">{note.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
