import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionIntro } from "@/components/SectionIntro";
import { researchProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research case studies in assistive technology, clinical 3D printing and neurological clinic scheduling."
};

export default function ResearchPage() {
  return (
    <section className="container-page py-14" id="main">
      <SectionIntro eyebrow="Research" title="Engineering and digital systems for neurological care.">
        <p>
          My research focuses on practical technologies that improve independence and care for people with neurological disabilities.
        </p>
      </SectionIntro>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {researchProjects.map((item) => (
          <Card key={item.slug} title={item.title} summary={item.summary} href={item.href} meta={item.category} status={item.status} />
        ))}
      </div>
    </section>
  );
}
