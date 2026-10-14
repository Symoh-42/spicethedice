import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealImage from "@/components/ui/RevealImage";
import CinematicMedia from "@/components/ui/CinematicMedia";
import CTAButton from "@/components/ui/CTAButton";
import { services } from "@/lib/services";
import { getProjectBySlug } from "@/lib/projects";
import { stockImage } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Film direction, cinematography, music video production, digital content, entertainment shows, graphic design, VFX and creative direction from Spice the Dice Productions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          lines={["Services"]}
          description="Eight disciplines, one creative process — from concept to final cut."
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const related = service.relatedProjectSlugs
              .map((slug) => getProjectBySlug(slug))
              .filter(Boolean);

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid gap-10 border-t border-white/10 pt-16 md:grid-cols-2 md:gap-16"
              >
                <RevealImage
                  className={`aspect-[4/3] ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <CinematicMedia
                    media={{
                      type: "image",
                      src: stockImage(`service-${service.slug}`, 1200, 900),
                      alt: service.title,
                    }}
                    label={service.title}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </RevealImage>

                <div>
                  <span className="font-heading text-sm text-accent">
                    {service.number}
                  </span>
                  <h2 className="mt-4 font-heading text-4xl font-medium uppercase leading-[0.95] tracking-tight text-text md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 font-heading text-sm uppercase tracking-widest text-muted">
                    {service.headline}
                  </p>
                  <p className="mt-6 max-w-lg text-base text-muted md:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-8">
                    <p className="font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-text/60">
                      Typical Deliverables
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="border border-white/15 px-3 py-1.5 text-xs uppercase tracking-widest text-text/80"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {related.length > 0 && (
                    <div className="mt-8">
                      <p className="font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-text/60">
                        Portfolio Examples
                      </p>
                      <ul className="mt-3 space-y-1">
                        {related.map((project) => (
                          <li key={project!.slug}>
                            <Link
                              href={`/work/${project!.slug}`}
                              data-cursor="VIEW"
                              className="text-sm text-text underline decoration-white/20 underline-offset-4 hover:text-accent hover:decoration-accent"
                            >
                              {project!.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-10">
                    <CTAButton href="/contact" variant="outline">
                      Enquire About {service.title}
                    </CTAButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
