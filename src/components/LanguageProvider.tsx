"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { Languages } from "lucide-react";

const storageKey = "portfolio-language";
type Language = "en" | "es";
let currentLanguage: Language = "en";
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
};
const notify = () => listeners.forEach((listener) => listener());
const LanguageContext = createContext({ language: "en" as Language, t: (en: string, es: string) => en });

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, () => currentLanguage, () => "en" as Language);

  useEffect(() => {
    const restore = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved === "en" || saved === "es") {
          currentLanguage = saved;
          notify();
        }
      } catch { /* The switch also works when storage is unavailable. */ }
    };
    restore();
    window.addEventListener("storage", restore);
    return () => window.removeEventListener("storage", restore);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    currentLanguage = language === "en" ? "es" : "en";
    try { localStorage.setItem(storageKey, currentLanguage); } catch { /* Optional persistence. */ }
    notify();
  };
  const t = (en: string, es: string) => language === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ language, t }}>
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={t("Cambiar idioma a español", "Switch language to English")}
        title={t("Cambiar a español", "Switch to English")}
        className="fixed right-4 top-4 z-50 flex min-h-11 items-center gap-2 border-2 border-black bg-gray-300 px-3 py-2 font-mono text-xs font-bold text-black shadow-[3px_3px_0_#6b7280] transition-[transform,box-shadow] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:right-6 sm:top-6"
      >
        <Languages size={16} aria-hidden="true" />
        <span lang="en" className={language === "en" ? "underline underline-offset-4" : "text-gray-600"}>EN</span>
        <span aria-hidden="true">/</span>
        <span lang="es" className={language === "es" ? "underline underline-offset-4" : "text-gray-600"}>ES</span>
      </button>
      {children}
    </LanguageContext.Provider>
  );
}
