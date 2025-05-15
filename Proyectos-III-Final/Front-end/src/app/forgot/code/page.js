'use client'

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react'
import backArrow from "../../../resources/images/backArrow.png"

export default function Code() {
  //Variable de si ha saltado error
  var error = true;

  const handleErrorMessage = () =>{
    error = !error;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      code: code
    }

    console.log(user);
    fetch("http://87.221.139.203:443/api/auth/password/code", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .then(router.push("../forgot/code"))
  }

  const [codes, setCodes] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    setCodes(prevCodes => {
      const newCodes = [...prevCodes];
      newCodes[index] = value;
      return newCodes;
    });
    if (value !== '' && index < codes.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <main className="md:bg-gray-200 md:w-screen md:h-screen md:flex md:justify-center">
      <div className="bg-white md:rounded-xl md:h-auto flex-col self-center justify-center items-center gap-8 flex">
        <div className="md:mx-16 md:mb-16 flex-col flex">
          <div className="flex space-x-4 mx-2 mt-5 md:mx-0">
            <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center md:hidden"></Image>
            <h1 className="font-extrabold font-Montserrat text-3xl md:text-5xl">Recuperación de contraseña</h1>
          </div>
          <div className="flex gap-3 mt-2 md:justify-center mx-3 md:mx-0">
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full md:w-72 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
          </div>
          <div >
            <p className="font-Montserrat md:mt-4 mx-3 md:mx-0 text-sm text-zinc-500">Introduce el código enviado al correo elisa.rodriguez@live.u-tad.com para recuperar la contraseña.</p>
          </div>
          <div className="my-12">
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    ref={ref => (inputRefs.current[index] = ref)}
                    type="text"
                    maxLength="1"
                    value={code}
                    onChange={e => handleChange(index, e)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    className={error ? "w-12 h-12 md:h-16 text-center text-3xl font-Montserrat text-red-500 font-bold border-2 border-red-500 rounded focus:outline-none" : "w-12 h-12 md:h-16 text-center text-3xl font-Montserrat text-gray-600 font-bold border-2 border-gray-400 md:border-blue-500 rounded focus:outline-none"}
                  />
                ))}
              </div>
            </div>
            <div className={error ? "flex justify-center mt-1" : "flex justify-center mt-1 hidden"}>
              <svg  width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9875 33C14.6042 33 14.3208 32.8333 14.1375 32.5C13.9542 32.1667 13.9542 31.8333 14.1375 31.5L23.3875 15.5C23.5708 15.1667 23.8625 15 24.2625 15C24.6625 15 24.9542 15.1667 25.1375 15.5L34.3875 31.5C34.5708 31.8333 34.5708 32.1667 34.3875 32.5C34.2042 32.8333 33.9208 33 33.5375 33H14.9875ZM24.2625 22C23.9792 22 23.7418 22.0957 23.5505 22.287C23.3585 22.479 23.2625 22.7167 23.2625 23V26C23.2625 26.2833 23.3585 26.5207 23.5505 26.712C23.7418 26.904 23.9792 27 24.2625 27C24.5458 27 24.7835 26.904 24.9755 26.712C25.1668 26.5207 25.2625 26.2833 25.2625 26V23C25.2625 22.7167 25.1668 22.479 24.9755 22.287C24.7835 22.0957 24.5458 22 24.2625 22ZM24.2625 30C24.5458 30 24.7835 29.904 24.9755 29.712C25.1668 29.5207 25.2625 29.2833 25.2625 29C25.2625 28.7167 25.1668 28.4793 24.9755 28.288C24.7835 28.096 24.5458 28 24.2625 28C23.9792 28 23.7418 28.096 23.5505 28.288C23.3585 28.4793 23.2625 28.7167 23.2625 29C23.2625 29.2833 23.3585 29.5207 23.5505 29.712C23.7418 29.904 23.9792 30 24.2625 30Z" fill="#F23F3F"/>
              </svg>
              <p className="text-red-500 text-xs md:text-sm font-light mt-3 md:self-end">El código introducido es incorrecto. Por favor, vuelve a introducirlo.</p>
            </div>
            <div className="flex justify-center mt-2">
                <p className="text-blue-600 underline font-Montserrat">Volver a enviar un código</p>
            </div>
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