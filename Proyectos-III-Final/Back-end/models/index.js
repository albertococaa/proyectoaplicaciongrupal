// Import all your model files here
const User = require('./mongodb/users');
const Post = require('./mongodb/post');
const Tokens = require('./mongodb/token');
const communities = require('./mongodb/communities');
const Activity = require('./mongodb/activities');
const Forum = require('./mongodb/forum');
const forbidden = require('./mongodb/forbiddenWords');
// Add more models as needed

// Export all the models as an object
module.exports = {
  usersModel: User,
  postModel: Post,
  tokenModel: Tokens,
  communityModel: communities,
  activityModel: Activity,
  forumModel: Forum,
  postModel: Post,
  forbiddenModel: forbidden
  // Add more models as needed
};
