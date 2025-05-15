'use client'

import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'
import  {PedirComunidades, PedirInfoComunidades, CrearComunidades, EliminarComunidad, ActualizarComunidades, 
            PedirComunidadesUsuario, SalirComunidades, EntrarComunidades, BuscadorComunidades}  from '../calls/communities'
import {CrearForos, PedirInfoForos, PedirForos, ResponderForo, EliminarComentario, PedirRespuestas, DenunciarComentario} from '../calls/forums'
import{CrearActividad, PedirActividades, EntrarActividad, SalirActividad, PedirActividadesUsuario, PedirActividadesComunidad, PedirInfoActividades, BuscarCorreos} from '../calls/activities'
import{PedirDatos, ModificarDatos, ModificarContraseña, PedirInfoUser} from '../calls/profile'
import{PedirNotificaciones} from '../calls/notifications'
import{PedirMensajesDenunciados, AñadirPalabrasProhibidas, PedirMensajesEliminadosUser} from '../calls/backoffice'
import{RecuperarContraseñaPaso1, RecuperarContraseñaPaso2, RecuperarContraseñaPaso3, Registrar, InicioSesion} from '../calls/signin'

function Prueba(){

    //POR FAVOR NO TOCAR SIN AVISAR ES SOLO DE REFERENCIA
	
	//definir todas las variables necesarias
	const router = useRouter()

    //////////
    //COMUNIDADES
    //////////
    
    const handlePedirComunidad = (e) => {
        e.preventDefault();

        PedirComunidades();
    }

    const handlePedirInfoComunidad = (e) => {
        e.preventDefault();

        PedirInfoComunidades();
    }

    const handleCrearComunidad = (e) =>{
        e.preventDefault();

        const community = {
            name: "Patata club",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }

        CrearComunidades(community);
    }

    const handleEliminarComunidad = (e) => {
        e.preventDefault();

        EliminarComunidad();
    }

    const handleActualizarComunidad = (e) =>{
        e.preventDefault();

        const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }

        ActualizarComunidades(community);
    }

    const handlePedirComunidadesUsuario = (e) => {
        e.preventDefault();

        PedirComunidadesUsuario();
    }

    const handleSalirComunidades = (e) =>{
        e.preventDefault();

        SalirComunidades();
    }

    const handleEntrarComunidades = (e) =>{
        e.preventDefault();

        EntrarComunidades();
    }

    const handleBuscadorComunidades = (e) =>{
        e.preventDefault();

        //Que se busque el pringado al que le toque esto la vida para guardar las variables
        //La mayor hardcoreada de mi vida
        BuscadorComunidades("s", true, true, true, true, true);
    }

    //////////
    //FOROS
    //////////

    const handleCrearForo = (e) =>{
        e.preventDefault();

        const forum = {
            title: "Grupo 4",
            description: "Venimos a hablar sobre la mitocondria",
        }

        CrearForos(forum);
    }

    const handlePedirForos = (e) => {
        e.preventDefault();

        PedirForos();
    }

    const handlePedirInfoForo = (e) => {
        e.preventDefault();

        PedirInfoForos();
    }

    const handleRespuesta = (e) =>{
        e.preventDefault();

        const reply = {
            content: "Never gonna let you down",
            parent: "661e3317e47aa891dabfc208",
        }

        ResponderForo(reply);
    }

    const handlePedirRespuestas = (e) =>{
        e.preventDefault();

        PedirRespuestas();
    }

    const handleEliminarRespuesta = (e) => {
        e.preventDefault();

        EliminarComentario();
    }

    const handleDenuncia = (e) =>{
        e.preventDefault();

        const reply = {
            id:"661e3317e47aa891dabfc208",
            reason:"Me han rickroleado",
            //comment:"Patata",
        }

        DenunciarComentario(reply);
    }

    //////////
    //ACTIVIDADES
    //////////

    const handleCrearActividad = (e) =>{
        e.preventDefault();

        const activity = {
            title: "Degustación de patatas",
            description: "Vamos a comer distintos tipos de patatas y discutir cual es mejor",
            //id de comunidad, opcional
            community: "661d75228addb5becc6c6fac",
            //más o menos como los topics, pero no es array
            type: "comida"
        }

        CrearActividad(activity);
    }

    const handlePedirActividades = (e) => {
        e.preventDefault();

        PedirActividades();
    }

    const handleSalirActividad = (e) =>{
        e.preventDefault();

        SalirActividad();
    }

    const handleEntrarActividad = (e) =>{
        e.preventDefault();

        EntrarActividad();
    }

    const handlePedirActividadesUsuario = (e) => {
        e.preventDefault();

        PedirActividadesUsuario();
    }

    const handlePedirActividadesComunidad = (e) => {
        e.preventDefault();

        PedirActividadesComunidad();
    }

    const handlePedirInfoActividad = (e) => {
        e.preventDefault();

        PedirInfoActividades();
    }

    const handleBuscarCorreos = (e) =>{
        e.preventDefault();

        //String de posibles correos de busqueda
        BuscarCorreos("sam");
    }

    //////////
    //PERFIL
    //////////

    const handlePedirDatos = (e) => {
        e.preventDefault();

        PedirDatos();
    }

    const handleActualizarDatos = (e) =>{
        e.preventDefault();

        /*const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }*/

        const user = {
            description:"Oda uwu",
            degree:"DIDI",
            course:"3"
        }

        ModificarDatos(user);
    }

    const handleActualizarContraseña = (e) =>{
        e.preventDefault();

        /*const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }*/
        const password = {
            password: "hola1234"
        }

        ModificarContraseña(password);
    }

    //////////
    //NOTIFICACIONES
    //////////

    const handlePedirNotificaciones = (e) => {
        e.preventDefault();

        PedirNotificaciones();
    }

    //////////
    //BACK OFFICE
    //////////

    const handlePedirMensajesDenunciados = (e) => {
        e.preventDefault();

        PedirMensajesDenunciados();
    }

    const handleAñadirPalabraProhibida = (e) =>{
        e.preventDefault();

        const palabra = "puto"

        AñadirPalabrasProhibidas(palabra);
    }

    const handlePedirMensajesEliminadosUser = (e) => {
        e.preventDefault();

        PedirMensajesDenunciados();
    }

    //////////
    //INICIO DE SESION
    //////////

    const handleRecuperarContraseña1 = (e) =>{
        e.preventDefault();

        /*const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }*/
        const email = {
            email: "pablo.izquierdo2@live.u-tad.com"
        }

        RecuperarContraseñaPaso1(email);
    }

    const handleRecuperarContraseña2 = (e) =>{
        e.preventDefault();

        /*const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }*/
        const code = {
            email: "pablo.izquierdo2@live.u-tad.com",
            recoveryCode: 934889
        }

        RecuperarContraseñaPaso2(code);
    }

    const handleRecuperarContraseña3 = (e) =>{
        e.preventDefault();

        /*const community = {
            name: "Religion patatera",
            description: "Es un club de adoración a las patatas.",
            topics: ["patata"],
        }*/
        const password = {
            email: "pablo.izquierdo2@live.u-tad.com",
            newPassword: "hola1234"
        }

        RecuperarContraseñaPaso3(password);
    }

    const handleRegistro = (e) =>{
        e.preventDefault();

        const user = {
            email: email,
            password: password,
            name: name,
            firstSurname: apellido1,
            secondSurname: apellido2,
            gender: genero,
            degree: grado,
            course: año
            //rol: rol
        }

        Registrar(user);
    }

    const handleLogin = (e) =>{
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        InicioSesion(user);
    }

    return(
        <div className="row text-center">
            <h1>Comunidades</h1>
            <button onClick={(e) => handlePedirComunidad(e)} >Pedir Comunidades</button>
            <button onClick={(e) => handlePedirInfoComunidad(e)} >Pedir Info Comunidades</button>
            <button onClick={(e) => handleCrearComunidad(e)} >Crear Comunidades</button>
            <button onClick={(e) => handleEliminarComunidad(e)} >Eliminar Comunidad</button>
            <button onClick={(e) => handleActualizarComunidad(e)} >Actualizar Comunidad</button>
            <button onClick={(e) => handlePedirComunidadesUsuario(e)} >Pedir Comunidades de usuario</button>
            <button onClick={(e) => handleSalirComunidades(e)} >Salirse de Comunidad</button>
            <button onClick={(e) => handleEntrarComunidades(e)} >Entrar en Comunidad</button>
            <button onClick={(e) => handleBuscadorComunidades(e)} >Buscador</button>

            <h1>Foros</h1>
            <button onClick={(e) => handleCrearForo(e)} >Crear Foro</button>
            <button onClick={(e) => handlePedirForos(e)} >Pedir Foros</button>
            <button onClick={(e) => handlePedirInfoForo(e)} >Pedir Info Foro</button>
            <button onClick={(e) => handleRespuesta(e)} >Responder</button>
            <button onClick={(e) => handlePedirRespuestas(e)} >Pedir Respuestas</button>
            <button onClick={(e) => handleEliminarRespuesta(e)} >Eliminar comentario</button>
            <button onClick={(e) => handleDenuncia(e)} >Denunciar</button>

            <h1>Actividades</h1>
            <button onClick={(e) => handleCrearActividad(e)} >Crear Actividad</button>
            <button onClick={(e) => handlePedirActividades(e)} >Pedir Actividades</button>
            <button onClick={(e) => handleEntrarActividad(e)} >Unirse a Actividad</button>
            <button onClick={(e) => handleSalirActividad(e)} >Salirse de Actividad</button>
            <button onClick={(e) => handlePedirActividadesUsuario(e)} >Pedir Comunidades de usuario</button>
            <button onClick={(e) => handlePedirActividadesComunidad(e)} >Pedir Comunidades de comunidad</button>
            <button onClick={(e) => handlePedirInfoActividad(e)} >Pedir Info Actividad</button>
            <button onClick={(e) => handleBuscarCorreos(e)} >Buscar Correo</button>

            <h1>Perfil</h1>
            <button onClick={(e) => handlePedirDatos(e)} >Pedir Datos de Usuario</button>
            <button onClick={(e) => handleActualizarDatos(e)} >Actualizar Datos de Usuario</button>
            <button onClick={(e) => handleActualizarContraseña(e)} >Actualizar Contraseña de Usuario</button>

            <h1>Notificaciones</h1>
            <button onClick={(e) => handlePedirNotificaciones(e)} >Pedir Notificaciones</button>

            <h1>Back Office</h1>
            <button onClick={(e) => handlePedirMensajesDenunciados(e)} >Pedir Mensajes Denunciados</button>
            <button onClick={(e) => handleAñadirPalabraProhibida(e)} >Añadir Palabra Prohibida</button>
            <button onClick={(e) => handlePedirMensajesEliminadosUser(e)} >Pedir Mensajes Eliminados de Usuario</button>

            <h1>Inicio de Sesión</h1>
            <button onClick={(e) => handleRegistro(e)} >Registro</button>
            <button onClick={(e) => handleLogin(e)} >Login</button>
            <button onClick={(e) => handleRecuperarContraseña1(e)} >Recuperar contraseña email</button>
            <button onClick={(e) => handleRecuperarContraseña2(e)} >Recuperar contraseña codigo</button>
            <button onClick={(e) => handleRecuperarContraseña3(e)} >Recuperar contraseña contraseña</button>
        </div>       
    )
}

export default Prueba;