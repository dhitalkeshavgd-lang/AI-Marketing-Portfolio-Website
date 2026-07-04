"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseStudy } from "@/types";
import { usePreferences } from "@/components/layout/theme-language-provider";

export function PortfolioFilter({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState("All");
  const { language } = usePreferences();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.map((item) => item.category)))],
    [caseStudies],
  );
  const filtered = active === "All" ? caseStudies : caseStudies.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
          <Filter className="size-4 text-[#60B0BE]" />
          {language === "np" ? "कामहरू फिल्टर गर्नुहोस्" : "Filter by project type"}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={
                active === category
                  ? "shrink-0 rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  : "shrink-0 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#6B7280] transition hover:border-[#BFE7EC] hover:text-[#60B0BE]"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 grid gap-5 lg:grid-cols-2">
        {filtered.map((item) => (
          <motion.article
            layout
            key={item.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_45px_rgba(17,24,39,0.06)]"
          >
            <div className="mb-6 aspect-[16/9] rounded-2xl bg-[linear-gradient(135deg,rgba(96,176,190,0.16),rgba(141,212,221,0.16)),radial-gradient(circle_at_30%_20%,rgba(61,152,166,0.24),transparent_30%)] p-5">
              <div className="flex h-full items-end rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F7F8C]">{item.category}</p>
                  <p className="mt-2 font-heading text-2xl font-bold text-[#111827]">{item.result}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#EAF8FA] px-3 py-1 text-xs font-semibold text-[#60B0BE]">{item.industry}</span>
              <span className="rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-semibold text-[#6B7280]">{item.duration}</span>
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold text-[#111827]">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.description}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-[#F9FAFB] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60B0BE]">Challenge</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.challenge}</p>
              </div>
              <div className="rounded-2xl bg-[#F9FAFB] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60B0BE]">Solution</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.solution}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {item.metrics.map((metric) => (
                <span key={metric} className="rounded-2xl bg-[#EAF8FA] px-4 py-3 text-sm font-bold text-[#2F7F8C]">
                  {metric}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#6B7280]">
                  {tool}
                </span>
              ))}
            </div>
            <Link href={`/services/${item.serviceSlug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#60B0BE]">
              View related service <ArrowUpRight className="size-4" />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
