import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import JournalCard from "@/components/journal/JournalCard";
import { journalArticles, journalCategories } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Behind the scenes, filmmaking notes and creative direction from Spice the Dice Productions.",
};

export default function JournalPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading eyebrow="Notes" lines={["The Journal"]} />

        {journalArticles.length === 0 ? (
          <div className="mt-20 border-t border-white/10 py-24 text-center">
            <p className="font-heading text-2xl uppercase tracking-tight text-text md:text-3xl">
              Journal launching soon.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              Behind-the-scenes notes, filmmaking process and creative
              direction — coming across {journalCategories.length} categories
              including {journalCategories.slice(0, 3).join(", ")} and more.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {journalArticles.map((article) => (
              <JournalCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
