'use client'

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
//import { UserContext } from '@/app/user-context';
import Image from 'next/image'
import Tag from './Tag';
import ProfileTemp from '../resources/images/ProfileTemp.png';
import BackArrow from '../resources/images/backArrow.png';


const projectsData = [
    {
        id: 1,
        title: "Activity 1",
        description: "This is a description of project 1",
        imgUrl: "/1.png",
        tag: ["All", "React"],
    },
    {
        id: 2,
        title: "Activity 2",
        description: "This is a description of project 2",
        imgUrl: "/2.png",
        tag: ["All", "Node.js"],
    },
    {
        id: 3,
        title: "Activity 3",
        description: "This is a description of project 3",
        imgUrl: "/3.png",
        tag: ["All", "Vue.js"],
    },
    {
        id: 4,
        title: "Activity 4",
        description: "This is a description of project 4",
        imgUrl: "/4.png",
        tag: ["All", "React"],
    },
    {
        id: 5,
        title: "Activity 5",
        description: "This is a description of project 5",
        imgUrl: "/5.png",
        tag: ["All", "Node.js"],
    },
    {
        id: 6,
        title: "Activity 6",
        description: "This is a description of project 6",
        imgUrl: "/6.png",
        tag: ["All", "Vue.js"],
    },
]

export default function CurrentProfile() {
    const [colorFondo, setColorFondo] = useState('#FFE802');
    const router = useRouter();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("elisa.rodriguez@live.u-tad.com")
    const [bio, setBio] = useState("Me gustan las peliculas de ciencia ficción y el voleibol :)")
    const [tag, setTag] = useState("2ºB ANIG")

    const handleEdit = () => {
        router.push("profile/editProfile");
    }

    return (   
        <div class = "bg-[#FFFFFF] sm:bg-[#FFE802]">
            <div 
                className="w-full max-h-sm mx-auto sm:max-w-7xl left-0 top-25 p-1 h-48"
                style={{
                    backgroundColor: colorFondo // Aplicando el color de fondo dinámicamente
                }}
            >
                <div class="absolute left-2 top-20">
                    <button class="flex-1 justify-center block font-semibold sm:hidden">
                        <Image 
                            src= {BackArrow} 
                            width={30} 
                            height={30} 
                            className="rounded-full mt-[-10px]" 
                            alt="back"
                            />
                    </button>
                </div>
                <div class="max-w-lg max-h-sm mx-auto sm:max-w-7xl left-0 top-25 p-1">
                    <div class="container mx-auto p-1 flex flex-col rounded-lg absolute left-2">
                        <div className='flex flex items-center justify-center min-t-screen mt-[-20px] sm:justify-start'>
                        <h1 className="font-extrabold font-Montserrat text-3xl mt-[25px]  sm:text-5xl"> {name ? name : "Tu perfil"}</h1>
                        <button className='mt-[20px] ml-[60px]'  onClick={handleEdit}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_234)">
                                <path d="M38.28 25.88C38.36 25.28 38.4 24.66 38.4 24C38.4 23.36 38.36 22.72 38.26 22.12L42.32 18.96C42.68 18.68 42.78 18.14 42.56 17.74L38.72 11.1C38.48 10.66 37.98 10.52 37.54 10.66L32.76 12.58C31.76 11.82 30.7 11.18 29.52 10.7L28.8 5.61999C28.72 5.13999 28.32 4.79999 27.84 4.79999H20.16C19.68 4.79999 19.3 5.13999 19.22 5.61999L18.5 10.7C17.32 11.18 16.24 11.84 15.26 12.58L10.48 10.66C10.04 10.5 9.54001 10.66 9.30001 11.1L5.48001 17.74C5.24001 18.16 5.32001 18.68 5.72001 18.96L9.78001 22.12C9.68001 22.72 9.60001 23.38 9.60001 24C9.60001 24.62 9.64001 25.28 9.74001 25.88L5.68001 29.04C5.32001 29.32 5.22001 29.86 5.44001 30.26L9.28001 36.9C9.52001 37.34 10.02 37.48 10.46 37.34L15.24 35.42C16.24 36.18 17.3 36.82 18.48 37.3L19.2 42.38C19.3 42.86 19.68 43.2 20.16 43.2H27.84C28.32 43.2 28.72 42.86 28.78 42.38L29.5 37.3C30.68 36.82 31.76 36.18 32.74 35.42L37.52 37.34C37.96 37.5 38.46 37.34 38.7 36.9L42.54 30.26C42.78 29.82 42.68 29.32 42.3 29.04L38.28 25.88ZM24 31.2C20.04 31.2 16.8 27.96 16.8 24C16.8 20.04 20.04 16.8 24 16.8C27.96 16.8 31.2 20.04 31.2 24C31.2 27.96 27.96 31.2 24 31.2Z" fill="#14192C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3_234">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" max-h-sm mx-auto sm: left-0 top-25 max-w-full mt-[-150px]">
                <div class="container mx-auto p-4 flex flex-col rounded-lg sm:bg-[#FFFFFF] sm:mt-[80px]">
                    <div class="sm:flex items-center mt-4">
                        <div class=" max-h-sm mx-auto sm: left-0 top-25 max-w-xs flex-1">
                            <div class="items-center container mx-auto p-4 flex flex-col rounded-lg">
                            <Image 
                                src= {ProfileTemp} 
                                alt="profile picture"
                                width={200} 
                                height={200} 
                                style={{
                                    borderRadius: '9999px',  // Equivalente a 'rounded-full' en Tailwind
                                    borderWidth: '4px',      // Equivalente a 'border-4'
                                    borderColor: colorFondo  // Uso dinámico del color de fondo
                                }}
                            />  
                            </div>
                        </div>
                        <div class=" max-h-sm mx-auto lg: left-0 top-25 max-w-full flex-1">
                            <div class="container mx-auto p-4 flex flex-col rounded-lg">
                                <div class="max-w-sm  text-left">
                                    <div class="mt-4">
                                        <h2 class="text-lg font-bold text-gray-800 text-left" style={{ color: '#0f4b9f' }}>
                                        CORREO ELECTRÓNICO
                                        </h2>
                                        <p class="text-gray-600">
                                            {email}
                                        </p>
                                    </div>
                                <div class="mt-4">
                                    <h2 class="text-lg font-bold text-gray-800" style={{ color: '#0f4b9f' }}>
                                    ROLES
                                    </h2>
                                    <div class="flex space-x-2">
                                    <div className='flex-column'>
                                        <h1 className='badge text-center bg-primary rounded-pill rounded-full' style={{backgroundColor: colorFondo}}>&nbsp;2ºB ANIG&nbsp;</h1>
                                    </div>
                                    <div className='flex-column'>
                                        <h1 className='badge text-center bg-primary rounded-pill rounded-full' style={{backgroundColor: colorFondo}}>&nbsp;Animación&nbsp;</h1>
                                    </div>
                                    <div className='flex-column'>
                                        <h1 className='badge text-center bg-primary rounded-pill rounded-full' style={{backgroundColor: colorFondo}}>&nbsp;Representante de Grado&nbsp;</h1>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="mt-4">
                                        <h2 class="text-lg font-bold text-gray-800" style={{ color: '#0f4b9f' }}>
                                        BIOGRAFÍA
                                        </h2>
                                        <p class="text-gray-600">
                                        {bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-lg font-bold text-gray-800 text-left" style={{ color: '#0f4b9f' }}>
                        ACTIVIDADES QUE HAS GUARDADO
                        </h2>
                        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {projectsData.map(project => (
                        <li key={project.id} className="bg-white p-4 rounded-lg">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <img src={project.imgUrl} alt={`Image of ${project.title}`} className="w-full h-auto rounded mb-4" />
                            <p>{project.description}</p>
                            <Tag className="text-gray-600" id={project.tag.join(', ')}></Tag>
                        </li>
                    ))}
                         </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}