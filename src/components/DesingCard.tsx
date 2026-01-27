/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard() {
    const proyectos = [
        {
            titulo: "Rediseño de Landing Page Regace Lang",
            descripcion: "Rediseño de la landing page de Regace Lang, es una empresa tecnológica internacional dedicada a entrenar, evaluar y mejorar modelos de IA",
            tecnologias: ["Figma"],
            imagen: '/RegaceLang.png',
            demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
        },
        {
            titulo: 'Urbanestia',
            descripcion: 'Real estate platform prototype that was my most ambitious project in college to date, focusing on user experience and interface design for mobile devices using Figma.',
            tecnologias: ['Figma'],
            imagen: '/Urbanestia.png',
            demo: 'https://www.figma.com/proto/OIqmVqy1hNgPwk5Nwjmndj/Urbanestia-Mobile?page-id=0%3A1&node-id=48-140&viewport=686%2C149%2C0.09&t=VWMo9EMkZ2hVPh8b-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=48%3A140&show-proto-sidebar=1',
        },

        {
            titulo: 'Redesign Campus from Tecnologico Comfenalco',
            descripcion: 'Redesign of the educational platform Campus from Tecnologico Comfenalco to improve user experience and interface design.',
            tecnologias: ['Figma'],
            imagen: '/Campus.png',
            demo: 'https://www.figma.com/proto/JJQqISHgtFKrvXB7t3ZiXi/Campus?page-id=0%3A1&node-id=1-2&t=T9tFlUTQe5NcsqdO-1',
        },

        {
            titulo: "DNAMYK",
            descripcion: "Designed this landing page for a growing Colombian technology services startup that offers software development, IT consulting, and digital transformation services.",
            tecnologias: ["Figma"],
            imagen: "/Dnamyk2.png",
            demo: "https://www.figma.com/proto/RjBByG2H21MPnJatfdT6cs/DNAMYK?page-id=0%3A1&node-id=1-1045&p=f&viewport=561%2C384%2C0.13&t=1FvlWklNxebeUEBt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1045",
        },


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
                        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="border-gray-400 text-gray-400 bg-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:border-white hover:text-white ">
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