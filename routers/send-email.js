const express = require('express')
const controllerSendEmail = require('../controllers/send-email')
const router = express.Router()


router.post('/send-email', controllerSendEmail.send_email)