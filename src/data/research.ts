import { researchCaseStudies } from "./caseStudies";

export const researchProjects = researchCaseStudies.map((item) => ({
  title: item.title,
  slug: item.slug,
  href: `/research/${item.slug}`,
  summary: item.summary,
  status: item.status,
  category: item.category
}));
