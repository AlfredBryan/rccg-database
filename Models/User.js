const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username has been taken"],
    trim: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
    trim: true
  }
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model("user", UserSchema);

module.exports = User;