const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, 'Invalid email'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
