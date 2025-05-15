'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import foto from "../../resources/images/gentehablando.png"
import nextArrow from "../../resources/images/nextArrow.png"
import ActivitySection from "@/components/ActivitySection"
import ProjectCard from '@/components/ProjectCard';
import masGente from '../../resources/images/masGente.png'

function Home() {
    var registered = true;
    var name = "Elisa";
  
    const handleSubmit = (e) => {
      
    }
  
    return (
      <main className= "min-h-screen bg-[#FFFFFF]">
        <Navbar/>
        <div className='md:mt-12'>
          <div className='mx-3 mt-4'>
            <div className={registered ? 'flex flex-row space-x-28 md:space-x-96' : 'flex flex-row'}>
              <p className={registered ? 'text-slate-900 font-extrabold text-3xl font-Montserrat mt-1 md:self-start md:mr-56 md:text-5xl' : 'text-slate-900 font-extrabold text-3xl font-Montserrat'}>{registered ? "¡Hola, "+ name + "!" : "Descubre qué está ocurriendo en U-tad"}</p>
              <Image src={nextArrow} width={48} height={48} alt="Esto no furula" className={registered ? "box-content mb-4 md:" : "box-content self-center"}></Image>
            </div>
            <div className={registered ? "block mb-4" : "hidden"}>
              <div>
                <p className='text-slate-900 font-Montserrat font-semibold mb-5 md:text-2xl'>DESCUBRE QUÉ ESTÁ OCURRIENDO EN EL CAMPUS U-TAD</p>
              </div>
              <p className='text-blue-600 font-semibold font-Montserrat -mb-0.5 md:text-2xl'>ACTIVIDADES QUE HAS GUARDADO</p>
              <div className='overflow-x-scroll'>
                <div className='flex'>
                  <ProjectCard></ProjectCard>
                  <ProjectCard></ProjectCard>
                  <ProjectCard></ProjectCard>
                </div>
              </div>
            </div>
            <div>
              <p className='text-blue-600 font-semibold font-Montserrat -mb-0.5 md:text-2xl'>PRÓXIMAS ACTIVIDADES</p>
              <div className='overflow-x-scroll'>
                <div className='flex'>
                  <ProjectCard></ProjectCard>
                  <ProjectCard></ProjectCard>
                  <ProjectCard></ProjectCard>
                </div>
              </div>
            </div>
            <div className="my-4 md:my-0 md:mx-3">
              <div className= "flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8">
                <Image src={foto} width={672} height={374} alt="Esto no furula" className="box-content self-center md:col-start-1"></Image>
                <div className='md:col-start-2 self-center'>
                  <p className="text-slate-900 font-semibold font-Montserrat my-2 md:text-2xl">APÚNTATE A ACTIVIDADES Y CREA LAS TUYAS PROPIAS EN U-TAS ACTIVITIES</p>
                  <ul className='list-disc text-zinc-700 text-sm'>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">En nuestra sección de actividades podrás descubrir los eventos que están por suceder en U-tad.</li>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">Podrás llegar a tantas personas como desees con las opciones de privacidad de las actividades.</li>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">Conoce variedad de actividades desde una quedada para conocer amigos hasta masterclasses con los profesionales de la industria.</li>
                  </ul>
                  <button className="bg-blue-600 text-white font-bold font-Montserrat py-3 px-4 rounded-xl md:text-lg md:justify-self-end md:mr-44">CREA UNA ACTIVIDAD</button>
                </div>
                
              </div>
            </div>
            <div className=" my-4 md:mx-3">
              <div className= "flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8">
                <Image src={masGente} width={672} height={374} alt="Esto no furula" className="box-content self-center md:col-start-2 md:justify-self-end"></Image>
                <div className='md:col-start-1 md:row-start-1 self-center'>
                  <p className="text-slate-900 font-semibold font-Montserrat my-2 md:text-2xl">FORMA PARTE DE COMUNIDADES CON TUS MISMOS INTERESES</p>
                  <ul className='list-disc text-zinc-700 text-sm'>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">Crea foros para compartir tus dudas y gustos con el resto de la comunidad U-tad.</li>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">Encuentra tu lugar dentro de las diversas comunidades correspondientes a todos los ámbitos de la universidad.</li>
                    <li className="text-zinc-700 text-sm font-Montserrat md:text-lg">Descubre nuevos eventos relacionados a los temas de discusión de los foros.</li>
                  </ul>
                  <button className="bg-blue-600 text-white font-bold font-Montserrat py-3 px-4 rounded-xl md:text-lg md:justify-self-end md:mr-44">EXPLORA LAS COMUNIDADES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> 
    )
  }
  
  export default Home;