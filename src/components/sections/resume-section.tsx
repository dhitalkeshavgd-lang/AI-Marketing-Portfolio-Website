import { Download, FileText, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionTitle } from "@/components/ui/section";

export function ResumeSection() {
  const highlights = [
    "AI marketing strategy and roadmap design",
    "Automation systems for CRM, email, leads, and reporting",
    "ChatGPT, chatbot, content, SEO, and growth workflow implementation",
  ];

  return (
    <Section className="bg-[#F9FAFB]">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionTitle
          eyebrow="Resume"
          title="Download the AI marketing consultant profile"
          description="A concise CV-style overview of Altter Keshav's consulting focus, capabilities, and project experience."
        />
        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#EAF8FA] text-[#60B0BE]">
              <FileText className="size-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-2xl font-bold text-[#111827]">Altter Keshav Resume</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                Includes consulting positioning, core skills, representative outcomes, and services for AI-powered growth.
              </p>
              <div className="mt-5 grid gap-3">
                {highlights.map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-medium text-[#111827]">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-[#60B0BE]" />
                    {item}
                  </p>
                ))}
              </div>
              <ButtonLink
                href="/altter-keshav-resume.txt"
                className="mt-6"
                download="Altter-Keshav-Resume.txt"
              >
                Download Resume <Download className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
