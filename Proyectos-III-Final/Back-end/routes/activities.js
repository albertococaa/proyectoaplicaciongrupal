const express = require("express")
const authMiddleware = require("../middleware/session")
const authMiddleware2 = require("../middleware/session2")
const { createItem, addActivity, lessActivity, getItems, getForCommunity, getActivity, getUser,
    getEmails, addInActivity } = require("../controllers/activities")
const { validatorCreate, validatorId, validatorString, validatorConfirm } = require("../validators/activities")
const router = express.Router()

//crear
router.post("/createItem", authMiddleware, validatorCreate, createItem)

//unirse
router.put("/add/:id", authMiddleware, validatorId, addActivity)

//confirmar a actividad
router.post("/confirm/:id/:token", validatorConfirm, authMiddleware2, addInActivity)

//salirse
router.put("/less/:id", authMiddleware, validatorId, lessActivity)

//pedir acts
router.get("/getItems", authMiddleware, getItems)

//pedir acts de comunity
router.get("/getCommunity/:id", authMiddleware, validatorId, getForCommunity)

//pedir info
router.get("/getActivity/:id", authMiddleware, validatorId, getActivity)

//pedir acts de user
router.get("/getUser", authMiddleware, getUser)

//pedir correos por cadena
router.get("/getEmails", authMiddleware, validatorString, getEmails)

module.exports = router