import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, Share2 } from "lucide-react";
import { Container } from "@/components/ui/section";
import { contactInfo, navigation, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB]">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center" aria-label="Altter Keshav home">
            <Image
              src="/Altter-Keshav-new-logo1.png"
              alt="Altter Keshav logo"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#6B7280]">
            AI marketing consulting for teams that want smarter automation, stronger lead generation, and measurable growth.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="grid size-10 place-items-center rounded-xl bg-white text-[#60B0BE] shadow-sm" href="#" aria-label="LinkedIn">
              <Share2 className="size-4" />
            </Link>
            <Link className="grid size-10 place-items-center rounded-xl bg-white text-[#60B0BE] shadow-sm" href="#" aria-label="Twitter">
              <Send className="size-4" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold text-[#111827]">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[#6B7280] hover:text-[#60B0BE]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold text-[#111827]">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-[#6B7280] hover:text-[#60B0BE]">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold text-[#111827]">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-[#6B7280]">
            <a href={`mailto:${contactInfo.email}`} className="flex gap-3 hover:text-[#60B0BE]">
              <Mail className="size-4 shrink-0" />
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex gap-3 hover:text-[#60B0BE]">
              <Phone className="size-4 shrink-0" />
              {contactInfo.phone}
            </a>
            <span className="flex gap-3">
              <MapPin className="size-4 shrink-0" />
              {contactInfo.location}
            </span>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-[#E5E7EB] py-6 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Altter Keshav. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-[#60B0BE]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#60B0BE]">Terms</Link>
        </div>
      </Container>
    </footer>
  );
}
