const nodemailer = require('nodemailer')
require('dotenv').config();
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: adminEmail,
        pass: adminPassword,
    },
});

const send_email = async (emailData,res) => {
    try {
        const {sendersName, emailAddress,phoneNumber, message} = emailData;

        const mailOptions = {
            from: emailAddress,
            to:'brayantandap@gmail.com',
            subject: 'Nuevo mensaje del Portafolio.',
            text:`Nombre: ${sendersName}\nEmail: ${emailAddress}\nMensaje: ${message}\nNúmero: ${phoneNumber}`,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Correo enviado: ' + info.response);
        res.status(200).json({ mensaje: 'Correo enviado correctamente.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al enviar el correo.' });
    }
};

module.exports = send_email;