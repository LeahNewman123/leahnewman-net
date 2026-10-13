import { projectCaseStudies } from "./caseStudies";

export const projectCards = [
  ...projectCaseStudies.map((item) => ({
    title: item.title,
    slug: item.slug,
    href: `/projects/${item.slug}`,
    summary: item.summary,
    status: item.status,
    category: item.category
  })),
  {
    title: "Selected robotics and embedded systems projects",
    slug: "robotics-embedded-placeholder",
    href: "/projects",
    summary: "Placeholder for future robotics builds, firmware experiments, sensors and electronics projects.",
    status: "Placeholder",
    category: "Robotics · Embedded systems"
  },
  {
    title: "3D-printing projects",
    slug: "3d-printing-placeholder",
    href: "/projects",
    summary: "Placeholder for future fabrication notes, prototype photographs and CAD write-ups.",
    status: "Placeholder",
    category: "Fabrication · Prototyping"
  }
];
