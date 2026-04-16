import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
            Most learning teams choose between great
            <br className="hidden sm:block" />
            experiences and efficient operations.
            <br />
            <span className="italic text-stone-400">
              I architect systems that deliver both.
            </span>
          </h1>
        </div>
      </section>

      {/* Narrative — impact-first structure */}
      <Section>
        <article className="mx-auto max-w-2xl space-y-7 text-[17px] leading-[1.8] text-ink-light">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink">What I do now</h2>
          </Reveal>

          <Reveal>
            <p>
              At Colibri Group, I lead the design and deployment of learning
              technology systems across course development, quality assurance,
              and content operations. I built TAGFORCE, a custom automation
              platform that reduced course production time by 60% and saves over
              $200K annually. I drove enterprise AI adoption by embedding custom
              LLM copilots across three teams &mdash; Design, QA, and Data
              &mdash; delivering 30&ndash;60% efficiency gains with sustained,
              ongoing usage. I architected a WCAG 2.1 AAA compliance framework
              that shifted accessibility from a post-production checklist to an
              integrated design standard across 45+ courses.
            </p>
          </Reveal>

          <Reveal>
            <p>
              That work sits at the intersection of learning strategy, technology
              development, and organizational change management. I don&rsquo;t
              just build solutions &mdash; I identify operational bottlenecks,
              propose strategy to leadership, build and deploy the tools, train
              the teams, and measure the business impact.
            </p>
          </Reveal>

          <hr className="rule my-10" />

          <Reveal>
            <h2 className="text-2xl font-semibold text-ink">How I got here</h2>
          </Reveal>

          <Reveal>
            <p>
              I started in accounting &mdash; four years of financial systems,
              audit processes, and operational analysis at The VOID. That
              background gave me something most learning designers don&rsquo;t
              have: a systems-thinking lens and an instinct for ROI. When I
              pivoted to instructional design, I brought that operational mindset
              with me.
            </p>
          </Reveal>

          <Reveal>
            <p>
              My M.Ed. in Instructional Design from WGU gave me the pedagogical
              foundation. My first learning role at Ameritech College &mdash;
              administering an LMS serving 2,000+ users &mdash; gave me the
              operational backbone. At Colibri, I found the space to combine
              both: designing the learner experience and engineering the
              ecosystem that makes it possible.
            </p>
          </Reveal>

          <hr className="rule my-10" />

          <Reveal>
            <h2 className="text-2xl font-semibold text-ink">
              What &ldquo;Learning Architect&rdquo; means to me
            </h2>
          </Reveal>

          <Reveal>
            <p>
              It means owning the full stack: learner experience design,
              development tooling, quality systems, accessibility standards, AI
              integration, and the change management required to get teams to
              actually adopt new ways of working. It means being the bridge
              between content strategy and engineering execution. It means
              measuring what matters and building what scales.
            </p>
          </Reveal>

          <hr className="rule my-10" />

          <Reveal>
            <h2 className="text-2xl font-semibold text-ink">How I lead</h2>
          </Reveal>

          <Reveal>
            <p>
              I led the rollout of custom LLM copilots across three teams
              &mdash; not just building the tools, but training each team,
              managing stakeholder expectations, and driving sustained adoption
              through hands-on change management. I developed and delivered the
              training that shifted our accessibility practice from a QA
              checklist to an integrated design standard adopted across 45+
              courses. I mentor teammates on automation workflows and AI
              integration, helping them build the technical confidence to work
              with the tools I create. My leadership style is teach the system,
              not just ship it &mdash; because adoption without understanding
              doesn&rsquo;t stick.
            </p>
          </Reveal>

          <hr className="rule my-10" />

          <Reveal>
            <h2 className="text-2xl font-semibold text-ink">
              Beyond the day job
            </h2>
          </Reveal>

          <Reveal>
            <p>
              I designed, funded, and manufactured a board game through
              Kickstarter &mdash; managing international vendors, production
              logistics, and a public launch. I founded Summit Percussion
              Scholarship, a 501(c)(3) helping youth in Utah participate in Drum
              Corps International. I&rsquo;m bilingual in English and Danish. I
              bring the same energy to everything I do: find a system, understand
              it deeply, and make it better.
            </p>
          </Reveal>
        </article>
      </Section>

      {/* Education */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-semibold text-ink">Education</h2>
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

          <Reveal>
            <div className="mt-10 flex gap-4">
              <Button href="/experience">See My Work</Button>
              <a
                href="/andrew-swan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-stone-300 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-all hover:border-ink hover:bg-ink hover:text-stone-50"
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
