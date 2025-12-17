require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express();

const routes = require('./Routes/userRouter')
const srouter = require('./Routes/studentRoutes')
const droute = require('./Routes/devloperRoutes')
const scroutes = require('./Routes/SchoolRoutes')
const aroute = require('./Routes/adminRoutes')

app.use(cors())
app.use(express.json())



const studentDb = mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("db connected sucessfully"))
.catch(error=>console.log('unable to connect db ',error))



const PORT = process.env.PORT||7000

app.use('/api/user',routes)

app.use('/api/student',srouter)

app.use('/api/devloper' , droute)

app.use('/api/school',scroutes)

app.use('/api/admin',aroute)

app.listen(PORT,()=>{
    console.log(`student server successfully running on Port:${PORT}`);
    
})
