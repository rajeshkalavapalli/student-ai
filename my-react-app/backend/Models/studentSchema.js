const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    
      userId: { type: mongoose.Schema.Types.ObjectId,
         ref: "User", required: true },

    student_name:{
        type:String,
        required:true
    },
    student_class:{
        type:String,
    },roll_number:{
        type:String,
    },section:{
        type:String,

    },parentDetails:{
        parentName:{
            type:String,
            required:true
        },contact:{
            type:String,
            required:true
        }
    },behaviorScore:{
        type:Number,
        default:100
    },attendance:{
        type:Number,
        default:0
    },performance:{
        lastMonth:Number,
        thisMonth:Number,
    },assigned_teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    }
},{timestamps:true})

module.exports = mongoose.model("Student", studentSchema)