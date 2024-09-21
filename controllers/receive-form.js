const Email = require('../models/email')
const send_email = require('./send-email')

const receiveInfoFromForm = async (req,res) => {
    try{
        // console.log(req.body);
        const {sendersName, emailAddress,phoneNumber, message} = req.body;
        const newEmail = new Email({sendersName, emailAddress, phoneNumber, message});
        await newEmail.save();
  
        const emailData = {
            sendersName,
            emailAddress,
            phoneNumber,
            message
        };
        // console.log(typeof controllerSendEmail.send_email); 
        await send_email(emailData,res);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud.' });
    }
};

module.exports = { receiveInfoFromForm };