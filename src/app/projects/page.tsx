import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionIntro } from "@/components/SectionIntro";
import { projectCards } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects including ScopeLab, MultiTasker, robotics, embedded systems and 3D printing."
};

export default function ProjectsPage() {
  return (
    <section className="container-page py-14" id="main">
      <SectionIntro eyebrow="Projects" title="Hardware, prototypes and technical communication.">
        <p>
          These projects are presented as working records: what problem they addressed, what I built, what changed and what still needs work.
        </p>
      </SectionIntro>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projectCards.map((item) => (
          <Card key={item.slug} title={item.title} summary={item.summary} href={item.href} meta={item.category} status={item.status} />
        ))}
      </div>
    </section>
  );
}
