const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  _id: { type: ObjectId },
  userName: { type: String },
  password: { type: String },
  name: { type: String },
});

module.exports = mongoose.model('User', User);
