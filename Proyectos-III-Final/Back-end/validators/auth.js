const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorRegister = [
    check("name").exists().notEmpty(),
    check("firstSurname").exists().notEmpty(),
    check("secondSurname").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength( {min:8, max: 64} ),
    check("gender").exists().notEmpty(),
    check("degree").exists().notEmpty(),
    check("course").exists().notEmpty().isNumeric(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty(),//.isLength( {min:8, max: 16} ),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorCode = [
    check("_id").exists().notEmpty(),
    check("recoveryCode").exists().notEmpty().isNumeric(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorPassword = [
    check("email").exists().notEmpty().isEmail(),
    check("newPassword").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorCode2 = [
    check("email").exists().notEmpty().isEmail(),
    check("recoveryCode").exists().notEmpty().isNumeric(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorEmail = [
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]


module.exports = { validatorRegister, validatorLogin, validatorCode, validatorPassword, validatorCode2, validatorEmail }
