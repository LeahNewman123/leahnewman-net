import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description: "ScopeLab and Leah's Corsages: technical venture-building and creative entrepreneurship."
};

export default function VenturesPage() {
  return (
    <section className="container-page py-14" id="main">
      <SectionIntro eyebrow="Ventures" title="Technical and creative ventures use the same maker muscles.">
        <p>
          ScopeLab and Leah&apos;s Corsages look different from the outside, but both involve designing physical things, listening to users, iterating under constraints and caring about the finish.
        </p>
      </SectionIntro>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {ventures.map((venture) => (
          <article key={venture.title} className="panel rounded-lg p-6">
            <p className="eyebrow">{venture.type}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">{venture.title}</h2>
            <p className="mt-4 leading-8 text-ink/72">{venture.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {venture.sharedSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/55 px-3 py-2 text-sm font-semibold text-ink/72">{skill}</span>
              ))}
            </div>
            <Link href={venture.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blueprint">
              Explore <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
