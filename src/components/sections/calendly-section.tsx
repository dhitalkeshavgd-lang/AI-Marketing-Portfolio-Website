import { CalendarDays, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { calendlyUrl } from "@/data/site";

export function CalendlySection() {
  return (
    <Section className="bg-[#F9FAFB]">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Booking"
            title="Schedule a strategy call"
            description="Choose a time for a focused consultation about your AI marketing goals, automation opportunities, and growth roadmap."
          />
          <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <CalendarDays className="size-7 text-[#60B0BE]" />
            <p className="mt-4 text-sm leading-7 text-[#6B7280]">
              The embedded calendar is lazy-loaded for performance. You can also open Calendly in a new tab.
            </p>
            <ButtonLink href={calendlyUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="mt-5">
              Open Calendly <ExternalLink className="size-4" />
            </ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
          <iframe
            title="Book a consultation with Altter Keshav"
            src={calendlyUrl}
            className="h-[720px] w-full"
            loading="lazy"
          />
        </div>
      </Container>
    </Section>
  );
}
