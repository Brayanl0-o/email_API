const Email = require('../models/email')
const nodemailer = require('nodemailer')

const receiveInfoFromForm = async (req,res) => {
    try{
        const {sendersName, emailAddress,phoneNumber, message} = req.body;

        const newEmail = new Email({
            sendersName,
            emailAddress,
            phoneNumber,
            message,
        });
        await newEmail.save();
        
        res.status(200).json({message:'Datos recibidos correctamente '})
    
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud.' });
    }

};

module.exports = { receiveInfoFromForm };