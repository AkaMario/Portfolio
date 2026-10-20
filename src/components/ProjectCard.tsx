"use client";

import { useLanguage } from "./LanguageProvider";
import PortfolioWindowCard from "./PortfolioWindowCard";

function ProjectCard() {
  const { t } = useLanguage();
  const proyectos = [
        {
      titulo: "Emprender",
      descripcion:
        t("I designed and developed Emprender, an Android point-of-sale app for managing catalogs, sales and operations across restaurants, rentals, retail, bulk sales and services, with local data storage and offline functionality.", "Diseñé y desarrollé Emprender, una aplicación de punto de venta para Android que permite gestionar catálogos, ventas y operaciones de restaurantes, alquileres, comercios, ventas al por mayor y servicios, con almacenamiento local y funcionamiento sin conexión."),
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
      descripcion:
        t("Development and design of UrbanestIA, a Colombian proptech platform that uses artificial intelligence to optimize the search, analysis and comparison of real estate investments.", "Desarrollo y diseño de UrbanestIA, una plataforma inmobiliaria colombiana que utiliza inteligencia artificial para optimizar la búsqueda, el análisis y la comparación de inversiones inmobiliarias."),
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
      descripcion:
        t("LexBattle is a real-time word battle game where players race against a bomb by entering words that match the current letter and category. Play solo or compete online until only one player remains.", "LexBattle es un juego de batallas de palabras en tiempo real: los jugadores compiten contra una bomba escribiendo palabras que coincidan con la letra y categoría actuales. Juega en solitario o compite en línea hasta que solo quede un jugador."),
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      imagen: "/Lexbattle.png",
      video: undefined,
      github: "https://github.com/AkaMario/LexBattle",
      demo: "https://akamario.github.io/LexBattle/",
    },
    {
      titulo: t("Graphing method calculator", "Calculadora del método gráfico"),
      descripcion:
        t("Calculator and graphing tool used in operations research to solve linear equations.", "Calculadora y herramienta gráfica utilizada en investigación de operaciones para resolver ecuaciones lineales."),
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Math"],
      imagen: "/Metodo-grafico.png",
      video: undefined,
      github: "https://github.com/AkaMario/Metodo-grafico",
      demo: "https://akamario.github.io/Metodo-grafico/",
    },

    {
      titulo: "DNAMYK",
      descripcion:
        t("Developed and designed this landing page for a growing Colombian technology services startup that offers software development, IT consulting, and digital transformation services.", "Desarrollé y diseñé esta página de presentación para una empresa emergente colombiana que ofrece desarrollo de software, consultoría informática y transformación digital."),
      tecnologias: ["Astro", "Figma", "Git", "Tailwind CSS"],
      imagen: "/dnamyk.png",
      video: undefined,
      github: "https://github.com/joshtin2505/dnamyk-landing",
      demo: "https://dnamyk.com/",
    },

    // {
    //     titulo: t("Regace Lang landing page redesign", "Rediseño de la página de Regace Lang"),
    //     descripcion: t("Landing page redesign for Regace Lang, an international technology company dedicated to training, evaluating, and improving AI models.", "Rediseño de la página de Regace Lang, una empresa tecnológica internacional dedicada a entrenar, evaluar y mejorar modelos de IA."),
    //     tecnologias: ["Figma"],
    //     imagen: '/RegaceLang.png',
    //     video: undefined, // ejemplo de video
    //     github: "#",
    //     demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
    // },
  ];

  return (
    <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
      {proyectos.map((proyecto, index) => (
        <PortfolioWindowCard
          key={proyecto.titulo}
          title={proyecto.titulo}
          description={proyecto.descripcion}
          image={proyecto.imagen}
          technologies={proyecto.tecnologias}
          demo={proyecto.demo}
          github={proyecto.github}
          kind="project"
          index={index}
        />
      ))}
    </div>
  );
}

export default ProjectCard;
