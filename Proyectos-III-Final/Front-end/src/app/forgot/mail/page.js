'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import backArrow from "../../../resources/images/backArrow.png"

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const redirigir = (code) => {
    console.log("Code: ", code.message)
    if(code.status==200){
        router.push(window.location.href = `/forgot/code/${code.message.id}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email
    }

    console.log(user);
    fetch("http://87.221.139.203:443/api/auth/password/email", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then((data) => redirigir(data))
                //.then(router.push("../forgot/code"))
  }

  return (
    <main className="md:bg-gray-200 md:w-screen md:h-screen md:flex md:justify-center">
        <div className="bg-white md:rounded-xl md:h-auto flex-col self-center justify-center items-center gap-8 flex">
          <div className="md:m-20 flex-col flex">
            <div className="flex space-x-4 mx-2 md:mx-0">
              <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center md:hidden"></Image>
              <h1 className="font-extrabold font-Montserrat text-3xl md:text-5xl">Recuperación de contraseña</h1>
            </div>
            <div className="flex gap-3 mt-2 md:justify-center mx-3 md:mx-0">
              <div className="w-full md:w-72 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
              <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
              <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            </div>
            <div >
              <p className="font-Montserrat md:mt-4 mx-3 md:mx-0 text-sm md:text-lg">Escribe un correo electrónico al que quieras que se envíe el código para recuperar la contraseña.</p>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-gray-400 mx-4 my-32">
              <input placeholder="Correo electrónico" className="w-60 h-8 text-center placeholder-opacity-100 placeholder-gray-600 font-Montserrat"></input>
              
              <svg className="justify-self-end" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5876 27.5635C23.4543 27.5635 23.3293 27.5425 23.2126 27.5005C23.0959 27.4592 22.9876 27.3885 22.8876 27.2885L18.2626 22.6635C18.0793 22.4802 17.9919 22.2508 18.0006 21.9755C18.0086 21.7008 18.1043 21.4718 18.2876 21.2885C18.4709 21.1052 18.7043 21.0135 18.9876 21.0135C19.2709 21.0135 19.5043 21.1052 19.6876 21.2885L23.5876 25.1885L27.5126 21.2635C27.6959 21.0802 27.9253 20.9925 28.2006 21.0005C28.4753 21.0092 28.7043 21.1052 28.8876 21.2885C29.0709 21.4718 29.1626 21.7052 29.1626 21.9885C29.1626 22.2718 29.0709 22.5052 28.8876 22.6885L24.2876 27.2885C24.1876 27.3885 24.0793 27.4592 23.9626 27.5005C23.8459 27.5425 23.7209 27.5635 23.5876 27.5635Z" fill="#14192C"/>
              </svg>
            </div>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2">
              <button className="hidden md:block border-opacity-100 border-2 border-blue-500 bg-white text-blue-600 text-xl font-bold font-Montserrat py-3 px-4 rounded-xl md:justify-self-start md:ml-44">VOLVER</button>
              <button className="bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-xl md:justify-self-end md:mr-44">CONTINUAR</button>
            </div>
          </div>
        </div>
    </main>
  );
}
