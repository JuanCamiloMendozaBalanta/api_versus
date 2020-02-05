const express = require('express');
const app = express();
const { createRole, getRoles, getRolesByCode, updateRole } = require('./role.controller');

app.get('/role', (req, res) => {
  res.status(200).json(getRoles());
});

app.get('/role/:code', (req, res) => {
  const { code } = req.params;
  const role = getRolesByCode(code);
  if (role) {
    res.status(200).json(role);
  } else {
    res.status(404).json(role);
  }
});

app.post('/role', async (req, res) => {
  const role = await createRole(req.body);
  if (role && role.id) {
    res.status(200).json(role);
  } else {
    res.status(500).json(role);
  }
});

app.put('/role/:id', async (req, res) => {
  const { id } = req.params;
  const player = await updateRole(id, req.body);
  if (player && player.id) {
    res.status(200).json(player);
  } else {
    res.status(500).json(player);
  }
});

module.exports = app;
