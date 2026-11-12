import Link from "next/link";
import { getPostsBySlugs } from "@/lib/blog";

/** Links to published posts only; renders nothing until one is live. */
export function RelatedPosts({
  slugs,
  heading = "Related writing",
}: {
  slugs?: readonly string[];
  heading?: string;
}) {
  if (!slugs?.length) return null;
  const posts = getPostsBySlugs(slugs);
  if (!posts.length) return null;

  return (
    <div className="mb-14">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cobalt">
        {heading}
      </p>
      <ul className="mt-4 space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex items-baseline justify-between gap-4 border-b border-border pb-3"
            >
              <span className="font-semibold text-ink transition-colors group-hover:text-cobalt">
                {p.title}
              </span>
              <span className="shrink-0 text-cobalt" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
