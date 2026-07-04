import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { AiVisual } from "@/components/sections/ai-visual";
import { BlogCard, CaseStudyCard, ServiceCard } from "@/components/sections/cards";
import { CTABanner } from "@/components/sections/cta";
import { AnimatedBackground, Counter, FadeIn } from "@/components/sections/motion";
import { ResumeSection } from "@/components/sections/resume-section";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { blogPosts, caseStudies, services, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Marketing Expert & Consultant",
  description:
    "Altter Keshav helps businesses use artificial intelligence to automate marketing, generate leads, optimize customer journeys, and scale faster.",
};

export default function Home() {
  const stats = [
    ["100+", "Projects"],
    ["50+", "Happy Clients"],
    ["5+", "Years Experience"],
    ["95%", "Client Satisfaction"],
  ];

  const reasons = [
    "Industry Experience",
    "Data Driven Decisions",
    "AI Powered Growth",
    "Personalized Strategy",
    "Fast Implementation",
    "Long-term Support",
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-24">
        <AnimatedBackground />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/80 px-4 py-2 text-sm font-semibold text-[#60B0BE] shadow-sm backdrop-blur">
              <Sparkles className="size-4" />
              AI marketing systems for measurable growth
            </div>
            <h1 className="mt-7 font-heading text-5xl font-bold tracking-normal text-[#111827] sm:text-6xl lg:text-7xl">
              Scale faster with AI-powered marketing systems
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
              Helping businesses leverage Artificial Intelligence to automate marketing, generate leads, optimize customer journeys, and scale faster.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Book Consultation <ArrowRight className="size-5" />
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="secondary">
                View Services
              </ButtonLink>
              <ButtonLink href="/portfolio" size="lg" variant="secondary">
                View Portfolio
              </ButtonLink>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <AiVisual />
          </FadeIn>
        </Container>
      </section>

      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <Counter key={label} value={value} label={label} />
          ))}
        </div>
      </Container>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Premium AI marketing services built for modern growth teams"
            description="Strategy, automation, content systems, lead generation, and consulting delivered with practical implementation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <FadeIn key={service.slug}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container>
          <SectionTitle
            eyebrow="Proof"
            title="Five detailed case studies with outcomes clients can understand"
            description="Detailed project stories showing how AI marketing systems translate into pipeline, time savings, traffic growth, and revenue impact."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((item) => (
              <CaseStudyCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </Section>

      <ResumeSection />

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Why Choose Me"
            title="A consulting partner for execution, not just ideas"
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <CheckCircle2 className="size-6 text-[#8DD4DD]" />
                <h3 className="mt-5 font-heading text-xl font-bold text-[#111827]">{reason}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  Clear thinking, careful implementation, and a growth lens from strategy through optimization.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container>
          <SectionTitle eyebrow="Testimonials" title="Trusted by growth-minded teams" centered />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <p className="text-base leading-8 text-[#111827]">&quot;{item.quote}&quot;</p>
                <footer className="mt-6">
                  <p className="font-semibold text-[#111827]">{item.name}</p>
                  <p className="mt-1 text-sm text-[#6B7280]">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle eyebrow="Insights" title="AI marketing notes and playbooks" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
