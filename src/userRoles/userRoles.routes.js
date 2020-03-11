const express = require('express');
const app = express();

const { createUserRoles, getUserRolesByUser, updateUserRoles } = require('./userRoles.controller');

const { verificationToken } = require('../middlewares/auth');

app.get('/userroles/:id', verificationToken, async (req, res) => {
  const users = await getUserRolesByUser(id);
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json(users);
  }
});

app.post('/userroles', async (req, res) => {
  const user = await createUserRoles(req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

app.put('/userroles/:id', async (req, res) => {
  const { id } = req.params;
  const user = await updateUserRoles(id, req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

module.exports = app;
