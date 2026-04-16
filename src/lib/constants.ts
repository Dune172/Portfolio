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
      "LTI",
      "API Integration",
      "LMS Administration",
      "Custom Tool Development",
      "Automated Testing",
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
      "Workflow Automation",
      "Prompt Engineering",
      "AI-Assisted QA",
      "AI Strategy & Change Management",
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

export const EXPERIENCE = [
  {
    role: "Learning Technology Architect",
    officialTitle: "Senior Course Developer",
    company: "Colibri Group",
    location: "Remote",
    period: "2021 \u2013 Present",
    highlights: [
      "Architected TAGFORCE, a custom JS/Python automation platform that reduced course production time by 60% and saves $200K+ annually. Adopted across multiple teams.",
      "Led enterprise AI integration strategy: embedded custom LLM copilots in Design (45% gain), QA (60% gain), and Data (30% gain) teams. Drove change adoption and stakeholder alignment across all three.",
      "Designed and implemented a WCAG 2.1 AAA compliance framework across 45+ courses \u2014 shifting accessibility from end-stage QA to integrated design architecture. Zero post-launch accessibility complaints.",
      "Partner with cross-functional stakeholders in content, engineering, and QA to align learning operations with business objectives.",
    ],
  },
  {
    role: "Instructional Designer & LMS Administrator",
    company: "Ameritech College (now Joyce University)",
    location: "Remote",
    period: "2020 \u2013 2021",
    highlights: [
      "Managed enterprise LMS operations serving 2,000+ users. Redesigned admin workflows, built standardized reporting dashboards, and streamlined user onboarding.",
      "Partnered with academic and operations leadership to align learning technology with institutional goals.",
    ],
  },
  {
    role: "Financial Analyst & Operations",
    company: "The VOID",
    location: "Lindon, Utah",
    period: "2016 \u2013 2019",
    highlights: [
      "Managed financial operations including ROI analysis, audit processes, and operational reporting \u2014 building the systems-thinking foundation that informs my approach to learning architecture.",
    ],
  },
] as const;

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
