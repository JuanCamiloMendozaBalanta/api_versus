const { editLocation, findLocations, findLocationsByName, saveLocation } = require('./location.services');
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets');

const createLocation = async info => {
  try {
    const { address, city, name } = info;
    const code = city + '_' + name + '_' + address;
    return await saveLocation(info);
  } catch (error) {
    return error;
  }
};

const getLocations = async () => {
  try {
    return await findLocations();
  } catch (error) {
    return error;
  }
};

const getLocationsByName = async name => {
  try {
    return await findLocationsByName();
  } catch (error) {
    return error;
  }
};

const updateLocation = async (id, info) => {
  let response;
  try {
    const cleanInfo = removeEmptyOrNull(info);
    if (!objectIsEmpty(cleanInfo)) {
      const update = await editLocation(id, cleanInfo);
      if (update.ok) {
        return (response = await findLocationById(id));
      } else {
        response = `Error try to update the Location with id: ${id}, meaby the Location doesn't exist`;
      }
    } else {
      response = `The parameters to update the Location can't be empty`;
    }
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createLocation,
  updateLocation,
  getLocations,
  getLocationsByName
};
