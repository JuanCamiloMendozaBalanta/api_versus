const { editPlayer, findPlayers, findPlayerByEmail, findPlayerById, savePlayer } = require('./player.services');
const { getRoleByCode } = require('../role/role.controller');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');
const bcrypt = require('bcrypt');

const createPlayer = async info => {
  try {
    let response;
    const { roles } = info;
    const findRole = await getRoleByCode(roles);
    if (findRole) {
      info.password = bcrypt.hashSync(info.password, 10);
      const newUser = await savePlayer(info);
      response = newUser;
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

const getPlayerByEmail = async email => {
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
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editPlayer(id, cleanInfo);
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

const addTeamToPlayer = async (id, info) => {
  let response;
  try {
    const update = await editPlayer(id, info);
    if (update.ok) {
      return (response = await findPlayerById(id));
    } else {
      response = `Error try to update the user with id: ${id}, meaby the user doesn't exist`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

const passwordOk = (passwordOne, passwordTwo) => {
  return bcrypt.compareSync(passwordOne, passwordTwo);
};
module.exports = {
  createPlayer,
  getPlayers,
  getPlayerByEmail,
  updatePlayer,
  addTeamToPlayer,
  passwordOk
};
