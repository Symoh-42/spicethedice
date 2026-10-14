import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { socials } from "@/lib/socials";
import { videos, youtubeThumb, youtubeWatchUrl, formatViews } from "@/lib/youtube";
import CTAButton from "../ui/CTAButton";

const showcaseIds = [
  "FCrRylL8y0o",
  "CAACThzrOoI",
  "FszyqmTKF-w",
  "MEdO45RiOgc",
  "zySyVXHc5AA",
];

export default function SocialShowcase() {
  const shorts = showcaseIds
    .map((id) => videos.find((v) => v.id === id))
    .filter((v) => v !== undefined);

  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Follow"
            lines={["Follow the Process"]}
            description="African filmmaking on a budget, behind-the-scenes, vlogs and drops — straight from the channel."
          />
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
              >
                {social.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {shorts.map((video) => (
            <a
              key={video.id}
              href={youtubeWatchUrl(video)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PLAY"
              className="group relative aspect-[9/16] overflow-hidden bg-charcoal"
            >
              <Image
                src={youtubeThumb(video.id)}
                alt={video.title}
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover brightness-[0.8] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-near-black/90 via-transparent to-transparent" />
              <Play
                className="absolute right-3 top-3 h-4 w-4 fill-current text-text/80"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 bottom-0 p-3">
                <span className="line-clamp-2 font-heading text-xs font-medium uppercase tracking-wide text-text">
                  {video.title}
                </span>
                {video.views !== undefined && (
                  <span className="mt-1 block text-[11px] text-muted">
                    {formatViews(video.views)}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-8">
          <CTAButton href="/videos" variant="ghost">
            All Videos
          </CTAButton>
          <CTAButton href="/contact" variant="ghost">
            Let&rsquo;s Create Something
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
