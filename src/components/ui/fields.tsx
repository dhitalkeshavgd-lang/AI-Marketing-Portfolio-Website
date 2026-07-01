"use client";

import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label.Root className="text-sm font-semibold text-[#111827]">{label}</Label.Root>
      {children}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

export function Input(props: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#60B0BE] focus:ring-4 focus:ring-[#60B0BE]/10",
        props.className,
      )}
      {...props}
    />
  );
}

export function Textarea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full resize-y rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#60B0BE] focus:ring-4 focus:ring-[#60B0BE]/10",
        props.className,
      )}
      {...props}
    />
  );
}

export function SelectField({
  value,
  onValueChange,
  placeholder,
  items,
}: {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: string[];
}) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="flex h-12 w-full items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white px-4 text-left text-sm text-[#111827] outline-none transition focus:border-[#60B0BE] focus:ring-4 focus:ring-[#60B0BE]/10">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="size-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-50 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xl">
          <Select.Viewport className="p-2">
            {items.map((item) => (
              <Select.Item
                key={item}
                value={item}
                className="cursor-pointer rounded-xl px-3 py-2 text-sm outline-none transition hover:bg-[#F3F4F6] data-[highlighted]:bg-[#EAF8FA]"
              >
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
