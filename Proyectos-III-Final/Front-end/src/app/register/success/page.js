import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import backArrow from "../../../resources/images/backArrow.png"
import signinSuccess from "../../../resources/images/signinSuccess.png"

export default function Success() {
  return (
    <main className="md:bg-gray-200 md:w-screen md:h-screen md:flex md:justify-center">
        <div className="bg-white md:rounded-xl md:h-auto flex-col self-center justify-center items-center gap-8 flex">
            <div className="md:mx-16 md:mb-16 flex-col flex">
                <div className="flex space-x-4 mx-3 mt-5 md:mt-0">
                    <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="md:hidden box-content h-8 w-8 self-center"></Image>
                    <h1 className="font-extrabold font-Montserrat text-3xl">Crea tu cuenta</h1>
                </div>
                <div className="flex mx-3 gap-3 mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
                    <div className="w-full bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
                </div>
                <div className="flex justify-center mt-2 mb-3">
                    <Image src={signinSuccess} width={187} height={256} alt="Esto no furula" className="box-content self-center"></Image>
                </div>
                <div>
                    <p className="text-sm md:text-lg mx-3 font-Montserrat text-zinc-500">¡Tu cuenta ha sido creada con éxito! Ya puedes acceder a todos los contenidos de la página.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-2 mt-3 justify-items-center">
                    <button className="bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-lg">IR A PÁGINA DE INICIO</button>
                    <p className="md:hidden text-blue-600 text-sm underline font-Montserrat justify-self-center">Inicia sesión con otra cuenta</p>
                    <p className="md:hidden text-blue-600 text-sm underline font-Montserrat justify-self-center -mt-4">Vuelve a registrarte en U-tad Activities</p>                
                </div>
            </div>
        </div>
    </main>
  );
}