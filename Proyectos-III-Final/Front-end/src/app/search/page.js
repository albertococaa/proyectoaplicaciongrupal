'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from "next/link";

function Home() {
    const [shearchName, setShearchName] = useState("")
    const [professorBool, setProfessorBool] = useState(false);
    const [studentBool, setStudentBool] = useState(false);
    const [comunityBool, setComunityBool] = useState(false);
    const [activityBool, setActivityBool] = useState(false);
    const [forumBool, setForumBool] = useState(false);
    const [info, setInfo] = useState([]);

    /*
    async function getNotifications(){
    
    
        return fetch(`http://87.221.139.203:443/api/communities/search/${shearchName}/${professorBool}/${studentBool}/${comunityBool}/${activityBool}/${forumBool}`,
        {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
    
    
        }
    
        ).then((res) => {
            if (!res.ok){
                //console.log("Error1",res.status)
                let error= "Error desconocido"
            } 
            return res.json()
         }
        ).then((response)=>{
            return response
    
        })
    
    }*/

      /*
    async handleSubmit 

        console.log(handleSubmit);
    fetch(`http://87.221.139.203:443/api/communities/search/${shearchName}/${professorBool}/${studentBool}/${comunityBool}/${activityBool}/${forumBool}`, {
                method: "GET",
                headers: {
                    //Authorization: `Bearer ${tokenJWT}`
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error en la solicitud');
                }
            })
            .then((res) => {
                console.log('Datos recibidos:', res);
            } )
            .catch((error) => {
                // Manejar errores de red o errores en la solicitud
                console.error('Error:', error.message);
            });
    }*/


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            shearchName: shearchName,
            professorBool: professorBool,
            studentBool: studentBool,
            comunityBool: comunityBool,
            activityBool: activityBool,
            forumBool: forumBool
        }

        console.log(handleSubmit);
    fetch(`http://87.221.139.203:443/api/communities/search/${shearchName}/${professorBool}/${studentBool}/${comunityBool}/${activityBool}/${forumBool}`, {
                method: "GET",
                headers: {
                    //Authorization: `Bearer ${tokenJWT}`
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error en la solicitud');
                }
            })
            .then((res) => {
                console.log('Datos recibidos:', res);
            } )
            .catch((error) => {
                // Manejar errores de red o errores en la solicitud
                console.error('Error:', error.message);
            });
    }
    
    //console.log('Datos recibidos:', info);
    //res.json()
    return (
        <main>
          <div className=" text-center p-5">
            <form className="rounded-3 bg-dark-subtle p-3" onSubmit={handleSubmit}>
                <h3>Busqueda</h3>
                <input onChange={(e) => setShearchName(e.target.value)} type="text" name="text" placeholder="Buscar..." required=""/>
                 <label>
                    Buscar Profesor
                    <input type="checkbox" onChange={(e) => setProfessorBool(e.target.checked)} />
                </label>
                <label>
                    Buscar Alumno
                    <input type="checkbox" onChange={(e) => setStudentBool(e.target.checked)} />
                </label>
                <label>
                    Buscar Comunidad
                    <input type="checkbox" onChange={(e) => setComunityBool(e.target.checked)} />
                </label>
                <label>
                    Buscar Actividad
                    <input type="checkbox" onChange={(e) => setActivityBool(e.target.checked)} />
                </label>
                <label>
                    Buscar Foro
                    <input type="checkbox" onChange={(e) => setForumBool(e.target.checked)} />
                </label>
                <button id="buscar" className="col" /*onClick={getNotifications().then((res) => {setInfo(res)})}*/>Buscar</button>
              </form>
              <div>
                    <h3>Datos recibidos:</h3>
                    <ul>
                        {info.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                   </ul>
                </div>
          </div>
        </main> 
      )
}

export default Home;