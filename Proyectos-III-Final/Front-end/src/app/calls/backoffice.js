const endpoint = "http://87.221.139.203:443/api/";

export async function PedirMensajesDenunciados (){
    try {
        //Cambiar ruta
        const response = await fetch(`${endpoint}management/reportMessage`, {
          method: "GET",
          headers: {
          //Authorization: `Bearer ${tokenJWT}`,
          //Cambiar este token por una variable
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
          'Content-Type': 'application/json',
          },
      })
        if (!response.ok) {
          throw new Error('Error Pedir Datos User');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}

export const AñadirPalabrasProhibidas = (palabra) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}communities/createItem`, {
                method: "POST",
                headers: {
                //Cambiar esto luego
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(palabra)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)
  
    //A cambiar luego
}

export async function PedirMensajesEliminadosUser (){
    try {
        //Cambiar ruta
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
          throw new Error('Error Pedir Mensajes User');
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
    }
    //A cambiar luego
}

//Falta subir csv