const Teacher = require('../Models/teacherSchema.js')

const createTeacher  = async (req,res) =>{
    try{
        const {name,mobile } = req.body

        
        if(!name||!mobile){
            return res.status(400).json({
                message:"please peovide valid details",
            })
        }
        
        const findMobile = await Teacher.findOne({mobile:mobile})
        if(findMobile){
            return res.status(409).json({
                message:"mobile number already register try with ne wmobile "
            })
        }

        const details = {name,mobile }


        const addTeacher  = await Teacher.create(details)
         return res.status(200).json({
                message:"teacher created sucessfully",
                addTeacher
            })
        

        

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            error: error.message
        })
    }
} 

module.exports = {createTeacher,}