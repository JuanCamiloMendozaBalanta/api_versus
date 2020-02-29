const express = require('express');
const app = express();
const { createRole, getRoles, getRoleByCode, updateRole } = require('./role.controller');
const { verificationToken } = require('../middlewares/auth');

app.get('/role', verificationToken, async (req, res) => {
  const roles = await getRoles();
  res.status(200).json(roles);
});

app.get('/role/:code', verificationToken, async (req, res) => {
  const { code } = req.params;
  const role = await getRoleByCode(code);
  if (role) {
    res.status(200).json(role);
  } else {
    const messages = `Role with code ${code} not found`;
    res.status(404).json(messages);
  }
});

app.post('/role', verificationToken, async (req, res) => {
  const role = await createRole(req.body);
  if (role && role.id) {
    res.status(200).json(role);
  } else {
    res.status(500).json(role);
  }
});

app.put('/role/:id', verificationToken, async (req, res) => {
  const { id } = req.params;
  const role = await updateRole(id, req.body);
  if (role && role.id) {
    res.status(200).json(role);
  } else {
    res.status(500).json(role);
  }
});

module.exports = app;
