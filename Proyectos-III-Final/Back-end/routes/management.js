const express = require("express")
const authMiddleware = require("../middleware/session")
const uploadMiddleware = require("../utils/handleStorage")
const { getItems, getReports, uploadCSV, addForbiden, lessForbiden } = require("../controllers/management")
const { validatorId, validatorForbiden } = require("../validators/management")
const router = express.Router()

//mensajes eliminados
router.get("/getItem/:id", authMiddleware, validatorId, getItems)
//mensajes denunciados
router.get("/reportMessage", authMiddleware, getReports)
//subir csv
router.post("/uploadCSV", authMiddleware, uploadMiddleware.single("csv"), uploadCSV)
//añadir palabras prohibidas
router.post("/forbiden", authMiddleware, validatorForbiden, addForbiden)
//eliminar palabras prohibidas
router.delete("/forbiden", authMiddleware, validatorForbiden, lessForbiden)

module.exports = router