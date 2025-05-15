const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorChange = [

    check("description").exists().notEmpty(),
    check("degree").exists().notEmpty(),
    check("course").exists().notEmpty().isNumeric(),

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorPassword = [

    check("password").exists().notEmpty().isLength( {min:8, max: 64} ),

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

module.exports = { validatorChange, validatorPassword, validatorId }
