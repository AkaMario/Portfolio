"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./DesignCarousel.module.css";
import cardStyles from "./PortfolioWindowCard.module.css";
import { useLanguage } from "./LanguageProvider";
import PortfolioWindowCard from "./PortfolioWindowCard";

function DesignCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
    const proyectos = [
        {
            titulo: t("Regace Lang landing page redesign", "Rediseño de la página de Regace Lang"),
            descripcion: t("A clearer, more focused landing page for an AI company.", "Una landing más clara y enfocada para una empresa de inteligencia artificial."),
            cta: t("Explore the redesign", "Explora el rediseño"),
            tecnologias: ["Figma"],
            imagen: '/RegaceLang.png',
            demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
        },
        {
            titulo: 'Urbanestia',
            descripcion: t("A mobile real estate experience designed to make finding a home easier.", "Una experiencia inmobiliaria móvil diseñada para facilitar la búsqueda de vivienda."),
            cta: t("Try the mobile experience", "Prueba la experiencia móvil"),
            tecnologias: ['Figma'],
            imagen: '/Urbanestia.png',
            demo: 'https://www.figma.com/proto/OIqmVqy1hNgPwk5Nwjmndj/Urbanestia-Mobile?page-id=0%3A1&node-id=48-140&viewport=686%2C149%2C0.09&t=VWMo9EMkZ2hVPh8b-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=48%3A140&show-proto-sidebar=1',
        },

        {
            titulo: t("Redesign Campus from Tecnologico Comfenalco", "Rediseño del Campus del Tecnológico Comfenalco"),
            descripcion: t("A redesigned virtual campus with simpler navigation for students.", "Un campus virtual rediseñado con una navegación más sencilla para estudiantes."),
            cta: t("Explore the campus", "Recorre el campus"),
            tecnologias: ['Figma'],
            imagen: '/Campus.png',
            demo: 'https://www.figma.com/proto/JJQqISHgtFKrvXB7t3ZiXi/Campus?page-id=0%3A1&node-id=1-2&t=T9tFlUTQe5NcsqdO-1',
        },

        {
            titulo: "DNAMYK",
            descripcion: t("A technology brand brought to life through a clear, modern interface.", "Una marca tecnológica que cobra vida con una interfaz clara y moderna."),
            cta: t("Explore the interface", "Explora la interfaz"),
            tecnologias: ["Figma"],
            imagen: "/Dnamyk2.png",
            demo: "https://www.figma.com/proto/RjBByG2H21MPnJatfdT6cs/DNAMYK?page-id=0%3A1&node-id=1-1045&p=f&viewport=561%2C384%2C0.13&t=1FvlWklNxebeUEBt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1045",
        },


    ]


  const updateActiveSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const origin = slides[0]?.offsetLeft ?? 0;
    let closest = 0;
    slides.forEach((slide, index) => {
      if (Math.abs(slide.offsetLeft - origin - track.scrollLeft) <
          Math.abs(slides[closest].offsetLeft - origin - track.scrollLeft)) closest = index;
    });
    setActiveIndex(closest);
  };

  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !slide || !first) return;
    track.scrollTo({
      left: slide.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    const handlePageKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      const carousel = carouselRef.current;
      const track = trackRef.current;
      if (!carousel || !track) return;
      const target = event.target;
      if (target instanceof Element) {
        if (target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="slider"], [role="spinbutton"]')) return;
        if (!carousel.contains(target) && target.closest('a, button, [role="button"]')) return;
      }
      const { top, bottom } = track.getBoundingClientRect();
      if (bottom <= window.innerHeight * 0.25 || top >= window.innerHeight * 0.75) return;
      event.preventDefault();
      goToSlide(Math.max(0, Math.min(track.children.length - 1,
        activeIndex + (event.key === "ArrowRight" ? 1 : -1))));
    };

    window.addEventListener("keydown", handlePageKeyDown);
    return () => window.removeEventListener("keydown", handlePageKeyDown);
  }, [activeIndex, goToSlide]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    const next = event.key === "ArrowRight" ? Math.min(activeIndex + 1, proyectos.length - 1)
      : event.key === "ArrowLeft" ? Math.max(activeIndex - 1, 0)
      : event.key === "Home" ? 0 : event.key === "End" ? proyectos.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    goToSlide(next);
  };

  return (
    <div ref={carouselRef} className={styles.carousel} role="region" aria-roledescription={t("carousel", "carrusel")} aria-label={t("Design portfolio", "Portafolio de diseños")}>
      <div className={styles.controls}>
        <p className={styles.counter} aria-live="polite" aria-atomic="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(proyectos.length).padStart(2, "0")}
        </p>
        <div className={styles.arrows}>
          <button type="button" className={cardStyles.button} aria-label={t("Previous design", "Diseño anterior")} aria-controls="design-carousel" disabled={activeIndex === 0} onClick={() => goToSlide(activeIndex - 1)}>
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" className={cardStyles.button} aria-label={t("Next design", "Siguiente diseño")} aria-controls="design-carousel" disabled={activeIndex === proyectos.length - 1} onClick={() => goToSlide(activeIndex + 1)}>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="design-carousel" ref={trackRef} className={styles.track} onScroll={updateActiveSlide} onKeyDown={handleKeyDown} tabIndex={0} aria-label={t("Use arrow keys or swipe to browse designs", "Usa las flechas o desliza para recorrer los diseños")}>
        {proyectos.map((proyecto, index) => (
          <div key={proyecto.imagen} className={styles.slide} role="group" aria-roledescription={t("slide", "diapositiva")} aria-label={`${index + 1} ${t("of", "de")} ${proyectos.length}: ${proyecto.titulo}`}>
            <PortfolioWindowCard
              title={proyecto.titulo}
              description={proyecto.descripcion}
              actionLabel={proyecto.cta}
              image={proyecto.imagen}
              technologies={proyecto.tecnologias}
              demo={proyecto.demo}
              kind="design"
            />
          </div>
        ))}
      </div>
      <div className={styles.indicators} aria-label={t("Choose a design", "Elige un diseño")}>
        {proyectos.map((proyecto, index) => (
          <button key={proyecto.imagen} type="button" className={styles.indicator} aria-label={`${t("Go to", "Ir a")} ${proyecto.titulo}`} aria-controls="design-carousel" aria-current={activeIndex === index ? "true" : undefined} onClick={() => goToSlide(index)}>
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}

export default DesignCarousel;
