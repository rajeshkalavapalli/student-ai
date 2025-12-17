const express = require("express")
const srouter = express.Router()

const {addStudent,deleteStudent,getAllStudent} = require('../Controller/studentController')
const authMiddleware = require('../Middileware/authMiddilewhare')
const roleMiddile = require('../Middileware/rolemiddileware')

srouter.post('/add-student',authMiddleware, roleMiddile,addStudent)
srouter.delete('/delete-student',authMiddleware, roleMiddile,deleteStudent)
srouter.get('/get-students',authMiddleware, roleMiddile,getAllStudent)



module.exports = srouter