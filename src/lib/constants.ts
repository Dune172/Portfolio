export const SITE = {
  name: "Andrew Swan",
  title: "Andrew Swan — Learning Architect",
  description:
    "Learning Architect bridging instructional design, AI integration, and learning operations. Builder of automation tools that save $200K+ annually and make learning teams 60% more efficient.",
  url: "https://andrewmswan.com",
  email: "andrewmswan@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrew-swan-ab6265104/",
  location: "Spanish Fork, Utah",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SKILLS = {
  design: {
    title: "Learning Design",
    description:
      "Architecting curricula and experiences grounded in learning science.",
    items: [
      "ADDIE & SAM",
      "Agile Development",
      "Backward Design",
      "Universal Design for Learning",
      "Assessment Design",
      "Curriculum Architecture",
    ],
  },
  technology: {
    title: "Learning Technology",
    description:
      "Building and optimizing the technical systems that deliver learning at scale.",
    items: [
      "JavaScript & Python",
      "HTML & CSS",
      "xAPI & SCORM",
      "LMS Administration",
      "Power BI & Tableau",
      "Data Analysis",
    ],
  },
  ai: {
    title: "AI & Automation",
    description:
      "Integrating intelligent tools that amplify team capacity without sacrificing quality.",
    items: [
      "LLM Integration",
      "Copilot Development",
      "Workflow Automation",
      "Prompt Engineering",
      "Custom Tool Development",
      "AI Change Management",
    ],
  },
} as const;

export const EXPERIENCE = [
  {
    role: "Senior Course Developer",
    company: "Colibri",
    location: "Remote",
    period: "2021 \u2013 Present",
    highlights: [
      "Built TAGFORCE, a proprietary automation platform (JS/Python) that reduced development time by 60% and saves $200K+ annually.",
      "Championed LLM-based copilot integration across Design, QA, and Data teams, driving 30\u201360% efficiency gains.",
      "Led WCAG 2.1 AAA compliance transformation across 45+ course product lines.",
      "Acted as cross-functional hub between content, engineering, and QA \u2014 achieving 15% reduction in development time and 12% cost savings.",
    ],
  },
  {
    role: "Instructional Designer & LMS Administrator",
    company: "Ameritech College",
    location: "Remote",
    period: "2020 \u2013 2021",
    highlights: [
      "Managed the LMS serving 2,000+ active users \u2014 overseeing provisioning, stability, and feature updates.",
      "Designed and delivered instructional content aligned with healthcare education standards.",
    ],
  },
  {
    role: "Accountant",
    company: "The VOID",
    location: "Lindon, Utah",
    period: "2016 \u2013 2019",
    highlights: [
      "Conducted ROI analysis on merchandise product lines, optimizing procurement and maximizing revenue per guest.",
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
