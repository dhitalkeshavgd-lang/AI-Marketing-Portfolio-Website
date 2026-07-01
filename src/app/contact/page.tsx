import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation with Altter Keshav for AI marketing strategy, automation, and lead generation.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Book a consultation for your AI marketing growth plan"
            description="Share your goals, current stack, and timeline. You will receive a practical next-step recommendation."
          />
          <div className="mt-10 grid gap-4">
            {[
              [Mail, "Email", contactInfo.email, `mailto:${contactInfo.email}`],
              [Phone, "Phone", contactInfo.phone, `tel:${contactInfo.phone}`],
              [MapPin, "Location", contactInfo.location, "#"],
            ].map(([Icon, label, value, href]) => {
              const TypedIcon = Icon as typeof Mail;
              return (
                <a key={label as string} href={href as string} className="flex gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 transition hover:border-[#BFE7EC] hover:bg-white">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#60B0BE] shadow-sm">
                    <TypedIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#6B7280]">{label as string}</span>
                    <span className="mt-1 block font-semibold text-[#111827]">{value as string}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
