const removeEmptyOrNull = obj => {
  Object.keys(obj).forEach(
    k =>
      (obj[k] && typeof obj[k] === 'object' && removeEmptyOrNull(obj[k])) ||
      (!obj[k] && obj[k] !== undefined && delete obj[k])
  );
  return obj;
};

const objectIsEmpty = obj => {
  return Object.keys(obj).length === 0;
};

module.exports = {
  objectIsEmpty,
  removeEmptyOrNull
};
