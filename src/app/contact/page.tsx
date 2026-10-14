import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactTabs from "@/components/forms/ContactTabs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Send a project brief to Spice the Dice Productions — music video, film, digital content, entertainment or design.",
};

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Get in Touch"
          lines={["Let's Make", "Something."]}
          description={`Based in ${siteConfig.location}. Tell us what you're working on and we'll get back to you.`}
        />
        <div className="mt-16">
          <ContactTabs />
        </div>
      </div>
    </div>
  );
}
