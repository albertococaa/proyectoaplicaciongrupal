'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
//import { UserContext, createCurrentUser } from '../user-context'
import Image from 'next/image'
import CurrentProfile from '@/components/CurrentProfile'


function Perfil(){
	
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

    const user = {
        token: '01',
        email: 'samcerbl@gmail.com',
        name: 'Sam'
    }

    const handleEdit = () => {
        router.push("profile/editProfile");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(valido);


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

    return(
        <div className="text-center">
                <CurrentProfile/>
        </div>
           
    )
}

export default Perfil;