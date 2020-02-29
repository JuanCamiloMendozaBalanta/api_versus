const { addTeamToUser } = require('../user/user.controller');
const { findUserById } = require('../user/user.services');
const { addUserToTeam } = require('../team/team.controller');
const { findTeamById } = require('../team/team.services');

const hireUser = async (idUser, idTeam) => {
  try {
    let response;
    const myUser = await findUserById(idUser);
    let newTeams = myUser.teams;

    const myTeam = await findTeamById(idTeam);
    let newUsers = myTeam.Users;

    if (validateIsUserAndTeamAreLikend(idUser, newUsers, idTeam, newTeams)) {
      response = `Team ${myTeam.name} and User ${myUser.name} already be linked`;
    } else {
      newTeams.push(idTeam);
      const User = await addTeamToUser(idUser, { teams: newTeams });

      newUsers.push(idUser);
      const team = await addUserToTeam(idTeam, { Users: newUsers });

      if (User && team) {
        response = {
          User,
          team
        };
      } else {
        response = `Something is wrong please check the info to the User: ${idUser} and the team: ${idTeam}`;
      }
    }

    return response;
  } catch (error) {
    return error;
  }
};

const validateIsUserAndTeamAreLikend = (idUser, Users, idTeam, teams) => {
  let response = false;
  if (teams.length > 0 && Users.length > 0 && teams.includes(idTeam) && Users.includes(idUser)) {
    response = true;
  }
  return response;
};

module.exports = {
  hireUser
};
