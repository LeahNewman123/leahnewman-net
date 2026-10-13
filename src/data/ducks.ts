export type DuckArea = "research" | "engineering" | "scholar" | "founder" | "outreach";

export const ducks = [
  {
    id: "research",
    area: "research" as DuckArea,
    name: "Research duck",
    symbol: "Cross",
    href: "/research",
    text: "I research assistive technology and digital systems for people living with neurological disabilities."
  },
  {
    id: "engineering",
    area: "engineering" as DuckArea,
    name: "Engineering duck",
    symbol: "Circuit",
    href: "/projects",
    text: "I build hardware, embedded systems and robotics tools, including ScopeLab."
  },
  {
    id: "scholar",
    area: "scholar" as DuckArea,
    name: "Scholar duck",
    symbol: "Book",
    href: "/about",
    text: "I study Engineering at Trinity College Dublin and am a Trinity Foundation Scholar and Naughton Scholar."
  },
  {
    id: "founder",
    area: "founder" as DuckArea,
    name: "Founder duck",
    symbol: "Flower",
    href: "/ventures",
    text: "I build technical and creative ventures, from ScopeLab to Leah's Corsages."
  },
  {
    id: "outreach",
    area: "outreach" as DuckArea,
    name: "Outreach duck",
    symbol: "Mic",
    href: "/outreach",
    text: "I help more young people build, test and explore ideas through STEM programmes and mentoring.",
    easterEgg: "Debugging is rarely that straightforward."
  }
];
