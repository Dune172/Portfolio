import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { formatPostDate, getAllPosts, readingMinutes } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on AI enablement, process automation, and learning operations: how to make AI and automation work inside real teams, with the tooling and training that make it stick.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-50 sm:text-4xl">
            Thinking Out Loud
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-400">
            On AI enablement, process automation, and the learning that makes
            new tools stick.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl space-y-0">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {i > 0 && <hr className="rule" />}
                <div className="py-10">
                  <Badge>{post.category}</Badge>
                  <h2 className="mt-3 text-xl font-semibold text-ink transition-colors group-hover:text-cobalt sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <time className="mt-3 block text-xs text-stone-400">
                    {formatPostDate(post.publishedAt)} &middot; {readingMinutes(post)} min read
                  </time>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
