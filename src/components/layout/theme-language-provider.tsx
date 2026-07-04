"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Language = "en" | "np";
type Theme = "light" | "dark";

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    book: "Book Consultation",
    language: "NP",
    theme: "Toggle theme",
  },
  np: {
    home: "गृहपृष्ठ",
    about: "बारेमा",
    services: "सेवाहरू",
    portfolio: "पोर्टफोलियो",
    blog: "ब्लग",
    contact: "सम्पर्क",
    book: "परामर्श बुक गर्नुहोस्",
    language: "EN",
    theme: "थिम बदल्नुहोस्",
  },
} as const;

type PreferenceContext = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: Record<keyof typeof translations.en, string>;
};

const Context = createContext<PreferenceContext | null>(null);

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const savedLanguage = window.localStorage.getItem("language") as Language | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme ?? (prefersDark ? "dark" : "light"));
    setLanguageState(savedLanguage ?? "en");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "np" ? "ne" : "en";
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo<PreferenceContext>(
    () => ({
      language,
      theme,
      setLanguage: setLanguageState,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      toggleLanguage: () => setLanguageState((current) => (current === "en" ? "np" : "en")),
      t: translations[language],
    }),
    [language, theme],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePreferences() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("usePreferences must be used inside ThemeLanguageProvider");
  }
  return context;
}
