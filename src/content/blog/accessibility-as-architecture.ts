import { BlogPost } from "./types";

export const accessibilityArchitecture: BlogPost = {
  slug: "accessibility-as-architecture-not-checklist",
  title: "Accessibility as Architecture, Not Checklist",
  description:
    "Why bolting accessibility onto finished courses will always fail \u2014 and how to embed it into the foundation of your development process.",
  category: "Accessibility",
  content: [
    "Most organizations treat accessibility like a final exam. Build the course, then run it through a checker, fix what\u2019s flagged, and ship. The result is predictable: expensive retrofits, inconsistent compliance, and a team that sees accessibility as a burden rather than a design constraint.",
    "When I inherited the accessibility initiative at Colibri \u2014 45+ courses that needed to meet WCAG 2.1 AAA \u2014 I knew the audit-and-fix approach wouldn\u2019t scale. The math didn\u2019t work. Retrofitting one course took weeks. We needed a fundamentally different approach.",
    "The shift was reframing accessibility from a compliance task to an architectural concern. Just like you don\u2019t add the foundation to a building after the walls are up, you shouldn\u2019t add accessibility after the course is built. It needs to be structural.",
    "I designed a three-layer system. Layer one: a standards framework that translated WCAG criteria into actionable guidelines specific to our content types. Not \u2018ensure sufficient contrast\u2019 but \u2018use these specific color pairings for these content elements.\u2019 Specific, actionable, impossible to misinterpret.",
    "Layer two: automated tooling integrated into the build pipeline. Before any course reached human review, it passed through automated checks that caught the mechanical violations \u2014 missing alt text, contrast failures, heading hierarchy issues. This freed up QA reviewers to focus on the judgment calls that machines can\u2019t make.",
    "Layer three: training that changed how the team thinks. Not \u2018here are the rules\u2019 but \u2018here\u2019s who your learners are and why this matters.\u2019 When people understand the why, they start catching accessibility issues that no checklist covers.",
    "The result: 45+ courses at AAA compliance with zero post-launch complaints. But more importantly, new courses are now built accessibly from the start. The framework eliminated the retrofit cycle entirely.",
    "The lesson applies beyond accessibility. Any quality concern that gets treated as a bolt-on will always be expensive and inconsistent. The alternative is to make it architectural \u2014 embedded into templates, tools, training, and culture. When you do that, quality becomes effortless instead of exhausting.",
  ],
  publishedAt: "2025-03-15",
};
