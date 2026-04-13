import { whyAutomation } from "@/content/blog/why-learning-teams-need-automation";
import { accessibilityArchitecture } from "@/content/blog/accessibility-as-architecture";
import { aiAdoption } from "@/content/blog/ai-adoption-design-problem";
import type { BlogPost } from "@/content/blog/types";

const posts: BlogPost[] = [
  aiAdoption,
  accessibilityArchitecture,
  whyAutomation,
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return posts.slice(0, count);
}
