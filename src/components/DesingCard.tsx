"use client";

import { useLanguage } from "./LanguageProvider";
import PortfolioWindowCard from "./PortfolioWindowCard";

function ProjectCard() {
  const { t } = useLanguage();
    const proyectos = [
        {
            titulo: t("Regace Lang landing page redesign", "Rediseño de la página de Regace Lang"),
            descripcion: t("Landing page redesign for Regace Lang, an international technology company dedicated to training, evaluating, and improving AI models.", "Rediseño de la página de Regace Lang, una empresa tecnológica internacional dedicada a entrenar, evaluar y mejorar modelos de IA."),
            tecnologias: ["Figma"],
            imagen: '/RegaceLang.png',
            demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
        },
        {
            titulo: 'Urbanestia',
            descripcion: t("Real estate platform prototype that was my most ambitious project in college to date, focusing on user experience and interface design for mobile devices using Figma.", "Prototipo de plataforma inmobiliaria que fue mi proyecto universitario más ambicioso hasta ese momento, enfocado en la experiencia de usuario y el diseño de interfaces móviles con Figma."),
            tecnologias: ['Figma'],
            imagen: '/Urbanestia.png',
            demo: 'https://www.figma.com/proto/OIqmVqy1hNgPwk5Nwjmndj/Urbanestia-Mobile?page-id=0%3A1&node-id=48-140&viewport=686%2C149%2C0.09&t=VWMo9EMkZ2hVPh8b-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=48%3A140&show-proto-sidebar=1',
        },

        {
            titulo: t("Redesign Campus from Tecnologico Comfenalco", "Rediseño del Campus del Tecnológico Comfenalco"),
            descripcion: t("Redesign of the educational platform Campus from Tecnologico Comfenalco to improve user experience and interface design.", "Rediseño de la plataforma educativa Campus del Tecnológico Comfenalco para mejorar la experiencia de usuario y el diseño de la interfaz."),
            tecnologias: ['Figma'],
            imagen: '/Campus.png',
            demo: 'https://www.figma.com/proto/JJQqISHgtFKrvXB7t3ZiXi/Campus?page-id=0%3A1&node-id=1-2&t=T9tFlUTQe5NcsqdO-1',
        },

        {
            titulo: "DNAMYK",
            descripcion: t("Designed this landing page for a growing Colombian technology services startup that offers software development, IT consulting, and digital transformation services.", "Diseñé esta página de presentación para una empresa emergente colombiana que ofrece desarrollo de software, consultoría informática y transformación digital."),
            tecnologias: ["Figma"],
            imagen: "/Dnamyk2.png",
            demo: "https://www.figma.com/proto/RjBByG2H21MPnJatfdT6cs/DNAMYK?page-id=0%3A1&node-id=1-1045&p=f&viewport=561%2C384%2C0.13&t=1FvlWklNxebeUEBt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1045",
        },


    ]


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
          kind="design"
          index={index}
        />
      ))}
    </div>
  );
}

export default ProjectCard;
