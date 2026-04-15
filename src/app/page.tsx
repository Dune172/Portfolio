import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SKILLS } from "@/lib/constants";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { getRecentPosts } from "@/lib/blog";
import { Headshot } from "@/components/home/Headshot";
import { CompanyLogo } from "@/components/home/CompanyLogo";
import {
  ColibriLogo,
  JoyceLogo,
  VoidLogo,
  MeritGamesLogo,
} from "@/components/home/logos";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal grain">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-20 sm:pt-14 sm:pb-20 lg:pt-[75px] lg:pb-[107px]">
          {/* Top: content + portrait, bottom-aligned on a 3-col grid that matches the metrics strip */}
          <div className="grid grid-cols-1 items-end gap-y-12 lg:grid-cols-3 lg:gap-x-10">
            {/* Content — spans cols 1-2 (same footprint as the first two metrics) */}
            <div className="lg:col-span-2">
              <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-400">
                Learning Architect
              </p>
              <h1 className="animate-fade-up delay-1 mt-5 text-4xl font-semibold leading-[1.05] text-stone-50 sm:text-5xl lg:text-[3.75rem]">
                I architect learning
                <br />
                systems{" "}
                <span className="italic text-stone-400 text-shimmer">
                  that scale.
                </span>
              </h1>
              <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-stone-400">
                At the intersection of instructional design, AI integration,
                and learning operations. I build the tools, processes, and
                experiences that make learning teams 60% more efficient.
              </p>
              <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
                <Button
                  href="/experience"
                  className="bg-stone-50 text-charcoal hover:bg-cobalt hover:text-white hover:scale-[1.02] transition-all duration-200"
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

            {/* Portrait — occupies col 3, centered to align with the Courses Made Accessible block below */}
            <div className="animate-fade-up delay-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px]">
                <Headshot />
              </div>
            </div>
          </div>

          {/* Metrics strip — horizontal, full-width, separated by hairline */}
          <div className="animate-fade-up delay-4 mt-16 lg:mt-20">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
            <dl className="mt-8 grid grid-cols-3 gap-6 sm:gap-10">
              {[
                { value: "60%", label: "Faster development" },
                { value: "$200K+", label: "Annual savings" },
                { value: "45+", label: "Courses made accessible" },
              ].map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <p
                      className="text-3xl font-semibold text-stone-100 sm:text-4xl lg:text-[2.5rem] lg:leading-none"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone-500 sm:text-[11px]">
                      {metric.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="border-b border-border bg-surface pt-10 pb-[30px]">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal animation="fade-in">
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
              Organizations I&rsquo;ve worked with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-14">
              {[
                { name: "Colibri Group", Logo: ColibriLogo },
                // Joyce wordmark is stacked (icon + "Joyce" + "UNIVERSITY"), so
                // it needs a bit more vertical room than the others to read.
                { name: "Joyce University", Logo: JoyceLogo, heightClass: "h-[67px]" },
                { name: "The VOID", Logo: VoidLogo },
                { name: "Merit Games", Logo: MeritGamesLogo },
              ].map(({ name, Logo, heightClass }, i) => (
                <Reveal key={name} animation="fade-up" delay={0.08 * i}>
                  <CompanyLogo name={name} heightClass={heightClass}>
                    <Logo />
                  </CompanyLogo>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Case Studies */}
      <Section>
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink lg:text-4xl">
                Results That Speak
              </h2>
            </div>
            <Button
              href="/experience"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              View All
            </Button>
          </div>

          <hr className="rule mt-6 mb-10" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug} delay={0.1 * i} className="h-full">
              <Link href={`/experience/${cs.slug}`} className="group block h-full">
                <div className="card-accent-bar relative flex h-full flex-col border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Badge>{cs.category}</Badge>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-cobalt">
                    {cs.title}
                  </h3>
                  <div className="mt-auto pt-6">
                    <p
                      className="text-4xl font-semibold text-terra"
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

        <div className="mt-6 text-center sm:hidden">
          <Button href="/experience" variant="secondary">
            View All Case Studies
          </Button>
        </div>
      </Section>

      {/* Skills Pillars */}
      <Section className="bg-surface">
        <Reveal>
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
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {Object.values(SKILLS).map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.1 * i}>
              <div className="h-full rounded-lg border border-border bg-background p-7 shadow-sm">
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
                      <span
                        className="h-px w-3 bg-terra"
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What I'm Looking For */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <hr className="rule mb-12" />
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Open to Opportunities
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold text-ink lg:text-4xl">
              What I&rsquo;m Looking For
            </h2>
            <p className="mt-8 text-center text-lg leading-relaxed text-ink-light">
              I&rsquo;m looking for roles where I can combine learning design
              with technical systems &mdash; building the infrastructure that
              makes learning teams more effective, not just designing individual
              courses. I thrive at the intersection of strategy and execution,
              where I can architect solutions, integrate AI thoughtfully, and
              drive measurable outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              {[
                {
                  title: "Learning Architecture",
                  desc: "Designing systems and processes, not just content",
                },
                {
                  title: "AI & Automation",
                  desc: "Strategic integration that sticks, not shiny demos",
                },
                {
                  title: "Cross-Functional Leadership",
                  desc: "Bridging design, engineering, and operations",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex-1 border-l-2 border-cobalt bg-cobalt-light px-5 py-4"
                >
                  <p className="text-sm font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/contact">Let&rsquo;s Talk</Button>
            </div>
            <hr className="rule mt-12" />
          </div>
        </Reveal>
      </Section>

      {/* Blog Preview */}
      <Section className="bg-surface">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
                Thinking
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Recent Writing
              </h2>
            </div>
            <Button
              href="/blog"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              All Posts
            </Button>
          </div>

          <hr className="rule mt-6 mb-8" />
        </Reveal>

        <div className="space-y-0">
          {recentPosts.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <Link href={`/blog/${post.slug}`} className="group block">
                {i > 0 && <hr className="rule" />}
                <div className="flex items-center justify-between gap-6 py-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-cobalt">
                      {post.title}
                    </h3>
                    <p className="mt-1 hidden text-sm text-muted sm:block">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <Badge>{post.category}</Badge>
                    <span
                      className="blog-arrow text-cobalt"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button href="/blog" variant="secondary">
            All Posts
          </Button>
        </div>
      </Section>
    </>
  );
}
