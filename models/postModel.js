const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A post must belong to a user'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userPhoto: {
    type: String,
  },
  category: {
    type: String,
    enum: [
      'General',
      'Linux',
      'Tools',
      'Pen Testing',
      'Networking',
      'Certification',
      'Mobile Hacking',
      'Studying Material',
    ],
    default: 'General',
  },
  content: {
    type: String,
    required: [true, 'Please provide some content about the subject'],
  },
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'username',
    select: 'username',
  }).populate({
    path: 'userPhoto',
    select: 'photo',
  });
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
