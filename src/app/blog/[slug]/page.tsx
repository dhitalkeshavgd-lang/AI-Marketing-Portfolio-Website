import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Send, Share2 } from "lucide-react";
import { BlogCard } from "@/components/sections/cards";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { blogPosts } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Section>
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#60B0BE]">{post.category}</p>
          <h1 className="mt-5 font-heading text-4xl font-bold text-[#111827] sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#6B7280]">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#6B7280]">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="mt-10 aspect-[16/8] rounded-[2rem] bg-[linear-gradient(135deg,rgba(96,176,190,0.18),rgba(141,212,221,0.16)),radial-gradient(circle_at_24%_28%,rgba(61,152,166,0.25),transparent_30%)] p-6">
            <div className="flex h-full items-end rounded-[1.5rem] border border-white/70 bg-white/55 p-6 backdrop-blur">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#60B0BE] shadow-sm">{post.cover}</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-[220px_1fr_160px]">
          <aside className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280] lg:sticky lg:top-28 lg:self-start">
            <p className="font-heading font-bold text-[#111827]">Table of Contents</p>
            <div className="mt-4 grid gap-2">
              {post.content.map((_, index) => (
                <a key={index} href={`#section-${index + 1}`} className="hover:text-[#60B0BE]">
                  Section {index + 1}
                </a>
              ))}
            </div>
          </aside>
          <article className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <section key={paragraph} id={`section-${index + 1}`} className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-[#111827]">Key idea {index + 1}</h2>
                <p className="mt-3 leading-8 text-[#6B7280]">{paragraph}</p>
              </section>
            ))}
            <div className="mt-12 rounded-2xl bg-[#111827] p-8 text-white">
              <h2 className="font-heading text-3xl font-bold">Want AI marketing insights in your inbox?</h2>
              <p className="mt-3 text-white/70">Book a consultation and get a practical growth roadmap for your business.</p>
              <ButtonLink href="/contact" className="mt-6 bg-white text-[#111827] hover:bg-[#F9FAFB]">
                Book Consultation
              </ButtonLink>
            </div>
          </article>
          <aside className="flex gap-3 lg:flex-col lg:items-end">
            {[Share2, Send, Mail].map((Icon, index) => (
              <span key={index} className="grid size-11 place-items-center rounded-2xl border border-[#E5E7EB] bg-white text-[#60B0BE] shadow-sm">
                <Icon className="size-4" />
              </span>
            ))}
          </aside>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-[#111827]">Related Posts</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
