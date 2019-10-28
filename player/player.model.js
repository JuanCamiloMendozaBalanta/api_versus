const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let playerShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary']
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    required: [true, 'email is necesary'],
    unique: true,
    trim: true
  },
  google: {
    type: Boolean
  },
  lastname: {
    type: String,
    required: [true, 'lastname is necesary'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'name is necesary'],
    maxLength: 15,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'password is necesary'],
    minLength: 8,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'phone is necesary'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'username is necesary'],
    unique: true,
    maxLength: 15,
    trim: true
  },
  role: {
    type: String,
    required: [true, 'role is necesary'],
    trim: true
  },
  teams: []
});

module.exports = mongoose.model('players', playerShema);
