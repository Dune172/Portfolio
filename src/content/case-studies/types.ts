export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  cardSubtitle?: string;
  heroMetric: {
    value: string;
    label: string;
  };
  challenge: string;
  approach: string;
  solution: string;
  results: {
    metrics: Array<{
      value: string;
      label: string;
    }>;
    narrative: string;
  };
  reflection: string;
  /** Blog post slugs to link from this page once they are published. */
  relatedPosts?: string[];
  publishedAt: string;
}
