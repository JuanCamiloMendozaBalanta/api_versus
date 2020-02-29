const express = require('express');
const app = express();

const { createUser, getUsers, getUserByEmail, updateUser } = require('./user.controller');
const { verificationToken } = require('../middlewares/auth');
app.get('/user', verificationToken, async (req, res) => {
  const users = await getUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json(users);
  }
});

app.get('/user/:email', async (req, res) => {
  const { email } = req.params;
  const user = await getUserByEmail(email);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    const messages = `User with email ${email} not found`;
    res.status(404).json(messages);
  }
});

app.post('/user', async (req, res) => {
  const user = await createUser(req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await updateUser(id, req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

module.exports = app;
