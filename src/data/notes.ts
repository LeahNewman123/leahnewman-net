export type Note = {
  slug: string;
  title: string;
  summary: string;
  status: "Placeholder" | "Draft";
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "what-clinicians-need-from-3d-printing",
    title: "What clinicians need from 3D printing",
    summary: "Placeholder essay on implementation, trust, training and responsible bespoke fabrication.",
    status: "Placeholder",
    body: [
      "This future note will explore what healthcare professionals need before 3D printing can become a reliable part of clinical assistive technology work.",
      "Placeholder topics: governance, cleaning, responsibility, documentation, training, patient co-design and choosing the right use cases."
    ]
  },
  {
    slug: "designing-assistive-technology-around-people",
    title: "Designing assistive technology around people",
    summary: "Placeholder reflection on starting from lived context rather than from a neat device idea.",
    status: "Placeholder",
    body: [
      "This future note will describe how design changes when the starting point is a person, a task and a constraint rather than a technology looking for a use."
    ]
  },
  {
    slug: "lessons-from-failed-prototypes",
    title: "Lessons from failed prototypes",
    summary: "A future home for practical notes on what broke, what changed and why that mattered.",
    status: "Placeholder",
    body: [
      "This article will collect prototype failures that were useful: weak joints, awkward grips, unclear interfaces, wrong assumptions and the iteration that followed."
    ]
  },
  {
    slug: "debugging-mobile-robots",
    title: "Debugging mobile robots",
    summary: "Placeholder note connecting ScopeLab to the reality of diagnosing moving hardware.",
    status: "Placeholder",
    body: ["This future note will explain why live robot debugging is hard and what a useful debugging workflow needs to show."]
  },
  {
    slug: "what-stem-competitions-taught-me",
    title: "What STEM competitions taught me",
    summary: "Placeholder reflection on communication, feedback and early engineering confidence.",
    status: "Placeholder",
    body: ["This future note will look at how competitions helped develop practical engineering communication and resilience."]
  }
];
