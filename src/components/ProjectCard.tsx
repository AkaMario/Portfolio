"use client";

import { useLanguage } from "./LanguageProvider";
import PortfolioWindowCard from "./PortfolioWindowCard";

function ProjectCard() {
  const { t } = useLanguage();
  const proyectos = [
        {
      titulo: "Emprender",
      descripcion: t("A point of sale for Android with offline sales, catalogs, and business management.", "Un punto de venta para Android con ventas sin conexión, catálogos y gestión de negocios."),
      cta: t("Explore Emprender", "Explora Emprender"),
      tecnologias: [
        "React native",
        "API",
      ],
      imagen: "/emprender.png",
      video: undefined,
      github: "https://github.com/AkaMario/Emprender-pos",
      demo: "https://emprender-gratis.vercel.app/",
    },
    {
      titulo: "Urbanest IA",
      descripcion: t("An AI-powered platform for finding and comparing real estate investments.", "Una plataforma con IA para buscar y comparar inversiones inmobiliarias."),
      cta: t("Watch it in action", "Mírala en acción"),
      tecnologias: [
        "React",
        "API",
        "Docker",
        "Python",
        "Scrapy",
        "Ollama",
        "Redis",
      ],
      imagen: "/Urbanest-IA.png",
      video: undefined,
      github: "https://github.com/AkaMario/Scraper-Urbanest-IA",
      demo: "https://youtu.be/KcoUACkpNy4",
    },
    {
      titulo: "LexBattle",
      descripcion: t("A real-time word game. Play solo or challenge others before the bomb goes off.", "Un juego de palabras en tiempo real. Juega solo o reta a otros antes de que explote la bomba."),
      cta: t("Play a round", "Juega una partida"),
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      imagen: "/Lexbattle.png",
      video: undefined,
      github: "https://github.com/AkaMario/LexBattle",
      demo: "https://akamario.github.io/LexBattle/",
    },
    {
      titulo: t("Graphing method calculator", "Calculadora del método gráfico"),
      descripcion: t("Solve linear equations and explore their graphs in one place.", "Resuelve ecuaciones lineales y explora sus gráficas en un solo lugar."),
      cta: t("Try a calculation", "Prueba un cálculo"),
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Math"],
      imagen: "/Metodo-grafico.png",
      video: undefined,
      github: "https://github.com/AkaMario/Metodo-grafico",
      demo: "https://akamario.github.io/Metodo-grafico/",
    },

    {
      titulo: "DNAMYK",
      descripcion: t("A fast, clear landing page for a Colombian technology startup.", "Una landing rápida y clara para una empresa tecnológica colombiana."),
      cta: t("Visit the site", "Visita el sitio"),
      tecnologias: ["Astro", "Figma", "Git", "Tailwind CSS"],
      imagen: "/dnamyk.png",
      video: undefined,
      github: "https://github.com/joshtin2505/dnamyk-landing",
      demo: "https://dnamyk.com/",
    },


  ];

  return (
    <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
      {proyectos.map((proyecto, index) => (
        <PortfolioWindowCard
          key={proyecto.titulo}
          title={proyecto.titulo}
          description={proyecto.descripcion}
          actionLabel={proyecto.cta}
          featured={index === 0}
          image={proyecto.imagen}
          technologies={proyecto.tecnologias}
          demo={proyecto.demo}
          github={proyecto.github}
          kind="project"
        />
      ))}
    </div>
  );
}

export default ProjectCard;
