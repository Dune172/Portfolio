import { CaseStudy } from "./types";

export const riseCourseBuilder: CaseStudy = {
  slug: "rise-course-builder",
  title: "Rise Course Builder: Word Storyboards to Rise 360 Lessons, Word for Word",
  category: "Automation",
  description:
    "A Chrome extension that builds Articulate Rise 360 lessons straight from a team's Word storyboards, with no AI rewriting and a check that proves every word made it into the course.",
  cardSubtitle:
    "Chrome extension that reads three storyboard formats and builds Rise 360 lessons block by block, then compares every saved block with its source.",
  heroMetric: {
    value: "0",
    label: "Words rewritten by the tool",
  },
  challenge:
    "Rise 360 is quick to author in and slow to fill. Our writers deliver courses as Word storyboards, and a developer then rebuilds each one in Rise by hand: create the block, paste the text, set the type, fix the formatting, repeat for every block of every lesson. It is copy-and-paste work, and copy-and-paste is where words go missing. The storyboards also arrive in more than one shape: tagged storyboards, block-type templates and finished course manuscripts styled only with Word headings. A generic converter would flatten that variety or quietly drop whatever it couldn't classify. The team didn't need text generated. It needed the text it already had moved into Rise intact.",
  approach:
    "I set one rule before writing any code: the tool can change structure, never wording. That rule shaped everything else. There is no AI step, nothing leaves the browser, and every build is checked against its source. I collected real storyboards from the team as test fixtures and wrote a parser for each format, then treated every edge case the team reported as a new fixture rather than a one-off fix: hyphens, Word bullets, merged tables, italic subheadings, statute text sitting next to knowledge checks, video links that should become embeds. Before each release, the new parser is compared against the previous version on every fixture, and every difference has to be intended.",
  solution:
    "Rise Course Builder runs in Chrome's side panel next to the Rise course. You pick a brand theme and your Word files (one lesson per file), and it shows a preview first: block counts, plus a word check that says whether every word in the files appears somewhere in what will be built. Blocks it can't build as their own type are marked red and go in as paragraphs, so nothing is lost; blocks worth a second look are marked amber. Optional switches split long manuscript lessons at headings (about 900–1,400 words each) or combine very short ones, without changing or dropping text. After the build, it reads back what Rise saved and lists every block that differs from the storyboard.",
  results: {
    metrics: [
      { value: "3", label: "Storyboard formats read" },
      { value: "Every block", label: "Checked against its source" },
      { value: "0", label: "AI rewriting" },
    ],
    narrative:
      "Lesson builds that were manual block-by-block work now run from a file picker, and the developer's job shifts from retyping to reviewing a report. Because the tool proves what it did, review is fast: the word check and the post-build comparison point straight at the handful of blocks that need a human. The test suite of real storyboards means fixes for one team's format don't break another's.",
  },
  reflection:
    "The most useful design decision was the one that sounds least ambitious: no AI in the build path. It also makes the tool easy to trust, because it can show that it hasn't changed anything, and the team's feedback rounds turned into new test fixtures rather than debates about the output. AI earns its place in course production when it drafts or reviews. When the job is moving approved content from one system to another, the win is a deterministic tool with a receipt.",
  relatedPosts: ["structure-never-wording-automating-learning-content", "rise-360-from-word-storyboards"],
  publishedAt: "2026-11-12",
};
