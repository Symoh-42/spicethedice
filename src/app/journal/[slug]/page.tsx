import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RevealImage from "@/components/ui/RevealImage";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import CTAButton from "@/components/ui/CTAButton";
import { journalArticles, getArticleBySlug } from "@/lib/journal";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    articleSection: article.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-[60vh] items-end bg-near-black pt-32">
        <RevealImage className="absolute inset-0">
          <MediaPlaceholder label={article.category} />
        </RevealImage>
        <div className="relative mx-auto w-full max-w-3xl px-6 pb-16 md:px-10">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {article.category}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-medium uppercase leading-[0.95] tracking-tight text-text md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {article.date} · {article.readingTime}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <p className="whitespace-pre-line text-lg leading-relaxed text-text/90">
          {article.content}
        </p>

        <div className="mt-20 text-center">
          <p className="font-heading text-2xl font-medium uppercase tracking-tight text-text md:text-3xl">
            Have a project in mind?
          </p>
          <div className="mt-6 inline-block">
            <CTAButton href="/contact">Let&rsquo;s Talk</CTAButton>
          </div>
        </div>
      </div>
    </article>
  );
}
