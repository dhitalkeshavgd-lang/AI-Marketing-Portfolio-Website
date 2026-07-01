import { Container, Section } from "@/components/ui/section";

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-[#111827]">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-[#6B7280]">
          Contact form submissions are used only to respond to inquiries and provide consulting information. Messages may be stored locally for follow-up and operational records.
        </p>
      </Container>
    </Section>
  );
}
