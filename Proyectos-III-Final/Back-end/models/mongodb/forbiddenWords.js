const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ForbiddenWordSchema = new mongoose.Schema(
    {
        word:{
            type: String,
            trim: true,
            required: true
        }
    }
)


module.exports = mongoose.model("Forbidden", ForbiddenWordSchema);