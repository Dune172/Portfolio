import { tagforce } from "@/content/case-studies/tagforce";
import { llmCopilots } from "@/content/case-studies/llm-copilots";
import { wcagCompliance } from "@/content/case-studies/wcag-compliance";
import { xapiAnalytics } from "@/content/case-studies/xapi-analytics";
import { lmsAdministration } from "@/content/case-studies/lms-administration";
import { riseCourseBuilder } from "@/content/case-studies/rise-course-builder";
import { storylinePipeline } from "@/content/case-studies/storyline-pipeline";
import type { CaseStudy } from "@/content/case-studies/types";

const caseStudies: CaseStudy[] = [
  llmCopilots,
  tagforce,
  riseCourseBuilder,
  storylinePipeline,
  wcagCompliance,
  xapiAnalytics,
  lmsAdministration,
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.slice(0, 4);
}
