import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="eyebrow">Portfolio workshop</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          Leah Newman
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-2xl font-semibold text-charcoal sm:text-3xl">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">{profile.supporting}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="#workshop" className="button-primary">
            <ArrowDown size={18} aria-hidden="true" />
            Explore the workshop
          </Link>
          <Link href="/research" className="button-secondary">
            <FileText size={18} aria-hidden="true" />
            View standard portfolio
          </Link>
        </div>
      </div>
      <div className="relative min-h-[420px]" aria-label="Editorial workshop illustration">
        <div className="absolute -right-5 top-8 h-28 w-28 rounded-full bg-coral/25 blur-2xl" />
        <div className="absolute left-8 top-20 h-24 w-24 rounded-full bg-sky/35 blur-2xl" />
        <div className="absolute inset-x-2 bottom-8 h-16 rounded-[50%] bg-blueprint/15 blur-xl" />
        <div className="panel relative mx-auto max-w-lg overflow-hidden rounded-lg p-6">
          <div className="rounded-md border border-blueprint/25 bg-gradient-to-br from-sky/30 via-mint/25 to-duck/20 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="h-3 w-24 rounded-full bg-coral/65" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blueprint">Study bench</span>
            </div>
            <svg viewBox="0 0 420 300" role="img" aria-label="Technical desk with assistive device, circuit board and duck motif" className="h-auto w-full">
              <circle cx="330" cy="68" r="24" fill="#b85d82" opacity=".35" />
              <circle cx="92" cy="64" r="18" fill="#e5b94f" opacity=".45" />
              <rect x="35" y="205" width="350" height="22" rx="4" fill="#9a7a36" opacity=".82" />
              <rect x="62" y="90" width="115" height="95" rx="8" fill="#f7f1e6" stroke="#102033" strokeWidth="3" />
              <path d="M80 122h78M80 145h58M80 168h70" stroke="#3f8f88" strokeWidth="4" strokeLinecap="round" />
              <rect x="214" y="112" width="112" height="72" rx="10" fill="#7fb3cf" stroke="#102033" strokeWidth="3" />
              <path d="M235 136h70M235 158h42" stroke="#f7f1e6" strokeWidth="5" strokeLinecap="round" />
              <circle cx="246" cy="184" r="7" fill="#e5b94f" />
              <circle cx="295" cy="184" r="7" fill="#d96f57" />
              <path d="M112 220c27-22 69-21 94 0" fill="none" stroke="#3f8f88" strokeWidth="7" strokeLinecap="round" />
              <path d="M230 224c9-30 51-35 75-12 10 9 24 8 34 0 6-5 15-1 14 7-3 24-31 43-65 43-34 0-61-16-58-38Z" fill="#e5b94f" stroke="#102033" strokeWidth="4" />
              <circle cx="310" cy="211" r="4" fill="#102033" />
              <path d="M352 214l18-7-15 15Z" fill="#d96f57" stroke="#102033" strokeWidth="3" />
              <path d="M58 58h302M58 58v190M58 248h302" stroke="#102033" strokeWidth="2" opacity=".18" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
