import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
};

const variants = {
  primary:
    "bg-[#60B0BE] text-white shadow-[0_18px_42px_rgba(96,176,190,0.28)] hover:bg-[#2F7F8C]",
  secondary:
    "border border-[#E5E7EB] bg-white/80 text-[#111827] shadow-[0_16px_36px_rgba(17,24,39,0.08)] hover:border-[#BFE7EC] hover:bg-white",
  ghost: "text-[#111827] hover:bg-[#F3F4F6]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60B0BE] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60B0BE] focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function IconButton({
  className,
  children,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white/85 text-[#111827] shadow-sm transition hover:border-[#BFE7EC] hover:text-[#60B0BE]",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
