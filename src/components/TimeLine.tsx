"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "./TimeLine.module.css";

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: 'work' | 'education';
}

export default function TimeLine() {
  const { t } = useLanguage();
  const timelineData: TimelineItem[] = [
  {
    title: t("Web Developer in fundacion universitaria Tecnologico Comfenalco", "Desarrollador web en la Fundación Universitaria Tecnológico Comfenalco"),
    subtitle: t("intern", "Practicante"),
    description: t("I have worked as a project leader and software architect for the university, integrating new technologies and development approaches to improve the efficiency and quality of the institutions technology projects.", "He trabajado como líder de proyectos y arquitecto de software para la universidad, integrando nuevas tecnologías y enfoques de desarrollo para mejorar la eficiencia y la calidad de sus proyectos tecnológicos."),
    date: '2026 - Present',
    type: 'work',

  },
  {
    title: t("Web Developer and Designer", "Desarrollador web y diseñador"),
    subtitle: 'DNAMYK',
    description: t("web development and design projects", "Proyectos de desarrollo web y diseño"),
    date: '2025 - Present',
    type: 'work',
  },
  {
    title: t("Systems Engineering", "Ingeniería de Sistemas"),
    subtitle: t("University foundation Tecnologico Comfenalco", "Fundación Universitaria Tecnológico Comfenalco"),
    description: t("in progress", "En curso"),
    date: '2025 - Present',
    type: 'education',
  },
  {
    title: t("Implementation apprentice", "Aprendiz de implementación"),
    subtitle: 'ESTELA',
    description: t("My university internship, I learned technology project management. I focused on process automation and improving operational efficiency.", "Durante mis prácticas universitarias aprendí a gestionar proyectos tecnológicos. Me enfoqué en automatizar procesos y mejorar la eficiencia operativa."),
    date: '2024 - 2024',
    type: 'work',
  },
  {
    title: t("Systems Assistant", "Asistente de sistemas"),
    subtitle: 'CITUCAR',
    description: t("My first formal job in the systems area was providing training and maintenance on computer equipment, as well as automating repetitive tasks.", "En mi primer empleo formal en el área de sistemas brindé capacitación y mantenimiento de equipos de cómputo, además de automatizar tareas repetitivas."),
    date: '2022 - 2022',
    type: 'work',
  },
  {
    title: t("Software Development Technologist", "Tecnólogo en Desarrollo de Software"),
    subtitle: t("University foundation Tecnologico Comfenalco", "Fundación Universitaria Tecnológico Comfenalco"),
    description: t("Completed", "Finalizado"),
    date: '2022 - 2024',
    type: 'education',
  },
];

  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const stations = roadmapRef.current?.querySelectorAll<HTMLElement>('li');
    if (!stations) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.reveal = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

    stations.forEach((station) => {
      station.dataset.reveal = 'pending';
      observer.observe(station);
    });

    return () => {
      observer.disconnect();
      stations.forEach((station) => delete station.dataset.reveal);
    };
  }, []);

  return (
    <div ref={roadmapRef} className={styles.roadmap}>

      <div className={styles.map}>
        <div className={styles.mapLabel}>
        </div>

        <ol className={styles.stations} aria-label={t("Experience and education, most recent first", "Experiencia y formación, de la más reciente a la más antigua")}>
          {timelineData.map((item, index) => (
            <li
              key={index}
              className={`${styles.station} ${item.type === 'education' ? styles.education : ''}`}
            >
              <span className={styles.node} aria-hidden="true">
                {String(timelineData.length - index).padStart(2, '0')}
              </span>
              <article className={styles.card}>
                <div className={styles.windowBar}>
                  <span className={styles.windowName}>
                    <span className={styles.windowIcon} aria-hidden="true" />
                    {item.type === 'work' ? t("experience", "experiencia") : t("education", "formación")}_{String(timelineData.length - index).padStart(2, '0')}.exe
                  </span>
                  <span className={styles.windowControls} aria-hidden="true">
                    <span>_</span><span>□</span><span>×</span>
                  </span>
                </div>
                <div className={styles.windowBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>
                    {item.type === 'work' ? t("WORK", "TRABAJO") : t("EDUCATION", "FORMACIÓN")}
                  </span>
                  <span className={styles.date}>{item.date.replace("Present", t("Present", "Actualidad"))}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <span>{t("CHECKPOINT", "ETAPA")} {String(timelineData.length - index).padStart(2, '0')}</span>
                  <span className={styles.status}>
                    {item.date.includes('Present') ? t("IN PROGRESS", "EN CURSO") : t("COMPLETED", "FINALIZADO")}
                  </span>
                </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
