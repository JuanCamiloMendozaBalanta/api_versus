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
    ref: Role
  },
  roleName: {
    type: String
  },
  user: {
    type: String,
    ref: User
  },
  userName: {
    type: String
  }
});

module.exports = mongoose.model('userRoles', userRoleShema);
