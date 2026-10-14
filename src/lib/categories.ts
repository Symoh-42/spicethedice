export type Category = "film" | "music" | "content" | "design" | "vfx";

export const categories: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Film", value: "film" },
  { label: "Music", value: "music" },
  { label: "Content", value: "content" },
  { label: "Design", value: "design" },
  { label: "VFX", value: "vfx" },
];

export const categoryLabels: Record<Category, string> = {
  film: "Film",
  music: "Music",
  content: "Content",
  design: "Design",
  vfx: "VFX",
};
