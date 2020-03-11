const { findUserRolesById, findUserRolesByUser, saveUserRoles, editUserRoles } = require('./userRoles.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');

const createUserRoles = async info => {
  try {
    const newUserRoles = await saveUserRoles(info);
    return newUserRoles;
  } catch (error) {
    return error;
  }
};

const getUserRolesByUser = async idUser => {
  try {
    return await findUserRolesByUser(idUser);
  } catch (error) {
    return error;
  }
};

const getUserRolesById = async id => {
  try {
    return await findUserRolesById(id);
  } catch (error) {
    return error;
  }
};

const updateUserRoles = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editUserRoles(id, cleanInfo);
      if (update.ok) {
        return (response = await findUserRolesById(id));
      } else {
        response = `Error try to update the user role with id: ${id}, meaby the user role doesn't exist`;
      }
    } else {
      response = `The parameters to update the user role can't be empty`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUserRoles,
  getUserRolesByUser,
  getUserRolesById,
  updateUserRoles
};
