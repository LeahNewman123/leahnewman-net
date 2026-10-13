import type { MetadataRoute } from "next";
import { notes } from "@/data/notes";
import { allCaseStudies } from "@/data/caseStudies";

const base = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "research", "projects", "ventures", "outreach", "notes", "contact"].map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date()
  }));

  const cases = allCaseStudies.map((item) => ({
    url: `${base}/${item.section}/${item.slug}`,
    lastModified: new Date()
  }));

  const writing = notes.map((item) => ({
    url: `${base}/notes/${item.slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...cases, ...writing];
}
