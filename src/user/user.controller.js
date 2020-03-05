const { editUser, findUsers, findUserByEmail, findUserById, saveUser } = require('./user.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');
const bcrypt = require('bcrypt');

const createUser = async info => {
  try {
    info.password = bcrypt.hashSync(info.password, 10);
    const newUser = await saveUser(info);
    return newUser;
  } catch (error) {
    return error;
  }
};

const getUsers = async () => {
  try {
    return await findUsers();
  } catch (error) {
    return error;
  }
};

const getUserByEmail = async email => {
  try {
    return await findUserByEmail(email);
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editUser(id, cleanInfo);
      if (update.ok) {
        return (response = await findUserById(id));
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

const addTeamToUser = async (id, info) => {
  let response;
  try {
    const update = await editUser(id, info);
    if (update.ok) {
      return (response = await findUserById(id));
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
  createUser,
  getUsers,
  getUserByEmail,
  updateUser,
  addTeamToUser,
  passwordOk
};
