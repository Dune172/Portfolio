import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Renders a post's content array. Each string is one block:
 *   "## Heading"            → h2
 *   "```lang\n...\n```"     → code block
 *   "- one\n- two"          → bullet list (every line starts with "- ")
 *   anything else           → paragraph
 * Inline: `code` and [text](href). Internal hrefs (starting with /) use Link.
 */

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <code
          key={key++}
          className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[0.88em] text-ink"
        >
          {m[1]}
        </code>,
      );
    } else {
      const [label, href] = [m[2], m[3]];
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className="text-cobalt underline underline-offset-4 hover:text-ink">
            {label}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalt underline underline-offset-4 hover:text-ink"
          >
            {label}
          </a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ block }: { block: string }) {
  if (block.startsWith("## ")) {
    return (
      <h2 className="pt-4 text-2xl font-semibold leading-snug text-ink">
        {block.slice(3)}
      </h2>
    );
  }
  if (block.startsWith("```")) {
    const body = block.replace(/^```[^\n]*\n/, "").replace(/\n?```$/, "");
    return (
      <pre className="overflow-x-auto rounded-md border border-border bg-charcoal p-5 text-[13px] leading-relaxed text-stone-200">
        <code className="font-mono">{body}</code>
      </pre>
    );
  }
  const lines = block.split("\n");
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul className="list-disc space-y-2 pl-6 marker:text-cobalt">
        {lines.map((l, i) => (
          <li key={i}>{inline(l.slice(2))}</li>
        ))}
      </ul>
    );
  }
  return <p>{inline(block)}</p>;
}

export function PostBody({ content }: { content: string[] }) {
  return (
    <article className="mx-auto max-w-2xl space-y-7 text-[17px] leading-[1.8] text-ink-light">
      {content.map((block, i) => (
        <Reveal key={i}>
          <Block block={block} />
        </Reveal>
      ))}
    </article>
  );
}
