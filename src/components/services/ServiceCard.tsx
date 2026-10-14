"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services#${service.slug}`}
        data-cursor="OPEN"
        className="group flex flex-col gap-6 border-t border-white/10 py-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-start gap-6 md:items-center">
          <span className="font-heading text-sm text-accent">
            {service.number}
          </span>
          <div>
            <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-text transition-colors group-hover:text-accent md:text-3xl">
              {service.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted">
              {service.description}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className="h-8 w-8 shrink-0 text-text/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}
