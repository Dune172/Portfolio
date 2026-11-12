import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PROJECTS } from "@/content/projects";
import { getPostsBySlugs } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software I design and build outside my day job: an AI writing coach with a confidentiality gate, a seeded Diablo II randomizer, tournament software built from a rulebook, and a marching band drill editor.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
      />

      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            Projects
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-50 sm:text-4xl">
            Built on my own time,{" "}
            <span className="italic text-stone-400">the same way.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">
            Side projects where I try the ideas from my day job end to end:
            AI with guardrails, rules turned into tested code, and tools people
            can trust with their work.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-16">
          {PROJECTS.map((p) => {
            const posts = getPostsBySlugs(p.relatedPosts ?? []);
            return (
              <Reveal key={p.slug}>
                <article id={p.slug} className="scroll-mt-24">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{p.status}</Badge>
                    <span className="text-xs uppercase tracking-[0.15em] text-muted">
                      {p.stack.join(" · ")}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-cobalt"
                      >
                        {p.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      p.name
                    )}
                  </h2>
                  <p className="mt-1 text-base text-muted">{p.tagline}</p>

                  <p className="mt-5 text-[17px] leading-[1.8] text-ink-light">
                    {p.summary}
                  </p>

                  <div className="mt-6 border-l-2 border-cobalt bg-cobalt-light p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt">
                      Why it matters
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-light">
                      {p.whyItMatters}
                    </p>
                  </div>

                  <ul className="mt-6 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-ink-light marker:text-cobalt">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  {(posts.length > 0 || p.href) && (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-cobalt hover:text-ink"
                        >
                          Visit {p.href.replace("https://", "")} &rarr;
                        </a>
                      )}
                      {posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="font-semibold text-cobalt hover:text-ink"
                        >
                          Read: {post.title} &rarr;
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
                <hr className="rule mt-16" />
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-4 flex max-w-4xl gap-4">
          <Button href="/experience" variant="secondary">
            Work Case Studies
          </Button>
          <Button href="/contact">Get In Touch</Button>
        </div>
      </Section>
    </>
  );
}
