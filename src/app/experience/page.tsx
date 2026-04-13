import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE, SKILLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Experience & Skills",
  description:
    "Career timeline and technical expertise — from building automation platforms to leading AI integration across learning teams.",
};

export default function ExperiencePage() {
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
            <div key={job.role}>
              {i > 0 && <hr className="rule my-0" />}
              <div className="py-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="text-xl font-semibold text-ink">
                    {job.role}
                  </h2>
                  <span className="text-sm text-muted">
                    {job.company}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-cobalt">
                  {job.location} &middot; <time>{job.period}</time>
                </p>
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-light"
                    >
                      <span
                        className="mt-[9px] h-px w-3 shrink-0 bg-terra"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Matrix */}
      <Section className="bg-surface">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Skills & Tools
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {Object.values(SKILLS).map((group) => (
            <div key={group.title} className="bg-surface p-7">
              <h3 className="text-lg font-semibold text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools */}
        <div className="mt-px bg-surface border border-border p-7">
          <h3 className="text-lg font-semibold text-ink">
            Platforms & Tools
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Articulate Storyline",
              "Articulate Rise",
              "Adobe Creative Suite",
              "Jira",
              "Confluence",
              "Canvas LMS",
              "Workday",
              "Git",
              "HTML & CSS",
              "Power BI",
              "Tableau",
            ].map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
