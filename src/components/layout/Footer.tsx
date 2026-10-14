import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { socials } from "@/lib/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-near-black pb-28 md:pb-0">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <Link
          href="/contact"
          data-cursor="OPEN"
          className="group flex flex-col gap-4 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between"
        >
          <span className="font-heading text-[13vw] font-medium uppercase leading-[0.9] tracking-tight text-text transition-colors group-hover:text-accent md:text-[5.5vw]">
            Start a Project
          </span>
          <ArrowRight
            className="mb-2 h-10 w-10 shrink-0 text-text transition-transform group-hover:translate-x-2 group-hover:text-accent md:h-14 md:w-14"
            aria-hidden="true"
          />
        </Link>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-lg font-semibold uppercase tracking-widest text-text">
              Spice the Dice
            </p>
            <p className="mt-2 text-sm text-muted">
              {siteConfig.productionName}
            </p>
            <p className="mt-4 text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Social
            </p>
            <ul className="mt-4 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text/80 transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Location
            </p>
            <p className="mt-4 text-sm text-text/80">{siteConfig.location}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.productionName}. All rights reserved.
          </p>
          <p>Built for the screen.</p>
        </div>
      </div>
    </footer>
  );
}
