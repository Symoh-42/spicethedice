import Image from "next/image";
import MediaPlaceholder from "./MediaPlaceholder";
import type { ProjectMedia } from "@/lib/projects";
import type { Category } from "@/lib/categories";
import { cn } from "@/lib/utils";

export default function CinematicMedia({
  media,
  category,
  label,
  priority = false,
  sizes = "100vw",
  className,
  imgClassName,
  overlay = true,
}: {
  media?: ProjectMedia;
  category?: Category;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  overlay?: boolean;
}) {
  if (!media?.src) {
    return (
      <MediaPlaceholder
        category={category}
        label={label}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover grayscale-[0.55] contrast-[1.05] brightness-[0.85]",
          imgClassName
        )}
      />
      {overlay && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, rgba(239,35,60,0.12), rgba(5,5,5,0.4))",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
