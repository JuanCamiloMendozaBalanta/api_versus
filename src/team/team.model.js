const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const User = require('../user/user.model');

let teamShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary'],
    trim: true
  },
  from: {
    type: String,
    required: [true, 'from is necesary']
  },
  name: {
    type: String,
    required: [true, 'name is necesary'],
    maxLength: 15,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'phone is necesary'],
    unique: true
  },
  users: [{ type: Schema.ObjectId, ref: User }]
});

module.exports = mongoose.model('teams', teamShema);
