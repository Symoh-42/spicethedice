"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoPlayer({
  src,
  poster,
  className,
  comingSoonLabel = "Showreel Coming Soon",
}: {
  src?: string;
  poster?: string;
  className?: string;
  comingSoonLabel?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  if (!src) {
    return (
      <div
        className={cn(
          "relative flex aspect-video w-full items-center justify-center overflow-hidden bg-charcoal",
          className
        )}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(239,35,60,0.12), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-text/20">
            <Play className="h-5 w-5 translate-x-0.5 text-text/50" aria-hidden="true" />
          </div>
          <p className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-text/50">
            {comingSoonLabel}
          </p>
        </div>
      </div>
    );
  }

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    containerRef.current?.requestFullscreen?.();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-video w-full overflow-hidden bg-near-black",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={togglePlay}
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute inset-0 flex items-center justify-center"
      >
        {!playing && (
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-text/10 backdrop-blur-sm transition-transform group-hover:scale-105">
            <Play className="h-7 w-7 translate-x-0.5 text-text" aria-hidden="true" />
          </span>
        )}
      </button>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-near-black/90 to-transparent px-5 py-4 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="text-text"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <div className="h-[2px] flex-1 bg-text/20">
          <div
            className="h-full bg-accent transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="text-text"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Fullscreen"
          className="text-text"
        >
          <Maximize size={18} />
        </button>
      </div>
    </div>
  );
}
