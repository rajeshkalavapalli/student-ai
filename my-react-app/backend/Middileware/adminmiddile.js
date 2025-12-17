const jwt = require('jsonwebtoken')

const adminAuth = async(req, res, next)=>{
    try{
        const adminMiddile = req.headers.authorization
        if(!adminMiddile ||!adminMiddile.startsWith("Bearer ")){
            return res.status(401).json({
                message:"Authorization not valid "
            })
        }

        const token =adminMiddile.split(" ")[1]

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user={
            id:decode.adminId,
            role:decode.role||"Admin"
        }

        next()

    }catch(error){

        return res.status(500).json({
            message:"something went wrong try aftre some time",
            error:error.message
        })
    }

}


module.exports = adminAuth