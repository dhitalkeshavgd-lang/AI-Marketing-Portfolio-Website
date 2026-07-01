import type { Metadata } from "next";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/sections/cards";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI marketing insights, automation playbooks, and growth strategy articles from Altter Keshav.",
};

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <Section>
      <Container>
        <SectionTitle
          eyebrow="Blog"
          title="AI marketing insights for smarter growth"
          description="Practical notes on automation, lead generation, content systems, chatbots, and marketing strategy."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              aria-label="Search blog"
              placeholder="Search articles"
              className="h-14 w-full rounded-2xl border border-[#E5E7EB] bg-white pl-12 pr-4 text-sm outline-none focus:border-[#60B0BE] focus:ring-4 focus:ring-[#60B0BE]/10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#6B7280]">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <BlogCard post={featured} />
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#60B0BE]">Featured Post</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#111827]">{featured.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#6B7280]">{featured.excerpt}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <span key={page} className="grid size-11 place-items-center rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#111827]">
              {page}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
