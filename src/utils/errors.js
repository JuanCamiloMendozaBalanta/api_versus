const manageError = error => {
  console.log('We have an error ', error);
};

const missingParameters = params => {
  const count = Object.keys(params).length;
  const message = count > 1 ? `the param ${params} is required` : `the params ${params} are required`;
  return message;
};

module.exports = {
  manageError,
  missingParameters
};
