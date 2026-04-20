import { CaseStudy } from "./types";

export const wcagCompliance: CaseStudy = {
  slug: "wcag-accessibility-at-scale",
  title: "WCAG 2.1 AAA Compliance Across 45+ Course Products",
  category: "Accessibility",
  description:
    "Leading a systematic accessibility transformation that brought 45+ courses to WCAG 2.1 AAA compliance \u2014 not as a bolt-on fix, but as an architectural shift.",
  cardSubtitle:
    "Framework, automated pre-checks, and team training that embedded accessibility into the build pipeline \u2014 structural, not bolted-on. AAA is one level above the AA standard most enterprise L&D programs aspire to.",
  heroMetric: {
    value: "45+",
    label: "Courses AAA Compliant",
  },
  challenge:
    "Colibri had 45+ course products that needed to meet WCAG 2.1 AAA accessibility standards. There was no existing systematic approach \u2014 accessibility was treated as a checklist item at the end of development, which meant issues were caught late, fixes were expensive, and compliance was inconsistent across products. The scale of the problem made a course-by-course retrofit impractical.",
  approach:
    "I reframed accessibility from a compliance task to an architectural concern. Instead of auditing courses after they were built, I designed a framework that embedded accessibility into every phase of development. This included creating a comprehensive checklist system mapped to WCAG 2.1 AAA criteria, building automated pre-checks into our development pipeline, and developing training materials so every team member understood accessibility principles \u2014 not just the rules.",
  solution:
    "The solution had three layers. First, a standards framework that translated WCAG criteria into actionable development guidelines specific to our content types. Second, automated tooling integrated into the build pipeline that caught accessibility violations before human review. Third, a training program that shifted the team's mindset from 'check the box' to 'design for inclusion.' Accessibility became structural, woven into how courses were conceived and built \u2014 not bolted on at the end.",
  results: {
    metrics: [
      { value: "45+", label: "Courses Compliant" },
      { value: "AAA", label: "WCAG 2.1 Level" },
      { value: "Zero", label: "Post-Launch Complaints" },
    ],
    narrative:
      "All 45+ courses achieved WCAG 2.1 AAA compliance. Post-implementation, accessibility complaints dropped to zero. The framework continues to ensure new courses are built accessibly from the start, eliminating costly retrofits. The team now views accessibility as a design constraint rather than a compliance burden.",
  },
  reflection:
    "Accessibility is architecture, not cosmetics. When you treat it as something you add at the end, you'll always be catching up. When you build it into the foundation \u2014 into the templates, the tools, the training, the culture \u2014 it becomes effortless. The most impactful part wasn't the checklist; it was changing how the team thinks about who their learners are.",
  publishedAt: "2024-06-20",
};
