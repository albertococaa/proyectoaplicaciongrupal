'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react'
import backArrow from "../../../resources/images/backArrow.png"
import profileTemp from "../../../resources/images/profileTemp.png"

export default function Student() {

  return (
    <main className="md:bg-gray-200 md:w-screen md:h-screen md:flex md:justify-center">
      <div className="bg-white md:rounded-xl md:h-auto flex-col self-center justify-center items-center gap-8 flex">
        <div className="md:m-20 flex-col flex">
          <div className="flex space-x-4 mx-2 md:mx-0 mt-5 md:mt-0">
            <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center md:hidden"></Image>
            <h1 className="font-extrabold font-Montserrat text-3xl md:text-5xl">Crea tu cuenta</h1>
          </div>
          <div className="flex gap-3 mt-2 md:justify-center mx-3 md:mx-0">
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full md:w-72 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
          </div>
          <div >
            <p className="font-Montserrat md:mt-4 mx-3 md:mx-0 text-sm text-zinc-500">Añade tu titulación, una fotografía (en formato .jpg o .png) y una biografía para tu perfil.</p>
          </div>
          <div className="grid justify-center md:grid-cols-2">
            <div className="grid justify-center md:col-start-1">
              <Image src={profileTemp} width={128} height={128} alt="Esto no furula" className="box-content justify-self-center col-start-1 row-start-1"></Image>
              <svg className="col-start-1 row-start-1 justify-self-end self-end" width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#0065EF"/>
                  <path d="M14 29.8339V34H18.1661L30.4533 21.7128L26.2872 17.5467L14 29.8339ZM33.675 18.491C34.1083 18.0578 34.1083 17.3579 33.675 16.9246L31.0754 14.325C30.6421 13.8917 29.9422 13.8917 29.509 14.325L27.4759 16.358L31.642 20.5241L33.675 18.491Z" fill="white"/>
              </svg>
            </div>
            <p className="text-blue-600 text-lg font-semibold grid justify-center font-Montserrat mt-3">NOMBRE DE ALUMNO</p>
            <div className="grid justify-center md:col-start-2">
              <label className="text-zinc-700 text-sm font-Montserrat">Grado/ciclo/posgrado
                <input type="checkbox"/>
              </label>
            </div>
            <div className="grid grid-cols-2 md:col-start-2">
                <div>
                    <label className="text-zinc-700 text-sm font-Montserrat">Grado/ciclo/posgrado
                        <input type="checkbox"/>
                    </label>
                </div>
                <div>
                    <label className="text-zinc-700 text-sm font-Montserrat">Grado/ciclo/posgrado
                        <input type="checkbox"/>
                    </label>
                </div>
            </div>
            <label className="md:col-start-2">Biografía</label>
            <textarea className="md:col-start-2 border border-zinc-400 rounded-lg text-sm font-Montserrat" rows="5" maxLength={200} placeholder="¿Cuáles son tus intereses?"></textarea>
          </div>
          
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 mb-8 mt-4">
            <button className="hidden md:block border-opacity-100 border-2 border-blue-500 bg-white text-blue-600 text-xl font-bold font-Montserrat py-3 px-4 rounded-xl md:justify-self-start md:ml-44">VOLVER</button>
            <button className="bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-xl md:justify-self-end md:mr-44">CONTINUAR</button>
          </div>
        </div>
        
      </div>
    </main>
  );
}