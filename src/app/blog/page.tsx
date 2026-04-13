import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on learning architecture, AI integration, accessibility at scale, and building the systems that make great learning possible.",
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
            On learning architecture, AI integration, and building systems that
            make great learning possible at scale.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl space-y-0">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              {i > 0 && <hr className="rule" />}
              <div className="py-10">
                <Badge>{post.category}</Badge>
                <h2 className="mt-3 text-xl font-semibold text-ink group-hover:text-cobalt transition-colors sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                <time className="mt-3 block text-xs text-stone-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
