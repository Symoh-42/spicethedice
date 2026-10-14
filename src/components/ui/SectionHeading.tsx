import RevealText from "./RevealText";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  lines,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  lines: string[];
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}
      <RevealText
        lines={lines}
        className="font-heading text-4xl font-medium uppercase leading-[0.95] tracking-tight text-text sm:text-5xl md:text-6xl"
      />
      {description && (
        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
