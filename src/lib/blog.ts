import { whyAutomation } from "@/content/blog/why-learning-teams-need-automation";
import { accessibilityArchitecture } from "@/content/blog/accessibility-as-architecture";
import { aiAdoption } from "@/content/blog/ai-adoption-design-problem";
import { structureNeverWording } from "@/content/blog/structure-never-wording";
import { riseFromWord } from "@/content/blog/rise-360-from-word-storyboards";
import { storylinePython } from "@/content/blog/automating-storyline-360-with-python";
import { confidentialityGate } from "@/content/blog/confidentiality-gate-for-ai-drafts";
import { seededRandomness } from "@/content/blog/seeded-randomness";
import { rulebookToCode } from "@/content/blog/rulebook-to-tested-code";
import type { BlogPost } from "@/content/blog/types";

/**
 * Every post, published or scheduled. A post goes live on its publishedAt
 * date (America/Denver). Pages are built statically, so a scheduled post
 * appears on the first build on or after that date. The GitHub Action in
 * .github/workflows/publish-scheduled-posts.yml pushes a commit on each
 * publish date so Hostinger rebuilds that morning.
 */
const allPosts: BlogPost[] = [
  structureNeverWording,
  riseFromWord,
  storylinePython,
  confidentialityGate,
  seededRandomness,
  rulebookToCode,
  aiAdoption,
  accessibilityArchitecture,
  whyAutomation,
];

/** Today's date in Denver as YYYY-MM-DD. */
export function todayInDenver(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Denver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isPublished(post: BlogPost, today = todayInDenver()): boolean {
  return post.publishedAt <= today;
}

/** Published posts, newest first. */
export function getAllPosts(): BlogPost[] {
  const today = todayInDenver();
  return allPosts
    .filter((p) => isPublished(p, today))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Only finds published posts, so a scheduled slug 404s until its date. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}

/** Published posts that link to a given project or case study. */
export function getPostsBySlugs(slugs: readonly string[]): BlogPost[] {
  return getAllPosts().filter((p) => slugs.includes(p.slug));
}

/** Rough reading time at 230 words a minute. */
export function readingMinutes(post: BlogPost): number {
  const words = post.content.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

/** Every post including scheduled ones; for the publish scheduler and tests. */
export function getScheduledPosts(): BlogPost[] {
  const today = todayInDenver();
  return allPosts
    .filter((p) => !isPublished(p, today))
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
}

/** "February 20, 2025". Formats in UTC so a YYYY-MM-DD date never shifts a day. */
export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
