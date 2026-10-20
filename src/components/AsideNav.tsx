"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";
import { BookOpenSharp, Braces, Figma } from 'pixelarticons/react'

const sections = [
  { id: "experience", label: "Experience", Icon: BookOpenSharp },
  { id: "projects", label: "Projects", Icon: Braces },
  { id: "designs", label: "Designs", Icon: Figma },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function AsideNav() {
  const { t } = useLanguage();
  const labelFor = (id: string, label: string) => t(label, ({ experience: "Experiencia", projects: "Proyectos", designs: "Diseños", contact: "Contacto" })[id as "experience" | "projects" | "designs" | "contact"]);
  const [activeSection, setActiveSection] = useState("");
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sections.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    let frame: number | null = null;

    const updateActiveSection = () => {
      frame = null;
      const navHeight = mobileNavRef.current?.getBoundingClientRect().height ?? 0;
      const visibleHeight = window.innerHeight - navHeight;
      const readingLine = Math.min(200, visibleHeight * 0.3);
      let current = "";

      // Section height does not affect activation. Keep the last section whose
      // heading has crossed the reading line, including gaps between sections.
      for (const { id, element } of targets) {
        if (element.getBoundingClientRect().top <= readingLine) current = id;
      }

      const last = targets.at(-1);
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom && last && last.element.getBoundingClientRect().top < visibleHeight) {
        current = last.id;
      }
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);

    // Recalculate after images load or translated content changes the layout.
    const resizeObserver = typeof ResizeObserver === "undefined"
      ? null : new ResizeObserver(scheduleUpdate);
    resizeObserver?.observe(document.body);
    if (mobileNavRef.current) resizeObserver?.observe(mobileNavRef.current);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      resizeObserver?.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveSection(id);
    element.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <nav aria-label={t("Section navigation", "Navegación por secciones")} className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 bg-gray-700/30 backdrop-blur-md rounded-l p-3">
        {sections.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            aria-controls={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => scrollTo(id)}
            className={cn(
              "p-3 rounded-l transition-all duration-300",
              activeSection === id
                ? "bg-gray-600 text-white scale-110"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            )}
            title={labelFor(id, label)}
            aria-label={labelFor(id, label)}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      <nav ref={mobileNavRef} aria-label={t("Section navigation", "Navegación por secciones")} className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around bg-gray-700/55 backdrop-blur-md border-t border-white/10 p-2 pb-3">
        {sections.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            aria-controls={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => scrollTo(id)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 min-w-16",
              activeSection === id
                ? "text-blue-400"
                : "text-gray-400 hover:text-white"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px]">{labelFor(id, label)}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
