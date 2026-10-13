import { profile } from "@/data/profile";

export function Timeline() {
  return (
    <ol className="grid gap-4">
      {profile.timeline.map((item) => (
        <li key={`${item.year}-${item.title}`} className="grid gap-3 rounded-lg border border-ink/10 bg-white/45 p-5 sm:grid-cols-[7rem_1fr]">
          <span className="font-serif text-xl font-semibold text-brass">{item.year}</span>
          <div>
            <h3 className="font-bold text-ink">{item.title}</h3>
            <p className="mt-2 leading-7 text-ink/72">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
