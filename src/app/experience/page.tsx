import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/lib/constants";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Experience & Skills",
  description:
    "Career timeline and technical expertise — from building automation platforms to leading AI integration across learning teams.",
};

export default function ExperiencePage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            Experience
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-50 sm:text-4xl">
            Career Timeline
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-400">
            From accounting systems to learning systems &mdash; a career built
            on making complex things work better.
          </p>
        </div>
      </section>

      <Section>
        {/* Timeline */}
        <div className="mx-auto max-w-2xl space-y-0">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role} delay={0.08 * i}>
              <div>
                {i > 0 && <hr className="rule my-0" />}
                <div className="py-10">
                  <h2 className="text-xl font-semibold text-ink">
                    {job.role}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {job.officialTitle
                      ? `${job.officialTitle}, ${job.company}`
                      : job.company}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-cobalt">
                    {job.location} &middot; <time>{job.period}</time>
                  </p>
                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((h) => {
                      const key = typeof h === "string" ? h : h.text;
                      return (
                        <li
                          key={key}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-light"
                        >
                          <span
                            className="mt-[9px] h-px w-3 shrink-0 bg-terra"
                            aria-hidden="true"
                          />
                          {typeof h === "string" ? (
                            h
                          ) : (
                            <Link
                              href={h.href}
                              className="underline decoration-terra/40 decoration-1 underline-offset-4 transition-colors hover:text-cobalt hover:decoration-cobalt"
                            >
                              {h.text}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills Matrix */}
      <Section className="bg-surface">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Skills & Tools
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.values(SKILLS).map((group, i) => (
            <Reveal key={group.title} delay={0.1 * i}>
              <div className="h-full rounded-lg border border-border bg-background p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional tools */}
        <Reveal>
          <div className="mt-6 rounded-lg border border-border bg-background p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">
              Platforms & Tools
            </h3>
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {[
                "Canvas LMS",
                "Jira",
                "Confluence",
                "Power BI",
                "Tableau",
                "Figma",
                "Articulate Storyline",
                "Articulate Rise",
                "Adobe Photoshop",
                "Adobe Premiere Pro",
                "Adobe Illustrator",
                "Workday",
              ].map((tool) => (
                <li key={tool}>
                  <Badge>{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Education */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Credentials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Education</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.degree} delay={0.1 * i}>
                <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-ink">
                    {ed.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                  <p className="mt-0.5 text-sm text-muted">{ed.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-surface">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Case Studies
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Real Projects.{" "}
              <span className="italic text-muted">Real Results.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted">
              Each project follows the same arc: identify the systemic problem,
              architect the solution, measure the impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-0">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={0.08 * i}>
              <Link
                href={`/experience/${cs.slug}`}
                className="group block"
              >
                {i > 0 && <hr className="rule" />}
                <div className="grid gap-6 py-10 md:grid-cols-[1fr,200px] md:items-center">
                  <div>
                    <Badge>{cs.category}</Badge>
                    <h3 className="mt-3 text-xl font-semibold text-ink transition-colors group-hover:text-cobalt sm:text-2xl">
                      {cs.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
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
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
