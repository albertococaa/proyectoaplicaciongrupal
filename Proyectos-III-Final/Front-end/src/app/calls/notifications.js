const endpoint = "http://87.221.139.203:443/api/";

export async function PedirNotificaciones(){
    try {
        //cambiar ruta
        const response = await fetch(`${endpoint}user/notifications`, {
            method: "GET",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`,
            //Cambiar este token por una variable
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
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