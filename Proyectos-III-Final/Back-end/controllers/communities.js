const { matchedData } = require("express-validator")
const {communityModel, usersModel, activityModel, forumModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")


const getCommunities = async (req, res) => {
    try{
        const data = await communityModel.find({}).select("_id name description createdAt avatar topics")
        res.send(data)
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}

const getUserCommunities = async (req, res) => {
    try {
        const ids = req.user.communities
        const communities = await communityModel.find({ _id: { $in: ids } }).select("name description avatar")
        res.send(communities);
    } catch (err) {
        console.log(err)
        handleHttpError(res, 'ERROR_GET_ITEM');
    }
};


const getCommunity = async (req, res) => {
    try{
        const {id} = matchedData(req) 
        const data = await communityModel.findById(id)
        res.send(data)
    } catch(err){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}


const createCommunity = async (req, res) => { 
    try {
        const user = req.user
        req = matchedData(req)
        req.createdBy = user._id
        req.createdAt = Date.now()
        req.members = [user._id]
        const data = await communityModel.create(req)
        const updatedUser = await usersModel.findByIdAndUpdate(
            user._id,
            { $push: { communities: data._id  } },
            { new: true }
        )
        res.send(data)    
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_CREATE_ITEM')
    }
}


const updateCommunity = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await communityModel.findByIdAndUpdate(id, body, {new: true});
        res.send(data)    
    }catch(err){
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}

const deleteCommunity = async (req, res) => {
    try {
        req = matchedData(req)
        const data = await communityModel.deleteOne({_id: req.id})
        res.send(data)    
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}

const joinCommunity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const updatedCommunity = await communityModel.findByIdAndUpdate(req.id, { $addToSet: {members: user._id}}, {new: true});

        const updatedUser = await usersModel.findByIdAndUpdate(user._id, { $addToSet: {communities: req.id}}, {new: true});

        res.status(200).send()
    }catch (err){
        console.log(err)
        handleHttpError(res, 'ERROR_JOIN_COMMUNITY')
    }
}

const leaveCommunity = async (req, res) => {
    try {
        const user = req.user
        const {id} = matchedData(req)

        await communityModel.findByIdAndUpdate(id, { $pull: {members: user._id}}, {new: true})

        await usersModel.findByIdAndUpdate(user._id, { $pull: {communities: id}}, {new: true})

        res.status(200).send()
    }catch (err){
        console.log(err)
        handleHttpError(res, 'ERROR_LEAVE_COMMUNITY')
    }
}

const searcher = async (req, res) => {
    try {
        req = matchedData(req)
        var students = []
        var professor = []
        var communities = []
        var activity = []
        var forum = []

        if(!(req.students && req.professor && req.communities && req.activity && req.forum)){
            req.student = true
            req.professor = true
            req.community = true
            req.activity = true
            req.forum = true
        }
        
        if(req.student){
            students = await usersModel.find({
                role: "alumno",
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { firstSurname: { $regex: new RegExp(req.search, 'i') } },
                    { secondSurname: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.professor){
            professor = await usersModel.find({
                role: "profesor",
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { firstSurname: { $regex: new RegExp(req.search, 'i') } },
                    { secondSurname: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.community){
            communities = await communityModel.find({
                $or: [
                    { name: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                    { topics: { $elemMatch: { $regex: new RegExp(req.search, 'i') } } },
                ]
            })
        }
        if(req.activity){
            activity = await activityModel.find({
                $or: [
                    { title: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                    { type: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        if(req.forum){
            forum = await forumModel.find({
                $or: [
                    { title: { $regex: new RegExp(req.search, 'i') } },
                    { description: { $regex: new RegExp(req.search, 'i') } },
                ]
            })
        }
        
        const data = {
            students: students,
            professor: professor,
            communities: communities,
            activity: activity,
            forum: forum
        }
        
        res.send(data)

    }catch (err){
        handleHttpError(res, 'ERROR_SEARCHER')
    }
}

module.exports = { getCommunities, getUserCommunities, getCommunity, createCommunity, updateCommunity, deleteCommunity, 
    joinCommunity, leaveCommunity, searcher };
