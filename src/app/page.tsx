import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SKILLS } from "@/lib/constants";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal grain">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr,auto]">
            <div>
              <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-400">
                Learning Architect
              </p>
              <h1 className="animate-fade-up delay-1 mt-5 text-4xl font-semibold leading-[1.1] text-stone-50 sm:text-5xl lg:text-[3.5rem]">
                I architect learning
                <br />
                systems{" "}
                <span className="italic text-stone-400">that scale.</span>
              </h1>
              <p className="animate-fade-up delay-2 mt-6 max-w-lg text-base leading-relaxed text-stone-400">
                At the intersection of instructional design, AI integration,
                and learning operations. I build the tools, processes, and
                experiences that make learning teams 60% more efficient.
              </p>
              <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
                <Button
                  href="/case-studies"
                  className="bg-stone-50 text-charcoal hover:bg-cobalt hover:text-white"
                >
                  See My Work
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="border-stone-600 text-stone-300 hover:border-stone-300 hover:bg-transparent hover:text-stone-100"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Hero metrics — architectural, oversized */}
            <div className="animate-fade-up delay-4 hidden lg:flex lg:flex-col lg:items-end lg:gap-8">
              {[
                { value: "60%", label: "Faster development" },
                { value: "$200K+", label: "Annual savings" },
                { value: "45+", label: "Courses made accessible" },
              ].map((metric) => (
                <div key={metric.label} className="text-right">
                  <p
                    className="text-4xl font-semibold text-stone-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-stone-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <Section>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink lg:text-4xl">
              Results That Speak
            </h2>
          </div>
          <Button href="/case-studies" variant="secondary" className="hidden sm:inline-flex">
            View All
          </Button>
        </div>

        <hr className="rule mt-6 mb-10" />

        <div className="grid gap-px bg-border md:grid-cols-3">
          {featured.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
              <div className="flex h-full flex-col bg-background p-7 transition-colors hover:bg-stone-100">
                <Badge>{cs.category}</Badge>
                <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-cobalt transition-colors leading-snug">
                  {cs.title}
                </h3>
                <div className="mt-auto pt-6">
                  <p
                    className="text-4xl font-semibold text-terra"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cs.heroMetric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted uppercase tracking-wide">
                    {cs.heroMetric.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button href="/case-studies" variant="secondary">
            View All Case Studies
          </Button>
        </div>
      </Section>

      {/* Skills Pillars */}
      <Section className="bg-surface">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink lg:text-4xl">
            Three Pillars of Learning Architecture
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted">
            Where learning science meets technical execution.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {Object.values(SKILLS).map((pillar) => (
            <div key={pillar.title} className="bg-surface p-7">
              <h3 className="text-xl font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {pillar.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-ink-light"
                  >
                    <span className="h-px w-3 bg-terra" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Learning Architect */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <hr className="rule mb-12" />
          <h2 className="text-center text-3xl font-semibold text-ink lg:text-4xl">
            Why &ldquo;Learning Architect&rdquo;?
          </h2>
          <p className="mt-8 text-center text-lg leading-relaxed text-ink-light">
            Learning Architects don&rsquo;t just design courses. They engineer
            the systems, tools, and workflows that make great learning possible
            at scale. I sit at the intersection of design thinking and technical
            execution &mdash; building automation platforms, integrating AI into
            team workflows, and ensuring accessibility isn&rsquo;t an
            afterthought but a foundation.
          </p>
          <div className="mt-10 text-center">
            <Button href="/about">Learn My Story</Button>
          </div>
          <hr className="rule mt-12" />
        </div>
      </Section>
    </>
  );
}
