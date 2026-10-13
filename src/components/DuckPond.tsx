"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Cross, Flower2, GraduationCap, Lightbulb, Microchip, MoveUpRight } from "lucide-react";
import { ducks } from "@/data/ducks";

const icons = {
  Cross,
  Circuit: Microchip,
  Book: GraduationCap,
  Flower: Flower2,
  Mic: Lightbulb
};

export function DuckPond() {
  const [selected, setSelected] = useState(ducks[0]);
  const [hovered, setHovered] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const positions = useMemo(
    () => [
      "left-[8%] top-[22%]",
      "left-[27%] top-[47%]",
      "left-[48%] top-[20%]",
      "left-[66%] top-[50%]",
      "left-[80%] top-[27%]"
    ],
    []
  );

  return (
    <section className="container-page py-14" id="ducks" aria-labelledby="duck-heading">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Pick a duck</p>
          <h2 id="duck-heading" className="section-title mt-3">
            A restrained duck-based orientation system.
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink/72">
            Choose a floating duck to see a quick route into Leah&apos;s research, engineering work, studies, ventures or outreach. The links below give the same access without the interaction.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {ducks.map((duck) => (
              <button
                key={duck.id}
                type="button"
                className="rounded-md border border-blueprint/20 bg-white/70 px-3 py-2 text-sm font-bold text-ink hover:bg-sky/20 aria-pressed:border-duck aria-pressed:bg-duck/45"
                aria-pressed={selected.id === duck.id}
                onClick={() => setSelected(duck)}
              >
                {duck.name}
              </button>
            ))}
          </div>
        </div>

        <div className="panel rounded-lg p-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-md border border-blueprint/20 bg-gradient-to-br from-sky/45 via-mint/35 to-duck/20">
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-duck/25 blur-xl" />
            <div className="absolute right-10 top-20 h-28 w-28 rounded-full bg-berry/15 blur-xl" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blueprint/25 via-teal/20 to-transparent" />
            <motion.div
              className="absolute left-1/2 top-4 z-10 h-52 w-1 origin-top rounded-full bg-clay"
              animate={reduceMotion ? undefined : { rotate: hovered ? 16 : -9, x: hovered ? 42 : -24 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              aria-hidden="true"
            >
              <span className="absolute -bottom-2 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-clay bg-duck shadow-soft" />
            </motion.div>
            {ducks.map((duck, index) => {
              const Icon = icons[duck.symbol as keyof typeof icons];
              const active = selected.id === duck.id;
              const evasive = duck.easterEgg && hovered === duck.id && !reduceMotion;
              return (
                <motion.button
                  key={duck.id}
                  type="button"
                  aria-label={`Select ${duck.name}: ${duck.text}`}
                  onClick={() => setSelected(duck)}
                  onFocus={() => setHovered(duck.id)}
                  onBlur={() => setHovered(null)}
                  onMouseEnter={() => setHovered(duck.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`absolute ${positions[index]} min-h-16 min-w-20 rounded-full focus-visible:outline-blueprint`}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: active ? -22 : [0, -5, 0],
                          x: evasive ? -18 : 0,
                          rotate: active ? 8 : [-2, 2, -2],
                          scale: active ? 1.08 : 1
                        }
                  }
                  transition={{ duration: active ? 0.35 : 4 + index * 0.3, repeat: active ? 0 : Infinity }}
                >
                  <DuckShape active={active} />
                  <Icon className="pointer-events-none absolute left-7 top-7 text-ink" size={16} aria-hidden="true" />
                </motion.button>
              );
            })}
          </div>
          <div className="mt-4 rounded-md border border-white/70 bg-gradient-to-br from-white/85 to-duck/20 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blueprint">{selected.name}</p>
            <p className="mt-3 text-lg font-semibold leading-7 text-ink">{selected.easterEgg && selected.id === "outreach" ? selected.easterEgg : selected.text}</p>
            <Link href={selected.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blueprint">
              Visit section <MoveUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DuckShape({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 96 58" className="h-20 w-28 drop-shadow-md" aria-hidden="true">
      <path d="M11 34c7-16 28-18 42-8 8 6 18 6 27-2 5-5 14 0 12 7-5 19-25 27-48 27C22 58 6 49 11 34Z" fill={active ? "#f6cf63" : "#e5b94f"} stroke="#102033" strokeWidth="3" />
      <path d="M22 43c14 8 33 8 52-1" fill="none" stroke={active ? "#b85d82" : "#9a7a36"} strokeWidth="3" strokeLinecap="round" opacity=".65" />
      <circle cx="70" cy="24" r="3.2" fill="#102033" />
      <path d="M86 26l9-4-7 9Z" fill="#b8654b" stroke="#102033" strokeWidth="2" />
      <path d="M31 37c8 4 18 4 28 0" fill="none" stroke="#102033" strokeWidth="2" opacity=".28" />
    </svg>
  );
}
