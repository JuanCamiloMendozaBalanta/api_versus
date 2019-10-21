const mongoose = require('mongoose');

let Schema = mongoose.Schema

let roleShema = new Schema({
    name: {
        type: String,
        required: [true, 'name is necesary']
    },
    code: {
        type: String,
        required: [true, 'code is necesary']
    }
})

module.exports = mongoose.model('role', roleShema)