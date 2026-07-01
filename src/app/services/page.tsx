import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/sections/cards";
import { CTABanner } from "@/components/sections/cta";
import { FadeIn } from "@/components/sections/motion";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI marketing strategy, automation, chatbot development, lead generation, content automation, SEO, CRM, and consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="AI marketing services for growth, automation, and customer journeys"
            description="Choose a focused project or build a complete AI marketing system across strategy, implementation, and optimization."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FadeIn key={service.slug}>
                <div className="h-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                  <ServiceCard service={service} />
                  <div className="mt-5 grid gap-2">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <p key={benefit} className="flex gap-2 text-sm text-[#6B7280]">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#8DD4DD]" />
                        {benefit}
                      </p>
                    ))}
                  </div>
                  <ButtonLink href={`/services/${service.slug}`} variant="secondary" className="mt-6 w-full">
                    Learn More
                  </ButtonLink>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </>
  );
}
