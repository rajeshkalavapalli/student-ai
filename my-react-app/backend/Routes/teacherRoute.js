const express = require("express")
const troute  = express.Router()
const {createTeacher} = require('../Controller/teacherController.js')

troute.post('/create-teacher',createTeacher)





module.exports = troute;

