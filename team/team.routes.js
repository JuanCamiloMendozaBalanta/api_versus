const express = require('express');
const app = express();

const { createTeam, getTeams, getTeamByName, updateTeam } = require('./team.controller');

app.get('/team', async (req, res) => {
  const teams = await getTeams();
  if (teams) {
    res.status(200).json(teams);
  } else {
    res.status(500).json(teams);
  }
});

app.get('/team/:name', async (req, res) => {
  const { name } = req.params;
  const team = await getTeamByName(name);
  if (team.id) {
    res.status(200).json(team);
  } else {
    res.status(404).json(team);
  }
});

app.post('/team', async (req, res) => {
  const team = await createTeam(req.body);
  if (team && team.id) {
    res.status(200).json(team);
  } else {
    res.status(500).json(team);
  }
});

app.put('/team/:id', async (req, res) => {
  const { id } = req.params;
  const team = await updateTeam(id, req.body);
  if (team && team.id) {
    res.status(200).json(team);
  } else {
    res.status(500).json(team);
  }
});

module.exports = app;
