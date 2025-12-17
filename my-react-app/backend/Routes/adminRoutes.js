const express = require('express')
const aroute = express.Router()

const {createAdmin,getAllAdmin, adminLogin,editAdmin,getAdmin,deleteAdmin} = require('../Controller/adminController') 

aroute.post('/add-admin',createAdmin)
aroute.post('/admin-login',adminLogin)
aroute.get('/all-admin',getAllAdmin)
aroute.patch('/edit-admin/:id',editAdmin)
aroute.get('/get-admin/:id',getAdmin)
aroute.delete('/delete-admin/:id',deleteAdmin)




module.exports = aroute;