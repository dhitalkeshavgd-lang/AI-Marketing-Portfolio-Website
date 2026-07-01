import type { Metadata } from "next";
import { Award } from "lucide-react";
import { CTABanner } from "@/components/sections/cta";
import { FadeIn } from "@/components/sections/motion";
import { Container, Section, SectionTitle } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Altter Keshav, an AI marketing expert and consultant based in Kathmandu.",
};

export default function AboutPage() {
  const skills = [
    ["AI Marketing", 95],
    ["Automation", 90],
    ["SEO", 88],
    ["Lead Generation", 93],
    ["ChatGPT & AI Tools", 96],
    ["Digital Strategy", 92],
  ];

  const timeline = [
    ["2021", "Built early automation systems for digital campaigns and sales follow-up."],
    ["2022", "Expanded into AI-assisted content, CRM workflows, and lead generation systems."],
    ["2024", "Developed consulting frameworks for AI marketing strategy and team enablement."],
    ["2026", "Helping businesses adopt practical AI systems for measurable growth."],
  ];

  return (
    <>
      <Section className="relative overflow-hidden">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#60B0BE]">About</p>
            <h1 className="mt-5 font-heading text-4xl font-bold text-[#111827] sm:text-6xl">
              Building practical AI marketing systems for ambitious businesses.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Altter Keshav helps teams turn AI from a confusing trend into a clear operating advantage. The work blends marketing strategy, automation, customer journey design, and hands-on implementation.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
              <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(96,176,190,0.16),rgba(141,212,221,0.16)),radial-gradient(circle_at_50%_20%,rgba(61,152,166,0.22),transparent_30%)] p-6">
                <div className="flex h-full flex-col justify-end rounded-[1.25rem] border border-white/70 bg-white/55 p-6 backdrop-blur">
                  <p className="font-heading text-2xl font-bold text-[#111827]">Professional Image Placeholder</p>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">Replace with a high-quality portrait for stronger personal trust.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container className="grid gap-5 md:grid-cols-3">
          {["Mission", "Vision", "Values"].map((item, index) => (
            <div key={item} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#111827]">{item}</h2>
              <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                {index === 0
                  ? "Make AI marketing useful, measurable, and accessible for businesses that want real growth."
                  : index === 1
                    ? "Help modern teams build intelligent marketing operations that compound over time."
                    : "Clarity, trust, useful innovation, careful execution, and long-term client success."}
              </p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Experience" title="Timeline" />
            <div className="mt-10 grid gap-5">
              {timeline.map(([year, text]) => (
                <div key={year} className="flex gap-4">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#EAF8FA] font-heading font-bold text-[#60B0BE]">
                    {year}
                  </div>
                  <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                    <p className="text-sm leading-7 text-[#6B7280]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Skills" title="Core capabilities" />
            <div className="mt-10 grid gap-6">
              {skills.map(([skill, value]) => (
                <div key={skill}>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-[#111827]">
                    <span>{skill}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-[#EAF8FA]">
                    <div className="h-3 rounded-full bg-gradient-to-r from-[#60B0BE] to-[#8DD4DD]" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container>
          <SectionTitle eyebrow="Achievements" title="Credentials and certificates" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["AI Marketing Strategy", "Automation Systems", "Growth Consulting"].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <Award className="size-7 text-[#60B0BE]" />
                <h3 className="mt-5 font-heading text-xl font-bold text-[#111827]">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">Certificate placeholder ready for verified credentials.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
