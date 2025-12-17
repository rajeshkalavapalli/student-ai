const express =require("express")
const {addSchool,getAllSchools, deleteSchool,editSchool,getSchool} = require("../Controller/schoolController")

const scroutes = express.Router();

scroutes.post('/add-school', addSchool)
scroutes.delete('/delete-school/:id', deleteSchool)
scroutes.get('/get-schools', getAllSchools)
scroutes.patch('/edit-school/:id', editSchool)
scroutes.get('/get-school/:id', getSchool)




module.exports = scroutes