import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects with quantified outcomes — from automation platforms saving $200K+ to AI integration driving 30-60% efficiency gains across teams.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            Case Studies
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-50 sm:text-4xl">
            Real Projects. <span className="italic text-stone-400">Real Results.</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-400">
            Each project follows the same arc: identify the systemic problem,
            architect the solution, measure the impact.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-0">
          {caseStudies.map((cs, i) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group block">
              {i > 0 && <hr className="rule" />}
              <div className="grid gap-6 py-10 md:grid-cols-[1fr,200px] md:items-center">
                <div>
                  <Badge>{cs.category}</Badge>
                  <h2 className="mt-3 text-xl font-semibold text-ink group-hover:text-cobalt transition-colors sm:text-2xl">
                    {cs.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted max-w-xl">
                    {cs.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <p
                    className="text-4xl font-semibold text-terra sm:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cs.heroMetric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {cs.heroMetric.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
