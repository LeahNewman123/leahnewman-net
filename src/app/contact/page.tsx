import type { Metadata } from "next";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Leah Newman for research, speaking and collaboration opportunities."
};

export default function ContactPage() {
  return (
    <section className="container-page py-14" id="main">
      <div className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold">Research, speaking and collaboration conversations are welcome.</h1>
        <p className="mt-5 text-xl leading-9 text-ink/72">
          This page intentionally uses placeholders until final public links are ready. It should not display private personal information.
        </p>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-2">
        <ContactItem icon={<Mail size={20} />} label="Email" value={profile.email} />
        <ContactItem icon={<Linkedin size={20} />} label="LinkedIn" value={profile.links.linkedin} />
        <ContactItem icon={<Github size={20} />} label="GitHub" value={profile.links.github} />
        <Link href={profile.links.cv} className="rounded-lg border border-ink/10 bg-white/55 p-5 font-bold hover:bg-white">
          <Download className="mb-4" size={22} aria-hidden="true" />
          Download CV placeholder
        </Link>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-white/55 p-5">
      <div className="text-blueprint" aria-hidden="true">{icon}</div>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-brass">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}
