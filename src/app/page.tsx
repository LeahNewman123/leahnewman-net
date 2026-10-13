import { Card } from "@/components/Card";
import { DuckPond } from "@/components/DuckPond";
import { Hero } from "@/components/Hero";
import { InteractiveShelf } from "@/components/InteractiveShelf";
import { SectionIntro } from "@/components/SectionIntro";
import { profile } from "@/data/profile";
import { projectCards } from "@/data/projects";
import { researchProjects } from "@/data/research";

export default function Home() {
  return (
    <div id="main">
      <Hero />
      <DuckPond />
      <InteractiveShelf />
      <section className="container-page py-16">
        <div className="color-wash rounded-lg border border-white/70 p-5 sm:p-8">
          <SectionIntro eyebrow="Standard portfolio" title="The work, without needing to pick anything up.">
            <p>{profile.positioning}</p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {researchProjects.slice(0, 2).map((item) => (
              <Card key={item.slug} title={item.title} summary={item.summary} href={item.href} meta={item.category} status={item.status} />
            ))}
            {projectCards.slice(0, 2).map((item) => (
              <Card key={item.slug} title={item.title} summary={item.summary} href={item.href} meta={item.category} status={item.status} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
