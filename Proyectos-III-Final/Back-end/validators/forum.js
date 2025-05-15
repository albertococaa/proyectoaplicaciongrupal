const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreate = [
    check("title").exists().notEmpty(),
    check("description").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorReply = [
    check("content").exists().notEmpty(),
    check("parent").exists().notEmpty(),
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

const validatorReport = [
    check("id").exists().notEmpty(),
    check("reason").exists().notEmpty(),
    check("comment").optional().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreate, validatorReply, validatorId, validatorReport }
