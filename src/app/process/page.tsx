import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Creative Process",
  description:
    "From idea to final frame — how Spice the Dice Productions takes a concept through pre-production, production, post and release.",
};

export default function ProcessPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="How We Work"
          lines={["From Idea To", "Final Frame."]}
        />
        <div className="mt-16">
          <ProcessTimeline />
        </div>
        <div className="mt-16 text-center">
          <CTAButton href="/contact">Start a Project</CTAButton>
        </div>
      </div>
    </div>
  );
}
