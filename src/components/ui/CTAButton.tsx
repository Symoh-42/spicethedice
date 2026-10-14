import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  cursor = "OPEN",
  className,
  icon = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  cursor?: string;
  className?: string;
  icon?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] transition-colors";

  const variants = {
    primary: "bg-accent px-7 py-4 text-near-black hover:bg-text",
    outline:
      "border border-text/30 px-7 py-4 text-text hover:border-accent hover:text-accent",
    ghost: "text-text hover:text-accent",
  };

  return (
    <Link
      href={href}
      data-cursor={cursor}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
