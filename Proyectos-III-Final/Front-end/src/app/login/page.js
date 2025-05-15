'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from "next/link";

function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    console.log(user);
    fetch("http://87.221.139.203:443/api/auth/login", {
                method: "POST",
                headers: {
                
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
  }

  return (
    <main>
      <div className=" text-center p-5">
        <form onSubmit={handleSubmit} className="rounded-3 bg-dark-subtle p-3">
            <h3>Inicio de sesion</h3>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Correo" required=""/>

            <h4>Contraseña</h4>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Contraseña"/>
            <div className=" p-2">
            <button type="submit" id="registrar" className="col">Registrar</button>
                <Link className="link-danger p-2" href="../forgot/mail">Forgot password</Link>
            </div>
          </form>
      </div>
    </main> 
  )
}

export default Home;