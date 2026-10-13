import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { researchCaseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return researchCaseStudies.map((study) => ({ slug: study.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = researchCaseStudies.find((item) => item.slug === slug);
  return { title: study?.title ?? "Research", description: study?.summary };
}

export default async function ResearchCasePage({ params }: PageProps) {
  const { slug } = await params;
  const study = researchCaseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return <CaseStudyLayout study={study} />;
}
