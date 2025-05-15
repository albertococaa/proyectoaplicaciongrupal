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
        <div className="md:m-20 flex-col flex">
          <div className="flex space-x-4 mx-2 md:mx-0 mt-5 md:mt-0">
            <Image src={backArrow} width={32} height={32} alt="Esto no furula" className="box-content h-8 w-8 self-center md:hidden"></Image>
            <h1 className="font-extrabold font-Montserrat text-3xl md:text-5xl">Crea tu cuenta</h1>
          </div>
          <div className="flex gap-3 mt-2 md:justify-center mx-3 md:mx-0">
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div>
            <div className="w-full md:w-72 bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"></div>
          </div>
          <div >
            <p className="font-Montserrat md:mt-4 mx-3 md:mx-0 text-sm text-zinc-500">Introduce el código enviado al correo elisa.rodriguez@live.u-tad.com para confirmar la creación de cuenta.</p>
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