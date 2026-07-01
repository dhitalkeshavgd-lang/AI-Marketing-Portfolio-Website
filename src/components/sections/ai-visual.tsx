"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Sparkles, Target, Zap } from "lucide-react";

export function AiVisual() {
  const reduce = useReducedMotion();
  const cards = [
    { icon: Target, label: "Lead intent", className: "left-4 top-10" },
    { icon: Zap, label: "Automation", className: "right-3 top-28" },
    { icon: Sparkles, label: "AI content", className: "left-10 bottom-8" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-[2rem] border border-white/70 bg-white/60 shadow-[0_30px_90px_rgba(96,176,190,0.18)] backdrop-blur-xl" />
      <motion.div
        className="absolute inset-16 rounded-full bg-[conic-gradient(from_180deg,#60B0BE,#8DD4DD,#3D98A6,#60B0BE)] opacity-80 blur-sm"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />
      <div className="absolute inset-24 rounded-full bg-white shadow-inner" />
      <motion.div
        className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      >
        <BrainCircuit className="size-16 text-[#60B0BE]" />
      </motion.div>
      <div className="absolute left-1/2 top-1/2 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#60B0BE]/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[74%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#8DD4DD]/40 to-transparent" />
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            className={`absolute ${card.className} flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_18px_40px_rgba(17,24,39,0.10)] backdrop-blur`}
            animate={reduce ? undefined : { y: [0, index % 2 ? 9 : -9, 0] }}
            transition={{ repeat: Infinity, duration: 4 + index, ease: "easeInOut" }}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#EAF8FA] text-[#60B0BE]">
              <Icon className="size-4" />
            </span>
            <span className="text-sm font-semibold text-[#111827]">{card.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
