"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mobileNavLinks } from "@/lib/site-config";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] bg-near-black md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex h-full flex-col justify-center px-8">
            <ul className="space-y-2">
              {mobileNavLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-4xl font-medium uppercase tracking-tight text-text transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            onClick={onClose}
            className="absolute bottom-8 left-8 right-8 flex items-center justify-center bg-accent px-6 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-near-black"
          >
            Start a Project
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
