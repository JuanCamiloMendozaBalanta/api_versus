const { editPlayer, findPlayers, findPlayerByEmail, findPlayerById, savePlayer } = require('./player.services');
const { getRolesByCode } = require('../role/role.controller');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');

const createPlayer = async info => {
  try {
    let response;
    const { email, role } = info;
    const _role = getRolesByCode(role);
    if (_role) {
      const user = await findPlayerByEmail(email);
      if (!user) {
        const newUser = await savePlayer(info);
        response = newUser;
      } else {
        response = `The user with the email ${email} already exist`;
      }
    } else {
      response = `The role ${role} doesnt's exist`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

const getPlayers = async () => {
  try {
    return await findPlayers();
  } catch (error) {
    return error;
  }
};

const getPlayersByEmail = async email => {
  try {
    return await findPlayerByEmail(email);
  } catch (error) {
    return error;
  }
};

const updatePlayer = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    const update = await editPlayer(id, cleanInfo);
    if (!objectIsEmpty(cleanInfo)) {
      if (update.ok) {
        return (response = await findPlayerById(id));
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
  createPlayer,
  getPlayers,
  getPlayersByEmail,
  updatePlayer
};
