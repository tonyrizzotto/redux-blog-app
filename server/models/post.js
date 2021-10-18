const mongoose = require('mongoose');

// a simple Post model that includes title, body and image
const Post = mongoose.model('Post', {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = Post;
