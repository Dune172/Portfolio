import { CaseStudy } from "./types";

export const llmCopilots: CaseStudy = {
  slug: "llm-copilot-integration",
  title: "LLM Copilot Integration: AI Adoption Across Three Teams",
  category: "AI Integration",
  description:
    "Embedded custom LLM copilots across Design (45% gain), QA (60% gain), and Data (30% gain) teams \u2014 championing strategic AI integration while managing organizational change.",
  cardSubtitle:
    "Led platform selection, RAG architecture, prompt governance, and xAPI telemetry for enterprise copilots across Design, QA, and Data teams \u2014 the reference pattern reused for subsequent AI rollouts.",
  heroMetric: {
    value: "60%",
    label: "Highest-team efficiency gain",
  },
  challenge:
    "AI tools were everywhere, but adoption was ad hoc. Some team members were experimenting on their own with mixed results, others were skeptical, and leadership wanted measurable outcomes. The real challenge wasn't the technology \u2014 it was bridging the gap between what AI could theoretically do and what each team actually needed in their daily workflows.",
  approach:
    "I spent time embedded in each team \u2014 Design, QA, and Data \u2014 documenting their workflows and identifying where AI could add genuine value versus where it would just add noise. For each team, I mapped out which tasks required deep human judgment (leave alone), which were repetitive but context-dependent (copilot-assisted), and which were purely mechanical (fully automate). This framework prevented the common mistake of applying AI indiscriminately.",
  solution:
    "I built custom copilot integrations tailored to each team's specific workflows and skill levels. For the Design team, this meant content drafting assistants that understood our templates and standards. For QA, automated first-pass review tools that flagged issues before human review. For the Data team, query generation and reporting assistance. Each integration was designed to augment existing skills, not replace them \u2014 the team members stayed in control of quality decisions.",
  results: {
    metrics: [
      { value: "60%", label: "Highest-team efficiency gain" },
      { value: "3 Teams", label: "Successfully Adopted AI" },
      { value: "Sustained", label: "Ongoing Usage & Impact" },
    ],
    narrative:
      "Efficiency gains reached 60% on the highest-adoption team, with meaningful lift across the other two. More importantly, adoption stuck \u2014 these weren't tools that got used for a week and abandoned. The team-specific approach meant each group got exactly what they needed, building genuine trust in AI-assisted workflows.",
  },
  reflection:
    "The organizational change management side of AI adoption is harder than the technical side. The teams that adopted most successfully weren't the most technically skilled \u2014 they were the ones where I invested the most time understanding their pain points first. AI integration is a design problem, not a technology problem.",
  publishedAt: "2024-03-10",
};
