import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EDUCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind the Learning Architect — how accounting, instructional design, and a passion for building tools converge into a unique career bridging learning science and technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl lg:text-[2.75rem]">
            Most instructional designers hand off
            <br className="hidden sm:block" />
            their work to developers.
            <br />
            <span className="italic text-stone-400">
              I build the tools the developers use.
            </span>
          </h1>
        </div>
      </section>

      {/* Narrative */}
      <Section>
        <article className="mx-auto max-w-2xl space-y-7 text-[17px] leading-[1.8] text-ink-light">
          <p>
            My path to learning architecture wasn&rsquo;t linear &mdash; and
            that&rsquo;s exactly why it works. I started with a degree in
            accounting, where I learned to think in systems: how inputs flow
            through processes, where inefficiencies hide, and how to measure
            what matters. That analytical foundation shapes everything I do
            today.
          </p>

          <p>
            When I discovered instructional design, I found the intersection of
            my analytical thinking and my passion for helping people learn. I
            earned my Master&rsquo;s in Instructional Design from Western
            Governors University and dove into building learning experiences
            &mdash; first at Ameritech College, managing an LMS for 2,000+
            users, and then at Colibri, where my role evolved into something the
            industry doesn&rsquo;t quite have a name for yet.
          </p>

          <p>
            At Colibri, I realized the bottleneck in course development
            wasn&rsquo;t talent or effort &mdash; it was the process itself. So
            I started building. TAGFORCE, a proprietary automation platform in
            JavaScript and Python, cut development time by 60% and saves over
            $200K annually. When AI tools emerged, I didn&rsquo;t just adopt
            them &mdash; I designed integration strategies for three teams,
            driving 30&ndash;60% efficiency gains across Design, QA, and Data.
          </p>

          <p>
            I led the accessibility transformation across 45+ course products,
            achieving WCAG 2.1 AAA compliance &mdash; not by treating it as a
            checklist, but by embedding it into the architecture of how courses
            are built.
          </p>

          <hr className="rule my-10" />

          <h2 className="text-2xl font-semibold text-ink">
            What &ldquo;Learning Architect&rdquo; means to me
          </h2>

          <p>
            It means designing not just the learner experience, but the entire
            ecosystem around it: the tools that build it, the processes that
            sustain it, the quality systems that protect it, and the
            accessibility standards that ensure it reaches everyone. I bridge
            learning science and technology because great learning at scale
            requires both.
          </p>

          <hr className="rule my-10" />

          <h2 className="text-2xl font-semibold text-ink">
            Beyond the day job
          </h2>

          <p>
            I took a board game from idea to market launch through Kickstarter,
            managing vendor relationships and international manufacturing
            logistics. I founded Summit Percussion Scholarship, a 501(c)(3)
            helping youth in Utah participate in Drum Corps International.
            I&rsquo;m bilingual in English and Danish. I bring the same energy
            to everything I do: find a system, understand it deeply, and make it
            better.
          </p>
        </article>
      </Section>

      {/* Education */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-ink">Education</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
            {EDUCATION.map((ed) => (
              <div key={ed.degree} className="bg-surface p-6">
                <h3 className="text-lg font-semibold text-ink">{ed.degree}</h3>
                <p className="mt-1 text-sm text-muted">{ed.school}</p>
                <p className="mt-0.5 text-sm text-muted">{ed.period}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/case-studies">See My Work</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
