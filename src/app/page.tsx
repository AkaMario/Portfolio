import TextType from "@/components/TextType";
import PixelBlast from "@/components/PixelBlast";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/Button";
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
} from "react-icons/si";
import DesignCard from "@/components/DesingCard";

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
];

export default function Home() {
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
          liquid={false}
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
          <section>
            <section className="w-full flex flex-col items-center sm:items-start">
              <div className="flex flex-col gap-6 items-start sm:w-full md:w-115">
                <div className="text-4xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
                  <p>
                    Print<span className="text-white">(&apos;</span>
                  </p>
                  <span className="text-white">Mario Uparela</span>
                  <br />
                  <TextType
                    text={[
                      "Web developer",
                      "UX/UI designer",
                      "Full-Stack Engineer",
                    ]}
                    typingSpeed={75}
                    pauseDuration={2500}
                    showCursor
                    cursorCharacter="|"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    className="text-4xl font-bold text-white sm:text-4xl md:text-5xl"
                  />
                  <br />
                  <p className="text-white">&apos;)</p>
                </div>
              </div>

              <div className="mt-20 flex flex-wrap items-center justify-center md:gap-22 sm:gap-6 gap-4">
                {/* <a href="https://github.com/AkaMario">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white-600 text-white-600 hover:bg-blue-600 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2 cursor-pointer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white-600 text-white-600 hover:bg-purple-500 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2 cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a> */}
              </div>
            </section>
            <section className="mt-10 md:mt-10">
              <div className="pl-13 pr-13 md:w-full md:p-3">
                <p className="text-white text-lg sm:text-sm md:text-lg md:w-full">
                  Welcome to my portfolio! I&apos;m Mario, a passionate web
                  developer and UX/UI designer dedicated to crafting exceptional
                  digital experiences. Explore my projects and skills as you
                  navigate through my work.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center md:gap-22 sm:gap-6 gap-4">
                <a href="https://github.com/AkaMario">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white-600 text-white-600 hover:bg-blue-600 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2 cursor-pointer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white-600 text-white-600 hover:bg-purple-500 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2 cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </section>
          </section>

          {/* Section de proyectos */}
          <section
            id="projects"
            className="w-full mt-20 md:mt-20 bg-black/40 rounded-2xl"
          >
            <div className="w-full h-full p-6 rounded-lg sm:w-full">
              <h2 className="text-3xl md:text-5xl sm:text-3xl font-bold text-gray-500 mb-4">
                Projects
              </h2>
              <p className="text-1xl mb-6 text-gray-500">
                Here are the projects I&apos;ve used to learn about a technology
                or that I&apos;ve been paid to do.
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
                ariaLabel="Technology partners"
              />
            </div>
          </section>

          {/* Section de desings */}
          <section
            id="designs"
            className="w-full mt-20 md:mt-20 bg-black/40 rounded-2xl"
          >
            <div className="w-full h-full p-6 rounded-lg sm:w-full">
              <h2 className="text-3xl md:text-5xl sm:text-3xl font-bold text-gray-500 mb-4">
                Designs
              </h2>
              <p className="text-1xl mb-6 text-gray-500">
                Here are the designs I&apos;ve created to showcase my creativity
                and design skills.
              </p>
              <div className="">
                <DesignCard />
              </div>
            </div>
          </section>

          {/* Section de timeline */}
          <section
            id="experience"
            className="w-full bg-black/40 rounded-2xl sm:hidden md:block mt-20 md:mt-20"
          >
            <div className="w-full h-full p-6 rounded-lg sm:w-full">
              <h2 className="text-3xl md:text-5xl sm:text-3xl font-bold text-gray-500 mb-4">
                Experience & Education
              </h2>
              <p className="text-1xl mb-6 text-gray-500">
                A timeline of my professional experience and educational
                background.
              </p>
              <div>
                <TimeLine />
              </div>
            </div>
          </section>

          {/* Section de footer */}
          <section>
            <footer>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Mario Uparela. All rights reserved.
              </p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
