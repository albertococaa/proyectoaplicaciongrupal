import { useRouter } from 'next/navigation'

//Cambiar nombre luego
const endpoint = "http://87.221.139.203:443/api/";

export const CrearActividad = (activity) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}activities/createItem`, {
                method: "POST",
                headers: {
                
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(activity)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)

    //A cambiar luego
}

export const EntrarActividad = () => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}activities/add/661e3ee51206873cfb3dd94e`, {
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

export const SalirActividad = () => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}activities/less/661e3ee51206873cfb3dd94e`, {
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

export async function PedirActividades(){
    try {
        //Cambiar enlace
        //const response = await fetch(`${endpoint}communities/getItems`)

        //Eso debería funcionar, pero si no prueba con esto
        const response = await fetch(`${endpoint}activities/getItems`, {
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

export async function PedirActividadesUsuario () {
    try {
      //Cambiar enlace
      //const response = await fetch(`${endpoint}communities/getItems`)
  
      //Eso debería funcionar, pero si no prueba con esto
      const response = await fetch(`${endpoint}activities/getUser`, {
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

  export async function PedirActividadesComunidad(){
    try {
        //Cambiar enlace
        //const response = await fetch(`${endpoint}communities/getItems`)

        //Eso debería funcionar, pero si no prueba con esto
        const response = await fetch(`${endpoint}activities/getCommunity/661d75228addb5becc6c6fac`, {
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

export async function PedirInfoActividades (){
    try {
        //Cambiar enlace
        const response = await fetch(`${endpoint}activities/getActivity/661e450f75d0bf1500fbc73c`, {
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

export async function BuscarCorreos (clave) {
  try {
    //Cambiar ruta, que aun no está en el back
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