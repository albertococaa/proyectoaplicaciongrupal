import { useRouter } from 'next/navigation'
//import { endpoint } from '../page.js';

const endpoint = "http://87.221.139.203:443/api/";
//Cambiar nombre luego
export async function PedirComunidades(){
    try {
        //Cambiar enlace
        //const response = await fetch(`${endpoint}communities/getItems`)

        //Eso debería funcionar, pero si no prueba con esto
        const response = await fetch(`${endpoint}communities/getItems`, {
            method: "GET",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`,
            //Cambiar este token por una variable
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
            'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
          throw new Error('Error Pedir Comunidades');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}

export async function PedirInfoComunidades (){
  try {
      //Cambiar enlace
      const response = await fetch(`${endpoint}communities/getItem/661d607b5efc41165024140f`, {
        method: "GET",
        headers: {
        //Authorization: `Bearer ${tokenJWT}`,
        //Cambiar este token por una variable
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
        'Content-Type': 'application/json',
        },
    })
      if (!response.ok) {
        throw new Error('Error Pedir Comunidades');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
  }
  //A cambiar luego
}

export const CrearComunidades = (community) => {

  //cambiar enlace esto es de registro
  fetch(`${endpoint}communities/createItem`, {
              method: "POST",
              headers: {
              //Cambiar esto luego
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(community)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

export const EliminarComunidad = () => {

  //cambiar enlace esto es de registro
  fetch(`${endpoint}communities/deleteItem/661d690edad32e178c83989d`, {
      method: "DELETE",
      headers: {
      
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(activity)
  })
      .then((res) => res.json())
      .then((data) => console.log(data))
}

export const ActualizarComunidades = (community) => {

  //cambiar enlace esto es de registro
  fetch(`${endpoint}communities/updateItem/661d6ce6169fb261da1d125e`, {
              method: "PUT",
              headers: {
              
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(community)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

export async function PedirComunidadesUsuario () {
  try {
    //Cambiar enlace
    //const response = await fetch(`${endpoint}communities/getItems`)

    //Eso debería funcionar, pero si no prueba con esto
    const response = await fetch(`${endpoint}communities/user`, {
        method: "GET",
        headers: {
        //Authorization: `Bearer ${tokenJWT}`,
        //Cambiar este token por una variable
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
        'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
      throw new Error('Error Pedir Comunidades');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const SalirComunidades = () => {

  //cambiar enlace esto es de registro
  fetch(`${endpoint}communities/leaveCommunity/661d75228addb5becc6c6fac`, {
              method: "PUT",
              headers: {
              
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                'Content-Type': 'application/json',
              }
              //body: JSON.stringify(community)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

export const EntrarComunidades = () => {

  //cambiar enlace esto es de registro
  fetch(`${endpoint}communities/joinCommunity/661d75228addb5becc6c6fac`, {
              method: "PUT",
              headers: {
              
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                'Content-Type': 'application/json',
              },
              //body: JSON.stringify(community)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

//recordar que excepto clave TODAS LAS DEMÁS VARIABLES SON BOOLEANS
export async function BuscadorComunidades (clave, profesor, alumno, comunidad, actividad, foro) {
  try {
    //Cambiar enlace
    //const response = await fetch(`${endpoint}communities/getItems`)

    //Eso debería funcionar, pero si no prueba con esto
    const response = await fetch(`${endpoint}communities/search/${clave}/${profesor}/${alumno}/${comunidad}/${actividad}/${foro}`, {
        method: "GET",
        headers: {
        //Authorization: `Bearer ${tokenJWT}`,
        //Cambiar este token por una variable
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
        'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
      throw new Error('Error Pedir Comunidades');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}