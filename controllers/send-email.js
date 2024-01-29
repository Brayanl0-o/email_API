const Email = require('../models/email')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brayantandap@gmail.com',
        pass: 'EjemploContraseña',
    },
});

send_email:async (req,res) => {
    const {sendersName, emailAddress,phoneNumber, message} = req.body;

    const mailOptiones = {
        from:emailAddress,
        to:'brayantandap@gmail.com',
        subject: 'Nuevo mensaje del Portafolio.',
        text:`Nombre: ${sendersName}\nEmail: ${emailAddress}\nMensaje: ${message}\nNúmero: ${phoneNumber}`,
    };

    transporter.sendMail(mailOptiones, (error, info)=> {
        if(error){
            console.error(error);
            res.status(500).json({error: 'Error al enviar el correo.' })
        }else{
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ mensaje: 'Correo enviado correctamente.' });
        }
    })
}