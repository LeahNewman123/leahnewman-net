"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["About", "/about"],
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Ventures", "/ventures"],
  ["Outreach", "/outreach"],
  ["Notes", "/notes"],
  ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">
        Skip to content
      </a>
      <nav className="container-page flex min-h-16 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-serif text-xl font-semibold text-ink" onClick={() => setOpen(false)}>
          Leah Newman
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-semibold text-ink/75 hover:bg-white/70 hover:text-ink">
              {label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex rounded-md border border-ink/15 p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="container-page grid gap-2 border-t border-ink/10 py-3 lg:hidden">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-white/70">
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
