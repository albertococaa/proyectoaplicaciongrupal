"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
//npm install @nextui-org/dropdown para que funcione
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/dropdown';
import styles from '../styles/BurgerMenu.module.css';

import Link from 'next/link'
import Image from 'next/image'
/*Imagenes a usar*/
import hamburgerImage from '../resources/images/menu.png'
import closeImage from '../resources/images/close.png'
import lupeImage from '../resources/images/find.png'
import profileImage from '../resources/images/profile.png'
import logoImage from '../resources/images/logo.png'
import logoImageLarge from '../resources/images/logoLarge.png'
import sunImage from '../resources/images/sun.png'
import moonImage from '../resources/images/moon.png'
import notificationIcon from '../resources/images/notificationIcon.png'
import NotificationSection from "../components/NotificationSection";




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const Router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const home = () => {
        Router.push('/')//Aqui va la ruta de la pagina principal
    }
    const search = () => {
        Router.push('./search/')//Aqui va la ruta de la pagina de busqueda
    }
    const profile = () => {
        Router.push('./profile/') //Aqui va la ruta de la pagina de perfil
    }
    const comunidades = () => {
        Router.push('./communities/') //Aqui va la ruta de la pagina de perfil
    }
    const historialActividades = () => {
        Router.push('') //Aqui va la ruta de la pagina de perfil
    }
    const actividades = () => {
        Router.push('/activities') //Aqui va la ruta de la pagina de perfil
    }
    return (
        <main>
            <div className="flex grid grid-cols-8 border-b-2">
                <div className="block md:hidden">
                    <button className="btn" onClick={toggleMenu}><Image src={hamburgerImage} alt="Close Image" whidth={50} height={50}></Image> </button>
                </div>
                <div className="hidden md:block">
                    <button className="btn" onClick={home}><Image src={logoImageLarge} alt="Close Image" whidth={75} height={75}></Image> </button>
                </div>
                <div className="hidden col-span-1 md:flex">
                <Dropdown className="flex">
                        <DropdownTrigger>
                            <button className="text-black"><h1>Actividades</h1></button>
                        </DropdownTrigger>
                        <DropdownMenu className='text-black'>
                            <DropdownItem><button onClick={actividades}>Todas las Actividades</button></DropdownItem>
                            <DropdownItem><button onClick={historialActividades}>Historial de Actividades</button></DropdownItem>
                        </DropdownMenu>
                </Dropdown>
                </div>
                
                <div className="hidden col-span-1 md:flex">
                    <button className="btn text-black" onClick={comunidades}><h1>Comunidades</h1></button>
                </div>
                <ul className="flex align-items-center col-span-1 col-end-9 place-self-center">
                    <li className='items-stretch'>
                        <button className="btn" onClick={search}><Image src={lupeImage} alt="Lupe Image" whidth={50} height={50}></Image></button>
                    </li>
                    <li className='items-stretch'>
                        <button className="btn" onClick={profile}><Image src={profileImage} alt="Profile Image" whidth={50} height={50}></Image></button>
                    </li>
                    <li className="hidden md:block items-stretch">
                        <Dropdown>
                            <DropdownTrigger>
                                <button className="btn" type="button" id="dropDownNotifications"><Image src={notificationIcon} alt="Logo Image" whidth={50} height={50}></Image></button>
                            </DropdownTrigger>
                            <DropdownMenu className="hidden md:block">
                                <DropdownItem><NotificationSection/></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li className="hidden md:block items-stretch">
                        <button className="btn " onClick={home}>EN </button>
                    </li>
                    <li className="block md:hidden items-stretch">
                        <button className="btn " onClick={home}><Image src={logoImage} alt="Logo Image" whidth={50} height={50}></Image></button>
                    </li> 
                </ul>
            </div>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <button className="btn mt-2 ms-1" whidth={50} height={50} onClick={toggleMenu}><Image src={closeImage} alt="Close Image" whidth={50} height={50}></Image> </button>
                <ul className="d-flex flex-column align-items-center list-unstyled">
                    <li>
                        <Link href="/register">Actividades(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/login">Comuidades(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/forgot">Notificaciones(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/comunities">Normas(No tiene link todavia)</Link>
                    </li>
                    <li>
                        <Link href="/comunities">Politica de privacidad(No tiene link todavia)</Link>
                    </li>
                </ul>
                <div className="align-self-end d-flex">
                    <button className="btn ms-1 me-auto p-2"><Image src={sunImage} alt="Light/Dark mode Image" whidth={50} height={50}></Image></button>
                    <button className="btn me-2 ms-auto p-2"> EN (Español)</button>
                </div>
            </div>
        </main>
    );
}
