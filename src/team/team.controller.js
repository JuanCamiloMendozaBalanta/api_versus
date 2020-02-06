const { editTeam, findTeams, findTeamByEmail, findTeamById, saveTeam } = require('./team.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');

const createTeam = async info => {
  try {
    let response = await saveTeam(info);
    return response;
  } catch (error) {
    return error;
  }
};

const getTeams = async () => {
  try {
    return await findTeams();
  } catch (error) {
    return error;
  }
};

const getTeamByName = async email => {
  try {
    return await findTeamByEmail(email);
  } catch (error) {
    return error;
  }
};

const updateTeam = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    const update = await editTeam(id, cleanInfo);
    if (!objectIsEmpty(cleanInfo)) {
      if (update.ok) {
        return (response = await findTeamById(id));
      } else {
        response = `Error try to update the team with id: ${id}, meaby the team doesn't exist`;
      }
    } else {
      response = `The parameters to update the team can't be empty`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

const addPlayerToTeam = async (id, info) => {
  let response;
  try {
    const update = await editTeam(id, info);
    if (update.ok) {
      return (response = await findTeamById(id));
    } else {
      response = `Error try to update the team with id: ${id}, meaby the team doesn't exist`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createTeam,
  getTeams,
  getTeamByName,
  updateTeam,
  addPlayerToTeam
};
