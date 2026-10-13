"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BookOpen, Box, CircuitBoard, ClipboardList, Flower2, Hammer, Medal, Mic, Printer, Trash2 } from "lucide-react";
import { shelfItems } from "@/data/shelfItems";

const objectIcons = {
  book: BookOpen,
  device: Printer,
  circuit: CircuitBoard,
  board: ClipboardList,
  flower: Flower2,
  medal: Medal,
  mic: Mic,
  toolbox: Hammer,
  folder: Box,
  bin: Trash2
};

const objectStyles = {
  book: "bg-blueprint/18 text-blueprint border-blueprint/25",
  device: "bg-duck/30 text-ink border-duck/55",
  circuit: "bg-teal/18 text-teal border-teal/30",
  board: "bg-sky/24 text-blueprint border-sky/35",
  flower: "bg-berry/16 text-berry border-berry/30",
  medal: "bg-brass/20 text-brass border-brass/35",
  mic: "bg-coral/18 text-coral border-coral/30",
  toolbox: "bg-clay/16 text-clay border-clay/30",
  folder: "bg-mint/30 text-teal border-mint/50",
  bin: "bg-lilac/18 text-lilac border-lilac/30"
};

export function InteractiveShelf() {
  const [active, setActive] = useState(shelfItems[1]);
  const reduceMotion = useReducedMotion();

  return (
    <section className="container-page py-16" id="workshop" aria-labelledby="shelf-heading">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow">Workshop cabinet</p>
        <h2 id="shelf-heading" className="section-title mt-3">
          Open the objects behind the portfolio.
        </h2>
        <p className="mt-4 text-lg leading-8 text-ink/72">
          Each object is a normal link and a keyboard-operable control. On smaller screens, the cabinet becomes a clean card grid.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="hidden rounded-lg border border-white/70 bg-gradient-to-br from-parchment/85 via-mint/25 to-sky/25 p-6 shadow-color md:block">
          <div className="grid grid-cols-5 gap-4 border-b-8 border-brass/70 pb-7">
            {shelfItems.slice(0, 5).map((item) => (
              <ShelfButton key={item.id} item={item} active={active.id === item.id} onSelect={() => setActive(item)} reduceMotion={reduceMotion} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4 border-b-8 border-brass/70 py-7">
            {shelfItems.slice(5).map((item) => (
              <ShelfButton key={item.id} item={item} active={active.id === item.id} onSelect={() => setActive(item)} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
        <div className="grid gap-3 md:hidden">
          {shelfItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="rounded-lg border border-white/70 bg-white/70 p-4 text-left aria-pressed:bg-duck/25"
              onClick={() => setActive(item)}
              aria-pressed={active.id === item.id}
            >
              <span className="font-serif text-xl font-semibold">{item.title}</span>
              <span className="mt-2 block text-sm leading-6 text-ink/70">{item.summary}</span>
            </button>
          ))}
        </div>
        <aside className="panel rounded-lg bg-gradient-to-br from-white/80 via-duck/10 to-sky/20 p-6" aria-live="polite">
          <p className="eyebrow">Selected object</p>
          <h3 className="mt-3 font-serif text-3xl font-semibold text-ink">{active.title}</h3>
          <p className="mt-4 leading-8 text-ink/72">{active.summary}</p>
          <Link href={active.href} className="button-primary mt-6">
            Explore <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}

function ShelfButton({
  item,
  active,
  onSelect,
  reduceMotion
}: {
  item: (typeof shelfItems)[number];
  active: boolean;
  onSelect: () => void;
  reduceMotion: boolean | null;
}) {
  const Icon = objectIcons[item.object as keyof typeof objectIcons];
  const objectStyle = objectStyles[item.object as keyof typeof objectStyles];
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={`group flex min-h-36 flex-col items-center justify-end rounded-md border p-3 text-center ${objectStyle} ${
        active ? "ring-4 ring-blueprint/25 brightness-105" : "hover:bg-white/70"
      } ${item.featured ? "ring-2 ring-duck/60" : ""}`}
      aria-label={`${item.title}: ${item.summary}`}
      aria-pressed={active}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileFocus={reduceMotion ? undefined : { y: -6 }}
    >
      <Icon size={item.featured ? 58 : 44} strokeWidth={1.8} className="mb-4 transition group-hover:scale-105" aria-hidden="true" />
      <span className="rounded bg-white/60 px-2 py-1 text-sm font-bold leading-5 text-ink">{item.title}</span>
    </motion.button>
  );
}
