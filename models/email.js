const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameSchema = new Schema ({
    sendersName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 80
    },
    emailAddress:{
        type: String,
        validate: {
            validator: function (email) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
            },
            message: props => `${props.value} is not a valid email`
        },
        required: true,
        minLength:8,
        maxLength:90
    },
    phoneNumber:{
        type: String,
        required: false,
        maxLength:20
    },
    message:{
        type: String,
        required: false,
        minLength:8,
        maxLength:600
    }
},{ collection: 'emailAPI' }); 

module.exports = mongoose.model('Game', gameSchema)