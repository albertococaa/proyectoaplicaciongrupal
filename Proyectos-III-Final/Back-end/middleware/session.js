const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const { usersModel, tokenModel} = require("../models")

const authMiddleware = async (req, res, next) => {
    try{
        console.log("he llegado perras :)")
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop() 
        
        const comprobacion = await tokenModel.findOne({
            token: token
        })

        if(!comprobacion){
            handleHttpError(res, "NOT_VALID_TOKEN", 401)
            return
        }
        
        const dataToken = await verifyToken(token)
        
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

module.exports = authMiddleware
