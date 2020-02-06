const Role = require('./role.model');

const findRoleByCode = async code => {
  try {
    return await Role.findOne({ code });
  } catch (error) {
    return error;
  }
};

const findRoleById = async id => {
  try {
    return await Role.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const findRoles = async () => {
  try {
    return await Role.find();
  } catch (error) {
    return error;
  }
};

const saveRole = async info => {
  try {
    const { active, code, name } = info;
    const newRole = new Role({ active, code, name });
    const role = await newRole.save();
    return role;
  } catch (error) {
    return error;
  }
};

const editRole = async (id, info) => {
  try {
    const response = await Role.updateOne({ _id: id }, { $set: info });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  editRole,
  findRoles,
  findRoleByCode,
  findRoleById,
  saveRole
};
