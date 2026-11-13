import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { LEADERSHIP, type LeadershipItem } from "@/content/leadership";

function Metrics({ item }: { item: LeadershipItem }) {
  return (
    <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-border py-4">
      {item.metrics.map((m) => (
        <div key={m.label}>
          <dt className="sr-only">{m.label}</dt>
          <dd className="text-2xl font-semibold leading-none text-ink">{m.value}</dd>
          <dd className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-muted">
            {m.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Header({ item }: { item: LeadershipItem }) {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
        {item.kind}
      </p>
      <h3 className="mt-2 text-xl font-semibold leading-snug text-ink">{item.role}</h3>
      <p className="text-sm text-muted">{item.where}</p>
    </>
  );
}

/** Detailed version for the About page: every item with its points. */
export function LeadershipDetail() {
  return (
    <div className="not-prose space-y-6">
      {LEADERSHIP.map((item) => (
        <Reveal key={item.id}>
          <section
            id={`lead-${item.id}`}
            className="rounded-md border border-border bg-white/60 p-6 sm:p-7"
          >
            <Header item={item} />
            <Metrics item={item} />
            <p className="mt-4 text-[16px] leading-relaxed text-ink-light">{item.summary}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-light marker:text-cobalt">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        </Reveal>
      ))}
    </div>
  );
}

/** Compact grid for the home page, linking to the detail on About. */
export function LeadershipSummary() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {LEADERSHIP.map((item, i) => (
        <Reveal key={item.id} delay={i * 0.06} className="h-full">
          <Link
            href={`/about#lead-${item.id}`}
            className="group block h-full rounded-md border border-border bg-white/60 p-6 transition-colors hover:border-cobalt"
          >
            <Header item={item} />
            <Metrics item={item} />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-light">{item.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-cobalt group-hover:text-ink">
              Details &rarr;
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
