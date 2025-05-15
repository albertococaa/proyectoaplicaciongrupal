"use client"
import { useState } from 'react';
import Image from "next/image";
import Navbar from "../../components/Navbar";
import ProjectsSection from "../../components/ProjectsSection";
import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import FloatingButton from "../../components/FloatingButton";

export default function Home() {
  const [communities, setCommunities] = useState([
    {
      "id": 1,
      "title": "Comunidad de alumnos de Diseño Digital",
      "description": "¡Bienvenido a nuestra comunidad de diseño digital! Explora, comparte y aprende con nosotros.",
      "imgUrl": "/1.png",
      "tag": ["All", "Grados"]
    },
    {
      "id": 2,
      "title": "Comunidad de alumnos de ING. Software",
      "description": "Únete a nuestra comunidad de Ingeniería de Software y colabora en proyectos innovadores.",
      "imgUrl": "/2.png",
      "tag": ["All", "Grados", "INSO"]
    },
    {
      "id": 3,
      "title": "Comunidad de alumnos de Ciclos Formativos",
      "description": "Descubre oportunidades y recursos para estudiantes de ciclos formativos en diversas áreas.",
      "imgUrl": "/3.png",
      "tag": ["All", "Ciclos"]
    },
    {
      "id": 4,
      "title": "Comunidad de Formación Profesional",
      "description": "Conéctate con otros estudiantes de formación profesional y comparte tus experiencias y conocimientos.",
      "imgUrl": "/4.png",
      "tag": ["All", "Ciclos"]
    },
    {
      "id": 5,
      "title": "Club de Robótica y Tecnología",
      "description": "Únete a nuestro club de robótica y tecnología",
      "imgUrl": "/5.png",
      "tag": ["All", "Clubes"]
    },
    {
      "id": 6,
      "title": "Comunidad de estudiantes de Postgrado",
      "description": "Colabora y aprende con otros estudiantes de postgrado",
      "imgUrl": "/6.png",
      "tag": ["All", "Postgrados"]
    },
    {
      "id": 7,
      "title": "Comunidad Nueva",
      "description": "Comunidad de prueba",
      "imgUrl": "",
      "tag": ["All", "Grados"]
    },
  ]);

  const addCommunity = (newCommunity) => {
    setCommunities([...communities, newCommunity]);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff] relative">
      <div className="container mt-24 mx-auto py-4">
        <div className="flex flex-wrap">
          <Link href="/">
            <ArrowLeftIcon className='h-10 w-10 text-black cursor-pointer' />
          </Link>
          <h1 className="hidden ml-8 md:block text-5xl font-extrabold text-[#14192C]">Comunidades de alumnos</h1>
        </div>
        <div className="inline-block bg-[#E5E9EC] rounded-3xl mt-14 mb-8">
          <div className="px-6 py-6 sm:p-6 sm:pb-20">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-bold tracking-tighter text-[#14192C] lg:text-xl">
                  FORO GENERAL DE LA COMUNIDAD DE ALUMNOS
                </h2>
                <p className="mt-2 text-sm text-black">Interactuar con tus compañeros, comparte ideas y resuelve dudas de manera colaborativa.</p>
              </div>
            </div>
          </div>
        </div>

        <ProjectsSection communities={communities} />
      </div>

      <FloatingButton addCommunity={addCommunity} />
    </main>
  );
}
