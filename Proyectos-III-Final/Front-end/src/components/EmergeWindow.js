'use client'

import { useContext, useState } from 'react';
//import { UserContext } from '@/app/user-context';
import Image from 'next/image'
import Tag from './Tag';
import ProfileTemp from '../resources/images/ProfileTemp.png';

export default function CurrentProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [tag, setTag] = useState("")

    return (   
        <div className="fixed flex items-center justify-center inset-0">
            <div className="bg-white border-2 p-8 shadow-lg rounded-lg mx-auto" >
                <h1 className="font-extrabold font-Montserrat text-4xl sm:text-5xl text-center mb-6">Cambios sin guardar</h1>
                <p className="text-sm sm:text-lg text-gray-600 text-center mb-6 break-words">
                ¿Estás seguro/a de que quieres volver sin guardar los <br />cambios realizados?
                </p>
                <div class="max-w-sm max-h-sm mx-auto ">
                    <div class="container mx-auto p-4 flex flex-col rounded-lg py-30 space-y-4">
                        <button 
                            className=" item-center bg-blue-600 text-white py-3 rounded-full font-bold text-lg"
                        >
                            sí, VOLVER
                        </button>
                        <button className="w-full bg-white text-blue-600 py-3 rounded-full border-2 border-blue-600 font-bold text-lg mb-[180px]">
                            NO, GUARDAR CAMBIOS
                            onClick={handleErrorMessage}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}