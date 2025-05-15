const { matchedData } = require("express-validator")
const { forumModel, postModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {
    try{
        const data = await forumModel.find({})
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getItem = async (req, res) => {
    try{
        req = matchedData(req)

        const data = await forumModel.findOne({_id: req.id})
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const createForum = async (req, res) => {
    try{
        var user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()

        const data = await forumModel.create(req)
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}

const reply = async (req, res) => {
    try{ //Notificar de respuesta al usuario y comprobar palabras prohibidas
        var user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()

        var post = await postModel.findOne({_id: req.parent, delete: false}) 

        if(!post){
            forum = await forumModel.findOne({_id: req.parent, delete: false})
            if(!forum){
                handleHttpError(res, "ERROR_FORUM_NOT_EXIST", 404)
                return
            }
            else{
                req.forum = req.parent
            }
            
        }
        else{
            req.forum = post.forum
        }

        const data = await postModel.create(req)
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_CREATE_REPLY')
    }
}

const getReplys = async (req, res) => {
    try{
        req = matchedData(req)

        var data = await postModel.find({parent: req.id, delete: false})

        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_REPLY')
    }
}

const deletePost = async (req, res) => {
    try{
        const user = req.user
        req = matchedData(req)

        if(user.role == "sysadmin"){
            await postModel.findByIdAndUpdate(req.id, { delete: true })
        }
        else {
            const post = await postModel.findById(req.id)

            if(post.createdBy.toString() === user._id.toString()){
                await postModel.findByIdAndUpdate(post._id, { delete: true })
            }
            else {
                handleHttpError(res, "ERROR_NOT_YOUR_POST", 404)
                return
            }
        }

        res.status(200).send()
    }catch(err){
        handleHttpError(res, 'ERROR_DELETE_POST')
    }
}

const reportPost = async (req, res) => {
    try{
        const user = req.user
        req = matchedData(req)
        var {id, ...rest} = req
        rest.complainant = user._id

        const post = await postModel.findByIdAndUpdate(id, { $addToSet: {reports: rest}}, {new: true})

        if(post.reports.length > 10){
            //enviar email y notificacion al admin
        }

        res.status(200).send()
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_REPORT_POST')
    }
}

module.exports = { createForum, reply, getReplys, deletePost, reportPost, getItems, getItem };
