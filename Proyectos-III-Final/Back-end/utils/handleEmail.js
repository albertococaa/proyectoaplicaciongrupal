const transporter = require("../config/nodemailer")

const sendEmail = (correo, subject, contenido) => {
    try {   

        const mailOptions = {
            from: process.env.CORREO,
            to: correo,
            subject: subject,
            html: contenido
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.log(error);
            //res.status(500).send('Error al enviar el correo.');
            } else {
            //console.log('Correo enviado: ' + info.response);
            //res.send('Correo enviado correctamente.');
            }
        });


    }catch(err) {
        console.log(err)
    }
}

module.exports = { sendEmail }