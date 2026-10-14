import Link from "next/link";
import { Film, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MobileStickyBar() {
  const contactHref = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}`
    : "/contact";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[65] grid grid-cols-3 border-t border-white/10 bg-near-black/95 backdrop-blur-md md:hidden"
      aria-label="Quick actions"
    >
      <Link
        href="/work"
        className="flex flex-col items-center gap-1 py-3 text-[10px] font-heading font-medium uppercase tracking-widest text-text/80"
      >
        <Film size={18} aria-hidden="true" />
        Work
      </Link>
      <Link
        href={contactHref}
        target={siteConfig.whatsapp ? "_blank" : undefined}
        rel={siteConfig.whatsapp ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center gap-1 border-x border-white/10 py-3 text-[10px] font-heading font-medium uppercase tracking-widest text-text/80"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Contact
      </Link>
      <Link
        href="/contact"
        className="flex flex-col items-center gap-1 bg-accent py-3 text-[10px] font-heading font-semibold uppercase tracking-widest text-near-black"
      >
        <Sparkles size={18} aria-hidden="true" />
        Start
      </Link>
    </nav>
  );
}
