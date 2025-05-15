const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

/**
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user.
 * @property {string} firstSurname - The first surname of the user.
 * @property {string} secondSurname - The second surname of the user.
 * @property {string} gender - The gender of the user. Can be one of: 'male', 'female', 'other', 'prefer not to say'.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 * @property {boolean} passwordRecovery - Indicates if the user has enabled password recovery.
 * @property {number} recoveryCode - The recovery code for the user's password recovery.
 * @property {boolean} registered - Indicates if the user is registered.
 * @property {string} description - The description of the user.
 * @property {string[]} interests - The interests of the user.
 * @property {string} charge - The charge of the user.
 * @property {string} role - The role of the user. Can be one of: 'sysadmin', 'profesor', 'alumno'.
 * @property {string} degree - The degree of the user.
 * @property {number} course - The course of the user.
 * @property {boolean} allowRemainders - Indicates if the user allows reminders.
 * @property {Object} avatar - The avatar of the user.
 * @property {string} avatar.filename - The filename of the avatar.
 * @property {string} avatar.url - The URL of the avatar.
 * @property {Object[]} favForums - The favorite forums of the user.
 * @property {mongoose.Schema.Types.ObjectId} favForums[].forumId - The ID of the favorite forum.
 * @property {Object[]} enrolledActivities - The enrolled activities of the user.
 * @property {mongoose.Schema.Types.ObjectId} enrolledActivities[].activityId - The ID of the enrolled activity.
 * @property {Object[]} communities - The communities of the user.
 * @property {mongoose.Schema.Types.ObjectId} communities[].communityId - The ID of the community.
 * @property {Object[]} posts - The posts of the user.
 * @property {mongoose.Schema.Types.ObjectId} posts[].forumId - The ID of the forum where the post belongs.
 * @property {mongoose.Schema.Types.ObjectId} posts[].postId - The ID of the post.
 * @property {Date} createdAt - The creation date of the user.
 * @property {Date} updatedAt - The last update date of the user.
 */

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },

    firstSurname: {
        type: String,
        required: [true, 'First surname is required']
    },

    secondSurname: {
        type: String,
        required: [true, 'Second surname is required']
    },
    
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'prefer not to say'],
        required: [true, 'Gender is required']
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },

    secondEmail: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },
    
    passwordRecovery: {
        type: Boolean,
        default: false
    },

    recoveryCode: {
        type: Number,
    },

    registered: {
        type: Boolean,
        default: false
    },

    description: {
        type: String,
        maxlength: [500, 'Description cannot exceed 500 characters']
    },

    interests: [String],

    charge: {
        type: String
        
    },

    role: {
        type: String,
        enum: ['sysadmin', 'profesor', 'alumno']
    },

    degree: {
        type: String,
    },

    course: {
        type: Number,
    },

    allowRemainders: {
        type: Boolean,
        default: false
    },

    avatar: {
        filename: String,
        url: String
    },

    favForums: [{
        type: mongoose.Schema.Types.ObjectId
    }],

    enrolledActivities: [{
        type: mongoose.Schema.Types.ObjectId
    }],

    communities: [{
        type: mongoose.Schema.Types.ObjectId
    }],

    posts: [{
        forumId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Forum'
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }],
    notifications: [{
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        type: {
            type: String,
            enum: ['']
        },
        default: []
    }]

}, {
    timestamps: true,
    collection: 'users'
});


UserSchema.index({ email: 1 });
module.exports = mongoose.model("User", UserSchema);
