const express = require("express")
const authMiddleware = require("../middleware/session")
const uploadMiddleware = require("../utils/handleStorage")
const {getInfo, changeInfo, changePassword, updatePhoto, getNotifications, getOtherInfo} = require("../controllers/user")
const {validatorChange, validatorPassword, validatorId} = require("../validators/user")
const router = express.Router()

router.get("/info", authMiddleware, getInfo)

router.put("/change", authMiddleware, validatorChange, changeInfo) 

router.put("/password", authMiddleware, validatorPassword, changePassword)

router.post("updatePhoto", authMiddleware, uploadMiddleware.single("image"), updatePhoto)

router.get("/notifications",  authMiddleware, getNotifications)

//infotmacion de otro user
router.get("/otherInfo/:id", authMiddleware, validatorId, getOtherInfo)


module.exports = router
