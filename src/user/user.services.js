const User = require('./user.model');

const findUserByEmail = async email => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    return error;
  }
};

const findUserById = async id => {
  try {
    return await User.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const findUsers = async () => {
  try {
    return await User.find({ active: true });
  } catch (error) {
    return error;
  }
};

const saveUser = async info => {
  try {
    const { bornDate, email, lastname, firstname, password, phone, username } = info;
    const newUser = new User({
      bornDate: bornDate ? bornDate : null,
      active: true,
      email,
      google: false,
      lastname,
      firstname,
      password,
      phone,
      username
    });
    const user = await newUser.save();
    return user;
  } catch (error) {
    return error;
  }
};

const editUser = async (id, info) => {
  try {
    const response = await User.updateOne({ _id: id }, { $set: info });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  editUser,
  findUsers,
  findUserByEmail,
  findUserById,
  saveUser
};
