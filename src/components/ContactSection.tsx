"use client";

import { useState } from "react";
import { Copy, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import cardStyles from "./PortfolioWindowCard.module.css";

const email = "mariouppo1@gmail.com";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const mailto = `mailto:${email}?subject=${encodeURIComponent(t("Let's build something together", "Construyamos algo juntos"))}&body=${encodeURIComponent(t("Hi Mario, I saw your portfolio and I'd like to talk about a project.\n\n", "Hola Mario, vi tu portafolio y me gustaría hablar contigo sobre un proyecto.\n\n"))}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-20 w-full min-w-0 scroll-mt-24 px-4 sm:px-6">
      <div className="rounded-2xl border-[3px] border-gray-600 bg-neutral-950 p-6 shadow-[6px_6px_0_#6b7280] sm:p-8">
        <p className="mb-4 font-mono text-xs tracking-widest text-gray-400">{t("[ NEXT PROJECT: YOURS ]", "[ PRÓXIMO PROYECTO: EL TUYO ]")}</p>
        <h2 id="contact-heading" className="text-3xl font-black tracking-tight text-gray-100 sm:text-4xl">{t("Let's build something together.", "¿Construimos algo juntos?")}</h2>
        <p className="mb-6 mt-4 max-w-lg text-sm leading-relaxed text-gray-400">{t("Have an idea, a project, or a collaboration in mind? Tell me what you'd like to create.", "¿Tienes una idea, un proyecto o una colaboración en mente? Cuéntame qué te gustaría crear.")}</p>
        <a className="break-all font-mono text-sm text-gray-200 underline decoration-gray-500 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href={mailto}>{email}</a>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className={`${cardStyles.button} ${cardStyles.primary}`} href={mailto}><Mail size={16} aria-hidden="true" />{t("Email me", "Escríbeme")}</a>
          <button type="button" className={cardStyles.button} onClick={copyEmail}><Copy size={16} aria-hidden="true" />{t("Copy email", "Copiar correo")}</button>
        </div>
        <p className="mt-4 min-h-5 text-xs text-gray-400" role="status">
          {copyStatus === "copied" ? t("Email copied.", "Correo copiado.") : copyStatus === "error" ? t("Couldn't copy. You can select the email above or use Email me.", "No se pudo copiar. Puedes seleccionar el correo de arriba o usar Escríbeme.") : t("Opens your email app.", "Se abrirá tu aplicación de correo.")}
        </p>
      </div>
    </section>
  );
}
