const express = require('express');
const app = express();

const { hirePlayer } = require('./rulesBusiness');

app.put('/hirePlayer', async (req, res) => {
  const { idPlayer, idTeam } = req.body;
  const response = await hirePlayer(idPlayer, idTeam);
  if (response && response.player) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response);
  }
});

module.exports = app;
