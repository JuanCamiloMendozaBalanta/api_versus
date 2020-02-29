const express = require('express');
const app = express();

const { getUserByEmail, passwordOk } = require('../user/user.controller');
const { missingParameters } = require('../utils/errors');
const { generateToken } = require('./login.controller');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json(missingParameters({ email, password }));
  } else {
    const user = await getUserByEmail(email);
    if (user) {
      if (passwordOk(password, user.password)) {
        const { email, username } = user;
        const token = generateToken({ email, username });
        if (token) {
          const data = {
            user,
            token
          };
          res.status(200).json(data);
        } else {
          res.status(500).json(`Something fail with the token`);
        }
      } else {
        res.status(400).json(`Incorret password`);
      }
    } else {
      res.status(404).json(`User ${email} not found`);
    }
  }
});

module.exports = app;
