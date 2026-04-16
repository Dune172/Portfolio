import { SITE } from "@/lib/constants";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Swan",
    jobTitle: "Learning Architect",
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    sameAs: [SITE.linkedin],
    knowsAbout: [
      "Learning Technology Architecture",
      "Instructional Design",
      "Learning Architecture",
      "AI Integration in Learning",
      "Learning Management Systems",
      "WCAG Accessibility",
      "Workflow Automation",
      "xAPI",
      "SCORM",
      "LTI",
      "Enterprise Learning Systems",
      "Systems Thinking",
      "Platform Strategy",
      "Cross-Functional Leadership",
      "Change Management",
      "Learning Operations",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Western Governors University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Utah Valley University",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.title,
    url: SITE.url,
    description: SITE.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: "Andrew Swan",
      url: SITE.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; href: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
