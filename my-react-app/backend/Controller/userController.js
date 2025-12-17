const User = require('../Models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRegistration = async(req,res)=>{

    try{
        
        const {name,email,mobile,password}=req.body

        if(!name||!email||!mobile ||!password){
            return res.status(400).json({
                message:"details are invalid please enter"
            })
        }

        const existing = await User.findOne({$or:[{email:email},{mobile:mobile}]})

        if(existing){
            return res.status(409).json({
                message:"user already existing please try with new email/mobile"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const studentId = "STU-"+Math.floor(10000+Math.random()*9000)
        


        const newUser = await User.create({
            name,
            email,
            mobile,
            password:hashPassword,
            studentId
            
        })

        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"2d"})

    
        return res.status(201).json({
            message:"user  register sucessfully", 
            token,
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            error:error.message
        })
    }

}

const login = async(req,res)=>{
    try{
        const {email,mobile,password}=req.body

        if((!email && !mobile )||!password ){
            return res.status(400).json({
                message:"Please provide email/mobile and password"
            })
        }

        const existing = await  User.findOne({$or:[{mobile:mobile},{email:email}]})

        if(!existing){
            return res.status(409).json("user  registerd to login")
        }

        const match = await bcrypt.compare(password,existing.password)

        if(!match){
            return res.status(404).json({
                messsage:"details invalid please provide correct "
            })
        }

        const token = jwt.sign({id:existing._id},process.env.JWT_SECRET,{expiresIn:"2h"})

        return res.status(200).json({
            message:"user loged in sucessfully",
            token,
            user: {
        id: existing._id,
        name: existing.name,
        email: existing.email
    }
        })

    }catch(error){

    return res.status(500).json({
        message:"something went wrong try after some time",
        error:error.message
    })
    }
}


const getAllUsers = async (req,res)=>{
    try{
        const users= await User.find({})

        if(users.length === 0){
            return res.status(404).json({
                message:" no user registered yet"
            })
        }

        return res.status(200).json({
            message: "user details are sucessfuly sent",
            users,
        })

    }catch(error){

        return res.status(500).json({
            message:"something went wrong try after some time",
            error:error.message
        })
    }
}

module.exports = {userRegistration, login,getAllUsers}