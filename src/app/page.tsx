import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { getRecentPosts } from "@/lib/blog";
import { Headshot } from "@/components/home/Headshot";
import { CompanyLogo } from "@/components/home/CompanyLogo";
import {
  ColibriLogo,
  JoyceLogo,
  VoidLogo,
  MeritGamesLogo,
  DrumlineLogo,
  D2RRandomizerLogo,
  SummitPercussionLogo,
  OnCourseLearningLogo,
} from "@/components/home/logos";

export const metadata: Metadata = {
  title:
    "Andrew Swan — Learning Technology Architect | Strategy, Automation & AI",
  description:
    "Learning Technology Architect who designs learning ecosystems, builds custom automation platforms, and leads AI integration across enterprise teams. Driving 60% efficiency gains and $200K+ annual savings through systems thinking and platform strategy.",
};

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
                Instructional design. AI integration. Learning operations. I
                design the strategy, build the tools, and lead the adoption
                that makes learning teams 60% more efficient &mdash; with
                $200K+ in annual savings to prove it.
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
                { name: "OnCourse Learning", Logo: OnCourseLearningLogo },
                { name: "The VOID", Logo: VoidLogo },
                { name: "SHHS Drumline", Logo: DrumlineLogo },
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

      {/* Beyond the Day Job */}
      <Section className="bg-surface">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
            Beyond the Day Job
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink lg:text-4xl">
            Side projects that sharpen the craft
          </h2>
          <hr className="rule mt-6 mb-10" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Merit Games",
              Logo: MeritGamesLogo,
              copy: "Designing the systems and player-facing rules for a tabletop studio — the same product instincts, applied to cardboard and dice.",
              href: "https://linktr.ee/meritgames",
            },
            {
              name: "Summit Percussion Scholarship",
              Logo: SummitPercussionLogo,
              copy: "A 501(c)(3) I founded, fund, and run — helping Nebo School District percussionists pay their DCI tuition.",
              href: "https://nebopercussion.com/summit-percussion-scholarship/",
            },
            {
              name: "D2R Randomizer",
              Logo: D2RRandomizerLogo,
              copy: "A from-scratch randomizer and modding toolkit for Diablo II: Resurrected — a reverse-engineering and tooling project I ship for fun.",
              href: "https://d2rrandomizer.com",
            },
          ].map(({ name, Logo, copy, href }, i) => {
            const LogoSlot = (
              <div className="flex h-[62px] items-center opacity-90">
                <Logo />
              </div>
            );
            const NameText = (
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 transition-colors group-hover:text-cobalt group-focus-visible:text-cobalt">
                {name}
              </p>
            );
            return (
              <Reveal key={name} delay={0.08 * i}>
                <div className="flex h-full flex-col">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block outline-none"
                      aria-label={`${name} (opens in a new tab)`}
                    >
                      {LogoSlot}
                    </a>
                  ) : (
                    LogoSlot
                  )}
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {copy}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block self-start outline-none"
                    >
                      {NameText}
                    </a>
                  ) : (
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      {name}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Blog Preview */}
      <Section>
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
                    <p className="mt-1 text-sm text-muted max-sm:hidden line-clamp-1">
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
