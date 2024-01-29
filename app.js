const express = require('express');
const cors = require('cors')
const app = express();
const connectToDatabase = require('./database');

app.use(cors({
    origin:"*",
    methods:"GET,HEAD,POST,PATCH,PUT,DELETE"
}))

app.get('/',(req,res)=> {
    res.send('Connected to Email API')
})

connectToDatabase();
module.exports = app;