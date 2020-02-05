const Location = require('./location.model');

const findLocationById = async id => {
  try {
    return await Location.findOne({ _id: id });
  } catch (error) {
    return error;
  }
};

const findLocations = async () => {
  try {
    return await Location.find({ active: true });
  } catch (error) {
    return error;
  }
};

const findLocationsByName = async name => {
  try {
    return await Location.find({ name });
  } catch (error) {
    return error;
  }
};

const saveLocation = async info => {
  try {
    const { active, address, city, code, country, name } = info;
    const newLocation = new Location({ active, address, city, code, country, name });
    const location = await newLocation.save();
    return location;
  } catch (error) {
    return error;
  }
};

const editLocation = async (id, info) => {
  try {
    const response = await Location.updateOne({ _id: id }, { $set: info });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  editLocation,
  findLocations,
  findLocationById,
  findLocationsByName,
  saveLocation
};
