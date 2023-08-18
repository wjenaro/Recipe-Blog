// Schema for Users
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Other user-related fields (e.g., name, profile picture, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
