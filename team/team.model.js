const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userShema = new Schema({
    active: {
        type: Boolean,
        required: [true, 'active is necesary']
    },
    from: {
        type: String,
        required: [true, 'from is necesary']
    },
    name: {
        type: String,
        required: [true, 'name is necesary']
    },
    phone: {
        type: Number,
        required: [true, 'phone is necesary'],
        unique: true
    },
    players: [{
        id: String,
        username: String
    }]
})

module.exports = mongoose.model('users', userShema)