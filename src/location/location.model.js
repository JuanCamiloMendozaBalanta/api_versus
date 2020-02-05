const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let locationShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary']
  },
  address: {
    type: String,
    required: [true, 'address is necesary']
  },
  city: {
    type: String,
    required: [true, 'city is necesary']
  },
  code: {
    type: String,
    required: [true, 'code is necesary'],
    unique: true,
    trim: true
  },
  country: {
    type: String,
    required: [true, 'country is necesary']
  },
  name: {
    type: String,
    required: [true, 'name is necesary']
  }
});

module.exports = mongoose.model('locations', locationShema);
