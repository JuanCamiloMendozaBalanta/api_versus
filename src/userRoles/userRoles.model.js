const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const User = require('../user/user.model');
const Role = require('../role/role.model');

let userRoleShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary']
  },
  role: {
    type: String,
    ref: Role,
    required: [true, 'role is necesary']
  },
  user: {
    type: String,
    ref: User,
    required: [true, 'user is necesary']
  },
  qualification: {
    type: Number,
    required: [true, 'qualification is necesary'],
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model('userRoles', userRoleShema);
