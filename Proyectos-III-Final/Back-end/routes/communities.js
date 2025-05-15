const express = require("express")
const authMiddleware = require("../middleware/session")
const { getCommunities, getUserCommunities, getCommunity, createCommunity, deleteCommunity, updateCommunity, 
    joinCommunity, leaveCommunity, searcher } = require("../controllers/communities")
const {validatorCreateComunity, validatorId, validatorSearch } = require("../validators/communities")
const router = express.Router()

router.get("/getItems", authMiddleware, getCommunities)

router.get("/getItem/:id", authMiddleware, validatorId , getCommunity)

router.get("/user", authMiddleware, getUserCommunities)

router.post("/createItem", authMiddleware, validatorCreateComunity, createCommunity)

router.delete("/deleteItem/:id", authMiddleware, validatorId , deleteCommunity);

router.put("/updateItem/:id", authMiddleware, validatorId , validatorCreateComunity, updateCommunity)

router.put("/joinCommunity/:id", authMiddleware, validatorId, joinCommunity)

router.put("/leaveCommunity/:id", authMiddleware, validatorId, leaveCommunity)

router.get("/search/:search/:professor/:student/:community/:activity/:forum", authMiddleware, validatorSearch, searcher)

module.exports = router
