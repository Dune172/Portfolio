import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={`${SITE.url}/blog/${post.slug}`}
        publishedAt={post.publishedAt}
      />

      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Badge className="border-cobalt/30 bg-cobalt/10 text-stone-300">
            {post.category}
          </Badge>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl">
            {post.title}
          </h1>
          <time className="mt-4 block text-sm text-stone-500">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-2xl space-y-7 text-[17px] leading-[1.8] text-ink-light">
          {post.content.map((paragraph, i) => (
            <Reveal key={i}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </article>

        <div className="mx-auto mt-14 max-w-2xl">
          <hr className="rule mb-10" />
          <Reveal>
            <div className="flex gap-4">
              <Button href="/blog" variant="secondary">
                All Posts
              </Button>
              <Button href="/contact">Get In Touch</Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
