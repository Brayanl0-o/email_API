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
        // console.log(emailData);

        const {sendersName, emailAddress,phoneNumber, message} = emailData;

        const mailOptions = {
            from: emailAddress,
            to:'brayantandap@gmail.com',
            subject: 'Nuevo mensaje del Portafolio.',
            text:`Nombre: ${sendersName}\nEmail: ${emailAddress}\nMensaje: ${message}\nNúmero: ${phoneNumber}`,
            html: ` <html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje del Portafolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #2c3e50;
            padding: 20px;
            text-align: center;
            color: #fff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .content p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
        .content .info {
            background-color: #ecf0f1;
            padding: 10px;
            border-left: 4px solid #3498db;
            margin-bottom: 20px;
        }
        .content .info p {
            margin: 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #34495e;
            color: #fff;
        }
        .footer p {
            margin: 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nuevo Mensaje del Portafolio</h1>
        </div>
        <div class="content">
            <h2>Hola, has recibido un nuevo mensaje:</h2>
            <div class="info">
                <p><strong>Nombre:</strong> ${sendersName}</p>
                <p><strong>Email:</strong> ${emailAddress}</p>
                <p><strong>Teléfono:</strong> ${phoneNumber ? phoneNumber : 'No enviado.' }</p>
            </div>
            <h2>Mensaje:</h2>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>Este mensaje fue enviado desde tu portafolio personal.</p>
        </div>
    </div>
</body>
</html>`
        };

        const info = await transporter.sendMail(mailOptions);

        // console.log('Correo enviado: ' + info.response);
        res.status(200).json({ mensaje: 'Correo enviado correctamente.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al enviar el correo.' });
    }
};

module.exports = send_email;