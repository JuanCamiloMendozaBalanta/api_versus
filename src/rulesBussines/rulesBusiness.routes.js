const express = require('express');
const app = express();

const { hireUser } = require('./rulesBusiness.controllers');

app.put('/hireUser', async (req, res) => {
  const { idUser, idTeam } = req.body;
  const response = await hireUser(idUser, idTeam);
  if (response && response.user && response.team) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response);
  }
});

module.exports = app;
