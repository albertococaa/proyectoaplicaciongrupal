const { matchedData } = require("express-validator")
const ejs = require('ejs')
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const {handleHttpError} = require("../utils/handleError")
const {usersModel, tokenModel} = require("../models")
const { generador } = require("../utils/handleVerificacion")
const { sendEmail } = require("../utils/handleEmail")



const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)

        //añadir comprobacion de correo de utad
        const user = await usersModel.findOne({
            email: req.email
        })

        /*if(!user){
            handleHttpError(res, "ERROR_USER_NOT_EXIST")
            return
        }
        else if(!user.resgister){
            handleHttpError(res, "ERROR_USER_ALREDY_REGISTER")
            return
        }*/

        if(user){
            handleHttpError(res, "ERROR_USER_EXIST")
            return
        }

        const password = await encrypt(req.password)
        var body = {...req, password}
        body.registered = true
         
        //crear codigo
        body.recoveryCode = generador()
        codigo = body.recoveryCode
        //sustituir por la query de mongo teniendo en cuenta que le perfil ya exite
        const dataUser = await usersModel.create(body) 

        //mandarlo por email

        const textoPersonalizado = ejs.render('<h1><%= codigo %> </h1>', {codigo})
        sendEmail(dataUser.email, 'codigo', textoPersonalizado)



        const data = {
            id: dataUser._id
        }

        res.send(data)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}


const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        console.log('llego')
        //añadir comprobacion de correo de utad
        const user = await usersModel.findOne({
            email: req.email
        })

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        /*else if(!user.resgister){
            handleHttpError(res, "USER_NOT_REGISTER", 404)
            return
        }*/
        
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //crear codigo, añadirlo a bbdd y enviar correo
        codigo= generador()
        await usersModel.updateOne({ _id: user._id }, { $set: { recoveryCode: codigo } }) 
        const textoPersonalizado = ejs.render('<h1><%= codigo %> </h1>', {codigo})
        sendEmail(user.email, 'codigo', textoPersonalizado)


        const data = {
            id: user._id
        }
        
        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

const codeVerification = async (req, res) => {
    try {
        req = matchedData(req)

        var user = await usersModel.findOne({
            _id: req._id
        })

        if(!user){
            handleHttpError(res, "ERROR_USER_NOT_EXIST", 404)
            return
        }

        if(req.codigo !== user.codigo){
            handleHttpError(res, "WORNG_CODE", 405)
            return
        }

        const token = await tokenSign(user)

        const prueba = await tokenModel.create({email: user.email, token: token})
        console.log(prueba)
        data = {
            id: user._id,
            token: token
        }

        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_USER")
    }
}

const newPassword = async (req, res) => {
    try {
        req = matchedData(req)
        
        const user = await usersModel.findOne({
            email: req.email
        })

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        /*else if(!user.resgister){
            handleHttpError(res, "USER_NOT_REGISTER", 404)
            return
        }*/

        if(!user.passwordRecovery){
            handleHttpError(res, "NOT_AUTORITATION", 405)
            return
        }

        const password = await encrypt(req.newPassword)

        await usersModel.updateOne({ _id: user._id }, { $set: { passwordRecovery: false, password: password } }) 
        
        await tokenModel.deleteMany({ email: user.email })

        res.status(200).send()

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_CHANGE_PASSWORD")
    }
}

const passwordCode = async (req, res) => {
    try {
        req = matchedData(req)
        
        const user = await usersModel.findOne({
            email: req.email
        })
        
        if(!user){
            handleHttpError(res, "ERROR_USER_NOT_EXIST", 404)
            return
        }
        console.log(user.recoveryCode)
        console.log(req.recoveryCode)
        if(req.recoveryCode !== user.recoveryCode){
            handleHttpError(res, "WORNG_CODE", 405)
            return
        }

        await usersModel.updateOne({ _id: user._id }, { $set: { passwordRecovery: true } } )

        res.status(200).send()

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_CODE")
    }
}

const passwordEmail = async (req, res) => {
    try {
        req = matchedData(req)

        const user = await usersModel.findOne({
            email: req.email
        })

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        /*else if(!user.resgister){
            handleHttpError(res, "USER_NOT_REGISTER", 404)
            return
        }*/

        codigo = generador()

        await usersModel.updateOne({ _id: user._id }, { $set: { passwordRecovery: true , recoveryCode: codigo} } )

        const textoPersonalizado = ejs.render('<h1><%= codigo %> </h1>', {codigo})
        sendEmail(user.email, 'codigo', textoPersonalizado)
        
        res.status(200).send() 

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_SEND_EMAIL")
    }
}

const loginCtrl2 = async (req, res) => {
    try {
        req = matchedData(req)
        //añadir comprobacion de correo de utad
        const user = await usersModel.findOne({
            secondEmail: req.email
        })

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        /*else if(!user.resgister){
            handleHttpError(res, "USER_NOT_REGISTER", 404)
            return
        }*/
        
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //crear codigo, añadirlo a bbdd y enviar correo
        codigo= generador()
        await usersModel.updateOne({ _id: user._id }, { $set: { recoveryCode: codigo } }) 
        const textoPersonalizado = ejs.render('<h1><%= codigo %> </h1>', {codigo})
        sendEmail(user.secondEmail, 'codigo', textoPersonalizado)


        const data = {
            id: user._id
        }
        
        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}


module.exports = { registerCtrl, loginCtrl, codeVerification, newPassword, passwordCode, 
    passwordEmail, loginCtrl2 }
