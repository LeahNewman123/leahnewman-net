export type CaseStudy = {
  slug: string;
  section: "research" | "projects";
  title: string;
  summary: string;
  year: string;
  category: string;
  collaborators: string;
  status: string;
  challenge: string;
  context: string;
  role: string;
  process: string[];
  technicalDetails: string[];
  decisions: string[];
  iterations: string[];
  lessons: string[];
  outcome: string;
  futureWork: string;
  gallery: { src: string; alt: string }[];
  related: string[];
};

export const researchCaseStudies: CaseStudy[] = [
  {
    slug: "bespoke-assistive-devices",
    section: "research",
    title: "Bespoke 3D-Printed Assistive Devices",
    summary:
      "Designing personalised assistive prototypes for people living with Motor Neurone Disease and other neurological conditions.",
    year: "Current",
    category: "Assistive technology · Clinical prototyping",
    collaborators: "Trinity College Dublin, Beaumont Hospital and the Academic Unit of Neurology",
    status: "Active research and prototyping",
    challenge:
      "Many everyday barriers in neurological disability are too specific for mass-produced aids, but too important to leave unsolved.",
    context:
      "The work sits between clinical need-finding, co-design and practical fabrication. Devices must be understandable, safe to trial, fast to adapt and realistic within healthcare workflows.",
    role:
      "I contribute to need translation, CAD, 3D printing, prototype iteration, documentation and discussion with clinicians including physiotherapists, occupational therapists, biomedical engineers and neurological researchers.",
    process: [
      "Clarify the specific activity, environment and user constraint.",
      "Sketch and CAD small, testable prototype options.",
      "3D print, review fit and function, then iterate from feedback.",
      "Document limitations, material choices and next questions."
    ],
    technicalDetails: [
      "Bespoke adapted grips, hands-free glasses supports, nose scratchers and personalised assistive concepts.",
      "Practical use of CAD, 3D printing, fit assessment and design-for-adjustment.",
      "Attention to comfort, cleaning, usability, durability and clinical governance."
    ],
    decisions: [
      "Prioritise specific patient needs over one-size-fits-all design.",
      "Keep prototypes simple enough to inspect, explain and modify.",
      "Treat early prototypes as learning tools rather than finished medical devices."
    ],
    iterations: [
      "Adjusted geometry around grip, reach, comfort and mounting points.",
      "Moved from broad concepts toward smaller devices with clearer testing criteria."
    ],
    lessons: [
      "A prototype can fail mechanically and still produce useful clinical insight.",
      "The design process needs patient and clinician context as much as fabrication skill."
    ],
    outcome:
      "A growing set of bespoke assistive prototypes and a clearer view of where 3D printing can support neurological rehabilitation in Ireland.",
    futureWork:
      "Continue refining use cases, evaluation methods, governance documentation and pathways for clinical implementation.",
    gallery: [{ src: "/images/research/assistive-device.svg", alt: "Placeholder illustration of a 3D-printed assistive grip" }],
    related: ["Clinical application of 3D printing", "MultiTasker"]
  },
  {
    slug: "clinical-3d-printing",
    section: "research",
    title: "Clinical Application of 3D Printing in Ireland",
    summary:
      "Exploring benefits, barriers, regulation, training needs and suitable clinical use cases for bespoke assistive devices.",
    year: "Current",
    category: "Healthcare implementation · Medical devices",
    collaborators: "Trinity College Dublin, Beaumont Hospital and clinical contributors",
    status: "Active research",
    challenge:
      "3D printing can produce useful bespoke devices, but implementation requires governance, training, regulation and clinical confidence.",
    context:
      "Irish healthcare professionals may see strong potential in personalised fabrication while also facing practical barriers around time, responsibility, quality and patient safety.",
    role:
      "I help investigate the clinical application of 3D printing through research design, survey work, synthesis of barriers and benefits, and practical examples from assistive prototypes.",
    process: [
      "Survey healthcare professionals about perceived benefits and barriers.",
      "Identify training, regulation and governance questions.",
      "Map suitable use cases and implementation needs.",
      "Connect findings to real prototype workflows."
    ],
    technicalDetails: [
      "Survey design and analysis.",
      "Implementation framing for clinical 3D printing.",
      "Consideration of co-design, documentation and appropriate use cases."
    ],
    decisions: [
      "Avoid treating 3D printing as a universal fix.",
      "Separate promising clinical use cases from areas needing stricter validation."
    ],
    iterations: ["Refined research questions around professional barriers and clinical adoption."],
    lessons: ["Technical feasibility is only one part of healthcare implementation."],
    outcome: "A structured research project clarifying where bespoke fabrication may be useful and what must be in place for responsible adoption.",
    futureWork: "Develop clearer implementation guidance, training pathways and case examples.",
    gallery: [{ src: "/images/research/clinical-printing.svg", alt: "Placeholder illustration of clinical 3D printing workflow" }],
    related: ["Bespoke 3D-Printed Assistive Devices"]
  },
  {
    slug: "irish-healthcare-survey",
    section: "research",
    title: "Irish Healthcare Professional Survey",
    summary:
      "Surveying clinicians and healthcare professionals on the perceived benefits and barriers of 3D-printed assistive devices.",
    year: "Current",
    category: "Survey research · Healthcare systems",
    collaborators: "Clinical and research contributors",
    status: "In progress",
    challenge: "Responsible implementation depends on what healthcare professionals need, trust and have time to use.",
    context:
      "The survey supports a broader project on clinical 3D printing by gathering perspectives from the people who would recommend, adapt or supervise use of bespoke devices.",
    role:
      "I contribute to research framing, survey content, analysis planning and translation of responses into implementation questions.",
    process: ["Define respondent groups.", "Ask about benefits, barriers, training, governance and use cases.", "Synthesize themes without overstating findings."],
    technicalDetails: ["Survey methods", "Qualitative theme synthesis", "Healthcare implementation framing"],
    decisions: ["Use the survey to guide practical design questions, not just measure enthusiasm."],
    iterations: ["Question wording and categories are being refined as the wider project develops."],
    lessons: ["A device can be useful and still fail if the clinical workflow around it is unclear."],
    outcome: "Placeholder outcome pending final survey analysis.",
    futureWork: "Add final findings, figures and poster links when available.",
    gallery: [{ src: "/images/research/survey.svg", alt: "Placeholder illustration of a healthcare survey" }],
    related: ["Clinical Application of 3D Printing in Ireland"]
  },
  {
    slug: "neurological-clinic-scheduling",
    section: "research",
    title: "Neurological Clinic Scheduling",
    summary:
      "Developing a scheduling system for multidisciplinary neurological clinics to reduce waiting and improve fairness.",
    year: "Current",
    category: "Operations research · Digital health",
    collaborators: "Neurology and clinical workflow contributors",
    status: "Prototype modelling",
    challenge:
      "Multidisciplinary clinics need to coordinate multiple clinicians, patient pathways, delays, priorities and long travel burdens.",
    context:
      "Scheduling is not just an administrative problem. It affects patient experience, clinician workload and the fairness of access to care.",
    role:
      "I am developing scheduling logic, priority weighting ideas, simulation concepts and ways to reason about delays and clinician availability.",
    process: [
      "Map patient pathways and clinician constraints.",
      "Model priority weighting and waiting-time tradeoffs.",
      "Simulate delays and appointment ordering.",
      "Evaluate fairness and practicality."
    ],
    technicalDetails: ["Scheduling algorithms", "Optimisation", "Priority weighting", "Simple simulation", "Operations research"],
    decisions: ["Keep the model explainable enough for clinical discussion.", "Represent fairness explicitly rather than only minimising total time."],
    iterations: ["Early versions compare simple scheduling rules before more complex optimisation."],
    lessons: ["Healthcare optimisation needs careful definitions of fairness and usability."],
    outcome: "An in-progress scheduling system concept with scope for technical and clinical refinement.",
    futureWork: "Test against realistic clinic scenarios and add clearer evaluation metrics.",
    gallery: [{ src: "/images/research/scheduling.svg", alt: "Placeholder illustration of a clinic scheduling board" }],
    related: ["Clinical Application of 3D Printing in Ireland"]
  }
];

