const { handleHttpError } = require("../utils/handleError")
const { verifyToken2 } = require("../utils/handleJwt")
const { usersModel} = require("../models")

const authMiddleware2 = async (req, res, next) => {
    try{
        if (!req.token) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        const token = req.token.split(' ').pop() 
        
        const dataToken = await verifyToken2(token)
        
        if(!dataToken){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401)
            return
        }
        const user = await usersModel.findOne({
            email: dataToken.email
        }) 

        req.user = user
        
        next()

    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware2
