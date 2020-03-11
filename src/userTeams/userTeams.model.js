const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const User = require('../user/user.model');
const Team = require('../team/team.model');

let userTeamsShema = new Schema({
  active: {
    type: Boolean,
    required: [true, 'active is necesary']
  },
  team: {
    type: String,
    ref: Team
  },
  teamName: {
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

module.exports = mongoose.model('userTeams', userTeamsShema);
