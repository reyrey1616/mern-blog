const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Blogs', BlogSchema);