export const projectCaseStudies: CaseStudy[] = [
  {
    slug: "scopelab",
    section: "projects",
    title: "ScopeLab",
    summary: "A wireless debugging system for robotics, co-founded during the Patch summer programme.",
    year: "Patch summer programme",
    category: "Robotics · Embedded systems · Venture building",
    collaborators: "ScopeLab co-founder team through Patch",
    status: "Prototype venture",
    challenge:
      "Robots contain internal communication and health signals that are difficult to monitor while the robot is moving.",
    context:
      "I2C, UART, SPI, voltage rails, power information and event logs can reveal why a robot fails, but wired tools are awkward during live movement.",
    role:
      "My work included embedded systems, firmware, signal processing, software development, graphical user interfaces, PCB-related work, system design, debugging, prototyping and pitching.",
    process: [
      "Define which robot signals were most useful to inspect live.",
      "Prototype capture and wireless transmission concepts.",
      "Build early interfaces for monitoring data on a laptop.",
      "Pitch the system and refine the scope from feedback."
    ],
    technicalDetails: ["Firmware", "Wireless telemetry", "Signal capture", "GUI prototyping", "System architecture", "PCB-related work"],
    decisions: ["Focus on live debugging visibility.", "Present the project honestly as a developing system rather than a finished instrument."],
    iterations: ["Early architecture shifted as we learned which signals were feasible and useful to monitor."],
    lessons: ["Debugging tools need to fit the messy reality of moving robots.", "A venture prototype has to prove the problem as well as the technology."],
    outcome: "A technically grounded prototype direction and a clearer understanding of wireless robotics debugging needs.",
    futureWork: "Improve reliability, validate signal capture, refine hardware and build a more complete desktop monitoring interface.",
    gallery: [{ src: "/images/projects/scopelab.svg", alt: "Placeholder illustration of ScopeLab wireless robotics debugging system" }],
    related: ["Toolbox", "Currently building"]
  },
  {
    slug: "multitasker",
    section: "projects",
    title: "MultiTasker",
    summary: "A 3D-printed modular assistive device that helped shape my interest in engineering for independence.",
    year: "School project",
    category: "Assistive technology · 3D printing",
    collaborators: "Independent project with competition feedback",
    status: "Completed early project",
    challenge: "Design a modular assistive device that could help with practical tasks and communicate the value of accessible engineering.",
    context:
      "MultiTasker connected making, assistive technology and STEM communication, and received recognition including a Boston Scientific Medical Devices Award and SciFest recognition.",
    role: "I designed, prototyped and communicated the project, using 3D printing and iterative design.",
    process: ["Identify practical task needs.", "Design modular components.", "Prototype with 3D printing.", "Present the work through competitions and outreach."],
    technicalDetails: ["3D printing", "Modular mechanical design", "Prototype testing", "Science communication"],
    decisions: ["Use modularity to make the idea easier to adapt.", "Make the design understandable to judges and young STEM audiences."],
    iterations: ["Physical form and attachment ideas changed through prototyping."],
    lessons: ["Assistive design needs humility, testing and clear communication."],
    outcome: "Recognition through medical device and STEM competitions, and a lasting direction toward biomedical engineering.",
    futureWork: "Use the lessons in more rigorous clinical co-design and evaluation.",
    gallery: [{ src: "/images/projects/multitasker.svg", alt: "Placeholder illustration of MultiTasker modular assistive device" }],
    related: ["Bespoke 3D-Printed Assistive Devices"]
  },
  {
    slug: "out-of-this-world-rollercoasters",
    section: "projects",
    title: "Out of This World Rollercoasters",
    summary: "A mathematics and physics project exploring roller-coaster design.",
    year: "School project",
    category: "Mathematics · Physics · Communication",
    collaborators: "Independent project",
    status: "Completed",
    challenge: "Use an engaging physical system to explore mathematical and physics principles.",
    context: "The project won a Maths in Science award and strengthened my interest in technical communication.",
    role: "I developed the project, modelled the ideas and presented the work.",
    process: ["Explore roller-coaster motion.", "Connect the design to mathematics and physics.", "Communicate findings clearly."],
    technicalDetails: ["Mechanics", "Mathematical modelling", "Presentation design"],
    decisions: ["Use a memorable context to make technical ideas more concrete."],
    iterations: ["The explanation was refined for competition presentation."],
    lessons: ["Good engineering communication starts with a clear physical intuition."],
    outcome: "A recognised maths and physics project that fed into later engineering work.",
    futureWork: "Placeholder for images, model notes or presentation materials.",
    gallery: [{ src: "/images/projects/rollercoaster.svg", alt: "Placeholder illustration of a mathematical roller coaster" }],
    related: ["STEM outreach"]
  }
];

export const allCaseStudies = [...researchCaseStudies, ...projectCaseStudies];
