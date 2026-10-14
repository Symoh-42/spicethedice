export type JournalCategory =
  | "Behind The Scenes"
  | "Filmmaking"
  | "Music"
  | "Creative Direction"
  | "VFX"
  | "Design"
  | "Kenyan Creative Industry"
  | "Production Tips";

export const journalCategories: JournalCategory[] = [
  "Behind The Scenes",
  "Filmmaking",
  "Music",
  "Creative Direction",
  "VFX",
  "Design",
  "Kenyan Creative Industry",
  "Production Tips",
];

export type JournalArticle = {
  title: string;
  slug: string;
  category: JournalCategory;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
};

// No journal entries have been published yet. This stays empty rather than
// inventing authors, dates or articles — the listing page renders a
// "coming soon" state until real posts are supplied, ready to be wired to
// GET /api/journal/.
export const journalArticles: JournalArticle[] = [];

export function getArticleBySlug(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}
