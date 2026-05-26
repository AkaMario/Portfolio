/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard() {
    const proyectos = [
        {
            titulo: 'Urbanest IA',
            descripcion: 'Development and design of UrbanestIA, a Colombian proptech platform that uses artificial intelligence to optimize the search, analysis and comparison of real estate investments.',
            tecnologias: ['React', 'API', 'Docker', 'Python','Scrapy', 'Ollama', 'Redis'],
            imagen: '/Calculadora-simplex.png',
            video: undefined,
            github: 'https://github.com/AkaMario/Scraper-Urbanest-IA',
            demo: 'https://youtu.be/KcoUACkpNy4',
        },
        {
            titulo: "Graphing method calculator",
            descripcion: "Calculator and graphing tool used in operations research to solve linear equations.",
            tecnologias: ["React", "TypeScript", "Tailwind CSS", "Math"],
            imagen: '/Metodo-grafico.png',
            video: undefined,
            github: "https://github.com/AkaMario/Metodo-grafico",
            demo: "https://akamario.github.io/Metodo-grafico/",
        },
        {
            titulo: 'POS Web System',
            descripcion: 'Point of sale system to manage inventories, sales, and generate reports for small businesses using Local Storage.',
            tecnologias: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Local Storage'],
            imagen: './pos.png',
            video: undefined,
            github: 'https://github.com/AkaMario/MiniPOS',
            demo: 'https://akamario.github.io/MiniPOS/',
        },

        // {
        //     titulo: "Search Film",
        //     descripcion: "Developed and designed this website to search for movies and series with autoupdate using the TMDB API and React",
        //     tecnologias: ["API", "React", "Git", "Tailwind CSS"],
        //     imagen: "/SearchFilm.png",
        //     video: undefined,
        //     github: "https://github.com/AkaMario/SearchFilm/",
        //     demo: "https://akamario.github.io/SearchFilm/",
        // },

        {
            titulo: "DNAMYK",
            descripcion: "Developed and designed this landing page for a growing Colombian technology services startup that offers software development, IT consulting, and digital transformation services.",
            tecnologias: ["Astro", "Figma", "Git", "Tailwind CSS"],
            imagen: "/dnamyk.png",
            video: undefined,
            github: "https://github.com/joshtin2505/dnamyk-landing",
            demo: "https://dnamyk.com/",
        },


        // {
        //     titulo: "Rediseño de Landing Page Regace Lang",
        //     descripcion: "Rediseño de la landing page de Regace Lang, es una empresa tecnológica internacional dedicada a entrenar, evaluar y mejorar modelos de IA",
        //     tecnologias: ["Figma"],
        //     imagen: '/RegaceLang.png',
        //     video: undefined, // ejemplo de video
        //     github: "#",
        //     demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
        // },
    ]


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {proyectos.map((proyecto, index) => (
                  <Card className="bg-black gray-950 border-gray-950 hover:border-gray-400 transition-all hover:shadow-gray-400 duration-300 backdrop-blur-sm" key={index}>
                    <div className="relative overflow-hidden">
                      <img
                        src={proyecto.imagen || "/placeholder.svg"}
                        alt={proyecto.titulo}
                        className="w-full h-48 object-cover transition-transform duration-300 rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/600 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{proyecto.titulo}</CardTitle>
                      <CardDescription className="text-gray-300">{proyecto.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proyecto.tecnologias.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-600/50 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="justify-center flex gap-2">
                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-gray-400 text-gray-400 bg-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:border-white hover:text-white ">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </Button>
                        </a>
                        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-linear-to-r from-blue-950 to-blue-950 hover:cursor-pointer hover:scale-105 transition-all duration-300">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
            ))}
        </div>
    )
}

export default ProjectCard