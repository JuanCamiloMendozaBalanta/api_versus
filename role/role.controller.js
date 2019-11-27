const { editRole, findRoleByCode, findRoleById, findRoles, saveRole } = require('./role.services');

const createRole = async info => {
  try {
    return await saveRole(info);
  } catch (error) {
    return error;
  }
};

const getRoles = async () => {
  try {
    return await findRoles();
  } catch (error) {
    return error;
  }
};

const getRolesByCode = async code => {
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
  getRoles,
  getRolesByCode
};
