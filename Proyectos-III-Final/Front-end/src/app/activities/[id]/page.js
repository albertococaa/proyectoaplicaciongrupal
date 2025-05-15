"use client"
import ForumSection from '@/components/ForumSection';
import React, { useEffect, useState } from 'react';
import  projectsData  from '../../../components/activities'
import Image from 'next/image';
import Link from 'next/link';
import { DocumentIcon } from '@heroicons/react/24/outline'

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
        <main className="flex min-h-screen flex-col bg-[#ffffff] relative">
            <div className="relative" style={{ height: '25vh', width: '100%' }}>
                <Image
                    src={project.imgUrl}
                    alt="Imagen de la Actividad"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
            <div className="ml-8 text-black font-bold font-Montserrat text-5xl mt-6 ">{project.title}</div>
            <div className="grid grid-cols-2">
            <div>
                <div className="flex space-x-2 mb-2 mt-8 ml-10">
                    {project.tag.map((tagName, index) => (
                        <div
                            key={index}
                            className="bg-[#0065EF] text-white rounded-full px-2 py-1 text-sm"
                        >
                            {tagName}
                        </div>
                    ))}
                </div>
                <h1 className="ml-10 mt-8 font-Montserrat font-semibold">Archivos disponibles:</h1>
                <div className="ml-10 mt-2 w-[33.33%]">
                        <DocumentIcon className="w-full h-auto" />
                </div>            
                </div>
                <div className="col-span-1 flex flex-col">
                    <h2 className="mt-4 mb-2 text-xl font-semibold font-Montserrat">Objetivo de la actividad:</h2>
                    <p>{project.description}</p>
                    <h3 className="mt-4 mb-2 text-lg font-semibold font-Montserrat">Ubicación: <span className="font-normal">{project.ubicacion}</span></h3>
                    <h3 className="mt-4 mb-2 text-lg font-semibold font-Montserrat">Fecha: <span className="font-normal">{project.Fecha}</span></h3>
                    <h3 className="mt-4 mb-2 text-lg font-semibold font-Montserrat">Espacio: <span className="font-normal">{project.Espacio}</span></h3>
                </div>

            </div>
        </main>
    )
}
