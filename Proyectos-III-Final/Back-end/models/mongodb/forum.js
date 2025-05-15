const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const postSchema = require('./post');

/**
 * Represents a forum schema.
 * @typedef {Object} ForumSchema
 * @property {string} title - The title of the forum.
 * @property {string} description - The description of the forum.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the forum.
 * @property {mongoose.Schema.Types.ObjectId} community - The ID of the community the forum belongs to.
 * @property {mongoose.Schema.Types.ObjectId} activity - The ID of the activity associated with the forum.
 * @property {Array} posts - An array of post schemas.
 * @property {boolean} timestamps - Indicates whether timestamps are enabled for the forum.
 */

const ForumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        community: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Communities',
            default: null
        },
        activity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Activity', 
            default: null
        },
        /*posts: [{
            type: postSchema,
            default: []
        }]*/
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Forum", ForumSchema);