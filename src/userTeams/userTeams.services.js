const UserTeams = require('./userTeams.model');

const findUserTeamsById = async id => {
  try {
    return await UserTeams.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const findUserTeamsByUser = async user => {
  try {
    return await UserTeams.find({ active: true, user });
  } catch (error) {
    return error;
  }
};

const saveUserTeams = async info => {
  try {
    const { team, teamName, user, userName } = info;
    const newUserTeams = new UserTeams({
      active: true,
      team,
      teamName,
      user,
      userName
    });
    const userTeam = await newUserTeams.save();
    return userTeam;
  } catch (error) {
    return error;
  }
};

const editUserTeams = async (id, info) => {
  try {
    const response = await UserTeams.updateOne({ _id: id }, { $set: info });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findUserTeamsById,
  findUserTeamsByUser,
  saveUserTeams,
  editUserTeams
};
