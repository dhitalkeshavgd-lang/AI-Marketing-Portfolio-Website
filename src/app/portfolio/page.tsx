import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/sections/portfolio-filter";
import { CTABanner } from "@/components/sections/cta";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { caseStudies } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore AI marketing case studies for lead generation, automation, content systems, chatbots, and SEO growth.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            eyebrow="Portfolio"
            title="AI marketing case studies with measurable business outcomes"
            description="Filter real-world style project stories by growth function and see the systems, workflows, and outcomes behind each engagement."
          />
          <div className="mt-12">
            <PortfolioFilter caseStudies={caseStudies} />
          </div>
        </Container>
      </Section>
      <CTABanner />
    </>
  );
}
