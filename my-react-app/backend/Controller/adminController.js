const Admin = require('../Models/adminSchema')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

const createAdmin = async(req, res)=>{
    try{
    
        const { name, email, contact, password,schoolId }=req.body

        if(!name||!email||!contact||!password||!schoolId){
            return res.status(400).json({
                message:"given details are not valid"
            })

        }

        const isAdmin = await Admin.findOne({email:email})

        if(isAdmin){
            return res.status(409).json({
                message:"admin already registre, try with new email/contact"
            })   
        }

        const salt = await bcrypt.genSalt(10)
        
        const hashPassword = await bcrypt.hash(password,salt)


        const admin = await Admin.create({
            name,
            email,
            contact,
            password:hashPassword,
            schoolId
        })

        const safeadmin = admin.toObject();
        delete safeadmin.password 

        return res.status(200).json({
            message:"admin created sucessfully",
            admin:safeadmin
        })

    }catch(error){
        return res.status(500).json({
            message:"some thing went wrong try after some time",
            error:error.message
        })
    
    }
}
const getAllAdmin=async(req, res)=>{
       try{
        const allAdmin = await Admin.find({})
        return res.status(200).json({
            message:"admins sucessfully fetched", 
            allAdmin
        }) 
        
       }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            error: error.message
        })
       }
}

const adminLogin =async (req,res)=>{
    try{
        const {email,password} = req.body

        if(!email||!password){
            return res.status(400).json({
                message:"please provide the correct details",
            })
        }

        const isAdmin = await Admin.findOne({email:email})

        if(!isAdmin){
            return res.status(409).json({
                message:"invalid credentials please try with correct email/password"
            })
        }

        const isMatch = await bcrypt.compare(password,isAdmin.password)

        if(!isMatch){
            return res.status(409).json({
                message:"plase try with correct password"
            })
        }

        const payload = {
            adminId:isAdmin._id,
            role:isAdmin.role
            
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"})

        return res.status(200).json({
            message:"admin login sucessfull",
            token,
            admin: {
                id: isAdmin._id,
                name: isAdmin.name,
                email: isAdmin.email,
                role: isAdmin.role,
                schoolId: isAdmin.schoolId
            }
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong, try after some time",
            error:error.message
        })


    }


}

const editAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(401).json({
                message: "Invalid ID provided"
            });
        }

        // Perform the update and return the updated document
        const admin = await Admin.findByIdAndUpdate(id, updateData, { new: true });

        if (!admin) {
            return res.status(404).json({
                message: "No admin available with the provided ID"
            });
        }

        return res.status(200).json({
            message: "Admin details updated successfully",
            admin
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again later.",
            error: error.message
        });
    }
};

const getAdmin =async(req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).json({
                message:"please provide valid details",
            })
        }

        const data = await Admin.findById(id)

        if(!data){
            return res.status(404).json({
                message:"admin not avilable try with new id "
            })
        }

        return res.status(200).json({
            message:"admin details",
            data,
        })

    }catch(error){
        return res.status(500).json({
            message:"something went wrong try after some time",
            errror: error.message
        })
    }

}
const deleteAdmin = async(req,res)=>{
    try{
        const {id} = req.params

        if(!id){
            return res.status(400).json({
                message:"please provide valid id"
            })
        }

        if(id.length <24){
            return res.status(400).json({
                messaage:"admin details not avilable try with correct details "
            })
        }
       const deletedAdmin = await Admin.findByIdAndDelete(id)
        if(!deletedAdmin){
            return res.status(404).json({
                messaage:"admin details not avilable try with correct details "
            })
        }

        return res.status(200).json({
            message:"admin deleted sucessfully",
deletedAdmin
        })

    }catch(error){
        return res.status(500).json({
            message:"something went erong try after some time",
            error:error.message
        })
    }
}

module.exports={createAdmin,getAllAdmin, adminLogin,editAdmin, getAdmin, deleteAdmin}