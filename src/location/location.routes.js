const express = require('express');
const app = express();
const { createLocation, updateLocation, getLocations, getLocationsByName } = require('./location.controller');

app.get('/location', (req, res) => {
  res.status(200).json(getLocations());
});

app.get('/location/:name', (req, res) => {
  const { name } = req.params;
  const role = getLocationsByName(name);
  if (role) {
    res.status(200).json(role);
  } else {
    res.status(404).json(role);
  }
});

app.post('/location', async (req, res) => {
  const role = await createLocation(req.body);
  if (role && role.id) {
    res.status(200).json(role);
  } else {
    res.status(500).json(role);
  }
});

app.put('/location/:id', async (req, res) => {
  const { id } = req.params;
  const player = await updateLocation(id, req.body);
  if (player && player.id) {
    res.status(200).json(player);
  } else {
    res.status(500).json(player);
  }
});

module.exports = app;
