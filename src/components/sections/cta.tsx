import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export function CTABanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-[#111827] p-8 text-white shadow-[0_30px_80px_rgba(17,24,39,0.20)] sm:p-12">
          <div className="relative">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[#8DD4DD]/25 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 size-72 rounded-full bg-[#3D98A6]/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A5B4FC]">AI growth partner</p>
                <h2 className="mt-4 font-heading text-3xl font-bold sm:text-5xl">Ready to Grow with AI?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Build a practical AI marketing system that saves time, improves lead quality, and helps your business scale faster.
                </p>
              </div>
              <ButtonLink href="/contact" size="lg" className="bg-white text-[#111827] hover:bg-[#F9FAFB]">
                Book Consultation <ArrowRight className="size-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
