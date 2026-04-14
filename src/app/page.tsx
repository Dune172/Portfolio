import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SKILLS } from "@/lib/constants";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { getRecentPosts } from "@/lib/blog";
import { Headshot } from "@/components/home/Headshot";

export default function HomePage() {
  const featured = getFeaturedCaseStudies();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal grain">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr,280px]">
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

            {/* Photo + metrics column */}
            <div className="animate-fade-up delay-4 hidden lg:block">
              <Headshot />
              <div className="flex flex-col items-end gap-6">
                {[
                  { value: "60%", label: "Faster development" },
                  { value: "$200K+", label: "Annual savings" },
                  { value: "45+", label: "Courses made accessible" },
                ].map((metric) => (
                  <div key={metric.label} className="text-right">
                    <p
                      className="text-3xl font-semibold text-stone-300"
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
        </div>
      </section>

      {/* Organizations */}
      <section className="border-b border-border bg-surface py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
              Organizations I&rsquo;ve worked with
            </p>
            {["Colibri Group", "Ameritech College", "The VOID", "CallForce", "Merit Games"].map((org) => (
              <span
                key={org}
                className="text-sm font-semibold text-stone-400 tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {org}
              </span>
            ))}
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

      {/* What I'm Looking For */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <hr className="rule mb-12" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt text-center">
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
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
            {[
              { title: "Learning Architecture", desc: "Designing systems and processes, not just content" },
              { title: "AI & Automation", desc: "Strategic integration that sticks, not shiny demos" },
              { title: "Cross-Functional Leadership", desc: "Bridging design, engineering, and operations" },
            ].map((item) => (
              <div key={item.title} className="bg-background p-5 text-center">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Let&rsquo;s Talk</Button>
          </div>
          <hr className="rule mt-12" />
        </div>
      </Section>

      {/* Blog Preview */}
      <Section className="bg-surface">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
              Thinking
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Recent Writing
            </h2>
          </div>
          <Button href="/blog" variant="secondary" className="hidden sm:inline-flex">
            All Posts
          </Button>
        </div>

        <hr className="rule mt-6 mb-8" />

        <div className="space-y-0">
          {recentPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              {i > 0 && <hr className="rule" />}
              <div className="py-6 flex items-baseline justify-between gap-6">
                <div>
                  <h3 className="text-base font-semibold text-ink group-hover:text-cobalt transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted hidden sm:block">
                    {post.description}
                  </p>
                </div>
                <Badge className="shrink-0">{post.category}</Badge>
              </div>
            </Link>
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
