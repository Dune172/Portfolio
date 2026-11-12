export interface Project {
  slug: string;
  name: string;
  status: "Live" | "In development" | "Private tool";
  href?: string;
  tagline: string;
  /** What it is, in one or two sentences. */
  summary: string;
  /** The process or AI-enablement idea it demonstrates. */
  whyItMatters: string;
  highlights: string[];
  stack: string[];
  relatedPosts?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "social-coach",
    name: "Social Coach",
    status: "Private tool",
    tagline: "An AI writing coach with a confidentiality gate in front of it",
    summary:
      "A private web app that turns a short daily check-in into post ideas, drafts them in my own voice with Claude, and refuses to mark anything ready until it passes a confidentiality review and a quality grade. It never posts for me.",
    whyItMatters:
      "It's AI governance at the scale of one person: the model drafts, a separate check enforces the rules, and a human makes the final call. The same pattern scales to a team's AI policy.",
    highlights: [
      "Every draft gets one of four verdicts: block, ask the employer, redact, or pass. The strictest finding wins",
      "Rules live in an editable rulebook, so policy changes don't need code changes",
      "Overrides are allowed but logged, so the exceptions are visible",
      "Works as a phone app with dictation for the daily check-in",
    ],
    stack: ["Next.js", "TypeScript", "Claude (Anthropic SDK)", "PWA"],
    relatedPosts: ["confidentiality-gate-for-ai-drafts"],
  },
  {
    slug: "d2r-randomizer",
    name: "D2R Randomizer",
    status: "Live",
    href: "https://d2rrandomizer.com",
    tagline: "A seeded skill-tree randomizer for Diablo II: Resurrected",
    summary:
      "Enter a seed, pick optional mutations, and download a ready-to-install mod that shuffles every skill across all eight classes. The same seed always produces the same game, so a run can be shared, raced and compared.",
    whyItMatters:
      "A public product I run end to end: game-data pipeline, weekly challenge rotation, community, hosting and support. Reproducibility is the core feature, and it comes from treating randomness as an input you control.",
    highlights: [
      "Deterministic seeded shuffles, so every run can be shared and raced",
      "Weekly challenges with two rotating mutations and a leaderboard",
      "Offline-safe: it only touches skill files and never needs Battle.net",
      "Integration with the Archipelago multi-game randomizer, with a client written in Go",
    ],
    stack: ["Next.js", "React", "TypeScript", "Go", "Node on a VPS"],
    relatedPosts: ["seeded-randomness-reproducible-shuffles"],
  },
  {
    slug: "fighting-spirit",
    name: "Fighting Spirit",
    status: "In development",
    tagline: "Tournament software for StarCraft: The Miniatures Game",
    summary:
      "Organizers create events, players register and submit rosters, and the live console pairs rounds, takes results and ranks the field in real time. Public pairings and standings need no account.",
    whyItMatters:
      "The official rules guide warns that generic tournament tools get its tiebreakers wrong. This project turns that guide into code, with each rule traced to its source and pinned down by tests.",
    highlights: [
      "Swiss pairing, bye allocation and tiebreakers implemented from the official Organised Play Guide",
      "151 unit tests across the scoring, pairing and tournament engines",
      "Reproducible pairings from a seeded shuffle, so a contested round can be regenerated and audited",
      "Realtime console for organizers; rosters stored privately and shared with judges by signed link",
    ],
    stack: ["Next.js", "TypeScript", "Supabase (Postgres, Auth, Realtime)", "Vitest"],
    relatedPosts: [
      "turning-a-rulebook-into-tested-code",
      "seeded-randomness-reproducible-shuffles",
    ],
  },
  {
    slug: "drill-designer",
    name: "Drill Designer",
    status: "In development",
    tagline: "A browser-based drill editor for marching bands",
    summary:
      "Plot performers on a field, step through sets on a timeline with the music, catch collisions, and export drill charts as PDF. It grew out of my marching percussion work.",
    whyItMatters:
      "My most heavily tested project, and a lesson in building software people can trust with hours of work: every edit is a reversible command, saves are queued and retried, and an export either completes or fails cleanly.",
    highlights: [
      "Konva field canvas with set timeline, audio playback and collision checks",
      "Command-based editing with bounded undo and redo",
      "Autosave with per-project save queues, revisions and idempotent retries",
      "115 test files, including Playwright end-to-end tests",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Konva", "Cloudflare Workers + D1", "Playwright"],
  },
];
