const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    validate: [
      input => input.indexOf("@") !== -1
      /**
       * Above is same as below:
       *
       * function (input) {
       * return input.indexOf("@") !== -1;
       * }
       */
    ]
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1
  },
  birthday: {
    type: Date,
    required: true,
    trim: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
