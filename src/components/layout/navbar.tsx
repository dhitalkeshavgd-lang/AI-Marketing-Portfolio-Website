"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink, IconButton } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { NavControls } from "@/components/layout/nav-controls";
import { usePreferences } from "@/components/layout/theme-language-provider";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = usePreferences();
  const navLabels: Record<string, string> = {
    "/": t.home,
    "/about": t.about,
    "/services": t.services,
    "/portfolio": t.portfolio,
    "/blog": t.blog,
    "/contact": t.contact,
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/70 bg-white/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Altter Keshav home">
          <Image
            src="/Altter-Keshav-new-logo1.png"
            alt="Altter Keshav logo"
            width={148}
            height={44}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-semibold text-[#6B7280] transition hover:bg-[#F3F4F6] hover:text-[#111827] xl:px-4",
                pathname === item.href && "bg-[#EAF8FA] text-[#60B0BE]",
              )}
            >
              {navLabels[item.href] ?? item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <NavControls />
          <ButtonLink href="/contact" size="sm">{t.book}</ButtonLink>
        </div>
        <IconButton className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </IconButton>
      </Container>
      {open ? (
        <div className="border-t border-[#E5E7EB] bg-white lg:hidden">
          <Container className="py-4">
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6]"
                >
                  {navLabels[item.href] ?? item.label}
                </Link>
              ))}
              <div className="px-1 py-2">
                <NavControls />
              </div>
              <ButtonLink href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                {t.book}
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
