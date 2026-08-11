"use client";

import { useEffect, useState } from "react";
import { Code2, Brush, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "experience", label: "Experience", Icon: GraduationCap },
  { id: "projects", label: "Projects", Icon: Code2 },
  { id: "designs", label: "Designs", Icon: Brush },
];

export default function AsideNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 bg-gray-700/55 backdrop-blur-md rounded-2xl p-3">
        {sections.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={cn(
              "p-3 rounded-xl transition-all duration-300",
              activeSection === id
                ? "bg-blue-600 text-white scale-110"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            )}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around bg-gray-700/55 backdrop-blur-md border-t border-white/10 p-2 pb-3">
        {sections.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 min-w-16",
              activeSection === id
                ? "text-blue-400"
                : "text-gray-400 hover:text-white"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
