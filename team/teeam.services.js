
const Team = require('./team.model')

const findTeamByEmail = async (email) => {
    try {
        return await Team.findOne({ email })
    } catch (error) {
        return error
    }
}

const findTeamById = async (id) => {
    try {
        return await Team.findOne({ _id: id })
    } catch (error) {
        return error
    }
}

const findTeams = async () => {
    try {
        return await Team.find({ active: true })
    } catch (error) {
        return error
    }
}

const saveTeam = async (info) => {
    try {
        const { active, dateOfBirth, email, google, lastname, name, password, phone, username, role } = info
        const newTeam = new Team({
            active, dateOfBirth, email, google, lastname, name, password, phone, username, role
        })
        const team = await newTeam.save()
        return team

    } catch (error) {
        return error
    }
}

const editTeam = async (id, info) => {
    try {
        const response = await Team.updateOne({ _id: id }, { $set: info })
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    editTeam,
    findTeams,
    findTeamByEmail,
    findTeamById,
    saveTeam
}