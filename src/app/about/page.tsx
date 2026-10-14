import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealImage from "@/components/ui/RevealImage";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import CTAButton from "@/components/ui/CTAButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spice the Dice Productions is a Nairobi-based creative production operation working across film, music, digital content, video and design.",
};

const capabilities = [
  "Film Direction",
  "Cinematography",
  "Music Video Production",
  "Digital Content",
  "Entertainment Formats",
  "Graphic Design",
  "Visual Effects",
  "Creative Direction",
];

export default function AboutPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="About"
          lines={["We See Stories", "Differently."]}
        />

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">
          <RevealImage className="aspect-[4/5] w-full">
            <MediaPlaceholder label="Spice the Dice" />
          </RevealImage>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-text/90 md:text-xl">
              Spice the Dice is a {siteConfig.location}-based digital content
              creator, film director, videographer and graphic designer
              working across film, music, entertainment, social content,
              visual effects and creative design.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The work moves between disciplines on purpose — a music video
              draws on the same visual instincts as a short film, a podcast&rsquo;s
              artwork carries the same attention as a production&rsquo;s colour
              grade. The throughline is a Kenyan creative perspective, built
              for the platforms the work actually lives on.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Every project starts the same way: understand the idea, find
              its visual language, then build the production around it —
              from pre-production through to the final cut.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-16">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Capabilities
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
            {capabilities.map((c) => (
              <p
                key={c}
                className="font-heading text-lg uppercase tracking-tight text-text md:text-xl"
              >
                {c}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="font-heading text-3xl font-medium uppercase tracking-tight text-text md:text-4xl">
            Have an idea worth telling?
          </p>
          <div className="mt-8 inline-block">
            <CTAButton href="/contact">Start a Project</CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
