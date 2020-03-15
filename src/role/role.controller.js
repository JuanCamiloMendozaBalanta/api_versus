const { editRole, findRoleByCode, findRoleById, findRoles, saveRole } = require('./role.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');
const { getUserByEmail } = require('../user/user.controller');
const createRole = async info => {
  try {
    return await saveRole(info);
  } catch (error) {
    return error;
  }
};

const getRolesByEmail = async email => {
  try {
    const roles = await findRoles();
    const user = await getUserByEmail(email);
    const leftIntersection = roles.map(role => {
      const { _id, active, code, name } = role;
      const newRole = {
        _id,
        active,
        code,
        name,
        iHaveIt: false
      };
      if (user.roles.includes(role.name)) {
        newRole.iHaveIt = true;
      }
      return newRole;
    });
    return leftIntersection;
  } catch (error) {
    return error;
  }
};

const getRoleByCode = async code => {
  try {
    return await findRoleByCode(code);
  } catch (error) {
    return error;
  }
};

const updateRole = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editRole(id, cleanInfo);
      if (update.ok) {
        return (response = await findRoleById(id));
      } else {
        response = `Error try to update the role with id: ${id}, meaby the role doesn't exist`;
      }
    } else {
      response = `The parameters to update the role can't be empty`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createRole,
  updateRole,
  getRolesByEmail,
  getRoleByCode
};
