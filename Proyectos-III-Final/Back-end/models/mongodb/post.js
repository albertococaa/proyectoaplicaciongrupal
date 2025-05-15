const mongoose = require('mongoose');

/**
 * postSchema.js
 * Represents a post schema in MongoDB.
 * @typedef {Object} PostSchema
 * @property {string} title - The title of the post.
 * @property {string} content - The content of the post.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - The ID of the user who created the post.
 * @property {Date} createdAt - The date and time when the post was created.
 * @property {mongoose.Schema.Types.ObjectId} parent - The ID of the parent post, if any.
 */

const postSchema = new mongoose.Schema({
    content: String,
    forum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forum',
        default: null
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: null
    },
    delete: {
        type: Boolean,
        default: false
    },
    reports: [{
        type: Object,
        schema:{
            complainant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            reason: String,
            comment: {
                type: String,
                default: null
            }
        }
    }]
}, { _id: true });

module.exports = mongoose.model("Post", postSchema);
