"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RevealText from "../ui/RevealText";
import CTAButton from "../ui/CTAButton";
import CinematicMedia from "../ui/CinematicMedia";
import { siteConfig } from "@/lib/site-config";
import { showreelVideoId, youtubeThumb } from "@/lib/youtube";

export default function Hero() {
  return (
    <section className="letterbox relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-near-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <CinematicMedia
          media={{
            type: "image",
            src: youtubeThumb(showreelVideoId, "max"),
            alt: "",
          }}
          priority
          sizes="100vw"
          overlay={false}
          imgClassName="opacity-60 brightness-[0.55]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(239,35,60,0.18), transparent 60%), linear-gradient(180deg, rgba(5,5,5,0.55), rgba(5,5,5,0.85))",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 18px)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-32 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-heading text-xs font-medium uppercase tracking-[0.4em] text-accent"
        >
          Spice the Dice Productions
        </motion.p>

        <RevealText
          as="h1"
          lines={["WE MAKE", "IDEAS", "VISUAL."]}
          delay={0.15}
          className="font-heading text-[15vw] font-medium uppercase leading-[0.88] tracking-tight text-text sm:text-[9vw] md:text-[7.5vw]"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 max-w-md text-base text-muted md:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <CTAButton href="/work" cursor="VIEW">
            View Our Work
          </CTAButton>
          <CTAButton href="/contact" variant="outline">
            Start a Project
          </CTAButton>
        </motion.div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 pb-12 md:px-10 md:pb-16">
        <p className="font-heading text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-muted">
          Nairobi, Kenya
          <br />
          Creative Production
        </p>
        <a
          href="#showreel"
          className="flex items-center gap-2 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
        >
          Scroll to Explore
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
