export const SITE = {
  name: "Andrew Swan",
  title: "Andrew Swan — Learning Architect",
  description:
    "Learning Technology Architect designing learning ecosystems through systems thinking, platform strategy, and AI integration. Building custom automation tools, leading cross-functional adoption, and driving $200K+ annual savings and 60% efficiency gains across enterprise learning operations.",
  url: "https://andrewmswan.com",
  email: "andrewmswan@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrew-swan-ab6265104/",
  location: "Spanish Fork, Utah",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SKILLS = {
  strategy: {
    title: "Learning Strategy & Design",
    description:
      "Assessing needs, architecting curricula, and measuring learning outcomes.",
    items: [
      "Needs Assessment",
      "Learning Analytics",
      "Curriculum Architecture",
      "ADDIE & SAM",
      "Agile Development",
      "Backward Design",
      "Universal Design for Learning",
      "Assessment Design",
      "Blended Learning Design",
      "Microlearning",
      "Kirkpatrick Levels 1\u20134",
      "Learning Impact Measurement",
    ],
  },
  technology: {
    title: "Technology & Development",
    description:
      "Building and optimizing the technical systems that deliver learning at scale.",
    items: [
      "JavaScript & Python",
      "Node.js",
      "HTML & CSS",
      "xAPI & SCORM",
      "LTI 1.3",
      "cmi5",
      "LRS (Learning Record Store)",
      "API Integration",
      "LMS Administration",
      "Custom Tool Development",
      "Automated Testing",
      "Playwright",
      "axe-core",
      "CI/CD",
      "WCAG 2.1 AAA / 2.2 AA",
      "Section 508",
      "Git",
    ],
  },
  ai: {
    title: "AI & Automation",
    description:
      "Integrating intelligent tools that amplify team capacity and optimize processes.",
    items: [
      "LLM Integration",
      "Custom Copilot Architecture",
      "RAG (Retrieval-Augmented Generation)",
      "Workflow Automation",
      "Prompt Engineering",
      "AI-Assisted QA",
      "AI Strategy & Change Management",
      "AI Governance",
      "Evaluation Frameworks",
      "Human-in-the-Loop",
      "Process Optimization",
    ],
  },
  leadership: {
    title: "Leadership & Operations",
    description:
      "Leading cross-functional initiatives and driving measurable business outcomes.",
    items: [
      "Stakeholder Management",
      "Cross-Functional Leadership",
      "Change Management",
      "Project Management",
      "Vendor Management",
      "ROI Measurement",
    ],
  },
} as const;

export type ExperienceHighlight = string | { text: string; href: string };

export interface ExperienceEntry {
  role: string;
  officialTitle?: string;
  company: string;
  location: string;
  period: string;
  highlights: ExperienceHighlight[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Learning Technology Architect",
    officialTitle: "Senior Course Developer",
    company: "Colibri Group",
    location: "Remote",
    period: "2021 \u2013 Present",
    highlights: [
      {
        text: "Architected TAGFORCE, a custom JS/Python automation platform that reduced course production time by 60% and saves $200K+ annually. Adopted across multiple teams.",
        href: "/experience/tagforce-automation-platform",
      },
      {
        text: "Led enterprise AI integration strategy: embedded custom LLM copilots in Design (45% gain), QA (60% gain), and Data (30% gain) teams. Drove change adoption and stakeholder alignment across all three.",
        href: "/experience/llm-copilot-integration",
      },
      {
        text: "Designed and implemented a WCAG 2.1 AAA compliance framework across 45+ courses \u2014 shifting accessibility from end-stage QA to integrated design architecture. Zero post-launch accessibility complaints.",
        href: "/experience/wcag-accessibility-at-scale",
      },
      "Own the learning-technology roadmap and AI-governance framework for the content organization; lead architecture reviews with engineering, compliance, and business-unit L&D.",
    ],
  },
  {
    role: "Instructional Designer & LMS Administrator",
    company: "Ameritech College (now Joyce University)",
    location: "Remote",
    period: "2020 \u2013 2021",
    highlights: [
      {
        text: "Managed enterprise LMS operations serving 2,000+ users. Redesigned admin workflows, built standardized reporting dashboards, and streamlined user onboarding.",
        href: "/experience/enterprise-lms-administration",
      },
    ],
  },
  {
    role: "Financial Analyst & Operations",
    company: "The VOID",
    location: "Lindon, Utah",
    period: "2016 \u2013 2019",
    highlights: [
      "Built ROI models and audit workflows for a multi-location immersive-entertainment operation \u2014 the cost-per-experience framework I developed there directly informs my cost-per-learning-hour thinking today.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "MEd in Instructional Design",
    school: "Western Governors University",
    period: "2019 \u2013 2020",
  },
  {
    degree: "BSc in Accounting",
    school: "Utah Valley University",
    period: "2014 \u2013 2018",
  },
] as const;
