import { CaseStudy } from "./types";

export const xapiAnalytics: CaseStudy = {
  slug: "xapi-learning-analytics",
  title: "xAPI Instrumentation: From Completion Reports to Behavioral Signals",
  category: "Analytics",
  description:
    "Designing the xAPI statement schema, LRS integration, and executive dashboards that shifted learning reporting from Kirkpatrick L1 completions to L3-proxy behavioral data that leadership could act on.",
  cardSubtitle:
    "Statement schema, LRS integration, and executive dashboards \u2014 shifted reporting from Kirkpatrick L1 completions to L3-proxy behavioral data that leadership could act on.",
  heroMetric: {
    value: "Monthly \u2192 Live",
    label: "Reporting cadence",
  },
  challenge:
    "Learning reporting lived in a world of completion percentages and quiz scores \u2014 Kirkpatrick Level 1 and Level 2 signals that told leadership how many seats were filled, not whether behavior actually changed. Executives asked questions the data couldn't answer: Which content drives on-the-job application? Where do learners drop out of a workflow? Which programs move the metrics the business actually cares about? The LMS alone couldn't bridge that gap.",
  approach:
    "I treated analytics as an architectural problem, not a reporting one. The work started by mapping the behaviors we actually wanted to measure \u2014 not the events the LMS happened to emit \u2014 and then designing an xAPI statement schema that captured them at the right grain. Verbs, activity types, and extensions were standardized across content so statements from one product were comparable to statements from another. From there I specified the LRS integration, retention policy, and the aggregation layer that dashboards would query. The principle throughout: design the signal before the dashboard, because a dashboard can't surface a signal the pipeline never captured.",
  solution:
    "The instrumentation stack had three layers. First, a governed xAPI statement schema with a shared vocabulary \u2014 every piece of content emitted statements that conformed to the same contract, so analytics wasn't a per-product science project. Second, an LRS integration wired into the existing content pipeline, so statement emission was a build-time concern, not an afterthought retrofitted later. Third, an executive dashboard layer that rolled raw statements into the behavioral questions leadership was actually asking \u2014 funnel views, cohort comparisons, and L3-proxy indicators like time-to-application and revisit patterns. Reporting stopped being a monthly export exercise and became a live surface.",
  results: {
    metrics: [
      { value: "Monthly \u2192 Live", label: "Reporting cadence" },
      { value: "L1 \u2192 L3", label: "Measurement sophistication" },
      { value: "Governed", label: "Cross-product statement schema" },
    ],
    narrative:
      "Reporting moved from monthly completion exports to a live behavioral layer leadership could query directly. The governed statement schema made cross-product comparisons possible for the first time \u2014 a course in one program became comparable to a course in another. Most importantly, the conversation with stakeholders changed: instead of 'how many people finished,' it became 'which cohorts are actually applying this on the job, and where is the drop-off.'",
  },
  reflection:
    "Analytics work in L&D is usually treated as a reporting problem, but it's an architecture problem. If the statements flowing into the LRS don't carry the right shape, no amount of dashboard work will recover it \u2014 you'll just be drawing prettier pictures of the wrong thing. The highest-leverage move was upstream: decide what behaviors matter, design the schema to capture them, and treat the dashboard as the last step, not the first.",
  publishedAt: "2024-11-05",
};
