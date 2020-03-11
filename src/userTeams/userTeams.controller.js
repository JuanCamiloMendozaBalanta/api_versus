const { findUserTeamsById, findUserTeamsByUser, saveUserTeams, editUserTeams } = require('./userTeams.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');

const createUserTeam = async info => {
  try {
    const newUserTeam = await saveUserTeams(info);
    return newUserTeam;
  } catch (error) {
    return error;
  }
};

const getUserTeamsByUser = async idUser => {
  try {
    return await findUserTeamsByUser(idUser);
  } catch (error) {
    return error;
  }
};

const getUserTeamsById = async id => {
  try {
    return await findUserTeamsById(id);
  } catch (error) {
    return error;
  }
};

const updateUserTeams = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editUserTeams(id, cleanInfo);
      if (update.ok) {
        return (response = await findUserTeamsById(id));
      } else {
        response = `Error try to update the user with id: ${id}, meaby the user doesn't exist`;
      }
    } else {
      response = `The parameters to update the user can't be empty`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUserTeam,
  getUserTeamsByUser,
  getUserTeamsById,
  updateUserTeams
};
