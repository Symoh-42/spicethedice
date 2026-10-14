"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || reducedMotion) return;

    rootRef.current?.classList.remove("hidden");
    document.body.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      setLabel(target?.dataset.cursor ?? null);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.body.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <div ref={rootRef} className="hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[110] mix-blend-difference"
        style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{
            width: label ? 72 : 14,
            height: label ? 72 : 14,
          }}
          transition={{ type: "spring", damping: 24, stiffness: 300 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-text flex items-center justify-center"
        >
          {label && (
            <span className="text-[10px] font-heading font-medium uppercase tracking-widest text-near-black">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
