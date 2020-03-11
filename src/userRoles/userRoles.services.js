const UserRoles = require('./userRoles.model');

const findUserRolesById = async id => {
  try {
    return await UserRoles.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const findUserRolesByUser = async user => {
  try {
    return await UserRoles.find({ active: true, user });
  } catch (error) {
    return error;
  }
};

const saveUserRoles = async info => {
  try {
    const { role, roleName, user, userName } = info;
    const newUserRoles = new UserRoles({
      active: true,
      role,
      roleName,
      user,
      userName
    });
    const userRole = await newUserRoles.save();
    return userRole;
  } catch (error) {
    return error;
  }
};

const editUserRoles = async (id, info) => {
  try {
    const response = await UserRoles.updateOne({ _id: id }, { $set: info });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findUserRolesById,
  findUserRolesByUser,
  saveUserRoles,
  editUserRoles
};
