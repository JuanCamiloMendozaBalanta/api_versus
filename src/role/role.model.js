const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const User = require('../user/user.model');

let roleShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary']
  },
  code: {
    type: String,
    required: [true, 'code is necesary'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'name is necesary'],
    unique: true
  }
});

module.exports = mongoose.model('roles', roleShema);
