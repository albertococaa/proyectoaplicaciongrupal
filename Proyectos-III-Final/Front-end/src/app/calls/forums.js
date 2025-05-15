import { useRouter } from 'next/navigation'
//import { endpoint } from '../page.js';

const endpoint = "http://87.221.139.203:443/api/";

export const CrearForos = (forum) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}forum/createItem`, {
                method: "POST",
                headers: {
                //Cambiar esto luego
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(forum)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)
  
    //A cambiar luego
}

export async function PedirForos(){
    try {
        //Eso debería funcionar, pero si no prueba con esto
        const response = await fetch(`${endpoint}forum/getItems`, {
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

export async function PedirInfoForos (){
    try {
        //Cambiar enlace
        const response = await fetch(`${endpoint}forum/getItem/661e2ea28cd3fbf97022ed18`, {
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

export const ResponderForo = (reply) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}forum/reply`, {
                method: "POST",
                headers: {
                //Cambiar esto luego
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(reply)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)
  
    //A cambiar luego
}

export async function PedirRespuestas(){
    try {
        //Eso debería funcionar, pero si no prueba con esto
        const response = await fetch(`${endpoint}forum/getReplies/661e2ea28cd3fbf97022ed18`, {
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

export const EliminarComentario = () => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}forum/deleteItem/661e3337e47aa891dabfc20d`, {
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

export const DenunciarComentario = (reply) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}forum/report`, {
                method: "PUT",
                headers: {
                
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(reply)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)
  
    //A cambiar luego
  }