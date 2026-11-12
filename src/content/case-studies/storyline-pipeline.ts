import { CaseStudy } from "./types";

export const storylinePipeline: CaseStudy = {
  slug: "storyline-build-pipeline",
  title: "Storyline 360 Build Pipeline: From Word Storyboard to Narrated Course",
  category: "Automation",
  description:
    "A Python pipeline that drives Articulate Storyline 360 through its own interface: storyboard cleanup, slide build, text fill, AI narration and text timing, with a human sign-off before anything builds.",
  cardSubtitle:
    "Desktop UI automation of Storyline 360 with a sign-off gate, structure checks and profiling that halved the time to build each slide.",
  heroMetric: {
    value: "2×",
    label: "Faster per-slide build after profiling",
  },
  challenge:
    "Storyline 360 has no API. Building a course from a writer's Word storyboard means hundreds of clicks per course: duplicate the right template slide for each layout, name it, place it in the right scene, paste the slide text and notes, import the questions, generate a voiceover for every slide, then time each paragraph's entrance to the narration by ear. The storyboards themselves are inconsistent, with labels in different cases and orders, slides merged inside each other's tables, and knowledge checks in three different formats. Any automation had to cope with both a closed desktop app and messy input, without ever changing what the writer wrote.",
  approach:
    "I started with a feasibility phase before committing to anything: could a script select a slide by name, copy it, paste it after another and rename it, reliably? Windows UI Automation could, with catches worth knowing (for example, UIA's own select call doesn't change Storyline's selection, so the script clicks). From there I set hard rules. Cleanup changes structure, never wording, enforced by an automated word-preservation check. Nothing builds until a person approves the cleanup report. Every UI action checks its result, retries once, then stops with a screenshot. One Storyline build is pinned, and the test storyboard is rerun before adopting an update. Each phase had an acceptance check, and the action library had to pass a 20-run soak test before anything was built on it.",
  solution:
    "The pipeline runs in stages, each one resumable. It cleans and parses the storyboard and writes a report for sign-off; builds the slide structure by copying layout slides from the template; verifies the scene and slide order against the storyboard; fills slide text and notes through Storyline's own Word export and import; generates narration from the notes with Storyline's AI Audio, with captions; and times every paragraph's entrance to the narration using the per-word timings AI Audio saves, matched with a weighted longest-common-subsequence. A small desktop window runs the steps and estimates time remaining from rates it learns from finished runs.",
  results: {
    metrics: [
      { value: "2×", label: "Faster per-slide build" },
      { value: "20 runs", label: "Soak test, zero failures" },
      { value: "5 steps", label: "Storyboard to timed course" },
    ],
    narrative:
      "A 25-slide test course built end to end, from Word storyboard to slides with text, notes and captioned AI narration, with a person approving the cleanup report up front instead of doing the build by hand.Profiling then showed the slow part wasn't fixed waits but UI Automation searches: replacing pywinauto's walk-and-filter lookups with native UIA conditions cut individual lookups from as much as 1.3 seconds to about 0.1, per-slide build time from 27.6 to 13.6 seconds, and the per-slide narration UI work from 88 seconds to 28–41.",
  },
  reflection:
    "Automating a desktop app that doesn't want to be automated is mostly about honesty: every action proves it worked or stops and says so. The other lesson was to measure before optimizing. My instinct was to shorten the sleeps; the profiler showed the sleeps barely mattered and the searches were nearly everything. The same holds for process work generally: time where the minutes actually go before you redesign the step you assume is slow.",
  relatedPosts: ["structure-never-wording-automating-learning-content", "automating-storyline-360-with-python"],
  publishedAt: "2026-11-12",
};
