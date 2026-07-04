import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost, CaseStudy, Service } from "@/types";
import { iconMap } from "@/components/sections/icon-map";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#BFE7EC] hover:bg-white hover:shadow-[0_22px_50px_rgba(17,24,39,0.10)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#60B0BE] shadow-sm transition group-hover:bg-[#EAF8FA]">
          <Icon className="size-6" />
        </span>
        <ArrowUpRight className="size-5 text-[#9CA3AF] transition group-hover:text-[#60B0BE]" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-[#111827]">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#6B7280]">{service.short}</p>
    </Link>
  );
}

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      href={`/services/${item.serviceSlug}`}
      className="group block rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_45px_rgba(17,24,39,0.06)] transition hover:-translate-y-1 hover:border-[#BFE7EC]"
    >
      <div className="mb-6 aspect-[16/10] rounded-2xl bg-[linear-gradient(135deg,rgba(96,176,190,0.14),rgba(141,212,221,0.14)),radial-gradient(circle_at_30%_20%,rgba(61,152,166,0.25),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(141,212,221,0.22),transparent_28%)] p-5">
        <div className="h-full rounded-2xl border border-white/70 bg-white/55 p-4 backdrop-blur">
          <div className="h-2 w-20 rounded-full bg-[#60B0BE]/40" />
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-xl bg-white/70" />
            <div className="h-28 rounded-xl bg-white/80" />
            <div className="h-16 rounded-xl bg-white/70" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-semibold text-[#60B0BE]">{item.industry}</p>
        <span className="rounded-full bg-[#EAF8FA] px-3 py-1 text-xs font-semibold text-[#2F7F8C]">
          {item.category}
        </span>
        <span className="rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-semibold text-[#6B7280]">
          {item.duration}
        </span>
      </div>
      <h3 className="mt-3 font-heading text-xl font-bold text-[#111827]">{item.title}</h3>
      <p className="mt-3 text-sm font-semibold text-[#111827]">{item.result}</p>
      <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.description}</p>
      <div className="mt-5 grid gap-3">
        <div className="rounded-2xl bg-[#F9FAFB] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60B0BE]">Challenge</p>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.challenge}</p>
        </div>
        <div className="rounded-2xl bg-[#F9FAFB] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60B0BE]">Solution</p>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.solution}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.metrics.map((metric) => (
          <span key={metric} className="rounded-full bg-[#EAF8FA] px-3 py-1 text-xs font-semibold text-[#60B0BE]">
            {metric}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tools.map((tool) => (
          <span key={tool} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-semibold text-[#6B7280]">
            {tool}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(17,24,39,0.10)]"
    >
      <div className="aspect-[16/10] bg-[linear-gradient(135deg,rgba(96,176,190,0.18),rgba(141,212,221,0.16)),radial-gradient(circle_at_24%_28%,rgba(61,152,166,0.25),transparent_30%)] p-5">
        <div className="flex h-full items-end rounded-2xl border border-white/70 bg-white/55 p-4 backdrop-blur">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#60B0BE] shadow-sm">
            {post.cover}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#6B7280]">
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-[#111827] transition group-hover:text-[#60B0BE]">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#6B7280]">{post.excerpt}</p>
      </div>
    </Link>
  );
}
