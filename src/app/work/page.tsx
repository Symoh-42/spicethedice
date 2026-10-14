import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkExplorer from "@/components/work/WorkExplorer";
import { projects } from "@/lib/projects";
import { categories, type Category } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Music videos, independent film, digital content and graphic design from Spice the Dice Productions — a Nairobi-based creative production studio.",
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const validValues = categories.map((c) => c.value);
  const initialCategory: Category | "all" = validValues.includes(
    category as Category | "all"
  )
    ? (category as Category | "all")
    : "all";

  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading eyebrow="Portfolio" lines={["Selected Work"]} />
        <div className="mt-14">
          <WorkExplorer projects={projects} initialCategory={initialCategory} />
        </div>
      </div>
    </div>
  );
}
