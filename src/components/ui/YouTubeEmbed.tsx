"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { youtubeThumb } from "@/lib/youtube";
import { cn } from "@/lib/utils";

// Click-to-load embed: shows the real thumbnail and only mounts the YouTube
// iframe once the visitor presses play, so the page doesn't pay for the
// player script up front.
export default function YouTubeEmbed({
  id,
  title,
  vertical = false,
  preload = false,
  className,
}: {
  id: string;
  title: string;
  vertical?: boolean;
  preload?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden bg-near-black",
        vertical ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          data-cursor="PLAY"
          className="absolute inset-0 block h-full w-full"
        >
          <Image
            src={youtubeThumb(id, vertical ? "hq" : "max")}
            alt=""
            fill
            preload={preload}
            sizes={vertical ? "(min-width: 768px) 25vw, 50vw" : "(min-width: 1024px) 80vw, 100vw"}
            className="object-cover brightness-[0.8] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-near-black transition-transform group-hover:scale-110 md:h-20 md:w-20">
              <Play className="h-6 w-6 translate-x-0.5 fill-current md:h-7 md:w-7" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
