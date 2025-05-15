const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateComunity = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("topics").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorId = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorSearch = [
    check("search").exists().notEmpty(),
    check("professor").exists().notEmpty().isBoolean(),
    check("student").exists().notEmpty().isBoolean(),
    check("community").exists().notEmpty().isBoolean(),
    check("activity").exists().notEmpty().isBoolean(),
    check("forum").exists().notEmpty().isBoolean(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateComunity, validatorId, validatorSearch }    
