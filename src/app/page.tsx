import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Showreel from "@/components/home/Showreel";
import CreativeStatement from "@/components/home/CreativeStatement";
import SocialShowcase from "@/components/home/SocialShowcase";
import MerchCard from "@/components/shop/MerchCard";
import { merch } from "@/lib/merch";
import ProjectGrid from "@/components/work/ProjectGrid";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import RevealImage from "@/components/ui/RevealImage";
import CinematicMedia from "@/components/ui/CinematicMedia";
import { projects, getFeaturedProject } from "@/lib/projects";
import { services } from "@/lib/services";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.productionName} | Film, Video & Creative Production Kenya`,
  description: siteConfig.description,
};

export default function Home() {
  const featured = getFeaturedProject();
  const disciplines = categories.filter((c) => c.value !== "all" && c.value !== "vfx");

  return (
    <>
      <Hero />
      <Showreel />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Portfolio" lines={["Selected Work"]} />
          <CTAButton href="/work" variant="outline" cursor="VIEW">
            View All Work
          </CTAButton>
        </div>
        <div className="mt-14">
          <ProjectGrid projects={projects.slice(0, 4)} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {disciplines.map((d) => (
            <Link
              key={d.value}
              href={`/work?category=${d.value}`}
              data-cursor="VIEW"
              className="group flex h-40 items-center justify-center border-r border-white/10 text-center last:border-r-0 md:h-56"
            >
              <span className="font-heading text-lg font-medium uppercase tracking-widest text-muted transition-colors group-hover:text-accent md:text-2xl">
                {d.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CreativeStatement />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            lines={["Services"]}
            description="Creative direction across film, music, content and design."
          />
          <CTAButton href="/services" variant="outline">
            All Services
          </CTAButton>
        </div>
        <div className="mt-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-near-black py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Featured Project
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <RevealImage className="aspect-[4/5] w-full">
              <CinematicMedia
                media={featured.heroImage ?? featured.thumbnail}
                category={featured.category[0]}
                label={featured.tag}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </RevealImage>
            <div>
              <h3 className="font-heading text-4xl font-medium uppercase leading-[0.95] tracking-tight text-text md:text-6xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-base text-muted md:text-lg">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {featured.roles.map((role) => (
                  <span
                    key={role}
                    className="text-xs uppercase tracking-widest text-muted"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href={`/work/${featured.slug}`} cursor="VIEW">
                  View Project
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="How We Work" lines={["From Idea To Final Frame"]} />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </section>

      <SocialShowcase />

      <section className="border-t border-white/10 bg-near-black py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Official Merch"
              lines={["Rep the Dice"]}
              description="Caps, tees and thermos flasks — straight from Spice Dice."
            />
            <CTAButton href="/shop" variant="outline">
              Shop Merch
            </CTAButton>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {merch.map((product) => (
              <MerchCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <SectionHeading
            eyebrow="About"
            lines={["We See Stories", "Differently."]}
            description="A Nairobi-based creative production operation working across film, music, digital content, video and design."
          />
          <div>
            <CTAButton href="/about" variant="outline">
              About Spice the Dice
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
