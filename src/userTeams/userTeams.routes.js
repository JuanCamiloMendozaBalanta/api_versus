const express = require('express');
const app = express();

const { createUserTeam, getUserTeamsByUser, updateUserTeams } = require('./userTeams.controller');

const { verificationToken } = require('../middlewares/auth');

app.get('/userteams/:id', verificationToken, async (req, res) => {
  const users = await getUserTeamsByUser(id);
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json(users);
  }
});

app.post('/userteams', async (req, res) => {
  const user = await createUserTeam(req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

app.put('/userteams/:id', async (req, res) => {
  const { id } = req.params;
  const user = await updateUserTeams(id, req.body);
  if (user && user.id) {
    res.status(200).json(user);
  } else {
    res.status(500).json(user);
  }
});

module.exports = app;
