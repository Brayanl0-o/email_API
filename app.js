const express = require('express');
const cors = require('cors')
const app = express();
const connectToDatabase = require('./database');
const bodyParser = require('body-parser');
// const sendEmail = require('./routers/send-email')
const receiveForm = require('./routers/receive-form')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin:"*",
    methods:"GET,HEAD,POST,PATCH,PUT,DELETE"
}))

app.get('/',(req,res)=> {
    res.send('Connected to Email API')
})
// app.use('/sendEmail', sendEmail);
app.use('/receiveForm', receiveForm);

connectToDatabase();
module.exports = app;