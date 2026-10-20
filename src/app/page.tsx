"use client";

import { useLanguage } from "@/components/LanguageProvider";
import RetroWorkstation from "@/components/RetroWorkstation";
import TextType from "@/components/TextType";
import PixelBlast from "@/components/PixelBlast";
import ProjectCard from "@/components/ProjectCard";
// import {  } from "lucide-react";
import { Github, Linkedin, Send } from "pixelarticons/react";
import TimeLine from "@/components/TimeLine";
import { LogoLoop } from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAstro,
  SiPostgresql,
  SiVite,
  SiPython,
  SiGit,
  SiNodedotjs,
  SiFigma,
  SiDocker,
  SiLaravel,
  SiMongodb,
  SiLinux,
} from "react-icons/si";
import ContactSection from "@/components/ContactSection";
import DesignCard from "@/components/DesingCard";

export const AzureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12.903 4.032L7 9.13l-5 9.065h4.548zm.839 1.226l-2.516 7.097L16 18.387l-9.355 1.58H22z"
    />
  </svg>
);

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <AzureIcon />, title: "Azure", href: "https://azure.microsoft.com" },
];

export default function Home() {
  const { language, t } = useLanguage();
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#333333"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="flex h-full items-center justify-center font-sans md:px-32">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16sm:items-start gap-7 pb-24">
          {/* Section de titulo y botones */}
          <section className="w-full">
            <div className="grid min-w-0 items-center gap-4 px-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-2 md:px-0">
            <section className="w-full min-w-0 flex flex-col items-start">
              <div className="flex min-w-0 flex-col gap-6 items-start w-full">
                <div className="w-full space-y-1 text-[clamp(2rem,9vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-blue-600 sm:text-5xl">
                  <p>
                    Print<span className="text-white">(&apos;</span>
                  </p>
                  <p className="text-white">Mario Uparela</p>
                  <TextType
                    key={language}
                    text={[
                      t("Web developer", "Desarrollador web"),
                      t("UX/UI designer", "Diseñador UX/UI"),
                      t("Full-Stack Engineer", "Ingeniero Full-Stack"),
                    ]}
                    typingSpeed={75}
                    pauseDuration={2500}
                    showCursor
                    cursorCharacter="|"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    className="min-h-[2.3em] text-white lg:min-h-[1.15em]"
                  />
                  <p className="text-white">&apos;)</p>
                </div>
              </div>

            </section>
            <RetroWorkstation />
            </div>
            <section className="mt-10 md:p-0 px-6 flex flex-col gap-6">
              <div className="md:w-full ">
                <p className="text-white text-lg sm:text-sm md:text-lg md:w-full">
                  {t(
                    "Welcome to my portfolio! I'm Mario, a passionate web developer and UX/UI designer dedicated to crafting exceptional digital experiences. Explore my projects and skills as you navigate through my work.",
                    "¡Bienvenido a mi portafolio! Soy Mario, un desarrollador web y diseñador UX/UI apasionado por crear experiencias digitales excepcionales. Explora mis proyectos y habilidades a través de mi trabajo.",
                  )}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start md:gap-8 sm:gap-6 gap-4">
                <a href="https://github.com/AkaMario">
                  <button className="px-3 py-3 font-mono font-bold text-black bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all hover:bg-lime-500">
                    <Github className="w-6 h-6" />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/">
                  <button className="px-3 py-3 font-mono font-bold text-black bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all hover:bg-blue-500">
                    <Linkedin className="w-6 h-6" />
                  </button>
                </a>
                <a href="mailto:mariouppo1@gmail.com?subject=Mario.Dev%20portafolio&body=Hola%2C%20vi%20tu%20portafolio%2C%20me%20interesa.">
                  <button className="px-3 py-3 font-mono font-bold text-black bg-gray-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all hover:bg-red-500">
                    <Send className="w-6 h-6" />
                  </button>
                </a>
              </div>
            </section>
          </section>

          {/* Section de timeline */}
          <section
            id="experience"
            className="w-full min-w-0 mt-20 scroll-mt-24"
            aria-label={t(
              "Experience and education",
              "Experiencia y formación",
            )}
          >
            <div className="w-full">
              <TimeLine />
            </div>
          </section>

          {/* Section de proyectos */}
          <section id="projects" className="w-full min-w-0 mt-8 scroll-mt-24">
            <div className="w-full px-4 sm:px-6">
              {/* <p className="mb-3 font-mono text-xs tracking-widest text-gray-400">{t("[ PROJECTS.DIR ]", "[ PROYECTOS.DIR ]")}</p> */}
              <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-5xl">
                {t("Projects", "Proyectos")}
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                {t(
                  "Built to be used. Explore the latest release or try something new.",
                  "Creados para usarse. Explora el último proyecto o prueba algo nuevo.",
                )}
              </p>
              <div className="">
                <ProjectCard />
              </div>
            </div>
          </section>

          {/* Basic horizontal loop */}
          <section className="w-full mt-20 md:mt-20">
            <div
              style={{
                height: "100px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel={t("Technologies I use", "Tecnologías que utilizo")}
              />
            </div>
          </section>

          {/* Section de desings */}
          <section id="designs" className="w-full min-w-0 mt-20 scroll-mt-24">
            <div className="w-full px-4 sm:px-6">
              {/* <p className="mb-3 font-mono text-xs tracking-widest text-gray-400">{t("[ DESIGNS.DIR ]", "[ DISEÑOS.DIR ]")}</p> */}
              <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-5xl">
                {t("Designs", "Diseños")}
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                {t(
                  "Swipe through the designs and open a prototype to explore it yourself.",
                  "Desliza para descubrir los diseños y abre un prototipo para explorarlo.",
                )}
              </p>
              <div className="">
                <DesignCard />
              </div>
            </div>
          </section>

          <ContactSection />

          {/* Section de footer */}
          <section>
            <footer>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Mario Uparela.{" "}
                {t("All rights reserved.", "Todos los derechos reservados.")}
              </p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
