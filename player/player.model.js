const mongoose = require('mongoose');

let Schema = mongoose.Schema

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
        unique: true
    },
    google: {
        type: Boolean,
    },
    lastname: {
        type: String,
        required: [true, 'lastname is necesary']
    },
    name: {
        type: String,
        required: [true, 'name is necesary']
    },
    password: {
        type: String,
        required: [true, 'password is necesary']
    },
    phone: {
        type: Number,
        required: [true, 'phone is necesary'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'username is necesary'],
        unique: true
    },
    role: {
        type: String,
        required: [true, 'role is necesary']
    },
})

module.exports = mongoose.model('players', playerShema)