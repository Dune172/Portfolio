export interface LeadershipItem {
  id: string;
  /** The kind of leadership, phrased the way job descriptions ask for it. */
  kind: string;
  where: string;
  role: string;
  metrics: { value: string; label: string }[];
  summary: string;
  points: string[];
}

export const LEADERSHIP_INTRO =
  "I lead in four ways: a staff and students who count on me every season, organizations I built from nothing, teams I don’t manage but who adopt what I build, and operations designed to run without me.";

export const LEADERSHIP_STYLE =
  "My style is the same in all four: teach the system, not just the task. A team that understands why the process works can run it, fix it and improve it without me in the room.";

export const LEADERSHIP: LeadershipItem[] = [
  {
    id: "team",
    kind: "Leading a team",
    where: "SHHS Marching Percussion",
    role: "Percussion Director",
    metrics: [
      { value: "3", label: "Staff led" },
      { value: "30–40", label: "Student performers" },
    ],
    summary:
      "I direct the program: I lead a staff of three and teach and manage 30–40 student performers through each season.",
    points: [
      "Design the ensemble’s drill myself in Pyware 3D",
      "Set the section’s instrumentation and wrote its bass drum tuning guide",
    ],
  },
  {
    id: "build",
    kind: "Building from zero",
    where: "Summit Percussion Scholarship · Merit Games",
    role: "Founder",
    metrics: [
      { value: "501(c)(3)", label: "Nonprofit founded" },
      { value: "2", label: "Organizations started" },
    ],
    summary:
      "I founded, fund and run a scholarship that helps Nebo School District percussionists pay their DCI tuition, and formed Merit Games, a Utah LLC, to publish a cooperative card game.",
    points: [
      "Set up the scholarship as a 501(c)(3) and run it end to end",
      "Formed Merit Games and structured a profit-share with two collaborators",
      "Took the game from design to public playtests at Gen Con",
    ],
  },
  {
    id: "influence",
    kind: "Leading without authority",
    where: "Colibri Group",
    role: "Go-to for AI integration",
    metrics: [
      { value: "3", label: "Teams through an AI rollout" },
      { value: "45+", label: "Courses on a standard I trained" },
    ],
    summary:
      "I don’t have direct reports at Colibri. I’m the person teams come to for AI integration and technical questions, and the changes I lead get adopted because people trust the tools and the plan.",
    points: [
      "Led the AI copilot rollout across Design, QA and Data: mapped each team’s workflow, built the tools, trained the people and aligned the managers",
      "Developed and delivered the training that made WCAG 2.1 AAA accessibility part of design across 45+ courses",
      "Built TAGFORCE and supported its adoption across multiple teams",
    ],
  },
  {
    id: "operations",
    kind: "Making operations outlast me",
    where: "Ameritech College (now Joyce University)",
    role: "LMS Administrator",
    metrics: [
      { value: "2,000+", label: "Users supported" },
      { value: "5→2", label: "Days to onboard a student" },
    ],
    summary:
      "I ran an LMS for 2,000+ students and faculty and rebuilt how it was operated, so it no longer depended on one person.",
    points: [
      "Redesigned admin workflows, cutting manual admin time by more than half",
      "Built self-serve reporting dashboards for instructors and leadership",
      "Wrote the procedures that let someone else run the system without me",
    ],
  },
];
