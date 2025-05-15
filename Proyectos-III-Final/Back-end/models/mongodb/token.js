const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

/**
 * Represents the schema for a token in MongoDB.
 * @typedef {Object} TokenSchema
 * @property {string} email - The email associated with the token.
 * @property {string} token - The token value.
 */

const TokenSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            trim : true,
            require : true
        },

        token : {
            type : String,
            trim : true,
            require : true
        }
    }
)


module.exports = mongoose.model("Tokens", TokenSchema)