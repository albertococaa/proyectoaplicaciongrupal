const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

/**
 * Represents the schema for the Communities collection in MongoDB.
 * @typedef {Object} CommunitiesSchema
 * @property {string} name - The name of the community.
 * @property {string} description - The description of the community.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the community.
 * @property {Array<mongoose.Schema.Types.ObjectId>} members - The IDs of the users who are members of the community.
 * @property {boolean} public - Indicates whether the community is public or not.
 * @property {Array<string>} topics - The topics associated with the community.
 * @property {Object} avatar - The avatar of the community.
 * @property {string} avatar.filename - The filename of the avatar.
 * @property {string} avatar.url - The URL of the avatar.
 * @property {Object} settings - The settings of the community.
 * @property {boolean} settings.allowPosts - Indicates whether posts are allowed in the community or not.
 * @property {Date} createdAt - The timestamp when the community was created.
 * @property {Date} updatedAt - The timestamp when the community was last updated.
 */

const CommunitiesSchema = new mongoose.Schema(
    {
        name: {
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
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        topics: [{
            type: String
        }],
        avatar: {
            filename: {
                type: String
            },
            url: {
                type: String
            }
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Communities", CommunitiesSchema);
