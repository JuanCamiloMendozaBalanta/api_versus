const express = require('express');
const app = express();

const { createPlayer, getPlayers, getPlayerByEmail, updatePlayer } = require('./player.controller');

app.get('/player', async (req, res) => {
  const players = await getPlayers();
  if (players) {
    res.status(200).json(players);
  } else {
    res.status(500).json(players);
  }
});

app.get('/player/:email', async (req, res) => {
  const { email } = req.params;
  const player = await getPlayerByEmail(email);
  if (player.id) {
    res.status(200).json(player);
  } else {
    res.status(404).json(player);
  }
});

app.post('/player', async (req, res) => {
  const player = await createPlayer(req.body);
  if (player && player.id) {
    res.status(200).json(player);
  } else {
    res.status(500).json(player);
  }
});

app.put('/player/:id', async (req, res) => {
  const { id } = req.params;
  const player = await updatePlayer(id, req.body);
  if (player && player.id) {
    res.status(200).json(player);
  } else {
    res.status(500).json(player);
  }
});

module.exports = app;
