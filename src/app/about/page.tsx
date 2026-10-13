import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { Timeline } from "@/components/Timeline";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Leah Newman: engineering student, researcher, builder and STEM communicator."
};

export default function AboutPage() {
  return (
    <section className="container-page py-14" id="main">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold">I build things that help people do more.</h1>
          <p className="mt-6 text-xl leading-9 text-ink/76">{profile.introduction}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={profile.links.cv} className="button-primary">
              <Download size={17} aria-hidden="true" />
              Download CV placeholder
            </Link>
          </div>
        </div>
        <aside className="panel rounded-lg p-5">
          <div className="flex aspect-[4/5] items-center justify-center rounded-md border border-dashed border-ink/25 bg-white/50 text-center text-sm font-semibold text-ink/55">
            Professional photograph placeholder
          </div>
        </aside>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="font-serif text-3xl font-semibold">Values</h2>
          <ul className="mt-4 grid gap-3">
            {profile.values.map((item) => (
              <li key={item} className="rounded-md border border-ink/10 bg-white/45 p-4">{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-3xl font-semibold">Selected awards</h2>
          <ul className="mt-4 grid gap-2 text-ink/74">
            {profile.awards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-14">
        <h2 className="font-serif text-3xl font-semibold">Timeline</h2>
        <div className="mt-5">
          <Timeline />
        </div>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl font-semibold">Technical interests</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.interests.map((item) => (
            <span key={item} className="rounded-full border border-ink/10 bg-white/45 px-3 py-2 text-sm font-semibold">{item}</span>
          ))}
        </div>
      </section>
    </section>
  );
}
