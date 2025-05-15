const endpoint = "http://87.221.139.203:443/api/";

//En principio sería mover para aquí lo que ya está hecho

export const Registrar = (user) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}auth/register`, {
                method: "POST",
                headers: {
                
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)

    //A cambiar luego
}

export const InicioSesion = (user) => {

    //cambiar enlace esto es de registro
    fetch(`${endpoint}auth/login`, {
                method: "POST",
                headers: {
                
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            
            //router.push(`/registered-users/${user.id}`)

    //A cambiar luego
}

export const RecuperarContraseñaPaso1 = (user) => {
    fetch(`${endpoint}auth/password/email`, {
        method: "POST",
        headers: {
        
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
    //router.push(`/registered-users/${user.id}`)

//A cambiar luego
}

export const RecuperarContraseñaPaso2 = (user) => {
    fetch(`${endpoint}auth/password/code`, {
        method: "POST",
        headers: {
        
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
    //router.push(`/registered-users/${user.id}`)

//A cambiar luego
}

export const RecuperarContraseñaPaso3 = (user) => {
    fetch(`${endpoint}auth/password/password`, {
        method: "POST",
        headers: {
        
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhYmxvLml6cXVpZXJkbzJAbGl2ZS51LXRhZC5jb20iLCJpYXQiOjE3MTMzNDkzNTl9.JdIF2Os2otntqSfdZ0V4ON_LHIb3Wo7r9W6NtJTz4Mg`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
    
    //router.push(`/registered-users/${user.id}`)

//A cambiar luego
}