'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Registrarb(){
    
    //definir todas las variables necesarias
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordrep, setPasswordrep] = useState("")
    const [name, setName] = useState("")
    const [apellido1, setApellido1] = useState("")
    const [apellido2, setApellido2] = useState("")
    const [genero, setGenero] = useState("")
    const [grado, setGrado] = useState("")
    const [año, setAño] = useState(0)
    const [valido, setValido] = useState("")
    const [rol, setRol] = useState("")

    const handleTitulacion = (e) => {
        setGrado(e.target.value)
        
        let selectElement = document.getElementById("grado");

        let selectedOption = selectElement.options[selectElement.selectedIndex];

        let optgroup = selectedOption.parentNode.label;

        console.log("Optgroup Label:", optgroup);

        if(optgroup == "Grados"){
            document.getElementsByClassName("grado")[0].style.visibility = "visible";
            document.getElementsByClassName("grado")[1].style.visibility = "visible";
            document.getElementsByClassName("doblegrado")[0].style.visibility = "hidden";
        }
        else if(optgroup == "Dobles Grados"){
            document.getElementsByClassName("grado")[0].style.visibility = "visible";
            document.getElementsByClassName("grado")[1].style.visibility = "visible";
            document.getElementsByClassName("doblegrado")[0].style.visibility = "visible";
        }
        else if(optgroup == "Ciclos"){
            document.getElementsByClassName("grado")[0].style.visibility = "hidden";
            document.getElementsByClassName("grado")[1].style.visibility = "hidden";
            document.getElementsByClassName("doblegrado")[0].style.visibility = "hidden";
        }
    }

    const handleCurso = (e) => {
        let numCurso = parseInt(e.target.value);
        setAño(numCurso);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setValido("true");
        document.getElementById("emailTitle").style.color = "black";
        document.getElementById("contraseñaTitle").style.color = "black";
        document.getElementById("contraseñarepTitle").style.color = "black";

        if(password.length < 8 || password.length > 64){
            setValido("false");
            document.getElementById("contraseñaTitle").style.color = "red";
        }

        if(!email.endsWith('@live.u-tad.com') && !email.endsWith('@u-tad.com')){
            setValido("false");
            document.getElementById("emailTitle").style.color = "red";
        }
        if(password.length < 8){
            setValido("false");
            document.getElementById("contraseñaTitle").style.color = "red";
        }
        else if(password != passwordrep){
            setValido("false");
            document.getElementById("contraseñarepTitle").style.color = "red";
        }

        console.log(valido);

        if(valido == "true"){
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

            console.log(user);
            //setRol("user")
            fetch("http://87.221.139.203:443/api/auth/register", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)
        }
    }

    return(
        <div className="row text-center">
            <form onSubmit={handleSubmit} className="col">

                <h3 id="nombreTitle">Nombre</h3>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="nombre"/>
                
                <h3 id="apellido1Title">Primer apellido</h3>
                <input onChange={(e) => setApellido1(e.target.value)} type="text" name="name" placeholder="primer apellido"/>

                <h3 id="apellido2Title">Segundo apellido</h3>
                <input onChange={(e) => setApellido2(e.target.value)} type="text" name="name" placeholder="segundo apellido"/>

                <h3 id="emailTitle">Email de U-Tad</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Correo" required="" />

                <h3 id="contraseñaTitle">Contraseña</h3>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Contraseña" required="" />
                <h3 id="contraseñarepTitle">Repite Contraseña</h3>
                <input onChange={(e) => setPasswordrep(e.target.value)} type="password" name="password" placeholder="Repite contraseña" required="" />

                <h3 id="generoTitle">Genero</h3>
                <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="other">No binario</option>
                    <option value="prefer not to say">Prefiero no decirlo</option>
                </select>

                <h3 id="gradoTitle">Grado</h3>
                <select name="grado" id="grado" onChange={(e) => handleTitulacion(e)}>
                    <optgroup label="Grados">
                        <option value="aniv">Animacion</option>
                        <option value="didi">Diseño Digital</option>
                        <option value="inso">Ingenieria de Software</option>
                        <option value="ade">Direcccion de Empresas de Entretenimiento Digital</option>
                        <option value="efectos">Efectos Visuales</option>
                        <option value="dipi">Diseño de Productos Interactivos</option>
                    </optgroup>
                    <optgroup label="Dobles Grados">
                        <option value="mais">Doble Grado en Matematica Computacional Ingenieria de Software</option>
                        <option value="fiis">Doble Grado en Fisica Computacional Ingenieria de Software</option>
                    </optgroup>
                    <optgroup label="Ciclos">
                        <option value="marketing">Marketing y Publicidad</option>
                        <option value="apdi">Artes Plasticas y Diseño en Ilustracion</option>
                        <option value="multiplataforma">Desarrollo de Aplicaciones Multiplataforma</option>
                        <option value="web">Desarrollo de Aplicaciones Web</option>
                        <option value="sis">Administracion de Sistemas Informaticos en Red</option>
                        <option value="dual">Desarrollo de Aplicaciones Multiplataforma Dual</option>
                        <option value="entornos">Animaciones 3D, Juegos y Entornos Interactivos</option>
                    </optgroup>
                </select>

                <h3 id="añoTitle">Curso actual</h3>
                <select name="año" id="añoDobleGrado" onChange={(e) => handleCurso(e)}>
                    <option value="1">1º</option>
                    <option value="2">2º</option>
                    <option value="3" className="grado">3º</option>
                    <option value="4" className="grado">4º</option>
                    <option value="5" className="doblegrado">5º</option>
                </select><br></br><br></br>
                <button type="submit" id="registrar" className="col">Registrar</button>
                
                <input type="reset" id="borrar" value="Borrar" className="col"/>
            
            
            </form>
        </div>       
    )
}

export default Registrarb;