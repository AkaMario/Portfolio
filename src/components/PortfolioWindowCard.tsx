"use client";

import { useLanguage } from "./LanguageProvider";
/* eslint-disable @next/next/no-img-element */
import { ExternalLink, Github } from "lucide-react";
import styles from "./PortfolioWindowCard.module.css";

interface PortfolioWindowCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github?: string;
  index: number;
  kind: "project" | "design";
}

export default function PortfolioWindowCard({
  title, description, image, technologies, demo, github, index, kind,
}: PortfolioWindowCardProps) {
  const { t } = useLanguage();
  return (
    <article className={`${styles.window} ${kind === "design" ? styles.design : ""}`}>
      <div className={styles.titleBar}>
        <span className={styles.fileName}>
          <span className={styles.windowIcon} aria-hidden="true" />
          {kind === "design" ? t("design", "diseño") : t("project", "proyecto")}_{String(index + 1).padStart(2, "0")}.{kind === "design" ? "fig" : "exe"}
        </span>
        <span className={styles.controls} aria-hidden="true">
          <span>_</span><span>□</span><span>×</span>
        </span>
      </div>
      <div className={styles.menuBar}>
        {/* <span>{kind === "design" ? t("DESIGN PREVIEW", "VISTA DEL DISEÑO") : t("PROJECT PREVIEW", "VISTA DEL PROYECTO")}</span>
        <span aria-hidden="true">[ {String(index + 1).padStart(2, "0")} ]</span> */}
      </div>
      <div className={styles.preview}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags} aria-label={t("Technologies", "Tecnologías")}>
          {technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className={styles.actions}>
          {github && (
            <a className={styles.button} href={github} target="_blank" rel="noopener noreferrer">
              <Github size={14} aria-hidden="true" /> {t("Code", "Código")}
              <span className={styles.srOnly}> — {title} ({t("opens in a new tab", "se abre en una nueva pestaña")})</span>
            </a>
          )}
          <a className={`${styles.button} ${styles.primary}`} href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} aria-hidden="true" /> {kind === "design" ? t("View design", "Ver diseño") : "Demo"}
            <span className={styles.srOnly}> — {title} ({t("opens in a new tab", "se abre en una nueva pestaña")})</span>
          </a>
        </div>
      </div>
      {/* <div className={styles.statusBar}>
        <span><span aria-hidden="true">■ </span>{kind === "design" ? t("INTERFACE DESIGN", "DISEÑO DE INTERFACES") : t("DEVELOPMENT", "DESARROLLO")}</span>
        <span aria-hidden="true">▤</span>
      </div> */}
    </article>
  );
}
