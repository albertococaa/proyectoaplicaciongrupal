const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const postSchema = require('./post');

/**
 * Represents the schema for an activity.
 * @typedef {Object} ActivitySchema
 * @property {string} title - The title of the activity.
 * @property {string} description - The description of the activity.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the activity.
 * @property {mongoose.Schema.Types.ObjectId} community - The ID of the community the activity belongs to.
 * @property {string} type - The type of the activity.
 * @property {Array} posts - An array of post schemas associated with the activity.
 * @property {boolean} timestamps - Indicates whether timestamps should be enabled for the activity.
 */

const ActivitySchema = new mongoose.Schema(
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
        mandatoryParticipants: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            confirmed: {
                type: String,
                default: false
            },
            default: []
        }],
        optionalParticipants: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            confirmed: {
                type: String,
                default: false
            },
            default: []
        }], 
        type: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
        /*posts: [postSchema], */
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Activity", ActivitySchema);
