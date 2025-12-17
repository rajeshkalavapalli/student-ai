const express = require('express')
const {userRegistration,login, getAllUsers}  = require('../Controller/userController')

const router = express.Router()

const authMiddile = require('../Middileware/authMiddilewhare')
const roleMiddile = require('../Middileware/rolemiddileware')
router.post('/registration',userRegistration )
router.post('/login', login )

router.get('/users', getAllUsers )

module.exports=router 