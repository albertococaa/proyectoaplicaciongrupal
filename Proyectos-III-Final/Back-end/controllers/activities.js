const { matchedData } = require("express-validator")
const {handleHttpError} = require("../utils/handleError")
const { activityModel, usersModel } = require("../models")



const createItem = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        req.createdBy = user._id
        req.createdAt = Date.now()
        //crear foro asociado
        //notificar a los usuarios requeridos

        await activityModel.create(req)
        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_CREATE_ACTIVITY")
    }
}

const addActivity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const updatedActivity = await activityModel.findByIdAndUpdate(
            req.id,
            {
                $addToSet: {
                    optionalParticipants: {
                        $each: [{
                            userId: user._id,
                            confirmed: true
                        }],
                        $ne: { userId: user._id }
                    }
                }
            },
            { new: true }
        )

        const updatedUser = await usersModel.findByIdAndUpdate(
            user._id,
            {
                $addToSet: {enrolledActivities: req.id}
            },
            { new: true }
        )

        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_ADD_ACTIVITY")
    }
}

const lessActivity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const updatedActivity = await activityModel.findByIdAndUpdate(
            req.id,
            {
                $pull: {
                    optionalParticipants: {
                        userId: user._id,
                        confirmed: true
                    }
                }
            },
            { new: true }
        )

        const updatedUser = await usersModel.findByIdAndUpdate(
            user._id,
            {
                $pull: {
                    enrolledActivities: req.id
                }
            },
            { new: true }
        )
        

        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_LESS_ACTIVITY")
    }
}

const getItems = async (req, res) => {
    try {
        req = matchedData(req)

        const activities = await activityModel.find({ active: true })

        res.status(200).send(activities)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITIES")
    }
}

const getForCommunity = async (req, res) => {
    try {
        req = matchedData(req)

        const activities = await activityModel.find({ community: req.id, active: true })

        res.status(200).send(activities)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITIES")
    }
}

const getActivity = async (req, res) => {
    try {
        req = matchedData(req)

        const activity = await activityModel.findOne({ _id: req.id })
        
        
        res.status(200).send(activity)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITY")
    }
}

const getUser = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        const activities = await activityModel.find({ _id: { $in: user.enrolledActivities }})
        
        res.status(200).send(activities)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_GET_ACTIVITIES")
    }
}

const getEmails = async (req, res) => {
    try {
        req = matchedData(req)

        const emails = await usersModel.find({ email: { $regex: req.email, $options: 'i' } })
        .select("_id email name firstSurname secondSurname")
        
        res.status(200).send(emails)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_CREATE_ACTIVITY")
    }
}

const addInActivity = async (req, res) => {
    try {
        const user = req.user
        req = matchedData(req)

        await activityModel.findByIdAndUpdate(
            req.id,
            { $set: { 'mandatoryParticipants.$[elemento].confirmed': true } },
            { new: true, arrayFilters: [{ 'elemento.userId': user._id }] }
          )
        
        res.status(200).send()  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_ADD_TO_ACTIVITY")
    }
}


module.exports = { createItem, addActivity, lessActivity, getItems, getForCommunity, getActivity, 
    getUser, getEmails, addInActivity }
