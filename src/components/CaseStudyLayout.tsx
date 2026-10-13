import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <article className="container-page py-14">
      <header className="max-w-4xl">
        <p className="eyebrow">{study.category}</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-ink">{study.title}</h1>
        <p className="mt-5 text-2xl font-semibold leading-9 text-charcoal">{study.summary}</p>
        <dl className="mt-8 grid gap-4 rounded-lg border border-ink/10 bg-white/50 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Year", study.year],
            ["Status", study.status],
            ["Collaborators", study.collaborators],
            ["My role", study.role]
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-brass">{label}</dt>
              <dd className="mt-2 text-sm leading-6 text-ink/78">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="grid gap-8">
          <CaseBlock title="Challenge">{study.challenge}</CaseBlock>
          <CaseBlock title="Context">{study.context}</CaseBlock>
          <CaseList title="Process" items={study.process} />
          <CaseList title="Technical work" items={study.technicalDetails} />
          <CaseList title="Design decisions" items={study.decisions} />
          <CaseList title="Prototype iterations" items={study.iterations} />
          <CaseList title="Failures and lessons" items={study.lessons} />
          <CaseBlock title="Outcome">{study.outcome}</CaseBlock>
          <CaseBlock title="Future work">{study.futureWork}</CaseBlock>
        </div>
        <aside className="space-y-5">
          {study.gallery.map((image) => (
            <figure key={image.src} className="panel overflow-hidden rounded-lg p-4">
              <Image src={image.src} alt={image.alt} width={640} height={420} className="h-auto w-full rounded-md" />
              <figcaption className="mt-3 text-sm text-ink/60">Placeholder visual. Replace with real project imagery when available.</figcaption>
            </figure>
          ))}
          <div className="rounded-lg border border-ink/10 bg-white/45 p-5">
            <h2 className="font-serif text-2xl font-semibold">Related</h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink/72">
              {study.related.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}

function CaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-3xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 leading-8 text-ink/72">{children}</p>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-serif text-3xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-ink/10 bg-white/45 p-4 leading-7 text-ink/74">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
