const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255,
  },
  googleID: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },
  // local login
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    maxLength: 1024,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
