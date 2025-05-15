const endpoint = "http://87.221.139.203:443/api/";

export async function PedirDatos (){
  try {
      //Cambiar ruta
      const response = await fetch(`${endpoint}user/info`, {
        method: "GET",
        headers: {
        //Authorization: `Bearer ${tokenJWT}`,
        //Cambiar este token por una variable
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
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

export const ModificarDatos = (userData) => {

  //cambiar ruta
  fetch(`${endpoint}user/change`, {
              method: "PUT",
              headers: {
              
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

export const ModificarContraseña = (userData) => {

  //cambiar ruta
  fetch(`${endpoint}user/password`, {
              method: "PUT",
              headers: {
              
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMxOTk0Nzh9.bift2LkSEcXPYhGCluRnKsqkuo_Fy2hvx-BUxcXfaz0`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData)
          })
              .then((res) => res.json())
              .then((data) => console.log(data))
          
          //router.push(`/registered-users/${user.id}`)

  //A cambiar luego
}

export async function PedirInfoUser () {
  try {
    //ruta
    const response = await fetch(`${endpoint}user/getUser/probablementeElID`, {
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

//Falta subir foto al perfil