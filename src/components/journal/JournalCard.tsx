import Link from "next/link";
import MediaPlaceholder from "../ui/MediaPlaceholder";
import type { JournalArticle } from "@/lib/journal";

export default function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      data-cursor="VIEW"
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <MediaPlaceholder
          label={article.category}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
        {article.category}
      </p>
      <h3 className="mt-2 font-heading text-xl font-medium uppercase tracking-tight text-text">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-muted">
        {article.date} · {article.readingTime}
      </p>
    </Link>
  );
}
