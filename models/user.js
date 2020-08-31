const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  nickname: String,
  avatar: String,
  bio: String,
  friendCode: {
    type: String,
    required: false
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);