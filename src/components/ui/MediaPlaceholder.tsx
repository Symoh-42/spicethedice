import { Clapperboard, Music2, Sparkles, PenTool, Wand2, Film } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/categories";

const icons: Record<Category, typeof Film> = {
  film: Clapperboard,
  music: Music2,
  content: Sparkles,
  design: PenTool,
  vfx: Wand2,
};

export default function MediaPlaceholder({
  category,
  label,
  className,
  compact = false,
}: {
  category?: Category;
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  const Icon = category ? icons[category] : Film;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(239,35,60,0.16), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,255,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <Icon
          className={cn(
            "text-text/25",
            compact ? "h-6 w-6" : "h-10 w-10 md:h-14 md:w-14"
          )}
          aria-hidden="true"
          strokeWidth={1.25}
        />
        {label && !compact && (
          <span className="font-heading text-[10px] font-medium uppercase tracking-[0.25em] text-text/30">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
