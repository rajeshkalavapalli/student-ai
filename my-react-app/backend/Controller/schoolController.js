const mongoose = require('mongoose'); 
const School = require('../Models/schoolSchema')

const getAllSchools = async(req, res)=>{
    try{

        const schools = await School.find({})

        if(schools.length === 0){
            return res.status(409).json({
                message:"school not avilable"
            })
        }

        return res.status(200).json({
            message:"schools details are given below",
            schools,
        })

    }catch(error){
        return res.status(500).json({
            message:"some thing went wrong try after some time",
            error: error.message
        })
    }
}

const addSchool = async (req, res) => {
    try {
        const { school_name, address, email, phone, createdBy } = req.body;

        // 1️⃣ Validate required fields
        if (!school_name || !email || !phone || !createdBy) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        // 2️⃣ Validate createdBy is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(createdBy)) {
            return res.status(400).json({ message: "Invalid developer ID" });
        }

        // 3️⃣ Check if a school with the same email already exists
        const existingSchool = await School.findOne({ email: email.toLowerCase() });
        if (existingSchool) {
            return res.status(409).json({ message: "School already registered, try a new school" });
        }

        // 4️⃣ Create new school
        const newSchool = await School.create({
            school_name,
            address,
            email: email.toLowerCase(),
            phone,
            createdBy
        });

        return res.status(201).json({
            message: "School added successfully",
            newSchool
        });

    } catch (error) {
        // 5️⃣ Log full error to server console for debugging
        console.error("Add School Error:", error);

        return res.status(500).json({
            message: "Something went wrong, please try again",
            error: error.message
        });
    }
};


const deleteSchool = async (req,res)=>{
    try{
        const {id} = req.params

        if (!id || id.length !== 24) {
            return res.status(400).json({
                message: "Invalid school ID format"
            });
        }


        const existingSchool = await School.findById(id)

        if(!existingSchool){
            return res.status(404).json({
                message:"school is not found"
            })
        }

        const deletedSchool = await School.deleteOne({_id:id})
        return res.status(200).json({
            message:"school is deleted sucessfully",
            deletedSchool,
        })

    }catch(error){

        return res.status(500).json({
            message:"some thing went wrong please try after some time",
            error: error.message
        })
    }
}
const editSchool = async (req, res) => {
  try {
    const schoolId = req.params.id

    const updateData = {
      school_name: req.body.School_name,
      address: req.body.Address,
      email: req.body.Email,
      phone: req.body.Phone
    }

    const schoolDetails = await School.findByIdAndUpdate(
      schoolId,
      updateData,
      { new: true, runValidators: true }
    )

    if (!schoolDetails) {
      return res.status(404).json({
        message: "school not found"
      })
    }

    return res.status(200).json({
      message: "school details updated successfully",
      schoolDetails
    })

  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message
    })
  }
}

const getSchool = async(req, res)=>{
    try{

        const id  = req.params.id

        if(!id){
            return res.status(400).json({
                message:"school is not mached try with correct id"
            })
        }

        const school = await  School.findById(id)

        if(!school){
            return res.status(404).json({
                message:"inavalid school details  try with new details "
            })
        }

        return res.status(200).json({
            message:"school details",
            school,
            
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            error:error.message
        })
    }
}

module.exports = {addSchool,getAllSchools, deleteSchool, editSchool,getSchool}