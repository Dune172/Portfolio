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

      {/* Narrative — restructured to lead with impact */}
      <Section>
        <article className="mx-auto max-w-2xl space-y-7 text-[17px] leading-[1.8] text-ink-light">
          <p>
            I built an automation platform that cut course development time by
            60% and saves over $200K annually. I integrated AI copilots across
            three teams, driving 30&ndash;60% efficiency gains. I led an
            accessibility transformation across 45+ courses to WCAG 2.1 AAA
            compliance &mdash; with zero post-launch complaints. And I did it
            all while serving as the cross-functional bridge between content,
            engineering, and QA.
          </p>

          <p>
            That&rsquo;s the highlight reel. Here&rsquo;s the path that made
            it possible.
          </p>

          <hr className="rule my-10" />

          <h2 className="text-2xl font-semibold text-ink">
            The unlikely origin
          </h2>

          <p>
            I started with a degree in accounting, where I learned to think in
            systems: how inputs flow through processes, where inefficiencies
            hide, and how to measure what matters. That analytical foundation
            shapes everything I do today.
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
            JavaScript and Python. LLM-based copilots tailored to each
            team&rsquo;s workflows. An accessibility framework that made
            compliance structural rather than cosmetic.
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

          <div className="mt-10 flex gap-4">
            <Button href="/case-studies">See My Work</Button>
            <a
              href="/andrew-swan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] border border-stone-300 text-ink hover:border-ink hover:bg-ink hover:text-stone-50 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
