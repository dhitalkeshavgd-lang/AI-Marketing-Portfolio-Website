import { Container, Section } from "@/components/ui/section";

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-[#111827]">Terms</h1>
        <p className="mt-6 leading-8 text-[#6B7280]">
          Website content is provided for general consulting information. Project scope, timelines, and deliverables are confirmed through written agreement before work begins.
        </p>
      </Container>
    </Section>
  );
}
