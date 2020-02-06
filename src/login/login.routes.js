const express = require('express');
const app = express();

const { getPlayerByEmail, passwordOk } = require('../player/player.controller');
const { missingParameters } = require('../utils/errors');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json(missingParameters({ email, password }));
  } else {
    const player = await getPlayerByEmail(email);
    if (player) {
      if (passwordOk(password, player.password)) {
        res.status(200).json(player);
      } else {
        res.status(400).json(`Incorret password`);
      }
    } else {
      res.status(404).json(`User ${email} not found`);
    }
  }
});

module.exports = app;
