"use client"
import ForumSection from '@/components/ForumSection';
import React, { useEffect, useState } from 'react';


const projectsData = [
    {
        id: 1,
        title: "Comunidad de alumnos de Diseño Digital",
        description: "¡Bienvenido a nuestra comunidad de diseño digital! Explora, comparte y aprende con nosotros.",
        imgUrl: "/1.png",
        tag: ["All", "Grados"],
    },
    {
        id: 2,
        title: "Comunidad de alumnos de ING. Software",
        description: "This is a description of project 2",
        imgUrl: "/2.png",
        tag: ["All", "Grados", "INSO"],
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a description of project 3",
        imgUrl: "/3.png",
        tag: ["All", "Ciclos"],
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a description of project 4",
        imgUrl: "/4.png",
        tag: ["All", "Ciclos"],
    },
    {
        id: 5,
        title: "Project 5",
        description: "This is a description of project 5",
        imgUrl: "/5.png",
        tag: ["All", "Clubes"],
    },
    {
        id: 6,
        title: "Project 6",
        description: "This is a description of project 6",
        imgUrl: "/6.png",
        tag: ["All", "Postgrados"],
    },
    
]

export default function Comunidad({}){
    const [project, setProject] = useState(null);

    useEffect(() => {
        const pathname = window.location.pathname;
        const id = pathname.split('/').pop();
        const foundProject = projectsData.find(project => project.id === parseInt(id));
        
        if (foundProject) {
            setProject(foundProject);
        }
    }, []);

    if (!project) {
        return <h1>Loading...</h1>; // Muestra "Cargando..." mientras se obtiene el proyecto
    }

  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
        <div className="grid grid-cols-3 border-t-2 border-[#9DA3A7] mt-24 px-20 h-screen">
            <div className="col-span-1 border-r-2 pt-8 pr-8 border-[#9DA3A7]">
                <h1 className="text-black font-Montserrat font-extrabold text-5xl">
                    {project.title}</h1>
                <p className="text-l font-Montserrat font-semibold text-black mt-12 pr-8 ">
                    {project.title} <span className="text-[#0065EF] font-Montserrat font-semibold">Listado de foros de la comunidad</span></p>   
                <p className="text-l font-Montserrat text-black mt-4 pr-8 ">
                    {project.description}</p>
            </div>
            <div className="col-span-2 pt-8">
                <h1 className="ml-20 text-black font-Montserrat font-extrabold text-5xl">
                    Listado de foros de la comunidad</h1>
                    <ForumSection/>
            </div>
        </div>
    </main>
  )
}


const page = () => {
  return (
    <div className="container mt-24 mx-auto py-4">
            <div className="grid grid-cols-3 border-t-2">
                <div className="col-span-1 border-r-2 border-black mt-8" >
                    <h1 className="text-black font-extrabold text-5xl">
                        {project.title}</h1>
                    <h1 className="text-black mt-12">
                        {project.description}</h1>
                </div>
                <div className="col-span-2 mt-8">
                    <h1 className="ml-20 text-black font-extrabold text-5xl">
                        Listado de foros de la comunidad</h1>
                    
                </div>
            </div>
            
        </div>
  )
}

