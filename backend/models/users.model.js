const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const financeSchema = require('./finances.model');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    finances: [financeSchema]
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;
