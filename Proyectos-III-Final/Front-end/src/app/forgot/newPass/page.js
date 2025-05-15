import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import backArrow from "../../../resources/images/backArrow.png"
import eye from "../../../resources/images/eye.png"

export default function Home() {
  return (
    <main className="md:bg-gray-200 md:w-screen md:h-screen md:flex md:justify-center"> 
      <div className="bg-white md:rounded-xl md:h-auto flex-col self-center justify-center items-center gap-8 flex">
        <div className="md:m-20 flex-col flex">
          <div className="flex space-x-4 mx-3 mt-2">
            <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center"></Image>
            <h1 className="font-extrabold font-Montserrat text-3xl">Recuperación de contraseña</h1>
          </div>
          <div className="flex mx-3 gap-3 mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
          </div>
          <div>
            <p className="mx-3 font-Montserrat">Establece una nueva contraseña para tu cuenta.</p>
          </div>
          <div className="my-12 flex flex-col">
            <div className="grid grid-cols-2 border-b-2 border-gray-400 mx-4 mt-3 mb-2">
              <input type="password" placeholder="Contraseña (mín. 8 caracteres)" className="w-60 h-8 text-center placeholder-opacity-100 placeholder-gray-600 font-Montserrat"></input>
              <svg className="place-self-center justify-self-end mr-1.5" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z" fill="#9DA3A7"/>
              </svg>
            </div>

            <div className="grid grid-cols-2 border-b-2 border-gray-400 mx-4">
              <input type="password" placeholder="Vuelve a introducir la contraseña" className="w-64 h-8 text-center placeholder-opacity-100 placeholder-gray-600 font-Montserrat"></input>
              <svg className="place-self-center justify-self-end mr-1.5" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0ZM9 10C6.74182 10 4.90909 8.208 4.90909 6C4.90909 3.792 6.74182 2 9 2C11.2582 2 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 10 9 10ZM9 3.6C7.64182 3.6 6.54545 4.672 6.54545 6C6.54545 7.328 7.64182 8.4 9 8.4C10.3582 8.4 11.4545 7.328 11.4545 6C11.4545 4.672 10.3582 3.6 9 3.6Z" fill="#9DA3A7"/>
              </svg>
            </div>
          </div>
          <div className="grid justify-items-center">
            <button className="bg-blue-600 text-white text-xl font-bold font-Montserrat py-3 px-4 rounded-lg">CAMBIAR CONTRASEÑA</button>
          </div>
        </div>
      </div>
    </main>
  );
}