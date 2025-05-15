const express = require("express")
const authMiddleware = require("../middleware/session")
const { createForum, reply, getReplys, deletePost, reportPost, getItems, getItem } = require("../controllers/forum")
const { validatorCreate, validatorReply, validatorId, validatorReport } = require("../validators/forum")
const router = express.Router()

//pedir foros
router.get("/getItems", authMiddleware, getItems)

//pedir foro
router.get("/getItem/:id", authMiddleware, validatorId, getItem)

//crear foro
router.post("/createItem", authMiddleware, validatorCreate, createForum)

//contestar
router.post("/reply", authMiddleware, validatorReply, reply)

//pedir hijos
router.get("/getReplies/:id", authMiddleware, validatorId, getReplys)

//eliminar comentario
router.delete("/deleteItem/:id", authMiddleware, validatorId, deletePost)

//denunciar mensaje
router.put("/report", authMiddleware, validatorReport, reportPost)

module.exports = router
