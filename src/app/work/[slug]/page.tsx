import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHero from "@/components/work/ProjectHero";
import RelatedWork from "@/components/work/RelatedWork";
import ImageGallery from "@/components/ui/ImageGallery";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import CTAButton from "@/components/ui/CTAButton";
import { projects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

type StoryKey = "idea" | "process" | "visualLanguage" | "production" | "result";

const storySections: { key: StoryKey; label: string }[] = [
  { key: "idea", label: "The Idea" },
  { key: "process", label: "The Process" },
  { key: "visualLanguage", label: "The Visual Language" },
  { key: "production", label: "The Production" },
  { key: "result", label: "Final Result" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: { "@type": "Person", name: "Spice the Dice" },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHero project={project} />

      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <div className="space-y-16">
          {storySections
            .filter((section) => project[section.key])
            .map((section) => (
              <div key={section.key}>
                <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  {section.label}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-text/90 md:text-xl">
                  {project[section.key]}
                </p>
              </div>
            ))}
        </div>

        {project.youtube && project.youtube.length > 0 && (
          <div className="mt-20">
            <p className="mb-6 font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Watch
            </p>
            <div className="space-y-10">
              {project.youtube.filter((v) => !v.vertical).map((video) => (
                <div key={video.id}>
                  <YouTubeEmbed id={video.id} title={video.title} />
                  <p className="mt-3 text-sm text-muted">{video.title}</p>
                </div>
              ))}
            </div>
            {project.youtube.some((v) => v.vertical) && (
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {project.youtube.filter((v) => v.vertical).map((video) => (
                  <div key={video.id}>
                    <YouTubeEmbed id={video.id} title={video.title} vertical />
                    <p className="mt-2 text-xs text-muted">{video.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20">
            <p className="mb-6 font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Gallery
            </p>
            <ImageGallery items={project.gallery} category={project.category[0]} />
          </div>
        )}

        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="mb-4 font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Credits
          </p>
          <ul className="space-y-2">
            {project.credits.map((credit) => (
              <li
                key={`${credit.role}-${credit.name ?? ""}`}
                className="flex justify-between border-b border-white/5 py-2 text-sm"
              >
                <span className="text-muted">{credit.role}</span>
                <span className="text-text">
                  {credit.name ?? "Spice the Dice"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 text-center">
          <p className="font-heading text-2xl font-medium uppercase tracking-tight text-text md:text-3xl">
            Have a project in mind?
          </p>
          <div className="mt-6 inline-block">
            <CTAButton href="/contact">Let&rsquo;s Talk</CTAButton>
          </div>
        </div>
      </div>

      <RelatedWork projects={related} />
    </div>
  );
}
