import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { MetricCard } from "@/components/ui/MetricCard";
import { Button } from "@/components/ui/Button";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.description,
    openGraph: {
      title: cs.title,
      description: cs.description,
      type: "article",
      publishedTime: cs.publishedAt,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const sections = [
    { heading: "The Challenge", content: cs.challenge },
    { heading: "The Approach", content: cs.approach },
    { heading: "The Solution", content: cs.solution },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: cs.title, href: `/case-studies/${cs.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={cs.title}
        description={cs.description}
        url={`${SITE.url}/case-studies/${cs.slug}`}
        publishedAt={cs.publishedAt}
      />

      {/* Header */}
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Badge className="border-cobalt/30 bg-cobalt/10 text-stone-300">{cs.category}</Badge>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl">
            {cs.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-400">
            {cs.description}
          </p>
          <div className="mt-8 flex items-baseline gap-3">
            <span
              className="text-5xl font-semibold text-stone-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cs.heroMetric.value}
            </span>
            <span className="text-sm uppercase tracking-wide text-stone-500">
              {cs.heroMetric.label}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <article className="mx-auto max-w-2xl">
          {sections.map((s, i) => (
            <div key={s.heading} className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-2xl font-semibold text-ink">{s.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-ink-light">
                {s.content}
              </p>
            </div>
          ))}

          {/* Results */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
                04
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">The Results</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {cs.results.metrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
            <p className="mt-8 text-[17px] leading-[1.8] text-ink-light">
              {cs.results.narrative}
            </p>
          </div>

          {/* Reflection */}
          <div className="mb-14 border-l-2 border-cobalt bg-cobalt-light p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Reflection</h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-ink-light italic">
              {cs.reflection}
            </p>
          </div>

          <hr className="rule mb-10" />

          <div className="flex gap-4">
            <Button href="/case-studies" variant="secondary">
              All Case Studies
            </Button>
            <Button href="/contact">Get In Touch</Button>
          </div>
        </article>
      </Section>
    </>
  );
}
