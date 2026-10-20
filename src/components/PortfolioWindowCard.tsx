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
  actionLabel?: string;
  featured?: boolean;
  kind: "project" | "design";
}

export default function PortfolioWindowCard({
  title, description, image, technologies, demo, github, kind, actionLabel, featured = false,
}: PortfolioWindowCardProps) {
  const { t } = useLanguage();
  return (
    <article className={`${styles.window} ${featured ? styles.featured : ""}`}>
      {featured && <p className={styles.featuredLabel}><span aria-hidden="true">★</span> {t("LATEST PROJECT", "PROYECTO MÁS RECIENTE")}</p>}
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
            <ExternalLink size={14} aria-hidden="true" /> {actionLabel ?? (kind === "design" ? t("Explore prototype", "Explora el prototipo") : t("Try it", "Pruébalo"))}
            <span className={styles.srOnly}> — {title} ({t("opens in a new tab", "se abre en una nueva pestaña")})</span>
          </a>
        </div>
      </div>
    </article>
  );
}
