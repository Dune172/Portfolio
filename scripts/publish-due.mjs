// Finds blog posts whose publishedAt date (America/Denver) has arrived but
// that have not been deployed yet, and records them in published.json.
// The workflow commits that file, and the push makes Hostinger rebuild the
// site, which is when the post actually appears (see src/lib/blog.ts).
//
//   node scripts/publish-due.mjs           update published.json if posts are due
//   node scripts/publish-due.mjs --list    print the schedule, change nothing
import { readFileSync, readdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";

const BLOG_DIR = "src/content/blog";
const LEDGER = join(BLOG_DIR, "published.json");
const SITE = "https://andrewmswan.com";

const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Denver",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const field = (src, name) =>
  src.match(new RegExp(`\\n  ${name}: "((?:[^"\\\\]|\\\\.)*)"`))?.[1];

const posts = readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith(".ts") && f !== "types.ts")
  .map((f) => {
    const src = readFileSync(join(BLOG_DIR, f), "utf8");
    return {
      slug: field(src, "slug"),
      title: JSON.parse(`"${field(src, "title")}"`),
      publishedAt: field(src, "publishedAt"),
    };
  })
  .filter((p) => p.slug && p.publishedAt)
  .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));

if (process.argv.includes("--list")) {
  for (const p of posts) {
    console.log(`${p.publishedAt}  ${p.publishedAt <= today ? "live     " : "scheduled"}  ${p.title}`);
  }
  process.exit(0);
}

const published = JSON.parse(readFileSync(LEDGER, "utf8"));
const due = posts.filter((p) => p.publishedAt <= today && !published.includes(p.slug));

console.log(`Today in Denver: ${today}`);
if (!due.length) {
  const next = posts.find((p) => p.publishedAt > today);
  console.log(next ? `Nothing due. Next: ${next.publishedAt} ${next.title}` : "Nothing due, and nothing scheduled.");
} else {
  for (const p of due) console.log(`Due: ${p.title}`);
  writeFileSync(LEDGER, JSON.stringify([...published, ...due.map((p) => p.slug)], null, 2) + "\n");
}

if (process.env.GITHUB_OUTPUT) {
  const titles = due.map((p) => p.title).join("; ");
  const urls = due.map((p) => `${SITE}/blog/${p.slug}`).join(" ");
  appendFileSync(process.env.GITHUB_OUTPUT, `count=${due.length}\ntitles=${titles}\nurls=${urls}\n`);
}
