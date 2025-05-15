const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorForbiden = [
    check("word").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorId = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorForbiden, validatorId }
