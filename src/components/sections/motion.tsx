"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#60B0BE]/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 28, 0], y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-[#8DD4DD]/16 blur-3xl"
        animate={reduce ? undefined : { x: [0, -24, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 left-1/2 h-72 w-72 rounded-full bg-[#3D98A6]/12 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Counter({ value, label }: { value: string; label: string }) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-[#E5E7EB] bg-white/80 p-6 shadow-[0_18px_40px_rgba(17,24,39,0.06)] backdrop-blur">
        <div className="font-heading text-4xl font-bold text-[#111827]">{value}</div>
        <div className="mt-2 text-sm font-medium text-[#6B7280]">{label}</div>
      </div>
    </FadeIn>
  );
}
