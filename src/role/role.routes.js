const express = require('express');
const app = express();
const { createRole, getRolesByEmail, getRoleByCode, updateRole } = require('./role.controller');
const { verificationToken } = require('../middlewares/auth');
const { removeEmptyOrNull } = require('../utils/gadgets');

app.get('/role', verificationToken, async (req, res) => {
  let { email, code } = req.query;
  const objectFormart = removeEmptyOrNull({ email, code });
  email = objectFormart.email;
  code = objectFormart.code;
  let roles = null;
  let search = null;
  if (code && !email) {
    roles = await getRoleByCode(code);
    search = 'code';
  } else if (email) {
    roles = await getRolesByEmail(email);
    search = 'email';
  }
  if (roles) {
    res.status(200).json(roles);
  } else {
    const messages = `Role with ${search} ${code ? code : email} not found`;
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
