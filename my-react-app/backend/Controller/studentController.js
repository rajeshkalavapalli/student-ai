const Student = require('../Models/studentSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllStudent = async(req, res)=>{
    try{
        const allStudents = await Student.find({}) 
    if(allStudents.length === 0){
        return res.status(404).json({
            message:"no student found"
        })
    }

    return res.status(200).json({
        message:"students details", 
        allStudents
    })

    }catch(error){
            return res.status(500).json({
                message:"something went wrong, try after some time",
                error:error.message
            })
    }
}



const addStudent = async(req,res)=>{

    try{
        const { student_name, student_class,roll_number,section,parentDetails,behaviorScore,attendance,performance,assigned_teacher} = req.body
        
        
        const foundStudent = await Student.findOne({$and:[{student_name:student_name},{roll_number:roll_number}]})

        if(foundStudent){
            return res.status(409).json({
                message:"stuent details given below",
                foundStudent,
            })
        }        
        
        const StudentAdded = await Student.create({
            student_name, 
            student_class,
            roll_number,
            section,
            parentDetails,
            behaviorScore,
            attendance,
            performance,
            assigned_teacher
        })

        return res.status(200).json({
            message:"student added sucessfully",
            StudentAdded
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            error:error.message
        })

    }

}

const deleteStudent = async (req,res)=>{
    try{
        const studentId  = req.params.id
        const findStudent = await Student.findById(studentId)

        if(!findStudent){
            return res.status(404).json({
                message:"student not found"
            })
        }

        const deletestudent = await  Student.findByIdAndDelete(studentId)
        return res.status(200).json({
            message:"user sucessfully deleted",
            deletestudent
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try affter sometime ",
            error:error.message
        })
    }

}


module.exports={addStudent,deleteStudent,getAllStudent}