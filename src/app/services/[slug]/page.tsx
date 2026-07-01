import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/cards";
import { iconMap } from "@/components/sections/icon-map";
import { CTABanner } from "@/components/sections/cta";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const Icon = iconMap[service.icon];
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section className="overflow-hidden">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="grid size-16 place-items-center rounded-2xl bg-[#EAF8FA] text-[#60B0BE]">
              <Icon className="size-8" />
            </div>
            <h1 className="mt-7 font-heading text-4xl font-bold text-[#111827] sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">{service.description}</p>
            <ButtonLink href="/contact" size="lg" className="mt-9">
              Book Consultation <ArrowRight className="size-5" />
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
            <div className="aspect-square rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(96,176,190,0.16),rgba(141,212,221,0.18)),radial-gradient(circle_at_30%_20%,rgba(61,152,166,0.24),transparent_30%)] p-6">
              <div className="grid h-full place-items-center rounded-[1.25rem] border border-white/70 bg-white/55 backdrop-blur">
                <Icon className="size-28 text-[#60B0BE]" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionTitle eyebrow="Overview" title="What this solves" />
          </div>
          <div className="grid gap-4 lg:col-span-2">
            {service.problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="flex gap-3 text-[#111827]">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#8DD4DD]" />
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Benefits" title="Expected improvements" />
            <div className="mt-8 grid gap-3">
              {service.benefits.map((benefit) => (
                <p key={benefit} className="flex gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm font-medium text-[#111827] shadow-sm">
                  <CheckCircle2 className="size-5 shrink-0 text-[#60B0BE]" />
                  {benefit}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Process" title={`Typical timeline: ${service.timeline}`} />
            <div className="mt-8 grid gap-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#EAF8FA] font-heading font-bold text-[#60B0BE]">
                    {index + 1}
                  </span>
                  <p className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm leading-7 text-[#6B7280] shadow-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F9FAFB]">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <SectionTitle eyebrow="FAQs" title="Common questions" />
          <FAQAccordion items={service.faqs} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle eyebrow="Related Services" title="Build a stronger system around this service" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
