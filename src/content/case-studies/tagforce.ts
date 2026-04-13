import { CaseStudy } from "./types";

export const tagforce: CaseStudy = {
  slug: "tagforce-automation-platform",
  title: "TAGFORCE: Building an Automation Platform That Saved $200K+ Annually",
  category: "Automation",
  description:
    "How a proprietary automation tool transformed course development workflows, cutting production time by 60% and saving over $200K per year.",
  heroMetric: {
    value: "60%",
    label: "Reduction in Development Time",
  },
  challenge:
    "Course development at Colibri was slow, manual, and error-prone. Teams spent excessive hours on repetitive tasks \u2014 template setup, content assembly, formatting checks, and publishing workflows. Each course followed a similar structure, yet every build started nearly from scratch. The bottleneck wasn't talent or effort; it was the process itself.",
  approach:
    "I started by mapping every step of the production workflow, timing each phase and identifying where human judgment was essential versus where tasks were purely mechanical. The pattern was clear: roughly 60% of development time went to work that could be systematized. I chose JavaScript and Python for the stack \u2014 JavaScript for its DOM manipulation strengths (critical for content assembly) and Python for data processing and QA automation. I built iteratively, shipping each module to the team for feedback before moving to the next.",
  solution:
    "TAGFORCE is a proprietary internal automation platform that handles template generation, content assembly, formatting standardization, QA pre-checks, and publishing workflows. It doesn't replace the instructional design process \u2014 it eliminates the mechanical overhead around it. Designers now focus on learning experience decisions while TAGFORCE handles the build pipeline. The tool integrates directly into our existing workflow, requiring minimal behavior change from the team.",
  results: {
    metrics: [
      { value: "60%", label: "Faster Development" },
      { value: "$200K+", label: "Annual Cost Savings" },
      { value: "Multi-Team", label: "Adoption Across Org" },
    ],
    narrative:
      "TAGFORCE cut average course development time by 60% and saves over $200K annually in production costs. It was adopted across multiple teams and became a core part of Colibri's development infrastructure. Beyond the numbers, it shifted the team's focus from production mechanics to learning design quality.",
  },
  reflection:
    "Building tools for your own team teaches you what no vendor product can. When you sit in the same workflows you're automating, you catch edge cases that outside developers miss. The biggest lesson: automation isn't about replacing people \u2014 it's about freeing them to do the work that actually requires human judgment.",
  publishedAt: "2024-01-15",
};
