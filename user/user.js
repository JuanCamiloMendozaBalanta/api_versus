const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userShema = new Schema({
    email: {
        type: String,
        required: [true, 'email is necesary']
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
        required: [true, 'username is necesary']
    },
    role: {
        type: String,
        required: [true, 'role is necesary']
    },
})

module.exports = mongoose.model('user', userShema)