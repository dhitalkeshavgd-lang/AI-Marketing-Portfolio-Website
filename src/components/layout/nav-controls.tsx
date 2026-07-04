"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/button";
import { usePreferences } from "@/components/layout/theme-language-provider";

export function NavControls() {
  const { theme, t, toggleLanguage, toggleTheme } = usePreferences();

  return (
    <div className="flex items-center gap-2">
      <IconButton onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </IconButton>
      <button
        onClick={toggleLanguage}
        className="inline-flex h-11 items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white/85 px-3 text-sm font-bold text-[#111827] shadow-sm transition hover:border-[#BFE7EC] hover:text-[#60B0BE]"
        aria-label="Switch language"
      >
        <Languages className="size-4" />
        {t.language}
      </button>
    </div>
  );
}
