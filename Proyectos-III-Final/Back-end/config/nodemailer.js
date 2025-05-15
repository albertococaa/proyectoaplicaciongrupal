const nodemailer = require('nodemailer');

//configuracion para el envio de emails
//se esta usando el mio personal, hay que cambiarlo a uno especifico para esto
const transporter = nodemailer.createTransport({
    service: process.env.SERVICIO_CORREO,
    auth: {
      user: process.env.CORREO,
      pass: process.env.ACCESO_CORREO
    }
});

module.exports= transporter