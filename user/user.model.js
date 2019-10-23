const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userShema = new Schema({
    active: {
        type: Boolean,
        required: [true, 'active is necesary']
    },
    dateOfBirth: {
        type: Date,
        required: [false, 'date of birth is necesary']
    },
    email: {
        type: String,
        required: [true, 'email is necesary'],
        unique: true
    },
    middlename: {
        type: String,
        required: [true, 'middlename is necesary']
    },
    name: {
        type: String,
        required: [true, 'name is necesary']
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

module.exports = mongoose.model('users', userShema)