const express = require('express')

const {DevloperRegister,DevloperlogIn} = require('../Controller/devlopercontroller')


const droute = express.Router()


droute.post('/devloper-login', DevloperlogIn)
droute.post('/devloper-register', DevloperRegister)


module.exports = droute