"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/process";

export default function ProcessTimeline() {
  return (
    <div>
      {processSteps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-white/10 py-10 md:grid-cols-[120px_1fr_1fr] md:items-center md:gap-10"
        >
          <span className="font-heading text-4xl font-medium text-accent md:text-5xl">
            {step.number}
          </span>
          <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-text md:text-3xl">
            {step.title}
          </h3>
          <p className="col-span-2 text-base text-muted md:col-span-1">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
