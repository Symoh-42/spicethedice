import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import YouTubeEmbed from "../ui/YouTubeEmbed";
import { channel, showreelVideoId, videos } from "@/lib/youtube";

export default function Showreel() {
  const video = videos.find((v) => v.id === showreelVideoId)!;

  return (
    <section id="showreel" className="scroll-mt-24 bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Latest Release"
          lines={["Wametuzoea"]}
          align="center"
          description={video.description}
        />
        <div className="mt-14">
          <YouTubeEmbed id={video.id} title={video.title} />
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted">{video.title}</p>
          <a
            href={channel.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-[0.2em] text-text transition-colors hover:text-accent"
          >
            Subscribe on YouTube — {channel.subscribers} subscribers
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
