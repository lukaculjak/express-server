const Post = require('../models/postModel');
// const User = require('../models/userModel');
const factory = require('./handlerFactory');
// const catchAsync = require('../utils/catchAsync');

exports.setUserIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.deletePost = factory.deleteOne(Post);
