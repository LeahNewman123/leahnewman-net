import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return { title: note?.title ?? "Note", description: note?.summary };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  return (
    <article className="container-page max-w-4xl py-14" id="main">
      <p className="eyebrow">{note.status}</p>
      <h1 className="mt-4 font-serif text-5xl font-semibold">{note.title}</h1>
      <p className="mt-5 text-xl leading-9 text-ink/72">{note.summary}</p>
      <div className="mt-10 grid gap-5">
        {note.body.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-9 text-ink/76">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
