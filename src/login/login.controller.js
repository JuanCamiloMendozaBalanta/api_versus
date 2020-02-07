const jwt = require('jsonwebtoken');
const { jwt_expiration, seed } = require('../../configuration/config');

const generateToken = user => {
  const token = jwt.sign(
    {
      user
    },
    seed,
    { expiresIn: jwt_expiration }
  );
  return token;
};

module.exports = {
  generateToken
};
