import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { outreach } from "@/data/outreach";

export const metadata: Metadata = {
  title: "Outreach",
  description: "STEM outreach, Patch, mentoring, judging, workshops, speaking and science communication."
};

export default function OutreachPage() {
  return (
    <section className="container-page py-14" id="main">
      <SectionIntro eyebrow="Outreach" title="Helping more young people build, test and explore ideas.">
        <p>
          Outreach is part of my engineering practice. It is how more people get access to tools, feedback and the confidence to try technical work.
        </p>
      </SectionIntro>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {outreach.map((item) => (
          <article key={item.title} className="rounded-lg border border-ink/10 bg-white/50 p-5">
            <h2 className="font-serif text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 leading-7 text-ink/72">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
