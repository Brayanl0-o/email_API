const express = require('express')
const controllerReceiveForm = require('../controllers/receive-form')
const router = express.Router()


router.post('/receive-form', controllerReceiveForm.receiveInfoFromForm)

module.exports = router