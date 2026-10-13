import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-ink text-paper">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold">{profile.name}</p>
          <p className="mt-3 max-w-2xl text-paper/75">{profile.positioning}</p>
          <p className="mt-4 text-sm text-duck">{profile.playfulLine}</p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <Link href="/research" className="rounded-md border border-paper/20 px-3 py-2 text-sm hover:bg-paper/10">
            Research
          </Link>
          <Link href="/projects" className="rounded-md border border-paper/20 px-3 py-2 text-sm hover:bg-paper/10">
            Projects
          </Link>
          <Link href="/contact" className="rounded-md border border-paper/20 px-3 py-2 text-sm hover:bg-paper/10">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
