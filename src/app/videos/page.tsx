import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import {
  channel,
  formatViews,
  seriesLabels,
  videos,
  type VideoSeries,
} from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Music, live streams, African filmmaking on a budget, vlogs and more from the Spice Dice YouTube channel.",
};

const order: VideoSeries[] = ["music", "live", "filmmaking", "challenge", "vlog", "tech"];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function VideosPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="YouTube"
            lines={["The Channel"]}
            description={`${channel.subscribers} subscribers · ${channel.videoCount} videos. Music, live streams, filmmaking breakdowns and life in between.`}
          />
          <a
            href={channel.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="inline-flex items-center gap-3 bg-accent px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text"
          >
            Subscribe
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-3" aria-label="Video series">
          {order.map((series) => (
            <a
              key={series}
              href={`#${series}`}
              className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              {seriesLabels[series]}
            </a>
          ))}
        </nav>

        {order.map((series) => {
          const list = videos.filter((v) => v.series === series);
          const long = list.filter((v) => !v.short);
          const shorts = list.filter((v) => v.short);
          return (
            <section
              key={series}
              id={series}
              className="mt-16 scroll-mt-28 border-t border-white/10 pt-12"
            >
              <h2 className="font-heading text-2xl font-medium uppercase tracking-tight text-text md:text-4xl">
                {seriesLabels[series]}
              </h2>
              {long.length > 0 && (
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {long.map((v) => (
                    <div key={v.id}>
                      <YouTubeEmbed id={v.id} title={v.title} />
                      <p className="mt-3 font-heading text-sm font-medium uppercase tracking-tight text-text">
                        {v.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {[formatViews(v.views), v.published && formatDate(v.published)]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {shorts.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {shorts.map((v) => (
                    <div key={v.id}>
                      <YouTubeEmbed id={v.id} title={v.title} vertical />
                      <p className="mt-2 line-clamp-2 text-xs text-text/80">{v.title}</p>
                      {v.views !== undefined && (
                        <p className="mt-0.5 text-[11px] text-muted">{formatViews(v.views)}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        <div className="mt-20 border-t border-white/10 pt-12">
          <p className="text-sm text-muted">
            Join the community on Discord —{" "}
            <a
              href={channel.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text underline-offset-4 hover:text-accent hover:underline"
            >
              {channel.discordName}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
